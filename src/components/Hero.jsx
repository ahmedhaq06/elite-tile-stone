import React, { useEffect, useState } from 'react';
import { BUSINESS_INFO } from '../data/tilesData';
import { useReveal, useParallax } from '../hooks/useReveal';

export default function Hero() {
  const [ready, setReady] = useState(false);
  const sectionRef = useReveal();
  const parallaxRef = useParallax(0.12);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 60);
    return () => clearTimeout(t);
  }, []);

  const anim = (delay) =>
    ready
      ? { animation: `heroSlideUp 0.95s cubic-bezier(0.16,1,0.3,1) ${delay}s both` }
      : { opacity: 0 };

  return (
    <section
      ref={sectionRef}
      aria-label="Hero"
      style={{
        position:  'relative',
        height:    '100svh',
        minHeight: '600px',
        overflow:  'hidden',
        background: 'var(--c-black)',
      }}
    >
      {/* ── Photography ── */}
      <div className="hero-photo-panel">
        <img
          ref={parallaxRef}
          src="/assets/after.jpeg"
          alt="Elite Tile & Stone — precision master suite installation, Las Vegas"
          className={`reveal-img ${ready ? 'is-visible' : ''}`}
          style={{
            width:          '100%',
            height:         '110%',
            objectFit:      'cover',
            objectPosition: 'center 35%',
            animation:      'kenBurns 24s ease-in-out infinite alternate',
            willChange:     'transform',
          }}
        />
        {/* Left-side dark fade — lets headline read across the boundary */}
        <div
          aria-hidden="true"
          style={{
            position:   'absolute',
            inset:      0,
            background: 'linear-gradient(to right, #0C0B0A 0%, rgba(12,11,10,0.65) 20%, rgba(12,11,10,0.15) 48%, transparent 72%)',
          }}
        />
        {/* Bottom vignette */}
        <div
          aria-hidden="true"
          style={{
            position:   'absolute',
            inset:      0,
            background: 'linear-gradient(to top, rgba(12,11,10,0.7) 0%, transparent 42%)',
          }}
        />
      </div>

      {/* Mobile: heavier overlay so text is always readable */}
      <style>{`
        @media (max-width: 768px) {
          .hero-photo-panel {
            width: 100% !important;
          }
          .hero-photo-panel::after {
            content: '';
            position: absolute;
            inset: 0;
            background: rgba(12,11,10,0.58);
          }
        }
      `}</style>

      {/* ── Content ── */}
      <div
        style={{
          position:      'absolute',
          inset:         0,
          zIndex:        3,
          display:       'flex',
          flexDirection: 'column',
          padding:       '0 var(--pad-x)',
        }}
      >
        {/* Spacer — pushes content down */}
        <div style={{ flex: 1 }} />

        {/* Bottom-anchored block */}
        <div style={{ paddingBottom: 'clamp(3.5rem, 8vh, 6rem)' }}>

          {/*
            License / location — moved here as a subtle footnote above the CTA,
            not as the first thing a visitor reads.
          */}
          <div
            style={{
              marginBottom: '1.6rem',
              ...anim(0.18),
            }}
          >
            <span
              style={{
                fontFamily:    'var(--font-body)',
                fontSize:      '0.62rem',
                fontWeight:    '500',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color:         'rgba(196,185,173,0.45)',
              }}
            >
              Las Vegas, NV&nbsp;&nbsp;·&nbsp;&nbsp;{BUSINESS_INFO.license}
            </span>
          </div>

          {/* H1 — benefit-driven: what the customer gets, not what we do */}
          <h1
            aria-label="Your Vision, Built to Last."
            style={{
              fontFamily:    'var(--font-display)',
              fontSize:      'clamp(3.8rem, 7.8vw, 9rem)',
              fontWeight:    '400',
              lineHeight:    0.94,
              letterSpacing: '-0.02em',
              color:         'var(--c-off-white)',
              maxWidth:      '68vw',
              marginBottom:  'clamp(1.2rem, 2.5vh, 2rem)',
            }}
          >
            <span style={{ display: 'block', overflow: 'hidden' }}>
              <span style={{ display: 'block', ...anim(0.3) }}>
                Your Vision,
              </span>
            </span>
            <span style={{ display: 'block', overflow: 'hidden' }}>
              <span style={{ display: 'block', ...anim(0.44) }}>
                Built to Last.
              </span>
            </span>
          </h1>

          {/* Subtitle — specific, not generic. A single measured line. */}
          <p
            style={{
              fontFamily:    'var(--font-display)',
              fontStyle:     'italic',
              fontSize:      'clamp(1rem, 1.5vw, 1.45rem)',
              fontWeight:    '400',
              letterSpacing: '0.01em',
              lineHeight:    1.4,
              color:         'rgba(196,185,173,0.55)',
              maxWidth:      '38ch',
              marginBottom:  '0.6rem',
              ...anim(0.56),
            }}
          >
            Natural stone &amp; large-format porcelain,<br />
            precision-set across Southern Nevada.
          </p>

          {/* Emotional hook line */}
          <p
            style={{
              fontFamily:    'var(--font-body)',
              fontSize:      'clamp(0.8rem, 1.1vw, 0.95rem)',
              fontWeight:    '400',
              lineHeight:    1.5,
              color:         'var(--c-off-white)',
              maxWidth:      '42ch',
              marginBottom:  'clamp(1.5rem, 3.5vh, 2.5rem)',
              opacity:       0.9,
              ...anim(0.58),
            }}
          >
            Turn your daily routine into a resort experience. Complimentary on-site measurement included.
          </p>

          <div
            style={{
              display:    'flex',
              gap:        '1.2rem',
              alignItems: 'center',
              flexWrap:   'wrap',
              ...anim(0.6),
            }}
          >
            {/* Primary CTA — Request a Consultation (scrolls to contact form) */}
            <a
              href="#contact"
              style={{
                display:       'inline-block',
                padding:       '0.85rem 2rem',
                background:    'var(--c-off-white)',
                color:         'var(--c-black)',
                fontFamily:    'var(--font-body)',
                fontSize:      '0.75rem',
                fontWeight:    '600',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition:    'background 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#e8e4df'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--c-off-white)'; }}
            >
              Request a Consultation
            </a>

            {/* Secondary — phone, small, for immediate callers */}
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              style={{
                fontFamily:    'var(--font-body)',
                fontSize:      '0.75rem',
                fontWeight:    '500',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color:         'rgba(196,185,173,0.6)',
                textDecoration: 'none',
                transition:    'color 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(196,185,173,1)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(196,185,173,0.6)'; }}
            >
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* ── Scroll tracer — right edge, bottom ── */}
      <div
        aria-hidden="true"
        style={{
          position:   'absolute',
          bottom:     'clamp(2rem, 5vh, 3.5rem)',
          right:      'clamp(1.5rem, 4vw, 4rem)',
          zIndex:     4,
          width:      '1px',
          height:     '56px',
          overflow:   'hidden',
          background: 'rgba(255,255,255,0.08)',
          ...anim(0.9),
        }}
      >
        <div
          style={{
            position:   'absolute',
            inset:      0,
            background: 'rgba(196,185,173,0.4)',
            animation:  'scrollTracer 2.4s linear infinite',
          }}
        />
      </div>
    </section>
  );
}
