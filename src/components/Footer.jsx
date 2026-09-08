import React from 'react';

export default function Footer({ onNavigate, onOpenPrivacy }) {
  return (
    <footer
      id="footer-contact"
      style={{
        background:  '#080808',
        borderTop:   '1px solid rgba(255, 255, 255, 0.08)',
        color:       '#FFFFFF',
        paddingTop:  'clamp(3.5rem, 6vw, 5rem)',
        paddingBottom: '2.5rem',
      }}
    >
      <div
        style={{
          maxWidth:   '1440px',
          margin:     '0 auto',
          padding:    '0 clamp(1.5rem, 5vw, 4rem)',
        }}
      >
        <div
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap:                 '3rem 4rem',
            paddingBottom:      '3.5rem',
            borderBottom:       '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          {/* Column 1 — Logo & About */}
          <div style={{ maxWidth: '340px' }}>
            <div
              style={{
                display:      'flex',
                alignItems:   'center',
                gap:          '0.75rem',
                marginBottom: '1.2rem',
              }}
            >
              <img
                src="/assets/Logo.jpeg"
                alt="Elite Tile & Stone Logo"
                style={{
                  height:       '40px',
                  width:        'auto',
                  borderRadius: '4px',
                  objectFit:    'contain',
                }}
              />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span
                  style={{
                    fontFamily:    'var(--font-display)',
                    fontSize:      '1.15rem',
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
                    fontSize:      '0.64rem',
                    fontWeight:    '500',
                    letterSpacing: '0.16em',
                    color:         'rgba(255, 255, 255, 0.7)',
                    marginTop:     '0.15rem',
                  }}
                >
                  TILE &amp; STONE LLC
                </span>
              </div>
            </div>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize:   '0.88rem',
                fontWeight: '400',
                lineHeight: 1.65,
                color:      '#8A8A8A',
              }}
            >
              A team of highly skilled tile &amp; stone experts serving Las Vegas and the surrounding valley. We make people's dream homes come true.
            </p>
          </div>

          {/* Column 2 — Explore */}
          <div>
            <h4
              style={{
                fontFamily:    'var(--font-body)',
                fontSize:      '0.82rem',
                fontWeight:    '700',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color:         '#FFFFFF',
                marginBottom:  '1.4rem',
              }}
            >
              EXPLORE
            </h4>
            <ul
              style={{
                listStyle:  'none',
                padding:    0,
                margin:     0,
                display:    'flex',
                flexDirection: 'column',
                gap:        '0.85rem',
              }}
            >
              {[
                { label: 'Services', href: '#services', id: 'services' },
                { label: 'Gallery', href: '#gallery', id: 'gallery' },
                { label: 'About Us', href: '#about', id: 'about' },
                { label: 'Free Estimate', href: '#estimate', id: 'estimate' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      if (onNavigate) onNavigate(link.id === 'services' || link.id === 'about' ? 'home' : link.id, link.id);
                    }}
                    style={{
                      fontFamily:    'var(--font-body)',
                      fontSize:      '0.88rem',
                      fontWeight:    '400',
                      color:         '#8A8A8A',
                      textDecoration: 'none',
                      transition:    'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#C9962F'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#8A8A8A'; }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div>
            <h4
              style={{
                fontFamily:    'var(--font-body)',
                fontSize:      '0.82rem',
                fontWeight:    '700',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color:         '#FFFFFF',
                marginBottom:  '1.4rem',
              }}
            >
              CONTACT
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              <a
                href="tel:7023341707"
                style={{
                  display:       'flex',
                  alignItems:    'center',
                  gap:           '0.6rem',
                  fontFamily:    'var(--font-body)',
                  fontSize:      '0.88rem',
                  color:         '#8A8A8A',
                  textDecoration: 'none',
                }}
              >
                <span>📞</span> 702 334 1707
              </a>
              <a
                href="mailto:info@elitetileandstonelv.com"
                style={{
                  display:       'flex',
                  alignItems:    'center',
                  gap:           '0.6rem',
                  fontFamily:    'var(--font-body)',
                  fontSize:      '0.88rem',
                  color:         '#8A8A8A',
                  textDecoration: 'none',
                }}
              >
                <span>✉️</span> hugo@elitetileandstonelv.com
              </a>
              <a
                href="https://www.instagram.com/elite_tileandstone"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display:       'flex',
                  alignItems:    'center',
                  gap:           '0.6rem',
                  fontFamily:    'var(--font-body)',
                  fontSize:      '0.88rem',
                  color:         '#8A8A8A',
                  textDecoration: 'none',
                }}
              >
                <span><img src="assets/instagram_logo.jpeg" alt="Instagram" /></span> @elite_tileandstone
              </a>
              <a
                href="https://www.tiktok.com/@hugomendoza3893?_r=1&_t=ZT-99Y0RstXzB8"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display:       'flex',
                  alignItems:    'center',
                  gap:           '0.6rem',
                  fontFamily:    'var(--font-body)',
                  fontSize:      '0.88rem',
                  color:         '#8A8A8A',
                  textDecoration: 'none',
                }}
              >
                <span><img src="assets/tiktok_logo.jpeg" alt="TikTok" /></span> @hugomendoza3893
              </a>
              <a
                href="https://www.facebook.com/people/Elite-Tile-And-Stone-Llc/61590267161809/?rdid=twkmcNCFkGqflgyu"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display:       'flex',
                  alignItems:    'center',
                  gap:           '0.6rem',
                  fontFamily:    'var(--font-body)',
                  fontSize:      '0.88rem',
                  color:         '#8A8A8A',
                  textDecoration: 'none',
                }}
              >
                <span><img src="assets/facebook_logo.jpeg" alt="Facebook" /></span> Elite Tile And Stone Llc
              </a>
              <div
                style={{
                  display:    'flex',
                  alignItems: 'center',
                  gap:        '0.6rem',
                  fontFamily: 'var(--font-body)',
                  fontSize:   '0.88rem',
                  color:      '#8A8A8A',
                }}
              >
                <span>📍</span> Las Vegas, Nevada
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop:     '2rem',
            display:        'flex',
            justifyContent: 'space-between',
            alignItems:     'center',
            flexWrap:       'wrap',
            gap:            '1rem',
            fontSize:       '0.75rem',
            color:          '#8A8A8A',
            fontFamily:     'var(--font-body)',
          }}
        >
          <div>
            © 2026 Elite Tile &amp; Stone LLC • Licensed &amp; Insured • Las Vegas, NV
          </div>
          {onOpenPrivacy && (
            <button
              onClick={onOpenPrivacy}
              style={{
                background:     'none',
                border:         'none',
                color:          '#8A8A8A',
                cursor:         'pointer',
                fontSize:       '0.75rem',
                textDecoration: 'underline',
              }}
            >
              Privacy Policy
            </button>
          )}
        </div>
      </div>
    </footer>
  );
}
