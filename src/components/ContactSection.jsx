import React, { useState } from 'react';
import { Phone, Instagram, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/tilesData';
import { useReveal, useCountUp } from '../hooks/useReveal';

/*
  Contact section uses a LIGHT background (#F2EDE8) — intentional tonal break
  from the dark sections above. This is the exhale moment of the page.

  All text colors are dark (inverted from the rest of the site).
  Form fields use bottom-border only — no box inputs, no glass panels.
*/

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name:        '',
    phone:       '',
    email:       '',
    projectType: 'Master Bathroom Suite',
    notes:       '',
  });

  const sectionRef = useReveal();

  // Count-up hooks
  const count150  = useCountUp(150, 1600, '+');
  const count15   = useCountUp(15, 1400, '+');
  const count100  = useCountUp(100, 1800, '%');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        background: 'var(--c-warm-white)',
        padding:    'clamp(3.5rem, 6vw, 8rem) var(--pad-x)',
        color:      'var(--c-black)',
      }}
    >
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>

        {/* ── Oversized section headline — the conversion moment ── */}
        <div
          className="reveal"
          style={{
            borderBottom: '1px solid rgba(12,11,10,0.1)',
            paddingBottom: 'clamp(1.5rem, 2.5vw, 2.5rem)',
            marginBottom:  'clamp(1.5rem, 3vw, 3rem)',
          }}
        >
          {/* Section ID */}
          <div
            style={{
              display:       'flex',
              alignItems:    'baseline',
              gap:           '1.4rem',
              marginBottom:  '1rem',
            }}
          >
            <span
              className="t-eyebrow"
              style={{ color: 'rgba(12,11,10,0.35)' }}
            >
              05
            </span>
            <span
              className="t-eyebrow"
              style={{ color: 'rgba(12,11,10,0.55)' }}
            >
              Start Your Project
            </span>
          </div>

          <h2
            style={{
              fontFamily:    'var(--font-display)',
              fontSize:      'clamp(2rem, 3.8vw, 4.5rem)',
              fontWeight:    '400',
              lineHeight:    0.97,
              letterSpacing: '-0.02em',
              color:         'var(--c-black)',
              maxWidth:      '18ch',
            }}
          >
            Ready To Transform
            <br />
            Your Space?
            <br />
            <em
              style={{
                fontStyle: 'italic',
                color:     'rgba(12,11,10,0.35)',
              }}
            >
              Let's Discuss.
            </em>
          </h2>
        </div>

        {/* ── Count-up stats bar ── */}
        <div
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap:                 '0',
            borderTop:    '1px solid rgba(12,11,10,0.08)',
            borderBottom: '1px solid rgba(12,11,10,0.08)',
            marginBottom: '2rem',
          }}
        >
          {[
            { refHook: count150, label: 'Homeowners Served' },
            { refHook: count15,  label: 'Years Experience' },
            { refHook: count100, label: 'Satisfaction Rate' },
          ].map(({ refHook, label }, i) => (
            <div
              key={label}
              style={{
                padding:       '1.2rem 0',
                textAlign:     'center',
                borderRight:   i < 2 ? '1px solid rgba(12,11,10,0.08)' : 'none',
              }}
            >
              <div
                ref={refHook}
                style={{
                  fontFamily:    'var(--font-display)',
                  fontSize:      'clamp(1.8rem, 2.8vw, 2.6rem)',
                  fontWeight:    '400',
                  letterSpacing: '-0.02em',
                  color:         'var(--c-black)',
                  lineHeight:    1,
                }}
              >
                0
              </div>
              <div
                style={{
                  fontFamily:    'var(--font-body)',
                  fontSize:      '0.62rem',
                  fontWeight:    '600',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color:         'rgba(12,11,10,0.4)',
                  marginTop:     '0.3rem',
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* ── Two-column layout: contact info / form ── */}
        <div className="contact-main-grid">

          {/* Col 1 — body copy + contact links + social proof */}
          <div>
            <p
              className="reveal"
              style={{
                fontFamily:   'var(--font-body)',
                fontSize:     '0.92rem',
                lineHeight:   1.75,
                color:        'rgba(12,11,10,0.7)',
                marginBottom: '1.5rem',
              }}
            >
              Schedule a complimentary on-site measurement, design consultation,
              or custom stone slab estimation with Las Vegas' premier licensed
              tile contractors.
            </p>

            {/* Social Proof Block — 5-star Google reviews */}
            <div
              className="reveal stagger-1"
              style={{
                background:    'rgba(12,11,10,0.04)',
                border:        '1px solid rgba(12,11,10,0.08)',
                padding:       '1rem 1.2rem',
                marginBottom:  '1.8rem',
                display:       'flex',
                flexDirection: 'column',
                gap:           '0.3rem',
              }}
            >
              <div style={{ color: '#D4AF37', fontSize: '0.85rem', letterSpacing: '0.1em' }}>
                ★★★★★ <span style={{ color: 'var(--c-black)', fontWeight: '600', fontSize: '0.75rem', marginLeft: '0.4rem' }}>5.0 Rating</span>
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'rgba(12,11,10,0.75)', lineHeight: 1.4 }}>
                Join 150+ Las Vegas homeowners who trust us with their most valuable asset.
              </p>
            </div>

            {/* Direct call */}
            <div className="reveal stagger-2" style={{ marginBottom: '1.8rem' }}>
              <div
                style={{
                  fontFamily:    'var(--font-body)',
                  fontSize:      '0.62rem',
                  fontWeight:    '600',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color:         'rgba(12,11,10,0.4)',
                  marginBottom:  '0.4rem',
                }}
              >
                Direct Line
              </div>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                style={{
                  fontFamily:    'var(--font-display)',
                  fontSize:      'clamp(1.5rem, 2.5vw, 2.2rem)',
                  fontWeight:    '400',
                  color:         'var(--c-black)',
                  letterSpacing: '-0.01em',
                  display:       'block',
                  transition:    'opacity 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.6'; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
              >
                {BUSINESS_INFO.phone}
              </a>
            </div>

            {/* Instagram */}
            <div className="reveal stagger-3">
              <div
                style={{
                  fontFamily:    'var(--font-body)',
                  fontSize:      '0.62rem',
                  fontWeight:    '600',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color:         'rgba(12,11,10,0.4)',
                  marginBottom:  '0.4rem',
                }}
              >
                Instagram
              </div>
              <a
                href={BUSINESS_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display:       'flex',
                  alignItems:    'center',
                  gap:           '0.5rem',
                  fontFamily:    'var(--font-body)',
                  fontSize:      '0.88rem',
                  fontWeight:    '500',
                  color:         'rgba(12,11,10,0.65)',
                  transition:    'color 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--c-black)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(12,11,10,0.65)'; }}
              >
                <Instagram size={15} />
                {BUSINESS_INFO.instagramHandle}
              </a>
            </div>

            {/* License & Family Owned Note */}
            <div
              className="reveal stagger-4"
              style={{
                marginTop:    '2.5rem',
                paddingTop:   '1.5rem',
                borderTop:    '1px solid rgba(12,11,10,0.08)',
                fontFamily:   'var(--font-body)',
                fontSize:     '0.72rem',
                lineHeight:   1.6,
                color:        'rgba(12,11,10,0.45)',
              }}
            >
              Family-owned and operated since 2012.
              <br />
              {BUSINESS_INFO.license} · {BUSINESS_INFO.licenseText}
              <br />
              Serving Las Vegas, Summerlin, Henderson &amp; MacDonald Highlands
            </div>
          </div>

          {/* Col 2 — the form */}
          <div className="reveal stagger-2">

            {/* Scarcity / Lead Time Banner */}
            <div
              style={{
                background:    '#0C0B0A',
                color:         '#FAF8F5',
                padding:       '0.75rem 1rem',
                fontSize:      '0.72rem',
                fontFamily:    'var(--font-body)',
                letterSpacing: '0.04em',
                marginBottom:  '1.5rem',
                display:       'flex',
                alignItems:    'center',
                gap:           '0.6rem',
              }}
            >
              <span style={{ color: 'var(--c-gold)', fontWeight: 'bold' }}>•</span>
              <span><strong>Current Lead Time:</strong> 6–8 weeks for custom slab fabrication. Secure your installation date now.</span>
            </div>

            {submitted ? (
              <div
                style={{
                  padding:    '3rem 0',
                  borderTop:  '1px solid rgba(12,11,10,0.12)',
                }}
              >
                <CheckCircle
                  size={28}
                  style={{ color: 'var(--c-black)', marginBottom: '1rem', opacity: 0.5 }}
                />
                <h3
                  style={{
                    fontFamily:   'var(--font-display)',
                    fontSize:     'clamp(1.6rem, 2.5vw, 2.2rem)',
                    fontWeight:   '400',
                    color:        'var(--c-black)',
                    marginBottom: '0.8rem',
                    lineHeight:   1.1,
                  }}
                >
                  Consultation Request Sent
                </h3>
                <p
                  style={{
                    fontFamily:   'var(--font-body)',
                    fontSize:     '0.88rem',
                    lineHeight:   1.7,
                    color:        'rgba(12,11,10,0.55)',
                    marginBottom: '2rem',
                  }}
                >
                  Thank you, {form.name}. A contractor will review your project
                  and reach out to {form.phone || 'you'} shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-outline-dark"
                  style={{ fontSize: '0.72rem' }}
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  borderTop: '1px solid rgba(12,11,10,0.12)',
                  paddingTop: '0.5rem',
                }}
              >
                <div
                  style={{
                    display:       'flex',
                    flexDirection: 'column',
                    gap:           '1.6rem',
                  }}
                >
                  {/* Name */}
                  <div className="form-field">
                    <label className="form-label" htmlFor="contact-name">
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Enter your full name"
                      value={form.name}
                      onChange={update('name')}
                      className="form-input"
                    />
                  </div>

                  {/* Phone + Email — 2 cols */}
                  <div
                    style={{
                      display:             'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap:                 '1.5rem',
                    }}
                  >
                    <div className="form-field">
                      <label className="form-label" htmlFor="contact-phone">
                        Phone Number *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        placeholder="702-334-1707"
                        value={form.phone}
                        onChange={update('phone')}
                        className="form-input"
                      />
                    </div>
                    <div className="form-field">
                      <label className="form-label" htmlFor="contact-email">
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        placeholder="name@example.com"
                        value={form.email}
                        onChange={update('email')}
                        className="form-input"
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div className="form-field">
                    <label className="form-label" htmlFor="contact-type">
                      Project Type
                    </label>
                    <div style={{ position: 'relative' }}>
                      <select
                        id="contact-type"
                        value={form.projectType}
                        onChange={update('projectType')}
                        className="form-select"
                      >
                        <option value="Master Bathroom Suite">Master Bathroom Suite & Curbless Shower</option>
                        <option value="Chef's Kitchen Backsplash">Chef's Kitchen Backsplash & Waterfall Island</option>
                        <option value="Large Format Slab Wall">Large Format Porcelain / Marble Slab Wall</option>
                        <option value="Exterior Patio & Pool Deck">Exterior Patio, Pool Deck & Outdoor Kitchen</option>
                        <option value="Full Estate Flooring">Full Estate Tile Flooring Installation</option>
                      </select>
                      {/* Custom arrow */}
                      <span
                        aria-hidden="true"
                        style={{
                          position:       'absolute',
                          right:          '0.2rem',
                          top:            '50%',
                          transform:      'translateY(-50%)',
                          pointerEvents:  'none',
                          fontSize:       '0.7rem',
                          color:          'rgba(12,11,10,0.4)',
                        }}
                      >
                        ↓
                      </span>
                    </div>
                  </div>

                  {/* Notes */}
                  <div className="form-field">
                    <label className="form-label" htmlFor="contact-notes">
                      Project Details &amp; Dimensions
                    </label>
                    <textarea
                      id="contact-notes"
                      rows={3}
                      placeholder="Preferred materials, dimensions, estimated timeline…"
                      value={form.notes}
                      onChange={update('notes')}
                      className="form-textarea"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="btn btn-dark"
                    style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }}
                  >
                    Request a Consultation
                    <span aria-hidden="true" style={{ marginLeft: '0.4rem' }}>→</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
