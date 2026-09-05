import React from 'react';

export default function Hero({ onNavigate }) {
  return (
    <section
      id="home"
      style={{
        position:   'relative',
        minHeight:  '100vh',
        background: '#0D0D0D',
        display:    'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow:   'hidden',
        paddingTop: '74px', // account for navbar
      }}
    >
      {/* ── Background Image & Dark Overlay ── */}
      <div
        style={{
          position:   'absolute',
          inset:      0,
          backgroundImage: `url('/assets/hero_dark_bathroom.jpg')`,
          backgroundSize:  'cover',
          backgroundPosition: 'center right',
          zIndex:     1,
        }}
      >
        {/* Dark Vignette Overlay for readability */}
        <div
          style={{
            position:   'absolute',
            inset:      0,
            background: 'radial-gradient(circle at 20% 50%, rgba(13, 13, 13, 0.85) 0%, rgba(13, 13, 13, 0.55) 60%, rgba(13, 13, 13, 0.75) 100%), linear-gradient(to right, rgba(13,13,13,0.92) 0%, rgba(13,13,13,0.7) 45%, transparent 80%)',
          }}
        />
      </div>

      {/* ── Main Hero Content ── */}
      <div
        style={{
          position:   'relative',
          zIndex:     2,
          maxWidth:   '1440px',
          width:      '100%',
          margin:     '0 auto',
          padding:    'clamp(3rem, 8vw, 6rem) clamp(1.5rem, 5vw, 4rem)',
          flex:       1,
          display:    'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div style={{ maxWidth: '640px' }}>
          {/* Eyebrow */}
          <div
            style={{
              fontFamily:    'var(--font-body)',
              fontSize:      '0.75rem',
              fontWeight:    '700',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color:         '#C9962F',
              marginBottom:  '1.2rem',
            }}
          >
            LAS VEGAS, NEVADA
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily:    'var(--font-display)',
              fontSize:      'clamp(2.8rem, 5.8vw, 5.2rem)',
              fontWeight:    '700',
              lineHeight:    1.05,
              letterSpacing: '0.01em',
              textTransform: 'uppercase',
              color:         '#C9962F',
              marginBottom:  '1.5rem',
            }}
          >
            TILE &amp; STONE,<br />
            SET TO PERFECTION.
          </h1>

          {/* Body Text */}
          <p
            style={{
              fontFamily:    'var(--font-body)',
              fontSize:      'clamp(0.95rem, 1.2vw, 1.1rem)',
              fontWeight:    '400',
              lineHeight:    1.65,
              color:         '#FFFFFF',
              marginBottom:  '2.5rem',
              maxWidth:      '500px',
            }}
          >
            We are a team of highly skilled tile &amp; stone experts. From custom showers to whole-home flooring, we build the details that make a home feel finished.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="#contact"
              style={{
                display:       'inline-flex',
                alignItems:    'center',
                justifyContent: 'center',
                padding:       '1rem 2.2rem',
                fontFamily:    'var(--font-body)',
                fontSize:      '0.82rem',
                fontWeight:    '700',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color:         '#0D0D0D',
                background:    '#C9962F',
                borderRadius:  '4px',
                textDecoration: 'none',
                transition:    'background 0.2s ease, transform 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#D9A43B'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#C9962F'; }}
            >
              GET A FREE ESTIMATE
            </a>

            <a
              href="#recent-work"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('gallery');
                }
              }}
              style={{
                display:       'inline-flex',
                alignItems:    'center',
                justifyContent: 'center',
                padding:       '1rem 2.2rem',
                fontFamily:    'var(--font-body)',
                fontSize:      '0.82rem',
                fontWeight:    '700',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color:         '#C9962F',
                background:    'rgba(13, 13, 13, 0.6)',
                border:        '1px solid #C9962F',
                borderRadius:  '4px',
                textDecoration: 'none',
                transition:    'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#C9962F';
                e.currentTarget.style.color = '#0D0D0D';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(13, 13, 13, 0.6)';
                e.currentTarget.style.color = '#C9962F';
              }}
            >
              SEE OUR WORK
            </a>
          </div>
        </div>
      </div>

      {/* ── Stats Bar (Bottom of Hero) ── */}
      <div
        style={{
          position:   'relative',
          zIndex:     2,
          borderTop:  '1px solid rgba(255, 255, 255, 0.1)',
          background: 'rgba(13, 13, 13, 0.92)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <div
          style={{
            maxWidth:   '1440px',
            margin:     '0 auto',
            display:    'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          }}
        >
          {[
            { number: '12+', label: 'YEARS IN THE VALLEY' },
            { number: '800+', label: 'PROJECTS COMPLETED' },
            { number: '100%', label: 'LICENSED & INSURED' },
          ].map((stat, idx) => (
            <div
              key={idx}
              style={{
                padding:        '1.8rem 2rem',
                textAlign:      'center',
                borderRight:    idx < 2 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
                display:        'flex',
                flexDirection: 'column',
                alignItems:     'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  fontFamily:    'var(--font-display)',
                  fontSize:      'clamp(2rem, 3.5vw, 2.8rem)',
                  fontWeight:    '700',
                  color:         '#C9962F',
                  lineHeight:    1,
                  marginBottom:  '0.4rem',
                }}
              >
                {stat.number}
              </div>
              <div
                style={{
                  fontFamily:    'var(--font-body)',
                  fontSize:      '0.72rem',
                  fontWeight:    '600',
                  letterSpacing: '0.14em',
                  color:         'rgba(255, 255, 255, 0.8)',
                  textTransform: 'uppercase',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
