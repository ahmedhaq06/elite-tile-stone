import React, { useState } from 'react';
import { X, Phone, MapPin } from 'lucide-react';
import { PORTFOLIO_PROJECTS, BUSINESS_INFO } from '../data/tilesData';
import { useReveal } from '../hooks/useReveal';

/*
  Visual grammar (corrected):
    - All 4 items reveal together on scroll (not the whole grid as one blob)
    - "Las Vegas Installations. / Verified Craftsmanship." headline replaced with
      something that has actual editorial authority
    - CTA axis: right-aligned CTA moved to be left-aligned (matches grid)
    - hoverStyle='none' item now has a static caption at bottom (always visible,
      not animated) — images without any interaction feel abandoned
*/

const PROJECTS = [
  PORTFOLIO_PROJECTS[3], // Master Suite After — featured
  PORTFOLIO_PROJECTS[1], // Spa Suite Bathroom
  PORTFOLIO_PROJECTS[0], // Kitchen Backsplash
  PORTFOLIO_PROJECTS[2], // Shower Niche
];

function ProjectCard({ project, className, style, hoverStyle = 'overlay', onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`reveal-scale ${className}`}
      onClick={() => onClick(project)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position:  'relative',
        overflow:  'hidden',
        cursor:    'pointer',
        background: '#0C0B0A',
        ...style,
      }}
    >
      <img
        src={project.image}
        alt={project.title}
        style={{
          width:          '100%',
          height:         '100%',
          objectFit:      'cover',
          objectPosition: 'center',
          display:        'block',
          transition:     hoverStyle !== 'none' ? 'transform 0.8s var(--ease-out)' : 'none',
          transform:      hovered && hoverStyle !== 'none' ? 'scale(1.04)' : 'scale(1)',
          willChange:     'transform',
        }}
      />

      {/* Full overlay — gradient + text for featured items */}
      {hoverStyle === 'overlay' && (
        <div
          style={{
            position:   'absolute',
            inset:      0,
            background: 'linear-gradient(to top, rgba(12,11,10,0.78) 0%, transparent 48%)',
            opacity:    hovered ? 1 : 0,
            transition: 'opacity 0.45s ease',
          }}
        >
          <div
            style={{
              position:   'absolute',
              bottom:     0,
              left:       0,
              right:      0,
              padding:    '1.5rem',
              transform:  hovered ? 'translateY(0)' : 'translateY(10px)',
              transition: 'transform 0.45s var(--ease-out)',
            }}
          >
            <div className="t-eyebrow" style={{ marginBottom: '0.3rem' }}>
              {project.category} — {project.location}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize:   'clamp(1.1rem, 1.6vw, 1.5rem)',
                fontWeight: '400',
                color:      'var(--c-off-white)',
                lineHeight: 1.15,
              }}
            >
              {project.title}
            </div>
          </div>
        </div>
      )}

      {/* Slim label — minimal, no gradient flood */}
      {hoverStyle === 'label' && (
        <div
          style={{
            position:   'absolute',
            bottom:     '1rem',
            left:       '1rem',
            opacity:    hovered ? 1 : 0,
            transform:  hovered ? 'translateY(0)' : 'translateY(6px)',
            transition: 'opacity 0.35s ease, transform 0.35s var(--ease-out)',
          }}
        >
          <div className="t-eyebrow">{project.location}</div>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize:   'clamp(0.95rem, 1.4vw, 1.25rem)',
              fontWeight: '400',
              color:      'var(--c-off-white)',
            }}
          >
            {project.title}
          </div>
        </div>
      )}

      {/*
        hoverStyle='none' — image sits beautifully but still has a static
        caption at bottom so it doesn't feel abandoned or broken.
        Caption is always visible at low opacity; does not animate.
      */}
      {hoverStyle === 'none' && (
        <div
          style={{
            position: 'absolute',
            bottom:   '1rem',
            left:     '1rem',
          }}
        >
          <div
            className="t-eyebrow"
            style={{ opacity: 0.45 }}
          >
            {project.category}
          </div>
        </div>
      )}
    </div>
  );
}

