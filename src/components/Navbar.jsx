import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../data/tilesData';

const NAV_LINKS = [
  { href: '#services',      label: 'Specialties' },
  { href: '#before-after',  label: 'Before & After' },
  { href: '#portfolio',     label: 'Projects' },
  { href: '#contact',       label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 56);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  return (
    <>
      {/* ── Main nav bar ── */}
      <nav
        aria-label="Primary navigation"
        style={{
          position:       'fixed',
          top:            0,
          left:           0,
          right:          0,
          zIndex:         100,
          height:         '68px',
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'space-between',
          padding:        '0 var(--pad-x)',
          background:     scrolled ? 'rgba(12, 11, 10, 0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
          borderBottom:   scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
          transition:     'background 0.45s ease, border-color 0.45s ease',
        }}
      >
        {/* Wordmark */}
        <a
          href="#"
          aria-label="Elite Tile & Stone — home"
          style={{
            display:    'flex',
            alignItems: 'center',
            gap:        '0.7rem',
          }}
        >
          {/* Tiny diamond glyph — gold as micro-accent */}
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            aria-hidden="true"
            style={{ flexShrink: 0 }}
          >
            <polygon
              points="6,0.5 11.5,6 6,11.5 0.5,6"
              fill="none"
              stroke="#C4A052"
              strokeWidth="1.1"
            />
            <polygon
              points="6,3.5 8.5,6 6,8.5 3.5,6"
              fill="#C4A052"
            />
          </svg>
          <span
            style={{
              fontFamily:    'var(--font-display)',
              fontSize:      '1.05rem',
              fontWeight:    '600',
              letterSpacing: '0.13em',
              textTransform: 'uppercase',
              color:         'var(--c-off-white)',
              lineHeight:    1,
            }}
          >
            Elite Tile & Stone
          </span>
        </a>

        {/* Desktop nav links */}
        <div
          className="nav-desktop"
          style={{ alignItems: 'center', gap: '2.8rem' }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily:    'var(--font-body)',
                fontSize:      '0.76rem',
                fontWeight:    '400',
                letterSpacing: '0.08em',
                color:         'rgba(250,248,245,0.6)',
                textDecoration: 'none',
                transition:    'color 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--c-off-white)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(250,248,245,0.6)'; }}
            >
              {link.label}
            </a>
          ))}

          {/* Phone — gold micro-accent, always readable */}
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            style={{
              fontFamily:    'var(--font-body)',
              fontSize:      '0.75rem',
              fontWeight:    '600',
              letterSpacing: '0.07em',
              color:         'var(--c-gold)',
              textDecoration: 'none',
            }}
          >
            {BUSINESS_INFO.phone}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="nav-mobile-btn"
          onClick={() => setDrawerOpen(true)}
          aria-label="Open menu"
          style={{
            background: 'none',
            border:     'none',
            cursor:     'pointer',
            padding:    '0.4rem',
            color:      'var(--c-off-white)',
          }}
        >
          <svg width="24" height="14" viewBox="0 0 24 14" fill="none" aria-hidden="true">
            <line x1="0" y1="0.75" x2="24" y2="0.75" stroke="currentColor" strokeWidth="1.5"/>
            <line x1="4" y1="7" x2="24" y2="7" stroke="currentColor" strokeWidth="1.5"/>
            <line x1="0" y1="13.25" x2="24" y2="13.25" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        </button>
      </nav>

      {/* ── Mobile full-screen drawer ── */}
      <div
        aria-modal="true"
        role="dialog"
        aria-label="Navigation menu"
        style={{
          position:   'fixed',
          inset:      0,
          background: 'rgba(12, 11, 10, 0.98)',
          zIndex:     200,
          display:    'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding:    'var(--pad-x)',
          transform:  drawerOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.5s var(--ease-out)',
        }}
      >
        {/* Close */}
        <button
          onClick={() => setDrawerOpen(false)}
          aria-label="Close menu"
          style={{
            position:   'absolute',
            top:        '1.5rem',
            right:      'var(--pad-x)',
            background: 'none',
            border:     'none',
            color:      'var(--c-stone-mid)',
            cursor:     'pointer',
            fontSize:   '1.6rem',
            lineHeight: 1,
          }}
        >
          ×
        </button>

        {/* Links — oversized Cormorant */}
        <nav>
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setDrawerOpen(false)}
              style={{
                display:        'block',
                fontFamily:     'var(--font-display)',
                fontSize:       'clamp(2.6rem, 9vw, 4.2rem)',
                fontWeight:     '400',
                letterSpacing:  '-0.01em',
                lineHeight:     1.1,
                color:          'var(--c-off-white)',
                padding:        '0.5rem 0',
                borderBottom:   '1px solid rgba(255,255,255,0.06)',
                opacity:        drawerOpen ? 1 : 0,
                transform:      drawerOpen ? 'translateY(0)' : 'translateY(12px)',
                transition:     `opacity 0.45s ease ${i * 0.07 + 0.1}s, transform 0.45s var(--ease-out) ${i * 0.07 + 0.1}s`,
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          style={{
            marginTop:     '2.5rem',
            fontFamily:    'var(--font-body)',
            fontSize:      '0.9rem',
            fontWeight:    '600',
            letterSpacing: '0.06em',
            color:         'var(--c-gold)',
          }}
        >
          {BUSINESS_INFO.phone}
        </a>
      </div>
    </>
  );
}
