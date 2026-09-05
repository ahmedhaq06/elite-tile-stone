import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'Custom Spa Suite & Calacatta Porcelain',
    category: 'SHOWERS & BATHROOMS',
    location: 'The Ridges, Summerlin',
    material: 'Bookmatched Calacatta Porcelain Slabs',
    image: '/assets/60c064df-5f37-4fde-a6b6-a516542d3c12.jpeg',
    description: 'Curbless walk-in shower suite with Schluter waterproof membrane system and continuous vein-matched porcelain slabs.',
  },
  {
    id: 2,
    title: 'Architectural Kitchen Backsplash',
    category: 'KITCHEN BACKSPLASHES',
    location: 'MacDonald Highlands, Henderson',
    material: 'Quartzite Backsplash & Mitered Jambs',
    image: '/assets/08f40bc1-a67f-4f82-8283-fd52b849de06.jpeg',
    description: 'Precision mitered quartzite tile around window frames with zero visible grout joints.',
  },
  {
    id: 3,
    title: 'Open Living Estate Tile Flooring',
    category: 'LARGE-FORMAT FLOORING',
    location: 'Green Valley Ranch, NV',
    material: '48" Laser-Leveled Porcelain Planks',
    image: '/assets/living_room_floor.jpg',
    description: 'Over 1,800 sq ft of post-tension slab leveling and lippage-free large format porcelain tile installation.',
  },
  {
    id: 4,
    title: 'Nero Marquina Fireplace Wall',
    category: 'FIREPLACE WALLS',
    location: 'Ascaya, Henderson',
    material: 'Floor-to-Ceiling Marble Slabs',
    image: '/assets/fireplace_wall.jpg',
    description: 'Modern black obsidian slab fireplace surround with embedded warm lighting linear gas insert.',
  },
  {
    id: 5,
    title: 'Custom Recessed Niche & Bench',
    category: 'SHOWERS & BATHROOMS',
    location: 'Seven Hills, Henderson',
    material: 'Hexagonal Mosaic & Quartz Slab',
    image: '/assets/9f4bba36-57cb-4094-b3dd-c23a8dd66207.jpeg',
    description: 'Built-in LED illuminated tile niche, floating quartz bench, zero-threshold floor slope.',
  },
  {
    id: 6,
    title: 'Master Bathroom Transformation',
    category: 'SHOWERS & BATHROOMS',
    location: 'Summerlin North, NV',
    material: 'Full Master Remodel',
    image: '/assets/after.jpeg',
    description: 'Demolished dated subflooring and rebuilt with heated tile floor system and freestanding soaking tub.',
  },
];

const CATEGORIES = [
  'ALL',
  'SHOWERS & BATHROOMS',
  'KITCHEN BACKSPLASHES',
  'LARGE-FORMAT FLOORING',
  'FIREPLACE WALLS',
];

