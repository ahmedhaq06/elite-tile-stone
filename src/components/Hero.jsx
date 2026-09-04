import React, { useEffect, useState } from 'react';
import { BUSINESS_INFO } from '../data/tilesData';
import { useReveal, useParallax } from '../hooks/useReveal';

export default function Hero({ headline, subheadline, ctaText, heroImage, badge }) {
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

  const displayHeadline = headline || "Your Vision,\nBuilt to Last.";
  const displaySubheadline = subheadline || "Turn your daily routine into a resort experience. Complimentary on-site measurement included.";
  const displayCta = ctaText || "Get My Free Estimate";
  const displayImage = heroImage || "/assets/after.jpeg";

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
          src={displayImage}
          alt="Elite Tile & Stone — master installation"
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
        {/* Left-side dark fade */}
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

      {/* Mobile: heavier overlay */}
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
        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* Bottom-anchored block */}
        <div style={{ paddingBottom: 'clamp(3.5rem, 8vh, 6rem)' }}>

          {/* Badge / License info */}
          <div
            style={{
              marginBottom: '1.4rem',
              ...anim(0.18),
            }}
          >
            <span
              style={{
                fontFamily:    'var(--font-body)',
                fontSize:      '0.7rem',
                fontWeight:    '600',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color:         'var(--c-gold)',
                background:    'rgba(201, 150, 47, 0.12)',
                padding:       '0.3rem 0.8rem',
                borderRadius:  '4px',
                border:        '1px solid rgba(201, 150, 47, 0.3)',
              }}
            >
              {badge || `Las Vegas, NV · ${BUSINESS_INFO.license}`}
            </span>
          </div>

          {/* H1 Headline */}
          <h1
            aria-label={displayHeadline}
            style={{
              fontFamily:    'var(--font-display)',
              fontSize:      'clamp(2.5rem, 5.5vw, 6.5rem)',
              fontWeight:    '700',
              lineHeight:    1.02,
              letterSpacing: '-0.01em',
              color:         'var(--c-gold)',
              maxWidth:      '22ch',
              marginBottom:  'clamp(1rem, 2vh, 1.6rem)',
            }}
          >
            <span style={{ display: 'block', overflow: 'hidden' }}>
              <span style={{ display: 'block', ...anim(0.3) }}>
                {displayHeadline}
              </span>
            </span>
          </h1>

          {/* Subheadline */}
          <p
            style={{
              fontFamily:    'var(--font-body)',
              fontSize:      'clamp(1rem, 1.4vw, 1.25rem)',
              fontWeight:    '400',
              lineHeight:    1.5,
              color:         'var(--c-white)',
              maxWidth:      '42ch',
              marginBottom:  'clamp(1.5rem, 3.5vh, 2.5rem)',
              ...anim(0.56),
            }}
          >
            {displaySubheadline}
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
            {/* Primary CTA */}
            <a
              href="#contact"
              style={{
                display:       'inline-block',
                padding:       '0.95rem 2.2rem',
                background:    'var(--c-gold)',
                color:         '#0D0D0D',
                fontFamily:    'var(--font-body)',
                fontSize:      '0.82rem',
                fontWeight:    '700',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                borderRadius:  '6px',
                transition:    'all 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#D9A43B'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--c-gold)'; }}
            >
              {displayCta}
            </a>

            {/* Secondary Phone */}
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              style={{
                fontFamily:    'var(--font-body)',
                fontSize:      '0.8rem',
                fontWeight:    '600',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color:         'var(--c-grey)',
                textDecoration: 'none',
                transition:    'color 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--c-gold)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--c-grey)'; }}
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
