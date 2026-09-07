import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const GALLERY_ITEMS = [
  // --- CUSTOM SHOWERS ---
  {
    id: 1,
    title: 'Master Walk-In Calacatta Marble Shower',
    category: 'CUSTOM SHOWERS',
    location: 'The Ridges, Summerlin',
    material: 'Bookmatched Calacatta Marble Slabs',
    image: '/assets/ME6b7c6ff636af09a4d467353389260a63.jpeg',
    description: 'Master walk-in curbless shower with Schluter waterproofing, built-in floating bench, and continuous slab flooring.',
  },
  {
    id: 2,
    title: 'Modern Walk-In Suite with 3D Wave Accent',
    category: 'CUSTOM SHOWERS',
    location: 'Ascaya, Henderson',
    material: '3D Wave Porcelain & Black Stone Niche Walls',
    image: '/assets/ME024c0a6e5a15436ade8ca9a8e7f0d696.jpeg',
    description: 'Custom luxury walk-in shower with dual illuminated niches and textured 3D wall feature.',
  },
  {
    id: 3,
    title: 'Luxury Master Spa Suite & Soaking Tub',
    category: 'CUSTOM SHOWERS',
    location: 'MacDonald Highlands, Henderson',
    material: 'Arabesque Mosaic & Floating Marble Bench',
    image: '/assets/ME65a4509d6ed2b4ea182e0cb897e135e2.jpeg',
    description: 'Full master spa bathroom with freestanding tub, floating bench, and custom arabesque mosaic niches.',
  },
  {
    id: 4,
    title: 'Custom Viola Marble Shower Wall & Bench',
    category: 'CUSTOM SHOWERS',
    location: 'Lake Las Vegas, NV',
    material: 'Dramatic Veined Viola Marble',
    image: '/assets/9f4bba36-57cb-4094-b3dd-c23a8dd66207.jpeg',
    description: 'Custom marble shower enclosure featuring bookmatched veining and built-in bench niche.',
  },
  {
    id: 5,
    title: 'Curbless Walk-In Shower with Linear Drain',
    category: 'CUSTOM SHOWERS',
    location: 'Queensridge, Las Vegas',
    material: 'Porcelain Tile & Recessed Niche',
    image: '/assets/60c064df-5f37-4fde-a6b6-a516542d3c12.jpeg',
    description: 'Modern zero-threshold walk-in shower with integrated linear slot drain and mitered niche.',
  },
  {
    id: 6,
    title: 'Symmetrical Master Spa Enclosure & Mosaic Floor',
    category: 'CUSTOM SHOWERS',
    location: 'Southern Highlands, NV',
    material: 'Full Height Tile & Floating Bench',
    image: '/assets/ME676aaea6266a75bc6331a69e5701f976.jpeg',
    description: 'Dual entrance walk-in shower with mosaic tile floor, floating bench, and transom window.',
  },
  {
    id: 7,
    title: 'Walk-In Shower Enclosure & Floral Mosaic Basin',
    category: 'CUSTOM SHOWERS',
    location: 'Anthem Country Club, Henderson',
    material: 'Striated Wall Tile & Floral Mosaic',
    image: '/assets/ME9f5c4f8d7699997ae42da0c511546724.jpeg',
    description: 'Custom shower stall with horizontal striated wall tile and floral mosaic shower floor.',
  },
  {
    id: 8,
    title: 'Modern Soaking Tub & Wood Porcelain Surround',
    category: 'CUSTOM SHOWERS',
    location: 'Seven Hills, Henderson',
    material: 'Wood Grain Porcelain & Recessed Niches',
    image: '/assets/ME4016709aa3e85bba6400270a9b654230.jpeg',
    description: 'Deep drop-in soaking tub with vertical wood-tone porcelain tile surround and black alcove niches.',
  },
  {
    id: 9,
    title: 'Master Suite Walk-In Shower Transformation',
    category: 'CUSTOM SHOWERS',
    location: 'Summerlin North, NV',
    material: 'Full Master Remodel',
    image: '/assets/after.jpeg',
    description: 'Complete master bathroom rebuild with zero-threshold shower entry and marble wall slabs.',
  },
  {
    id: 10,
    title: 'Subfloor Framing & Waterproofing Rebuild',
    category: 'CUSTOM SHOWERS',
    location: 'Green Valley, Henderson',
    material: 'Schluter Waterproofing Subfloor System',
    image: '/assets/before.jpeg',
    description: 'Demonstrating subfloor tear-down, mortar bed leveling, and 100% waterproof membrane prep.',
  },

  // --- FLOORING ---
  {
    id: 11,
    title: 'Masterpiece Herringbone Tile Floor & Border Inlay',
    category: 'FLOORING',
    location: 'The Ridges, Summerlin',
    material: 'Herringbone Wood-Look Tile Planks',
    image: '/assets/MEe8289819d2bcc230c65c85a467b4b4aa.jpeg',
    description: 'Custom herringbone tile floor installation with precision mitered border frame.',
  },
  {
    id: 12,
    title: 'Polished Viola Marble Slab Flooring',
    category: 'FLOORING',
    location: 'Southern Highlands, NV',
    material: 'Polished Italian Viola Marble Slabs',
    image: '/assets/MEb5d1272033e08cdee97949bed6f7be83.jpeg',
    description: 'Laser-leveled high-gloss natural marble slab flooring with zero lippage.',
  },
  {
    id: 13,
    title: 'Grand Entryway Checkered Tile Floor',
    category: 'FLOORING',
    location: 'Green Valley Ranch, Henderson',
    material: 'Dual-Tone Geometric Porcelain Tile',
    image: '/assets/0fb1e729-f602-4533-9841-725c578f7676.jpeg',
    description: 'Diagonal checkerboard foyer floor layout with precision border mitering.',
  },
  {
    id: 14,
    title: 'Estate Outdoor Wood-Look Tile Decking',
    category: 'FLOORING',
    location: 'Ascaya, Henderson',
    material: 'Exterior Porcelain Wood Planks',
    image: '/assets/ME9b7ba8451ea8c9b59e27a1025360c8bf.jpeg',
    description: 'Expansive outdoor patio flooring using weather-resistant, non-slip wood-look porcelain planks.',
  },
  {
    id: 15,
    title: 'Commercial Open Living Space Tile Flooring',
    category: 'FLOORING',
    location: 'Las Vegas Valley',
    material: 'Large Format Porcelain Planks',
    image: '/assets/ME9c7bbab3fff8f17b9f2d9ef16c6e2cea.jpeg',
    description: 'Over 2,500 sq ft of post-tension slab leveling and seamless large format tile installation.',
  },
  {
    id: 16,
    title: 'Diagonal Marble Floor & Tub Surround',
    category: 'FLOORING',
    location: 'Anthem Country Club, Henderson',
    material: 'Diagonal Marble Tile & Vertical Surround',
    image: '/assets/ME58d497a262ed9cfaa45a787cb4d6407f.jpeg',
    description: 'Precision diagonal floor pattern with custom vertical wall tile tub surround.',
  },

  // --- KITCHEN COUNTERTOPS (SLAB) ---
  {
    id: 17,
    title: 'Luxury Veined Marble Countertop Slab & Double Vanity',
    category: 'KITCHEN COUNTERTOPS',
    location: 'The Ridges, Summerlin',
    material: 'Continuous Vein-Matched Marble Slab',
    image: '/assets/ME4b4558ddf77f63f092ffc323aa04acc1.jpeg',
    description: 'Custom slab fabrication with seamless undermount sink cutouts and mitered waterfall edge.',
  },
  {
    id: 18,
    title: 'Curved Commercial Bar Countertop & Waterfall Edge',
    category: 'KITCHEN COUNTERTOPS',
    location: 'Downtown Las Vegas',
    material: 'Polished Marble Slab & Metallic Fluted Front',
    image: '/assets/MEe456e54d0693332692dac5ad0bbbf1fb.jpeg',
    description: 'Custom radius marble slab bar countertop with mitered waterfall return and fluted bronze fascia.',
  },
  {
    id: 19,
    title: 'Double Vanity Marble Countertop & Full Slab Wall',
    category: 'KITCHEN COUNTERTOPS',
    location: 'MacDonald Highlands, Henderson',
    material: 'Floor-to-Ceiling Calacatta Slab Wall',
    image: '/assets/MEbed3a3013e29d2d1f56528ee2f2875b9.jpeg',
    description: 'Floating vanity marble countertop with matching full-height marble wall slab.',
  },
  {
    id: 20,
    title: 'Custom Slab Wall Paneling with Metal Inlay',
    category: 'KITCHEN COUNTERTOPS',
    location: 'Summerlin North, NV',
    material: 'Slab Wall Paneling with Brass Inlay',
    image: '/assets/ME1f383644263f8325bde3a3ecd36dc180.jpeg',
    description: 'Architectural slab fabrication and precision mitered wall installation.',
  },
  {
    id: 21,
    title: 'Floating Vanity Quartzite Slab & Tile Wall',
    category: 'KITCHEN COUNTERTOPS',
    location: 'Queensridge, Las Vegas',
    material: 'Veined Quartzite Slab',
    image: '/assets/ME3a3420b923bf707d8de10a273dbaf426.jpeg',
    description: 'Custom mitered quartzite vanity top with integrated sink and full-height subway tile accent wall.',
  },
  {
    id: 22,
    title: 'Outdoor Patio Kitchen Countertop Slab',
    category: 'KITCHEN COUNTERTOPS',
    location: 'Southern Highlands, NV',
    material: 'Weatherproof Quartzite Countertop Slab',
    image: '/assets/ME80e381707f03b37c57aa64421f7fa0c3.jpeg',
    description: 'Outdoor kitchen bar countertop slab installation with blue glass mosaic backsplash.',
  },

  // --- KITCHEN BACKSPLASHES ---
  {
    id: 23,
    title: 'Basketweave Marble Backsplash & Quartz Countertop',
    category: 'KITCHEN BACKSPLASHES',
    location: 'Summerlin South, NV',
    material: 'Basketweave Marble Mosaic & Quartz Slab',
    image: '/assets/ME8ba8343c9ed6ad836c82a179c96c6ac8.jpeg',
    description: 'Precision marble basketweave backsplash tile installation with seamless electrical outlet integration.',
  },
  {
    id: 24,
    title: 'Black & White Floral Mosaic Kitchen Backsplash',
    category: 'KITCHEN BACKSPLASHES',
    location: 'Green Valley, Henderson',
    material: 'Waterjet Floral Marble Mosaic',
    image: '/assets/ME989eefd4e88cd60e638649dd9bc57c35.jpeg',
    description: 'Custom waterjet marble mosaic backsplash installed under white shaker kitchen cabinetry.',
  },
  {
    id: 25,
    title: 'Custom Bar Sink Mosaic Backsplash & Gold Fixtures',
    category: 'KITCHEN BACKSPLASHES',
    location: 'The Ridges, Summerlin',
    material: 'Diamond Pattern Mosaic Tile',
    image: '/assets/ME7365adb935466485611d45a37a699aaa.jpeg',
    description: 'Wet bar backsplash with diamond tile pattern, apron sink, and brushed gold plumbing hardware.',
  },
  {
    id: 26,
    title: 'Vertical Zellige Tile Backsplash & Floating Shelves',
    category: 'KITCHEN BACKSPLASHES',
    location: 'Ascaya, Henderson',
    material: 'Vertical Stacked Ceramic Zellige Tile',
    image: '/assets/MEbde000d37c5cba24e4340d2d856df8dc.jpeg',
    description: 'Modern vertical stacked tile backsplash with quartz countertop and floating oak shelving.',
  },
  {
    id: 27,
    title: 'Architectural Window Jamb Mitered Backsplash',
    category: 'KITCHEN BACKSPLASHES',
    location: 'Seven Hills, Henderson',
    material: 'Large Format Tile & Mitered Window Trim',
    image: '/assets/08f40bc1-a67f-4f82-8283-fd52b849de06.jpeg',
    description: 'Precision mitered window jamb tile surround with razor-sharp edges and zero exposed trim.',
  },
  {
    id: 28,
    title: 'Geometric Accent Backsplash Behind Vanity',
    category: 'KITCHEN BACKSPLASHES',
    location: 'Lake Las Vegas, NV',
    material: 'Geometric Square Pattern Tile',
    image: '/assets/ME17a2a71f25d7b66a7534e0510fb03d80.jpeg',
    description: 'Full-height geometric tile accent wall behind dark vanity and granite top.',
  },
  {
    id: 29,
    title: 'Modern Kitchen Square Tile Backsplash',
    category: 'KITCHEN BACKSPLASHES',
    location: 'Centennial Hills, Las Vegas',
    material: 'Square Ceramic Backsplash Tile',
    image: '/assets/MEfb7898d8f696cc188d52b232c9e939d6.jpeg',
    description: 'Full kitchen wall backsplash installation around upper cabinets and range hood cutout.',
  },

  // --- STONE COLUMNS (EXTERIOR) ---
  {
    id: 30,
    title: 'Exterior Architectural Stone Wall & Column Wrap',
    category: 'STONE COLUMNS & WALLS',
    location: 'Ascaya, Henderson',
    material: 'Natural Stone Veneer & Timber Siding',
    image: '/assets/ME59b97d4872ac9abbd62d399e9555ebd2.jpeg',
    description: 'Exterior structural wall and column stone veneer cladding on a custom modern estate.',
  },
  {
    id: 31,
    title: 'Outdoor Stacked Stone Island & Column Structure',
    category: 'STONE COLUMNS & WALLS',
    location: 'The Ridges, Summerlin',
    material: 'Dry-Stack Natural Stone Veneer',
    image: '/assets/ME0354d9c0a45f6054cbf27e2d834408f7.jpeg',
    description: 'Outdoor patio kitchen island and structural support column wrapped in dry-stacked stone.',
  },
  {
    id: 32,
    title: 'Architectural Stone Wall Cladding & Column Work',
    category: 'STONE COLUMNS & WALLS',
    location: 'Southern Highlands, NV',
    material: 'Natural Stone Veneer',
    image: '/assets/ME80b3569255abea4f0e873939d2a02489.jpeg',
    description: 'Architectural stone feature wall and column work with integrated lighting.',
  },
  {
    id: 33,
    title: 'Large-Format Beige Marble Wall Cladding',
    category: 'STONE COLUMNS & WALLS',
    location: 'MacDonald Highlands, Henderson',
    material: 'Large Format Beige Marble Cladding',
    image: '/assets/ME9cc57f5befcddab1fd16d17e0a0f8873.jpeg',
    description: 'Exterior patio accent wall and window surround clad in large-format natural beige marble.',
  },

  // --- FIREPLACES ---
  {
    id: 34,
    title: 'Stacked Stone Fireplace & Linear Fire Insert',
    category: 'FIREPLACES',
    location: 'The Ridges, Summerlin',
    material: 'Dry-Stack Stone Veneer & Timber Mantle',
    image: '/assets/fireplace.jpeg',
    description: 'Floor-to-ceiling dry-stacked natural stone fireplace feature wall with custom mantle and linear fire insert.',
  },
  {
    id: 35,
    title: 'Floor-to-Ceiling Chiseled Stone Fireplace Wall',
    category: 'FIREPLACES',
    location: 'Ascaya, Henderson',
    material: 'Chiseled Cut Natural Stone Blocks',
    image: '/assets/MEd8a30368c38381dbb880fb1a9d8fc0ea.jpeg',
    description: 'Textured chiseled stone block fireplace surround reaching up to high vaulted ceiling.',
  },
  {
    id: 36,
    title: 'Fluted Slab Modern Fireplace Surround',
    category: 'FIREPLACES',
    location: 'Summerlin West, NV',
    material: 'Fluted Ceramic / Quartz Slab',
    image: '/assets/ME9ac45132de01f10d29aee80e9689fbec.jpeg',
    description: 'Modern fluted stone fireplace surround with glass insert box.',
  },
  {
    id: 37,
    title: 'Custom Marble Outdoor Fire Pit Table',
    category: 'FIREPLACES',
    location: 'Lake Las Vegas, NV',
    material: 'Full Mitered White Marble Slab',
    image: '/assets/ME4bf14c0b97944c9247419d4bdadfd561.jpeg',
    description: 'Patio custom marble fire pit table with mitered slab edges and dual burners.',
  },
];

