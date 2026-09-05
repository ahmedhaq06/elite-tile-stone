import React, { useState, useEffect } from 'react';

const NAV_LINKS = [
  { id: 'home',     href: '#home',     label: 'HOME' },
  { id: 'services', href: '#services', label: 'SERVICES' },
  { id: 'gallery',  href: '#gallery',  label: 'GALLERY' },
  { id: 'about',    href: '#about',    label: 'ABOUT' },
  { id: 'contact',  href: '#contact',  label: 'CONTACT' },
];

export default function Navbar({ onNavigate, activeRoute }) {
  const [scrolled, setScrolled]     = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    setDrawerOpen(false);

    if (link.id === 'gallery') {
      if (onNavigate) onNavigate('gallery');
    } else {
      if (onNavigate) onNavigate('home', link.id);
    }
  };

  return (
    <>
      {/* ── Navbar ── */}
      <nav
        aria-label="Primary navigation"
        style={{
          position:       'fixed',
          top:            0,
          left:           0,
          right:          0,
          zIndex:         100,
          height:         '74px',
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'space-between',
          padding:        '0 clamp(1.2rem, 5vw, 4rem)',
          background:     scrolled ? 'rgba(13, 13, 13, 0.95)' : 'rgba(13, 13, 13, 0.65)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom:   '1px solid rgba(255, 255, 255, 0.08)',
          transition:     'background 0.3s ease',
        }}
      >
        {/* Brand Logo & Name */}
        <a
          href="#"
          onClick={(e) => handleLinkClick(e, { id: 'home' })}
          style={{
            display:        'flex',
            alignItems:     'center',
            gap:            '0.75rem',
            textDecoration: 'none',
          }}
        >
          <img
            src="/assets/Logo.jpeg"
            alt="Elite Tile & Stone Logo"
            style={{
              height: '38px',
              width: 'auto',
              borderRadius: '4px',
              objectFit: 'contain',
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontFamily:    'var(--font-display)',
                fontSize:      '1.1rem',
                fontWeight:    '700',
                letterSpacing: '0.12em',
                color:         '#C9962F',
                lineHeight:    1,
              }}
            >
              ELITE
            </span>
            <span
              style={{
                fontFamily:    'var(--font-body)',
                fontSize:      '0.62rem',
                fontWeight:    '500',
                letterSpacing: '0.16em',
                color:         'rgba(255, 255, 255, 0.7)',
                marginTop:     '0.15rem',
              }}
            >
              TILE &amp; STONE LLC
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div
          className="nav-desktop"
          style={{ alignItems: 'center', gap: '2.5rem' }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link)}
              style={{
                fontFamily:    'var(--font-body)',
                fontSize:      '0.78rem',
                fontWeight:    '600',
                letterSpacing: '0.12em',
                color:         (activeRoute === 'gallery' && link.id === 'gallery') ? '#C9962F' : '#FFFFFF',
                textDecoration: 'none',
                transition:    'color 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#C9962F'; }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = (activeRoute === 'gallery' && link.id === 'gallery') ? '#C9962F' : '#FFFFFF';
              }}
            >
              {link.label}
            </a>
          ))}

          {/* Phone Call CTA Button */}
          <a
            href="tel:7025550142"
            style={{
              display:       'inline-flex',
              alignItems:    'center',
              gap:           '0.45rem',
              fontFamily:    'var(--font-body)',
              fontSize:      '0.82rem',
              fontWeight:    '700',
              letterSpacing: '0.04em',
              color:         '#0D0D0D',
              background:    '#C9962F',
              padding:       '0.55rem 1.1rem',
              borderRadius:  '6px',
              textDecoration: 'none',
              transition:    'background 0.2s ease, transform 0.2s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#D9A43B'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#C9962F'; }}
          >
            <span style={{ fontSize: '0.88rem' }}>📞</span>
            (702) 555-0142
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="nav-mobile-btn"
          onClick={() => setDrawerOpen(true)}
          aria-label="Open navigation menu"
          style={{
            background: 'none',
            border:     'none',
            cursor:     'pointer',
            padding:    '0.4rem',
            color:      '#FFFFFF',
          }}
        >
          <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
            <line x1="0" y1="1" x2="24" y2="1" stroke="#C9962F" strokeWidth="2"/>
            <line x1="0" y1="8" x2="24" y2="8" stroke="#C9962F" strokeWidth="2"/>
            <line x1="0" y1="15" x2="24" y2="15" stroke="#C9962F" strokeWidth="2"/>
          </svg>
        </button>
      </nav>

      {/* ── Mobile Fullscreen Drawer ── */}
      <div
        style={{
          position:   'fixed',
          inset:      0,
          background: 'rgba(13, 13, 13, 0.98)',
          zIndex:     200,
          display:    'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding:    '2rem',
          transform:  drawerOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.4s var(--ease-out)',
        }}
      >
        <button
          onClick={() => setDrawerOpen(false)}
          style={{
            position:   'absolute',
            top:        '1.5rem',
            right:      '2rem',
            background: 'none',
            border:     'none',
            color:      '#C9962F',
            fontSize:   '2.2rem',
            cursor:     'pointer',
          }}
        >
          ×
        </button>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link)}
              style={{
                fontFamily:    'var(--font-display)',
                fontSize:      '1.8rem',
                fontWeight:    '700',
                letterSpacing: '0.08em',
                color:         '#FFFFFF',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:7025550142"
            style={{
              marginTop:     '1.5rem',
              display:       'inline-flex',
              alignItems:    'center',
              justifyContent: 'center',
              gap:           '0.5rem',
              fontFamily:    'var(--font-body)',
              fontSize:      '1rem',
              fontWeight:    '700',
              color:         '#0D0D0D',
              background:    '#C9962F',
              padding:       '0.9rem 1.5rem',
              borderRadius:  '6px',
              textDecoration: 'none',
            }}
          >
            📞 (702) 555-0142
          </a>
        </nav>
      </div>
    </>
  );
}
