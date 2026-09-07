import React from 'react';

export default function RecentWork({ onNavigate }) {
  const projects = [
    {
      id: 1,
      title: 'Master Walk-In Marble Shower',
      image: '/assets/ME6b7c6ff636af09a4d467353389260a63.jpeg',
      alt: 'Master Walk-In Marble Shower',
    },
    {
      id: 2,
      title: 'Polished Viola Marble Flooring',
      image: '/assets/MEb5d1272033e08cdee97949bed6f7be83.jpeg',
      alt: 'Polished Viola Marble Flooring',
    },
    {
      id: 3,
      title: 'Stacked Stone Fireplace Wall',
      image: '/assets/fireplace.jpeg',
      alt: 'Stacked Stone Fireplace Wall',
    },
  ];

  return (
    <section
      id="recent-work"
      style={{
        background: '#0D0D0D',
        padding:    'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)',
        borderTop:  '1px solid rgba(255, 255, 255, 0.06)',
      }}
    >
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
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
            RECENT WORK
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
            FROM THE VALLEY
          </h2>
        </div>

        {/* 3 Project Cards Grid */}
        <div
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap:                 '1.5rem',
            marginBottom:        '3rem',
          }}
        >
          {projects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => onNavigate && onNavigate('gallery')}
              style={{
                position:     'relative',
                borderRadius: '6px',
                overflow:     'hidden',
                height:       '320px',
                cursor:       'pointer',
                border:       '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow:    '0 12px 30px rgba(0,0,0,0.5)',
              }}
            >
              <img
                src={proj.image}
                alt={proj.alt}
                style={{
                  width:      '100%',
                  height:     '100%',
                  objectFit:  'cover',
                  transition: 'transform 0.5s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
              />
            </div>
          ))}
        </div>

        {/* View Full Gallery Button */}
        <div>
          <a
            href="#gallery"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigate) onNavigate('gallery');
              else window.location.hash = 'gallery';
            }}
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
            VIEW FULL GALLERY
          </a>
        </div>
      </div>
    </section>
  );
}
