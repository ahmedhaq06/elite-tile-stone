import React from 'react';
import { BUSINESS_INFO } from '../data/tilesData';
import { useReveal } from '../hooks/useReveal';

const NAV_LINKS = [
  { href: '#services', label: 'Specialties' },
  { href: '#before-after', label: 'Before & After' },
  { href: '#portfolio', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
  { href: '#privacy', label: 'Privacy Policy' },
  { href: 'https://www.google.com/search?q=Elite+Tile+%26+Stone+Las+Vegas', label: 'Reviews (5.0★)', target: '_blank' },
];

export default function Footer({ onOpenPrivacy }) {
  const ref = useReveal();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer
      ref={ref}
      style={{
        background: '#0C0B0A',
        color: '#FAF8F5',
        overflow: 'hidden',
      }}
    >
      {/* ── Top row: contact left / nav right ── */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1.5rem',
          padding: '2.2rem var(--pad-x)',
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        {/* Left — contact block */}
        <div className="reveal" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            {/* Eyebrow label */}
            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.6rem',
                fontWeight: '600',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.3)',
                marginBottom: '0.6rem',
              }}
            >
              Get In Touch
            </div>

            {/* Phone — large, primary */}
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              style={{
                display: 'block',
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(1rem, 1.5vw, 1.3rem)',
                fontWeight: '400',
                color: 'rgba(255,255,255,0.88)',
                marginBottom: '0.25rem',
                lineHeight: 1.25,
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#FAF8F5'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.88)'; }}
            >
              {BUSINESS_INFO.phone}
            </a>

            {/* Instagram — smaller, secondary */}
            <a
              href={BUSINESS_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                fontFamily: 'var(--font-body)',
                fontSize: '0.75rem',
                color: 'rgba(255,255,255,0.3)',
                lineHeight: 1.4,
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.65)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.3)'; }}
            >
              {BUSINESS_INFO.instagramHandle}
            </a>
          </div>

          {/* Back to top — small capsule */}
          <div style={{ marginTop: '1.2rem' }}>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                background: 'none',
                border: '1px solid rgba(255,255,255,0.14)',
                borderRadius: '99px',
                color: 'rgba(255,255,255,0.4)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.58rem',
                fontWeight: '600',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                padding: '0.35rem 0.8rem',
                cursor: 'pointer',
                transition: 'color 0.2s ease, border-color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.8)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.4)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)';
              }}
            >
              {/* Up arrow circle */}
              <svg width="12" height="12" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                <circle cx="6.5" cy="6.5" r="6" stroke="currentColor" strokeWidth="0.9" />
                <path d="M6.5 9V4M4.5 6 L6.5 4 L8.5 6" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to top
            </button>
          </div>
        </div>

        {/* Right — nav links, right-aligned */}
        <div
          className="reveal stagger-2"
          style={{ textAlign: 'right' }}
        >
          <nav
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: '0.1rem',
            }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  if (link.href === '#privacy' && onOpenPrivacy) {
                    e.preventDefault();
                    onOpenPrivacy();
                  }
                }}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.2rem, 2vw, 2.2rem)',
                  fontWeight: '400',
                  lineHeight: 1.15,
                  letterSpacing: '-0.01em',
                  color: 'rgba(255,255,255,0.35)',
                  textDecoration: 'none',
                  display: 'block',
                  transition: 'color 0.25s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.85)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.35)'; }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* ── Bottom wordmark ── */}
      <div
        className="reveal"
        style={{
          padding: '0 var(--pad-x)',
          lineHeight: 0.88,
          userSelect: 'none',
        }}
      >
        {/* Line 1 */}
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: '400',
            fontSize: 'clamp(2.5rem, 7vw, 8rem)',
            letterSpacing: '-0.01em',
            color: 'rgba(200,196,190,0.72)',
            display: 'block',
            whiteSpace: 'nowrap',
          }}
        >
          ELITE
        </div>

        {/* Line 2 — fills width */}
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: '400',
            fontSize: 'clamp(2.5rem, 7vw, 8rem)',
            letterSpacing: '-0.01em',
            color: 'rgba(160,156,150,0.55)',
            display: 'block',
            whiteSpace: 'nowrap',
          }}
        >
          TILE & STONE
        </div>
      </div>

      {/* ── Bottom micro-bar ── */}
      <div
        style={{
          padding: '0.8rem var(--pad-x)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem',
          borderTop: '1px solid rgba(255,255,255,0.04)',
          marginTop: '0.8rem',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.62rem',
            letterSpacing: '0.06em',
            color: 'rgba(255,255,255,0.18)',
          }}
        >
          © {new Date().getFullYear()} Elite Tile & Stone · {BUSINESS_INFO.license} · {BUSINESS_INFO.licenseText}
        </span>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.62rem',
              letterSpacing: '0.06em',
              color: 'rgba(255,255,255,0.18)',
            }}
          >
            Las Vegas, Nevada
          </span>
          <a
            href="#privacy"
            onClick={(e) => {
              if (onOpenPrivacy) {
                e.preventDefault();
                onOpenPrivacy();
              }
            }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.62rem',
              letterSpacing: '0.06em',
              color: 'rgba(255,255,255,0.4)',
              textDecoration: 'underline',
              cursor: 'pointer',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--c-off-white)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; }}
          >
            Privacy Policy
          </a>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 640px) {
          footer > div:first-child {
            grid-template-columns: 1fr !important;
          }
          footer > div:first-child > div:nth-child(2) {
            text-align: left !important;
          }
          footer > div:first-child > div:nth-child(2) nav {
            align-items: flex-start !important;
          }
        }
      `}</style>
    </footer>
  );
}
