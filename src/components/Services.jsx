import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal';

const SERVICES = [
  {
    num:   '01',
    name:  'Exotic Slab Sourcing & Installation',
    desc:  '48×96-inch bookmatched porcelain. Italian marble. Continuous vein matching.',
    image: '/assets/after.jpeg',
    alt:   'Master suite marble installation, MacDonald Highlands',
  },
  {
    num:   '02',
    name:  'Luxury Curbless Wet Rooms',
    desc:  'Zero-threshold curbless systems. Schluter waterproofing. Built-in niche & bench.',
    image: '/assets/9f4bba36-57cb-4094-b3dd-c23a8dd66207.jpeg',
    alt:   'Custom shower niche with hexagonal mosaic, Green Valley Ranch',
  },
  {
    num:   '03',
    name:  'Architectural Kitchen Slabbing',
    desc:  'Razor-edge mitering at window jambs. Seamless outlet cutouts. Waterfall island edges.',
    image: '/assets/08f40bc1-a67f-4f82-8283-fd52b849de06.jpeg',
    alt:   'Architectural kitchen backsplash, Summerlin',
  },
  {
    num:   '04',
    name:  'Subfloor & Underlayment Systems',
    desc:  'Laser-leveled mortar beds. Anti-fracture underlayment. Waterproof membrane.',
    image: '/assets/before.jpeg',
    alt:   'Subfloor preparation and waterproofing',
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(null);
  const sectionRef = useReveal();

  return (
    <section
      id="services"
      ref={sectionRef}
      style={{
        background: 'var(--c-dark-1)',
        position:   'relative',
        overflow:   'hidden',
      }}
    >
      <div
        style={{
          display:             'grid',
          gridTemplateColumns: '1fr 38%',
        }}
      >
        {/* ── Left: service rows ── */}
        <div
          className="services-left"
          style={{ padding: 'clamp(3.5rem, 6vw, 8rem) var(--pad-x)' }}
        >
          {/* Section label */}
          <div
            className="reveal"
            style={{
              display:       'flex',
              alignItems:    'baseline',
              gap:           '1.4rem',
              paddingBottom: '0.9rem',
              marginBottom:  'clamp(1.2rem, 2vw, 2rem)',
              overflow:      'hidden',
            }}
          >
            <span className="t-eyebrow" style={{ opacity: 0.4 }}>02</span>
            <span className="t-eyebrow">Specialties</span>
          </div>
          {/* Animated rule */}
          <div
            className="reveal-rule"
            style={{
              height:       '1px',
              background:   'rgba(255,255,255,0.06)',
              marginTop:    '-1.2rem',
              marginBottom: 'clamp(1.2rem, 2vw, 2rem)',
            }}
          />

          {/* Rows */}
          {SERVICES.map((svc, i) => (
            <div
              key={svc.num}
              className="reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div
                style={{
                  display:             'grid',
                  gridTemplateColumns: '3rem 1fr',
                  alignItems:          'start',
                  gap:                 '1rem',
                  padding:             'clamp(0.85rem, 1.4vw, 1.3rem) 0',
                  borderBottom:        '1px solid rgba(255,255,255,0.06)',
                }}
              >
                {/* Number */}
                <span
                  className="t-eyebrow"
                  style={{
                    paddingTop: '0.35rem',
                    color:      activeIndex === i ? 'var(--c-gold)' : 'rgba(255,255,255,0.25)',
                    transition: 'color 0.3s ease',
                  }}
                >
                  {svc.num}
                </span>

                {/* Name + description */}
                <div>
                  <div
                    style={{
                      fontFamily:    'var(--font-display)',
                      fontSize:      'clamp(1.4rem, 2vw, 2.2rem)',
                      fontWeight:    '700',
                      letterSpacing: '-0.01em',
                      lineHeight:    1.1,
                      color:         'var(--c-gold)',
                      transition:    'color 0.3s ease',
                      marginBottom:  '0.3rem',
                    }}
                  >
                    {svc.name}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize:   '0.85rem',
                      lineHeight: 1.55,
                      color:      'var(--c-grey)',
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {svc.desc}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/*
            Mobile fallback image — shows first project image below rows.
            Only visible when the right panel is hidden (< 900px).
          */}
          <div
            className="services-mobile-image"
            style={{
              display:    'none',
              marginTop:  '2.5rem',
              height:     '60vw',
              overflow:   'hidden',
              position:   'relative',
            }}
          >
            <img
              src={SERVICES[0].image}
              alt={SERVICES[0].alt}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* ── Right: image panel (matches content height instead of forcing 100vh) ── */}
        <div
          className="services-image-panel"
          style={{ position: 'relative' }}
        >
          <div
            style={{
              position: 'relative',
              height:   '100%',
              minHeight: '380px',
              overflow: 'hidden',
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
                  className="reveal-img"
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
                    background: 'linear-gradient(to right, var(--c-dark-1) 0%, transparent 28%)',
                  }}
                />
              </div>
            ))}

            {/*
              When nothing is hovered, show first image at low opacity
              instead of a dead dark panel — the section is never empty.
            */}
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
                alt=""
                aria-hidden="true"
                style={{
                  width:     '100%',
                  height:    '100%',
                  objectFit: 'cover',
                  filter:    'brightness(0.35)',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .services-image-panel { display: none !important; }
          .services-mobile-image { display: block !important; }
          .services-left { width: 100% !important; }
        }
      `}</style>
    </section>
  );
}
