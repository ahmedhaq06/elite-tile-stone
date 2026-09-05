import React, { useState } from 'react';

const SERVICES = [
  {
    num:   '01',
    name:  'Exotic Slab Sourcing & Installation',
    desc:  '48×96-inch bookmatched porcelain. Italian marble. Continuous vein matching.',
    image: '/assets/after.jpeg',
    alt:   'Master suite marble installation',
  },
  {
    num:   '02',
    name:  'Luxury Curbless Wet Rooms & Spa Showers',
    desc:  'Zero-threshold curbless systems. Schluter waterproofing. Built-in niche & floating bench.',
    image: '/assets/9f4bba36-57cb-4094-b3dd-c23a8dd66207.jpeg',
    alt:   'Custom shower niche with hexagonal mosaic',
  },
  {
    num:   '03',
    name:  'Architectural Kitchen Slabbing & Backsplashes',
    desc:  'Razor-edge mitering at window jambs. Seamless outlet cutouts. Waterfall island edges.',
    image: '/assets/08f40bc1-a67f-4f82-8283-fd52b849de06.jpeg',
    alt:   'Architectural kitchen backsplash',
  },
  {
    num:   '04',
    name:  'Large-Format Porcelain & Subfloor Prep',
    desc:  'Laser-leveled mortar beds. Anti-fracture underlayment. Waterproof membrane.',
    image: '/assets/living_room_floor.jpg',
    alt:   'Subfloor preparation and large format tile',
  },
];

export default function Services({ onNavigate }) {
  const [activeIndex, setActiveIndex] = useState(null);

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
          {/* Section Header */}
          <div style={{ marginBottom: '2.5rem' }}>
            <div
              style={{
                fontFamily:    'var(--font-body)',
                fontSize:      '0.75rem',
                fontWeight:    '700',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color:         '#C9962F',
                marginBottom:  '0.6rem',
              }}
            >
              WHAT WE DO
            </div>
            <h2
              style={{
                fontFamily:    'var(--font-display)',
                fontSize:      'clamp(2rem, 3.8vw, 3.2rem)',
                fontWeight:    '700',
                lineHeight:    1.08,
                textTransform: 'uppercase',
                color:         '#FFFFFF',
                letterSpacing: '0.01em',
              }}
            >
              CRAFTSMANSHIP IN EVERY SQUARE FOOT
            </h2>
          </div>

          <div
            style={{
              height:       '1px',
              background:   'rgba(255, 255, 255, 0.08)',
              marginBottom: '1.5rem',
            }}
          />

          {/* Interactive Service Rows */}
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
            position: 'relative',
            borderLeft: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <div
            style={{
              position:  'relative',
              height:    '100%',
              minHeight: '420px',
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
