import React, { useState } from 'react';

const SERVICES = [
  {
    num:   '01',
    name:  'Custom showers (master / walk-in)',
    image: '/assets/ME6b7c6ff636af09a4d467353389260a63.jpeg',
    alt:   'Custom master walk-in marble shower',
  },
  {
    num:   '02',
    name:  'Flooring',
    image: '/assets/MEe8289819d2bcc230c65c85a467b4b4aa.jpeg',
    alt:   'Herringbone tile floor with border inlay',
  },
  {
    num:   '03',
    name:  'Kitchen countertops (slab)',
    image: '/assets/ME4b4558ddf77f63f092ffc323aa04acc1.jpeg',
    alt:   'Luxury veined marble countertop slab installation',
  },
  {
    num:   '04',
    name:  'Kitchen backsplashes',
    image: '/assets/ME8ba8343c9ed6ad836c82a179c96c6ac8.jpeg',
    alt:   'Basketweave marble kitchen tile backsplash',
  },
  {
    num:   '05',
    name:  'Stone columns (exterior)',
    image: '/assets/ME59b97d4872ac9abbd62d399e9555ebd2.jpeg',
    alt:   'Architectural exterior stone wall and column wrap',
  },
  {
    num:   '06',
    name:  'Fireplaces',
    image: '/assets/fireplace.jpeg',
    alt:   'Stacked stone fireplace with linear fire insert',
  },
];

