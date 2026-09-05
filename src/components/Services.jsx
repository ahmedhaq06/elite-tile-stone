import React, { useState } from 'react';

export default function Services({ onNavigate }) {
  const [activeDetail, setActiveDetail] = useState(null);

  const mainServices = [
    {
      id: 'showers',
      title: 'SHOWERS & BATHROOMS',
      description: 'Curbless walk-ins, linear drains, waterproofed to the letter, finished with slab-look porcelain or natural stone.',
      image: '/assets/60c064df-5f37-4fde-a6b6-a516542d3c12.jpeg',
    },
    {
      id: 'backsplashes',
      title: 'KITCHEN BACKSPLASHES',
      description: 'Herringbone, stacked, mosaic or full-height slab. Tight grout lines and mitered edges you can inspect up close.',
      image: '/assets/08f40bc1-a67f-4f82-8283-fd52b849de06.jpeg',
    },
    {
      id: 'flooring',
      title: 'LARGE-FORMAT FLOORING',
      description: 'Up to 48" porcelain planks and tiles, laser-leveled and lippage-free across whole homes.',
      image: '/assets/living_room_floor.jpg',
    },
  ];

  const detailedServices = [
    {
      num: '01',
      name: 'Curbless Spa Showers & Bathrooms',
      subtitle: 'Zero-threshold entry, Schluter waterproofing & custom niche integration',
      desc: 'Complete bathroom transformations with zero-step curbless walk-in showers, linear trench drains, heated tile floors, and custom quartz bench seating.',
      image: '/assets/9f4bba36-57cb-4094-b3dd-c23a8dd66207.jpeg',
      features: [
        'Schluter-Kerdi certified waterproofing backing',
        'Custom recessed LED tile niches & floating benches',
        'Precision slope mortar beds & linear drain channels',
        'Bookmatched Calacatta marble & large porcelain slabs',
      ],
    },
    {
      num: '02',
      name: 'Architectural Kitchen Backsplashes & Slabs',
      subtitle: 'Mitered window jambs, full-height quartz & herringbone layouts',
      desc: 'Hand-cut kitchen backsplash installations that elevate your cooking space. From complex 90° herringbone patterns to seamless floor-to-ceiling slab backsplashes.',
      image: '/assets/08f40bc1-a67f-4f82-8283-fd52b849de06.jpeg',
      features: [
        'Razor-sharp 45° mitered edge corner joints',
        'Seamless laser cutouts around electrical outlets',
        'Full-height stone slabbing & waterfall counter edges',
        'Stain-resistant epoxy grout lines',
      ],
    },
    {
      num: '03',
      name: 'Large-Format Porcelain & Natural Stone Flooring',
      subtitle: 'Up to 48x48" tiles, post-tension slab leveling & zero lippage guarantee',
      desc: 'Whole-home tile flooring installed over laser-leveled subfloors. We handle post-tension concrete prep and large-format porcelain planks up to 48 inches.',
      image: '/assets/living_room_floor.jpg',
      features: [
        'Self-leveling underlayment compound application',
        'Anti-fracture crack isolation membrane',
        'Lippage-free leveling clip installation system',
        'Precision expansion joints along threshold boundaries',
      ],
    },
    {
      num: '04',
      name: 'Fireplace Surround Walls & Feature Slabs',
      subtitle: 'Floor-to-ceiling obsidian slabs, quartz fireplaces & accent walls',
      desc: 'Make a bold architectural statement with bookmatched marble or quartz slab fireplace surrounds up to 10 feet tall.',
      image: '/assets/fireplace_wall.jpg',
      features: [
        'Heavy-duty mechanical anchoring systems',
        'Backlit translucent onyx & exotic quartz options',
        'Thermal heat shielding & linear fireplace integration',
        'Custom mitering around hearth edges',
      ],
    },
  ];

  const handleAllServicesClick = (e) => {
    e.preventDefault();
    const detailEl = document.getElementById('services-detail');
    if (detailEl) {
      detailEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="services"
      style={{
        background: '#0D0D0D',
        borderTop:  '1px solid rgba(255, 255, 255, 0.06)',
      }}
    >
      {/* ── Main What We Do Section (Screenshot 2) ── */}
      <div
        style={{
          padding:  'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)',
          maxWidth: '1440px',
          margin:   '0 auto',
        }}
      >
        {/* Section Header */}
        <div style={{ marginBottom: '3.5rem' }}>
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
            WHAT WE DO
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
            }}
          >
            CRAFTSMANSHIP IN EVERY SQUARE FOOT
          </h2>
        </div>

        {/* 3 Cards Grid */}
        <div
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap:                 '1.5rem',
            marginBottom:        '3rem',
          }}
        >
          {mainServices.map((item, idx) => (
            <div
              key={idx}
              style={{
                background:   '#161616',
                border:       '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '8px',
                padding:      '2.5rem 2rem',
                display:      'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition:   'transform 0.3s ease, border-color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(201, 150, 47, 0.4)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily:    'var(--font-display)',
                    fontSize:      '1.25rem',
                    fontWeight:    '700',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    color:         '#FFFFFF',
                    marginBottom:  '1.2rem',
                    lineHeight:    1.2,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize:   '0.92rem',
                    fontWeight: '400',
                    lineHeight: 1.65,
                    color:      '#8A8A8A',
                  }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ALL SERVICES CTA Button */}
        <div>
          <a
            href="#services-detail"
            onClick={handleAllServicesClick}
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
              textDecoration: 'none',
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
            ALL SERVICES ↓
          </a>
        </div>
      </div>

      {/* ── Detailed Services Breakdown Section ── */}
      <div
        id="services-detail"
        style={{
          background:   '#111111',
          padding:      'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)',
          borderTop:    '1px solid rgba(255, 255, 255, 0.08)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3.5rem' }}>
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
              COMPLETE SERVICE BREAKDOWN
            </div>
            <h2
              style={{
                fontFamily:    'var(--font-display)',
                fontSize:      'clamp(2rem, 3.8vw, 3.2rem)',
                fontWeight:    '700',
                lineHeight:    1.1,
                textTransform: 'uppercase',
                color:         '#FFFFFF',
              }}
            >
              OUR SPECIALIZED TILE &amp; STONE SERVICES
            </h2>
          </div>

          <div
            style={{
              display:       'flex',
              flexDirection: 'column',
              gap:           '3.5rem',
            }}
          >
            {detailedServices.map((svc, idx) => (
              <div
                key={svc.num}
                style={{
                  display:             'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap:                 '2.5rem',
                  alignItems:          'center',
                  background:          '#161616',
                  border:              '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius:        '8px',
                  padding:             'clamp(1.8rem, 4vw, 3rem)',
                }}
              >
                {/* Text Content */}
                <div style={{ order: idx % 2 === 1 ? 2 : 1 }}>
                  <div
                    style={{
                      display:      'flex',
                      alignItems:   'center',
                      gap:          '1rem',
                      marginBottom: '0.8rem',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize:   '1.2rem',
                        fontWeight: '700',
                        color:      '#C9962F',
                      }}
                    >
                      {svc.num}
                    </span>
                    <span style={{ height: '1px', flex: 1, background: 'rgba(201, 150, 47, 0.3)' }} />
                  </div>

                  <h3
                    style={{
                      fontFamily:    'var(--font-display)',
                      fontSize:      '1.5rem',
                      fontWeight:    '700',
                      color:         '#FFFFFF',
                      marginBottom:  '0.4rem',
                      lineHeight:    1.2,
                    }}
                  >
                    {svc.name}
                  </h3>

                  <div
                    style={{
                      fontSize:     '0.85rem',
                      color:        '#C9962F',
                      fontWeight:   '600',
                      marginBottom: '1.2rem',
                    }}
                  >
                    {svc.subtitle}
                  </div>

                  <p
                    style={{
                      fontFamily:   'var(--font-body)',
                      fontSize:     '0.92rem',
                      color:        '#8A8A8A',
                      lineHeight:   1.65,
                      marginBottom: '1.5rem',
                    }}
                  >
                    {svc.desc}
                  </p>

                  {/* Feature checklist */}
                  <ul
                    style={{
                      listStyle:  'none',
                      padding:    0,
                      margin:     0,
                      display:    'flex',
                      flexDirection: 'column',
                      gap:        '0.6rem',
                    }}
                  >
                    {svc.features.map((feat, fIdx) => (
                      <li
                        key={fIdx}
                        style={{
                          display:    'flex',
                          alignItems: 'center',
                          gap:        '0.6rem',
                          fontSize:   '0.85rem',
                          color:      '#FFFFFF',
                        }}
                      >
                        <span style={{ color: '#C9962F', fontWeight: 'bold' }}>✓</span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Photo */}
                <div
                  style={{
                    order:        idx % 2 === 1 ? 1 : 2,
                    borderRadius: '6px',
                    overflow:     'hidden',
                    height:       '320px',
                    border:       '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  <img
                    src={svc.image}
                    alt={svc.name}
                    style={{
                      width:     '100%',
                      height:    '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
