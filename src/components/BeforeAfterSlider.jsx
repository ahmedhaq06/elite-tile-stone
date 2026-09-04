import React, { useState, useRef } from 'react';
import { useReveal } from '../hooks/useReveal';

export default function BeforeAfterSlider() {
  const [position, setPosition]   = useState(50); // % top → bottom
  const [dragging, setDragging]   = useState(false);
  const containerRef               = useRef(null);
  const sectionRef                 = useReveal();

  /* ── Pointer handling (mouse + touch) ── */
  const getPercent = (clientY) => {
    if (!containerRef.current) return 50;
    const { top, height } = containerRef.current.getBoundingClientRect();
    return Math.max(2, Math.min(98, ((clientY - top) / height) * 100));
  };

  const onMouseDown  = ()  => setDragging(true);
  const onMouseUp    = ()  => setDragging(false);
  const onMouseLeave = ()  => setDragging(false);
  const onMouseMove  = (e) => { if (dragging) setPosition(getPercent(e.clientY)); };
  const onTouchMove  = (e) => {
    e.preventDefault();
    if (e.touches?.[0]) setPosition(getPercent(e.touches[0].clientY));
  };

  return (
    <section
      id="before-after"
      ref={sectionRef}
      style={{
        background: 'var(--c-black)',
        padding:    'clamp(3.5rem, 6vw, 8rem) var(--pad-x)',
      }}
    >
      {/* No numbered eyebrow row — the h2 opens the section directly */}

      {/* ── Two-column layout: editorial text / slider ── */}
      <div className="container">
        <div className="slider-layout">

          {/* Left: editorial copy */}
          <div>
            {/* Subdued label above headline — replaces the full numbered eyebrow row */}
            <div
              className="reveal"
              style={{ marginBottom: '1rem' }}
            >
              <span className="t-eyebrow" style={{ opacity: 0.4 }}>03 — Before &amp; After</span>
            </div>

            <h2
              className="reveal t-display stagger-1"
              style={{
                fontSize:     'clamp(2.2rem, 3.8vw, 3.8rem)',
                fontWeight:   '700',
                lineHeight:   1.08,
                color:        'var(--c-gold)',
                marginBottom: '2.5rem',
              }}
            >
              Subfloor<br />
              <span style={{ color: 'var(--c-white)' }}>
                to Showroom.
              </span>
            </h2>

            {/* Body copy removed — instructional filler. The slider speaks. */}

            {/* Project metadata — thin, factual */}
            <div
              className="reveal stagger-3"
              style={{
                paddingTop:  '1.5rem',
                borderTop:   '1px solid rgba(255,255,255,0.07)',
                display:     'flex',
                flexDirection: 'column',
                gap:         '0.6rem',
              }}
            >
              {[
                ['Location',  'MacDonald Highlands, NV'],
                ['Material',  '48×96-in. Bookmatched Porcelain'],
                ['Process',   'Full demolition → underlayment → precision slab'],
              ].map(([k, v]) => (
                <div
                  key={k}
                  style={{
                    display: 'flex',
                    gap:     '1.5rem',
                    alignItems: 'baseline',
                  }}
                >
                  <span
                    style={{
                      fontFamily:    'var(--font-body)',
                      fontSize:      '0.62rem',
                      fontWeight:    '600',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color:         'var(--c-stone-mid)',
                      minWidth:      '5.5rem',
                      flexShrink:    0,
                    }}
                  >
                    {k}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize:   '0.82rem',
                      color:      'var(--c-stone-light)',
                    }}
                  >
                    {v}
                  </span>
                </div>
              ))}

              {/* Action Buttons */}
              <div style={{ marginTop: '1.2rem' }}>
                <a
                  href="#contact"
                  className="btn btn-light"
                  style={{ fontSize: '0.72rem', width: '100%', justifyContent: 'center' }}
                >
                  Get this look in your home →
                </a>
              </div>
            </div>
          </div>

          {/* Right: the slider — no border box, images bleed */}
          <div
            className="reveal stagger-2"
            ref={containerRef}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseLeave}
            onMouseMove={onMouseMove}
            onTouchMove={onTouchMove}
            onTouchStart={onMouseDown}
            onTouchEnd={onMouseUp}
            style={{
              position:   'relative',
              height:     'clamp(380px, 48vh, 560px)',
              overflow:   'hidden',
              cursor:     dragging ? 'grabbing' : 'ns-resize',
              userSelect: 'none',
              /* No border-radius, no box-shadow — images sit bare */
            }}
          >
            {/* AFTER — base layer (full height) */}
            <img
              src="/assets/after.jpeg"
              alt="After: Elite Tile & Stone master suite installation"
              style={{
                position:       'absolute',
                inset:          0,
                width:          '100%',
                height:         '100%',
                objectFit:      'cover',
                objectPosition: 'center',
                pointerEvents:  'none',
              }}
            />

            {/* BEFORE — clip reveals from top */}
            <div
              style={{
                position: 'absolute',
                top:      0,
                left:     0,
                right:    0,
                height:   `${position}%`,
                overflow: 'hidden',
              }}
            >
              <img
                src="/assets/before.jpeg"
                alt="Before: subfloor demolition and preparation"
                style={{
                  width:     '100%',
                  height:    containerRef.current
                    ? `${containerRef.current.offsetHeight}px`
                    : '780px',
                  objectFit:      'cover',
                  objectPosition: 'center',
                  pointerEvents:  'none',
                }}
              />
            </div>

            {/* ── Divider line ── */}
            <div
              aria-hidden="true"
              style={{
                position:  'absolute',
                left:      0,
                right:     0,
                top:       `${position}%`,
                transform: 'translateY(-50%)',
                height:    '1px',
                background: 'rgba(255,255,255,0.5)',
                zIndex:    10,
              }}
            >
              {/* Drag handle — minimal circle */}
              <div
                style={{
                  position:      'absolute',
                  left:          '50%',
                  top:           '50%',
                  transform:     'translate(-50%, -50%)',
                  width:         '38px',
                  height:        '38px',
                  borderRadius:  '50%',
                  background:    'rgba(12,11,10,0.75)',
                  border:        '1px solid rgba(255,255,255,0.35)',
                  backdropFilter: 'blur(4px)',
                  display:       'flex',
                  alignItems:    'center',
                  justifyContent: 'center',
                }}
              >
                {/* Up-down arrow */}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M7 1.5 L7 12.5 M3.5 4.5 L7 1.5 L10.5 4.5 M3.5 9.5 L7 12.5 L10.5 9.5"
                    stroke="rgba(255,255,255,0.7)"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Labels — typographic, corner-positioned, not pill badges */}
            <span
              aria-label="Before"
              style={{
                position:      'absolute',
                top:           '1.2rem',
                left:          '1.2rem',
                fontFamily:    'var(--font-body)',
                fontSize:      '0.62rem',
                fontWeight:    '600',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color:         'rgba(255,255,255,0.55)',
                zIndex:        8,
                pointerEvents: 'none',
              }}
            >
              Before
            </span>
            <span
              aria-label="After"
              style={{
                position:      'absolute',
                bottom:        '1.2rem',
                left:          '1.2rem',
                fontFamily:    'var(--font-body)',
                fontSize:      '0.62rem',
                fontWeight:    '600',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color:         'rgba(255,255,255,0.55)',
                zIndex:        8,
                pointerEvents: 'none',
              }}
            >
              After
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