const CATEGORIES = [
  'ALL',
  'CUSTOM SHOWERS',
  'FLOORING',
  'KITCHEN COUNTERTOPS',
  'KITCHEN BACKSPLASHES',
  'STONE COLUMNS & WALLS',
  'FIREPLACES',
];

export default function GalleryPage({ onNavigate, onOpenPrivacy }) {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [activeItem, setActiveItem] = useState(null);

  const filteredItems = activeCategory === 'ALL'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div style={{ background: '#0D0D0D', minHeight: '100vh', color: '#FFFFFF' }}>
      <Navbar onNavigate={onNavigate} activeRoute="gallery" />

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
                top:        '1.5rem',
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

              <button
                onClick={() => {
                  setActiveItem(null);
                  if (onNavigate) onNavigate('estimate');
                }}
                style={{
                  display:       'inline-block',
                  padding:       '0.8rem 1.8rem',
                  background:    '#C9962F',
                  color:         '#0D0D0D',
                  fontWeight:    '700',
                  borderRadius:  '4px',
                  border:        'none',
                  cursor:        'pointer',
                  fontSize:      '0.82rem',
                }}
              >
                REQUEST PROJECT ESTIMATE
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer onNavigate={onNavigate} onOpenPrivacy={onOpenPrivacy} />
    </div>
  );
}
