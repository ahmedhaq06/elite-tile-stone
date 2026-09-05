import React from 'react';

export default function WhyElite() {
  const bulletPoints = [
    'Licensed, bonded and insured in Nevada',
    'Schluter-certified waterproofing systems',
    'Written estimates with no surprise add-ons',
    'Workmanship warranty on every install',
  ];

  return (
    <section
      id="about"
      style={{
        background: '#0D0D0D',
        padding:    'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)',
        borderTop:  '1px solid rgba(255, 255, 255, 0.06)',
      }}
    >
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        <div
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap:                 'clamp(2.5rem, 6vw, 5rem)',
            alignItems:          'center',
          }}
        >
          {/* Left Column — Tile Craftsman Photography */}
          <div
            style={{
              position:     'relative',
              borderRadius: '8px',
              overflow:     'hidden',
              boxShadow:    '0 20px 50px rgba(0,0,0,0.6)',
              border:       '1px solid rgba(255, 255, 255, 0.08)',
              maxHeight:    '520px',
            }}
          >
            <img
              src="/assets/tile_craftsman.jpg"
              alt="Elite Tile Craftsman Cutting Tile"
              style={{
                width:      '100%',
                height:     '100%',
                maxHeight:  '520px',
                objectFit:  'cover',
                display:    'block',
              }}
            />
          </div>

          {/* Right Column — Editorial Copy & Bullet List */}
          <div>
            <div
              style={{
                fontFamily:    'var(--font-body)',
                fontSize:      '0.75rem',
                fontWeight:    '700',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color:         '#C9962F',
                marginBottom:  '0.8rem',
              }}
            >
              WHY ELITE
            </div>

            <h2
              style={{
                fontFamily:    'var(--font-display)',
                fontSize:      'clamp(2.2rem, 4vw, 3.4rem)',
                fontWeight:    '700',
                lineHeight:    1.1,
                textTransform: 'uppercase',
                color:         '#FFFFFF',
                letterSpacing: '0.01em',
                marginBottom:  '1.5rem',
              }}
            >
              DONE ONCE. DONE RIGHT.
            </h2>

            <p
              style={{
                fontFamily:  'var(--font-body)',
                fontSize:    '0.95rem',
                fontWeight:  '400',
                lineHeight:  1.68,
                color:       '#8A8A8A',
                marginBottom: '2rem',
                maxWidth:    '540px',
              }}
            >
              Every job starts with a real plan: substrate prep, waterproofing, layout dry-run and a tile map so cuts land where they should. We protect your home, clean up daily and walk the finished work with you before we call it done.
            </p>

            {/* Bullet points with gold dots */}
            <ul
              style={{
                listStyle:  'none',
                padding:    0,
                margin:     0,
                display:    'flex',
                flexDirection: 'column',
                gap:        '1rem',
              }}
            >
              {bulletPoints.map((item, idx) => (
                <li
                  key={idx}
                  style={{
                    display:    'flex',
                    alignItems: 'center',
                    gap:        '0.8rem',
                    fontFamily: 'var(--font-body)',
                    fontSize:   '0.92rem',
                    fontWeight: '500',
                    color:      '#FFFFFF',
                  }}
                >
                  <span
                    style={{
                      width:        '7px',
                      height:       '7px',
                      borderRadius: '50%',
                      background:   '#C9962F',
                      display:      'inline-block',
                      flexShrink:   0,
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