export default function PortfolioGallery() {
  const [lightbox, setLightbox] = useState(null);
  const sectionRef = useReveal();

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      style={{
        background: 'var(--c-black)',
        padding:    'clamp(3.5rem, 6vw, 8rem) var(--pad-x)',
      }}
    >
      {/* Header row — left-aligned label + headline on same visual axis as grid */}
      <div className="container">
        <div
          className="reveal"
          style={{
            display:       'flex',
            alignItems:    'baseline',
            gap:           '1.4rem',
            paddingBottom: '1rem',
            marginBottom:  '0.2rem',
            overflow:      'hidden',
          }}
        >
          <span className="t-eyebrow" style={{ opacity: 0.4 }}>04</span>
          <span className="t-eyebrow">Projects</span>
        </div>
        {/* Animated rule */}
        <div
          className="reveal-rule"
          style={{
            height:       '1px',
            background:   'rgba(255,255,255,0.06)',
            marginBottom: 'clamp(1rem, 1.5vw, 1.5rem)',
          }}
        />

        {/*
          Headline rewritten — "Las Vegas Installations. / Verified Craftsmanship."
          was generic and read as AI copy. Replaced with something factual and specific.
        */}
        <h2
          className="reveal"
          style={{
            fontFamily:    'var(--font-display)',
            fontSize:      'clamp(1.8rem, 3vw, 3.2rem)',
            fontWeight:    '700',
            lineHeight:    1.08,
            letterSpacing: '-0.01em',
            color:         'var(--c-gold)',
            maxWidth:      '22ch',
            marginBottom:  '0.6rem',
          }}
        >
          Selected Work.
          <br />
          <span style={{ color: 'var(--c-white)' }}>
            Southern Nevada.
          </span>
        </h2>

        {/* Pricing Scope & Millimetric Precision Sub-header */}
        <p
          className="reveal-blur"
          style={{
            fontFamily:    'var(--font-body)',
            fontSize:      'clamp(0.8rem, 1.1vw, 0.95rem)',
            fontWeight:    '400',
            lineHeight:    1.5,
            color:         'var(--c-stone-mid)',
            maxWidth:      '48ch',
            marginBottom:  'clamp(1.5rem, 2.5vw, 2.5rem)',
          }}
        >
          From $30k powder rooms to $120k master suites—every project is documented with millimetric precision.
        </p>

        {/* ── Asymmetric grid ── */}
        {/*
          Each card now has reveal-scale on itself (staggered via CSS)
          rather than the whole grid animating as one opaque mass.
        */}
        <div className="portfolio-grid">
          <ProjectCard
            project={PROJECTS[0]}
            className="portfolio-item-a stagger-1"
            style={{ gridColumn: '1 / 3', gridRow: '1 / 2' }}
            hoverStyle="overlay"
            onClick={setLightbox}
          />
          <ProjectCard
            project={PROJECTS[1]}
            className="portfolio-item-b stagger-2"
            style={{ gridColumn: '3 / 4', gridRow: '1 / 2' }}
            hoverStyle="label"
            onClick={setLightbox}
          />
          <ProjectCard
            project={PROJECTS[2]}
            className="portfolio-item-c stagger-3"
            style={{ gridColumn: '1 / 2', gridRow: '2 / 3' }}
            hoverStyle="none"
            onClick={setLightbox}
          />
          <ProjectCard
            project={PROJECTS[3]}
            className="portfolio-item-d stagger-4"
            style={{ gridColumn: '2 / 4', gridRow: '2 / 3' }}
            hoverStyle="overlay"
            onClick={setLightbox}
          />
        </div>

        {/* CTA — left-aligned, matches grid axis */}
        <div
          className="reveal"
          style={{ marginTop: '2.5rem' }}
        >
          <a
            href="#contact"
            className="btn btn-light"
            style={{ fontSize: '0.75rem' }}
          >
            Request a Consultation →
          </a>
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
          style={{
            position:       'fixed',
            inset:          0,
            background:     'rgba(12,11,10,0.92)',
            backdropFilter: 'blur(16px)',
            zIndex:         300,
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'center',
            padding:        '2rem var(--pad-x)',
          }}
          onClick={(e) => { if (e.target === e.currentTarget) setLightbox(null); }}
        >
          <div
            style={{
              background:          'var(--c-dark-1)',
              border:              '1px solid rgba(255,255,255,0.07)',
              maxWidth:            '900px',
              width:               '100%',
              maxHeight:           '88vh',
              overflowY:           'auto',
              position:            'relative',
              display:             'grid',
              gridTemplateColumns: '1.3fr 1fr',
            }}
          >
            {/* Close */}
            <button
              onClick={() => setLightbox(null)}
              aria-label="Close"
              style={{
                position:   'absolute',
                top:        '1rem',
                right:      '1rem',
                background: 'transparent',
                border:     '1px solid rgba(255,255,255,0.12)',
                color:      'rgba(255,255,255,0.5)',
                width:      '32px',
                height:     '32px',
                borderRadius: '50%',
                cursor:     'pointer',
                display:    'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex:     10,
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--c-off-white)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
            >
              <X size={14} />
            </button>

            {/* Image */}
            <div style={{ height: '480px', overflow: 'hidden' }}>
              <img
                src={lightbox.image}
                alt={lightbox.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Info */}
            <div
              style={{
                padding:       '2.5rem',
                display:       'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div className="t-eyebrow" style={{ marginBottom: '1rem' }}>
                  {lightbox.category}
                </div>
                <h3
                  style={{
                    fontFamily:   'var(--font-display)',
                    fontSize:     'clamp(1.4rem, 2.2vw, 1.9rem)',
                    fontWeight:   '400',
                    lineHeight:   1.1,
                    color:        'var(--c-off-white)',
                    marginBottom: '0.6rem',
                  }}
                >
                  {lightbox.title}
                </h3>

                <div
                  style={{
                    display:      'flex',
                    alignItems:   'center',
                    gap:          '0.4rem',
                    color:        'var(--c-stone-mid)',
                    fontSize:     '0.78rem',
                    marginBottom: '1.5rem',
                  }}
                >
                  <MapPin size={12} />
                  {lightbox.location}
                </div>

                <div
                  style={{
                    borderTop:    '1px solid rgba(255,255,255,0.06)',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                    padding:      '1rem 0',
                    marginBottom: '1.2rem',
                  }}
                >
                  <div className="t-eyebrow" style={{ marginBottom: '0.3rem' }}>
                    Material
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize:   '0.85rem',
                      color:      'var(--c-stone-light)',
                    }}
                  >
                    {lightbox.material}
                  </div>
                </div>

                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize:   '0.85rem',
                    lineHeight: 1.7,
                    color:      'var(--c-stone-mid)',
                  }}
                >
                  {lightbox.details}
                </p>
              </div>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                style={{
                  display:       'flex',
                  alignItems:    'center',
                  justifyContent: 'center',
                  gap:           '0.5rem',
                  marginTop:     '2rem',
                  padding:       '0.85rem 1.5rem',
                  background:    'var(--c-off-white)',
                  color:         'var(--c-black)',
                  fontFamily:    'var(--font-body)',
                  fontSize:      '0.75rem',
                  fontWeight:    '600',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  transition:    'background 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--c-warm-white)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--c-off-white)'; }}
              >
                <Phone size={13} />
                {BUSINESS_INFO.phone}
              </a>
            </div>

            <style>{`
              @media (max-width: 640px) {
                #portfolio-lightbox-inner {
                  grid-template-columns: 1fr !important;
                }
              }
            `}</style>
          </div>
        </div>
      )}
    </section>
  );
}