export default function GalleryPage({ onNavigate, onOpenPrivacy }) {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [activeItem, setActiveItem] = useState(null);

  const filteredItems = activeCategory === 'ALL'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div style={{ background: '#0D0D0D', minHeight: '100vh', color: '#FFFFFF' }}>
      <Navbar onNavigate={onNavigate} />

      {/* Hero Header */}
      <section
        style={{
          paddingTop:     '130px',
          paddingBottom:  '3rem',
          paddingLeft:    'clamp(1.5rem, 5vw, 4rem)',
          paddingRight:   'clamp(1.5rem, 5vw, 4rem)',
          background:     'linear-gradient(to bottom, #141414 0%, #0D0D0D 100%)',
          borderBottom:   '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
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
            PORTFOLIO
          </div>
          <h1
            style={{
              fontFamily:    'var(--font-display)',
              fontSize:      'clamp(2.5rem, 5vw, 4.2rem)',
              fontWeight:    '700',
              lineHeight:    1.08,
              textTransform: 'uppercase',
              color:         '#C9962F',
              marginBottom:  '1rem',
            }}
          >
            OUR CRAFTSMANSHIP GALLERY
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize:   '1.05rem',
              color:      '#8A8A8A',
              maxWidth:   '620px',
              lineHeight: 1.6,
            }}
          >
            Explore custom tile installations, luxury marble slab fireplaces, curbless master showers, and precision large-format porcelain floors completed across Las Vegas.
          </p>

          {/* Category Filter Pills */}
          <div
            style={{
              display:   'flex',
              gap:       '0.8rem',
              flexWrap:  'wrap',
              marginTop: '2.5rem',
            }}
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  fontFamily:    'var(--font-body)',
                  fontSize:      '0.76rem',
                  fontWeight:    '700',
                  letterSpacing: '0.08em',
                  padding:       '0.6rem 1.2rem',
                  borderRadius:  '4px',
                  border:        '1px solid',
                  borderColor:   activeCategory === cat ? '#C9962F' : 'rgba(255, 255, 255, 0.15)',
                  background:    activeCategory === cat ? '#C9962F' : 'rgba(255, 255, 255, 0.04)',
                  color:         activeCategory === cat ? '#0D0D0D' : '#FFFFFF',
                  cursor:        'pointer',
                  transition:    'all 0.2s ease',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section
        style={{
          padding: '4rem clamp(1.5rem, 5vw, 4rem)',
        }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div
            style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap:                 '2rem',
            }}
          >
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                style={{
                  background:   '#141414',
                  border:       '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '8px',
                  overflow:     'hidden',
                  cursor:       'pointer',
                  transition:   'transform 0.3s ease, border-color 0.3s ease',
                  boxShadow:    '0 12px 30px rgba(0,0,0,0.5)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = 'rgba(201, 150, 47, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                }}
              >
                <div style={{ position: 'relative', height: '280px', overflow: 'hidden' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width:      '100%',
                      height:     '100%',
                      objectFit:  'cover',
                    }}
                  />
                  <div
                    style={{
                      position:   'absolute',
                      top:        '0.8rem',
                      right:      '0.8rem',
                      background: 'rgba(13, 13, 13, 0.85)',
                      color:      '#C9962F',
                      padding:    '0.3rem 0.7rem',
                      borderRadius: '4px',
                      fontSize:   '0.68rem',
                      fontWeight: '700',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {item.category}
                  </div>
                </div>

                <div style={{ padding: '1.5rem' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize:   '1.15rem',
                      fontWeight: '700',
                      color:      '#FFFFFF',
                      marginBottom: '0.4rem',
                    }}
                  >
                    {item.title}
                  </h3>
                  <div
                    style={{
                      fontSize:   '0.8rem',
                      color:      '#C9962F',
                      fontWeight: '600',
                      marginBottom: '0.8rem',
                    }}
                  >
                    📍 {item.location}
                  </div>
                  <p
                    style={{
                      fontSize:   '0.85rem',
                      color:      '#8A8A8A',
                      lineHeight: 1.5,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          onClick={() => setActiveItem(null)}
          style={{
            position:   'fixed',
            inset:      0,
            background: 'rgba(0,0,0,0.92)',
            zIndex:     300,
            display:    'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding:    '2rem',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background:   '#161616',
              border:       '1px solid #C9962F',
              borderRadius: '10px',
              maxWidth:     '850px',
              width:        '100%',
              overflow:     'hidden',
              position:     'relative',
              boxShadow:    '0 25px 60px rgba(0,0,0,0.8)',
            }}
          >
            <button
              onClick={() => setActiveItem(null)}
              style={{
                position:   'absolute',
                top:        '1rem',
                right:      '1.2rem',
                background: 'rgba(0,0,0,0.7)',
                border:     'none',
                color:      '#FFFFFF',
                fontSize:   '1.8rem',
                cursor:     'pointer',
                borderRadius: '50%',
                width:      '40px',
                height:     '40px',
                zIndex:     10,
              }}
            >
              ×
            </button>

            <img
              src={activeItem.image}
              alt={activeItem.title}
              style={{
                width:     '100%',
                maxHeight: '480px',
                objectFit: 'cover',
              }}
            />

            <div style={{ padding: '2rem' }}>
              <div style={{ color: '#C9962F', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                {activeItem.category} · {activeItem.location}
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: '#FFFFFF', marginBottom: '0.8rem' }}>
                {activeItem.title}
              </h2>
              <p style={{ color: '#8A8A8A', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                {activeItem.description}
              </p>

              <a
                href="#contact"
                onClick={() => {
                  setActiveItem(null);
                  if (onNavigate) onNavigate('home');
                }}
                style={{
                  display:       'inline-block',
                  padding:       '0.8rem 1.8rem',
                  background:    '#C9962F',
                  color:         '#0D0D0D',
                  fontWeight:    '700',
                  borderRadius:  '4px',
                  textDecoration: 'none',
                  fontSize:      '0.82rem',
                }}
              >
                REQUEST PROJECT ESTIMATE
              </a>
            </div>
          </div>
        </div>
      )}

      <Footer onNavigate={onNavigate} onOpenPrivacy={onOpenPrivacy} />
    </div>
  );
}