export default function Services({ onNavigate }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const activeService = SERVICES[activeIndex ?? 0];

  return (
    <section
      id="services"
      style={{
        background: '#0D0D0D',
        position:   'relative',
        overflow:   'hidden',
        borderTop:  '1px solid rgba(255, 255, 255, 0.06)',
      }}
    >
      <div
        style={{
          maxWidth:            '1440px',
          margin:              '0 auto',
          display:             'grid',
          gridTemplateColumns: '1fr 42%',
        }}
      >
        {/* ── Left: Service Rows ── */}
        <div
          className="services-left"
          style={{ padding: 'clamp(3.5rem, 6vw, 7rem) clamp(1.5rem, 5vw, 4rem)' }}
        >
          <div
            style={{
              height:       '1px',
              background:   'rgba(255, 255, 255, 0.08)',
              marginBottom: '1.5rem',
            }}
          />

          {/* Interactive Service Rows */}
          <div className="services-list">
            {SERVICES.map((svc, i) => (
              <div
                key={svc.num}
                style={{
                  cursor:     'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(null)}
                onClick={() => onNavigate && onNavigate('estimate')}
              >
                <div
                  style={{
                    display:             'grid',
                    gridTemplateColumns: '3rem 1fr',
                    alignItems:          'start',
                    gap:                 '1rem',
                    padding:             '1.4rem 0',
                    borderBottom:        '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  {/* Number */}
                  <span
                    style={{
                      fontFamily:    'var(--font-body)',
                      fontSize:      '0.8rem',
                      fontWeight:    '700',
                      color:         activeIndex === i ? '#C9962F' : 'rgba(255, 255, 255, 0.3)',
                      transition:    'color 0.3s ease',
                      paddingTop:    '0.3rem',
                    }}
                  >
                    {svc.num}
                  </span>

                  {/* Name + Description */}
                  <div>
                    <div
                      style={{
                        fontFamily:    'var(--font-display)',
                        fontSize:      'clamp(1.25rem, 2vw, 1.8rem)',
                        fontWeight:    '700',
                        letterSpacing: '0.02em',
                        lineHeight:    1.15,
                        color:         activeIndex === i ? '#C9962F' : '#FFFFFF',
                        transition:    'color 0.3s ease',
                        marginBottom:  '0.4rem',
                      }}
                    >
                      {svc.name}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize:   '0.88rem',
                        lineHeight: 1.6,
                        color:      '#8A8A8A',
                      }}
                    >
                      {svc.desc}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* All Services Estimate CTA */}
          <div style={{ marginTop: '2.5rem' }}>
            <button
              onClick={() => onNavigate && onNavigate('estimate')}
              style={{
                display:       'inline-flex',
                alignItems:    'center',
                justifyContent: 'center',
                padding:       '0.85rem 2rem',
                fontFamily:    'var(--font-body)',
                fontSize:      '0.8rem',
                fontWeight:    '700',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color:         '#C9962F',
                background:    'transparent',
                border:        '1px solid #C9962F',
                borderRadius:  '4px',
                cursor:        'pointer',
                transition:    'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#C9962F';
                e.currentTarget.style.color = '#0D0D0D';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#C9962F';
              }}
            >
              ALL SERVICES — GET ESTIMATE
            </button>
          </div>
        </div>

        {/* ── Right: Photography Interactive Preview Panel ── */}
        <div
          className="services-image-panel"
          style={{
            position:       'relative',
            display:        'flex',
            flexDirection:  'column',
            alignSelf:      'stretch',
            width:          '100%',
            borderLeft:     '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <div
            style={{
              position:  'relative',
              width:     '100%',
              aspectRatio: '4 / 3',
              overflow:  'hidden',
            }}
          >
            {SERVICES.map((svc, i) => (
              <div
                key={svc.num}
                style={{
                  position:   'absolute',
                  inset:      0,
                  opacity:    activeIndex === i ? 1 : 0,
                  transition: 'opacity 0.55s ease',
                  willChange: 'opacity',
                }}
              >
                <img
                  src={svc.image}
                  alt={svc.alt}
                  style={{
                    width:          '100%',
                    height:         '100%',
                    objectFit:      'cover',
                    objectPosition: 'center',
                  }}
                />
                <div
                  aria-hidden="true"
                  style={{
                    position:   'absolute',
                    inset:      0,
                    background: 'linear-gradient(to right, #0D0D0D 0%, transparent 28%)',
                  }}
                />
              </div>
            ))}

            {/* Default background image when nothing hovered */}
            <div
              style={{
                position:   'absolute',
                inset:      0,
                opacity:    activeIndex !== null ? 0 : 1,
                transition: 'opacity 0.55s ease',
              }}
            >
              <img
                src={SERVICES[0].image}
                alt="Elite Tile & Stone"
                style={{
                  width:     '100%',
                  height:    '100%',
                  objectFit: 'cover',
                  filter:    'brightness(0.35)',
                }}
              />
              <div
                aria-hidden="true"
                style={{
                  position:   'absolute',
                  inset:      0,
                  background: 'linear-gradient(to right, #0D0D0D 0%, transparent 28%)',
                }}
              />
            </div>
          </div>

          <div
            style={{
              flex:          '1 1 auto',
              display:       'flex',
              flexDirection: 'column',
              justifyContent:'space-between',
              padding:       'clamp(2rem, 4vw, 4rem)',
              borderTop:     '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <div>
              <div
                style={{
                  fontFamily:    'var(--font-body)',
                  fontSize:      '0.72rem',
                  fontWeight:    '700',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color:         '#C9962F',
                  marginBottom:  '1rem',
                }}
              >
                WHAT WE DO
              </div>
              <h2
                style={{
                  maxWidth:       '32rem',
                  margin:         '0 0 1.25rem',
                  fontFamily:     'var(--font-display)',
                  fontSize:       'clamp(2rem, 3.8vw, 3.2rem)',
                  fontWeight:     '700',
                  lineHeight:     1.08,
                  textTransform:  'uppercase',
                  letterSpacing:  '0.01em',
                  color:          '#FFFFFF',
                }}
              >
                {activeService.name}
              </h2>
              <p
                style={{
                  maxWidth:   '30rem',
                  margin:     0,
                  fontFamily: 'var(--font-body)',
                  fontSize:   '0.95rem',
                  lineHeight: 1.65,
                  color:      '#8A8A8A',
                }}
              >
                {activeService.desc}
              </p>
            </div>

            <div
              style={{
                display:             'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap:                 '1rem',
                paddingTop:          '2rem',
              }}
            >
              {[
                ['06', 'Specialties'],
                ['01', 'Dedicated crew'],
                ['100%', 'Custom finish'],
              ].map(([value, label]) => (
                <div key={label}>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize:   'clamp(1.3rem, 2.5vw, 2rem)',
                      fontWeight: '700',
                      color:      '#FFFFFF',
                      lineHeight: 1,
                    }}
                  >
                    {value}
                  </div>
                  <div
                    style={{
                      marginTop:    '0.5rem',
                      fontFamily:   'var(--font-body)',
                      fontSize:     '0.68rem',
                      fontWeight:   '700',
                      letterSpacing:'0.08em',
                      textTransform:'uppercase',
                      color:        '#8A8A8A',
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .services-image-panel { display: none !important; }
          .services-left { width: 100% !important; }
        }
      `}</style>
    </section>
  );
}
