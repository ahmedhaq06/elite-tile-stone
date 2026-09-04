import { useEffect, useRef } from 'react';

/**
 * Attaches an IntersectionObserver to a section ref.
 * Any child with .reveal, .reveal-x, or .reveal-scale
 * will have 'is-visible' added when it enters the viewport.
 */
export function useReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: options.threshold ?? 0.08,
        rootMargin: options.rootMargin ?? '0px 0px -50px 0px',
      }
    );

    const targets = section.querySelectorAll('.reveal, .reveal-x, .reveal-scale, .reveal-blur, .reveal-img, .reveal-rule');
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
}

/**
 * Attach reveal directly to a single element ref.
 */
export function useRevealSingle(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.disconnect();
        }
      },
      {
        threshold: options.threshold ?? 0.12,
        rootMargin: options.rootMargin ?? '0px 0px -40px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

/**
 * Animates a number from 0 to `target` when the element enters the viewport.
 * Returns a ref to attach to the element that displays the number.
 */
export function useCountUp(target, duration = 1800, suffix = '') {
  const ref = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          const start = performance.now();
          const step = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(eased * target) + suffix;
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, suffix]);

  return ref;
}

/**
 * Parallax effect — element scrolls at `speed` ratio of the viewport scroll.
 * speed = 0.15 means element moves 15% of how much the page scrolls.
 * Attach the returned ref to the element you want to parallax.
 */
export function useParallax(speed = 0.15) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let rafId;
    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const viewH = window.innerHeight;
        // Only animate when near viewport
        if (rect.bottom > 0 && rect.top < viewH) {
          const center = rect.top + rect.height / 2 - viewH / 2;
          el.style.transform = `translateY(${center * speed}px)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, [speed]);

  return ref;
}

/**
 * Returns which section is currently active based on scroll position.
 * Watches an array of section IDs and returns the one currently in view.
 */
export function useActiveSection(sectionIds) {
  const activeRef = useRef(null);
  const listenersRef = useRef([]);

  useEffect(() => {
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            activeRef.current = id;
          }
        },
        { threshold: 0.35 }
      );
      obs.observe(el);
      return obs;
    });

    listenersRef.current = observers;
    return () => observers.forEach((o) => o && o.disconnect());
  }, []);

  return activeRef;
}
