import React, { useState, useEffect } from 'react';

const SECTIONS = [
  { id: 'services',     num: '02', label: 'Specialties' },
  { id: 'before-after', num: '03', label: 'Before & After' },
  { id: 'portfolio',    num: '04', label: 'Projects' },
  { id: 'contact',      num: '05', label: 'Contact' },
];

/**
 * Sticky section counter — bottom-right, desktop only.
 * Shows "02 / Specialties" style label as user scrolls through sections.
 * Fades in when first non-hero section enters, fades out in footer.
 */
export default function SectionCounter() {
  const [active, setActive]   = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observers = SECTIONS.map(({ id, num, label }) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive({ num, label });
            setVisible(true);
          }
        },
        { threshold: 0.2 }
      );
      obs.observe(el);
      return obs;
    });

    // Also hide when hero is fully in view
    const heroEl = document.querySelector('[aria-label="Hero"]');
    let heroObs;
    if (heroEl) {
      heroObs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setVisible(false); },
        { threshold: 0.6 }
      );
      heroObs.observe(heroEl);
    }

    return () => {
      observers.forEach((o) => o && o.disconnect());
      heroObs && heroObs.disconnect();
    };
  }, []);

  if (!active) return null;

  return (
    <div
      aria-hidden="true"
      className="section-counter"
      style={{
        position:      'fixed',
        bottom:        'clamp(2rem, 4vh, 3rem)',
        right:         'clamp(1.5rem, 4vw, 4rem)',
        zIndex:        50,
        display:       'flex',
        flexDirection: 'column',
        alignItems:    'flex-end',
        gap:           '0.25rem',
        opacity:       visible ? 1 : 0,
        transform:     visible ? 'translateY(0)' : 'translateY(8px)',
        transition:    'opacity 0.55s ease, transform 0.55s ease',
        pointerEvents: 'none',
      }}
    >
      {/* Thin vertical progress line */}
      <div
        style={{
          width:        '1px',
          height:       '32px',
          background:   'linear-gradient(to bottom, transparent, rgba(196,185,173,0.35))',
          alignSelf:    'center',
          marginBottom: '0.4rem',
        }}
      />
      <span
        style={{
          fontFamily:    'var(--font-body)',
          fontSize:      '0.58rem',
          fontWeight:    '600',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color:         'rgba(196,185,173,0.5)',
        }}
      >
        {active.num}
      </span>
      <span
        key={active.label}
        style={{
          fontFamily:    'var(--font-body)',
          fontSize:      '0.58rem',
          fontWeight:    '400',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color:         'rgba(196,185,173,0.35)',
          animation:     'fadeInUp 0.4s var(--ease-out) both',
        }}
      >
        {active.label}
      </span>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        /* Hide on mobile — sticky bar already covers this use case */
        @media (max-width: 900px) {
          .section-counter { display: none !important; }
        }
      `}</style>
    </div>
  );
}
