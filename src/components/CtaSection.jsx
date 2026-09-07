import React from 'react';

export default function CtaSection({ onNavigate }) {
  return (
    <section
      id="contact"
      style={{
        background: '#0D0D0D',
        padding:    'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 5vw, 4rem)',
        borderTop:  '1px solid rgba(255, 255, 255, 0.06)',
        textAlign:  'center',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
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
          FREE IN-HOME ESTIMATES
        </div>

        <h2
          style={{
            fontFamily:    'var(--font-display)',
            fontSize:      'clamp(2.2rem, 4.5vw, 3.8rem)',
            fontWeight:    '700',
            lineHeight:    1.12,
            textTransform: 'uppercase',
            color:         '#FFFFFF',
            letterSpacing: '0.01em',
            marginBottom:  '2.5rem',
          }}
        >
          READY TO TURN YOUR SPACE INTO<br />
          SOMETHING WORTH SHOWING OFF?
        </h2>

        <div
          style={{
            display:        'flex',
            gap:            '1.2rem',
            justifyContent: 'center',
            flexWrap:       'wrap',
          }}
        >
          <button
            onClick={() => onNavigate && onNavigate('estimate')}
            style={{
              display:       'inline-flex',
              alignItems:    'center',
              justifyContent: 'center',
              padding:       '1rem 2.4rem',
              fontFamily:    'var(--font-body)',
              fontSize:      '0.82rem',
              fontWeight:    '700',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color:         '#0D0D0D',
              background:    '#C9962F',
              border:        'none',
              borderRadius:  '4px',
              cursor:        'pointer',
              transition:    'background 0.2s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#D9A43B'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#C9962F'; }}
          >
            REQUEST AN ESTIMATE
          </button>

          <a
            href="tel:7023341707"
            style={{
              display:       'inline-flex',
              alignItems:    'center',
              justifyContent: 'center',
              padding:       '1rem 2.4rem',
              fontFamily:    'var(--font-body)',
              fontSize:      '0.82rem',
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
            CALL 702 334 1707
          </a>
        </div>
      </div>
    </section>
  );
}
