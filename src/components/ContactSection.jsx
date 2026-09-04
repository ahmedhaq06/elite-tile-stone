import React, { useState } from 'react';
import { Phone, Instagram, CheckCircle, Clock, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/tilesData';
import { useReveal, useCountUp } from '../hooks/useReveal';

export default function ContactSection({ initialService }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName:     '',
    phone:         '',
    email:         '',
    lookingToDo:   initialService || 'Shower remodel',
    homeOwner:     'Yes',
    timeline:      'As soon as possible',
    budget:        '$5,000–$10,000',
    notes:         '',
    consent:       false,
  });

  const sectionRef = useReveal();

  // Count-up stats
  const count150 = useCountUp(150, 1600, '+');
  const count15  = useCountUp(15, 1400, '+');
  const count100 = useCountUp(100, 1800, '%');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.consent) return;
    setSubmitted(true);
  };

  const update = (field) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const setHomeOwnerValue = (val) => {
    setForm((prev) => ({ ...prev, homeOwner: val }));
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        background: '#0D0D0D',
        padding:    'clamp(3.5rem, 6vw, 7rem) var(--pad-x)',
        color:      '#FFFFFF',
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>

        {/* ── Section Header ── */}
        <div
          className="reveal"
          style={{
            borderBottom: '1px solid #222222',
            paddingBottom: 'clamp(1.5rem, 2.5vw, 2.5rem)',
            marginBottom:  'clamp(1.5rem, 3vw, 3rem)',
          }}
        >
          <div
            style={{
              display:       'flex',
              alignItems:    'baseline',
              gap:           '1.4rem',
              marginBottom:  '0.8rem',
            }}
          >
            <span
              className="t-eyebrow"
              style={{ color: '#8A8A8A' }}
            >
              05
            </span>
            <span
              className="t-eyebrow"
              style={{ color: '#C9962F' }}
            >
              Get Your Free Estimate
            </span>
          </div>

          <h2
            style={{
              fontFamily:    "'Poppins', sans-serif",
              fontSize:      'clamp(2.2rem, 4.2vw, 4.5rem)',
              fontWeight:    '700',
              lineHeight:    1.08,
              letterSpacing: '-0.01em',
              color:         '#C9962F',
              maxWidth:      '20ch',
            }}
          >
            Ready To Remodel Your Stone &amp; Tile?
          </h2>
          <p
            style={{
              color: '#8A8A8A',
              fontSize: 'clamp(0.95rem, 1.2vw, 1.15rem)',
              marginTop: '0.8rem',
              fontWeight: '400',
            }}
          >
            Turn your daily routine into a resort experience. Complimentary on-site measurement included.
          </p>
        </div>

        {/* ── Count-up stats bar ── */}
        <div
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap:                 '0',
            borderTop:    '1px solid #222222',
            borderBottom: '1px solid #222222',
            marginBottom: '2.5rem',
            background:   '#141414',
            borderRadius: '8px',
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
                padding:       '1.2rem 0.5rem',
                textAlign:     'center',
                borderRight:   i < 2 ? '1px solid #222222' : 'none',
              }}
            >
              <div
                ref={refHook}
                style={{
                  fontFamily:    "'Poppins', sans-serif",
                  fontSize:      'clamp(1.6rem, 2.8vw, 2.5rem)',
                  fontWeight:    '700',
                  color:         '#C9962F',
                  lineHeight:    1,
                }}
              >
                0
              </div>
              <div
                style={{
                  fontFamily:    "'Poppins', sans-serif",
                  fontSize:      '0.68rem',
                  fontWeight:    '500',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color:         '#8A8A8A',
                  marginTop:     '0.4rem',
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* ── Main Two-Column Layout ── */}
        <div className="contact-main-grid">

          {/* Left Column: Direct Call & Info */}
          <div>
            <p
              className="reveal"
              style={{
                fontFamily:   "'Poppins', sans-serif",
                fontSize:     '0.95rem',
                lineHeight:   1.7,
                color:        '#FFFFFF',
                marginBottom: '1.8rem',
              }}
            >
              Get a custom, itemized estimate for your luxury tile installation or bathroom remodel in Las Vegas, Summerlin, &amp; Henderson.
            </p>

            {/* Direct Call Box */}
            <div
              className="reveal stagger-1"
              style={{
                background:    '#141414',
                border:        '1px solid #262626',
                padding:       '1.4rem',
                borderRadius:  '8px',
                marginBottom:  '1.8rem',
              }}
            >
              <div
                style={{
                  fontSize:      '0.72rem',
                  fontWeight:    '600',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color:         '#8A8A8A',
                  marginBottom:  '0.5rem',
                }}
              >
                Prefer to talk right now?
              </div>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                style={{
                  display:       'flex',
                  alignItems:    'center',
                  gap:           '0.6rem',
                  fontSize:      'clamp(1.4rem, 2.2vw, 1.9rem)',
                  fontWeight:    '700',
                  color:         '#C9962F',
                  textDecoration: 'none',
                }}
              >
                <Phone size={22} style={{ color: '#C9962F' }} />
                {BUSINESS_INFO.phone}
              </a>
              <p style={{ fontSize: '0.8rem', color: '#8A8A8A', marginTop: '0.4rem' }}>
                Direct contractor line · Available Mon–Sat
              </p>
            </div>

            {/* Social Proof & Rating */}
            <div
              className="reveal stagger-2"
              style={{
                background:    '#141414',
                border:        '1px solid #262626',
                padding:       '1.2rem',
                borderRadius:  '8px',
                marginBottom:  '1.8rem',
                display:       'flex',
                alignItems:    'center',
                gap:           '1rem',
              }}
            >
              <div style={{ fontSize: '1.4rem', color: '#C9962F' }}>★★★★★</div>
              <div>
                <div style={{ fontWeight: '600', fontSize: '0.9rem', color: '#FFFFFF' }}>5.0 Star Rating</div>
                <div style={{ fontSize: '0.78rem', color: '#8A8A8A' }}>Licensed, Insured &amp; Bonded · {BUSINESS_INFO.license}</div>
              </div>
            </div>

            {/* Instagram */}
            <div className="reveal stagger-3">
              <a
                href={BUSINESS_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display:       'inline-flex',
                  alignItems:    'center',
                  gap:           '0.6rem',
                  fontSize:      '0.85rem',
                  color:         '#8A8A8A',
                  textDecoration: 'none',
                  transition:    'color 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#C9962F'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#8A8A8A'; }}
              >
                <Instagram size={18} />
                Follow {BUSINESS_INFO.instagramHandle} on Instagram
              </a>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="reveal stagger-2">

            {submitted ? (
              <div
                style={{
                  padding:      '3rem 2rem',
                  background:   '#141414',
                  border:       '1px solid #262626',
                  borderRadius: '10px',
                  textAlign:    'center',
                }}
              >
                <CheckCircle
                  size={42}
                  style={{ color: '#C9962F', marginBottom: '1.2rem' }}
                />
                <h3
                  style={{
                    fontSize:     '1.8rem',
                    fontWeight:   '700',
                    color:        '#C9962F',
                    marginBottom: '0.8rem',
                  }}
                >
                  Estimate Request Received!
                </h3>
                <p
                  style={{
                    fontSize:     '0.95rem',
                    lineHeight:   1.6,
                    color:        '#FFFFFF',
                    marginBottom: '1.5rem',
                  }}
                >
                  Thank you, <strong>{form.firstName}</strong>. A specialist will call you at <strong>{form.phone}</strong> within 24 hours to schedule your complimentary measurement.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-outline-dark"
                  style={{ fontSize: '0.8rem' }}
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  background:   '#141414',
                  border:       '1px solid #262626',
                  padding:      'clamp(1.5rem, 3vw, 2.5rem)',
                  borderRadius: '10px',
                }}
              >
                <div
                  style={{
                    display:       'flex',
                    flexDirection: 'column',
                    gap:           '1.4rem',
                  }}
                >
                  {/* 1. First name — text */}
                  <div className="form-field">
                    <label className="form-label" htmlFor="first-name">
                      First Name *
                    </label>
                    <input
                      id="first-name"
                      type="text"
                      required
                      placeholder="Enter your first name"
                      value={form.firstName}
                      onChange={update('firstName')}
                      className="form-input"
                    />
                  </div>

                  {/* 2. Phone — text */}
                  <div className="form-field">
                    <label className="form-label" htmlFor="form-phone">
                      Phone Number *
                    </label>
                    <input
                      id="form-phone"
                      type="tel"
                      required
                      placeholder="702-334-1707"
                      value={form.phone}
                      onChange={update('phone')}
                      className="form-input"
                    />
                  </div>

                  {/* 3. Email — text */}
                  <div className="form-field">
                    <label className="form-label" htmlFor="form-email">
                      Email Address *
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={form.email}
                      onChange={update('email')}
                      className="form-input"
                    />
                  </div>

                  {/* 4. What are you looking to do? — dropdown */}
                  <div className="form-field">
                    <label className="form-label" htmlFor="form-looking-to-do">
                      What are you looking to do? *
                    </label>
                    <select
                      id="form-looking-to-do"
                      value={form.lookingToDo}
                      onChange={update('lookingToDo')}
                      className="form-select"
                    >
                      <option value="Shower remodel">Shower remodel</option>
                      <option value="Floor installation">Floor installation</option>
                      <option value="Both">Both</option>
                      <option value="Something else">Something else</option>
                    </select>
                  </div>

                  {/* 5. Do you own the home? — Yes / No */}
                  <div className="form-field">
                    <label className="form-label">
                      Do you own the home? *
                    </label>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '0.8rem',
                      }}
                    >
                      {['Yes', 'No'].map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setHomeOwnerValue(opt)}
                          style={{
                            padding: '0.75rem',
                            borderRadius: '6px',
                            border: form.homeOwner === opt ? '2px solid #C9962F' : '1px solid #333333',
                            background: form.homeOwner === opt ? 'rgba(201, 150, 47, 0.15)' : '#181818',
                            color: form.homeOwner === opt ? '#C9962F' : '#FFFFFF',
                            fontWeight: form.homeOwner === opt ? '700' : '400',
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: '0.9rem',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                          }}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 6. When are you looking to start? — dropdown */}
                  <div className="form-field">
                    <label className="form-label" htmlFor="form-timeline">
                      When are you looking to start? *
                    </label>
                    <select
                      id="form-timeline"
                      value={form.timeline}
                      onChange={update('timeline')}
                      className="form-select"
                    >
                      <option value="As soon as possible">As soon as possible</option>
                      <option value="Within 1–3 months">Within 1–3 months</option>
                      <option value="3–6 months">3–6 months</option>
                      <option value="Just researching">Just researching</option>
                    </select>
                  </div>

                  {/* 7. What's your budget range? — dropdown */}
                  <div className="form-field">
                    <label className="form-label" htmlFor="form-budget">
                      What's your budget range? *
                    </label>
                    <select
                      id="form-budget"
                      value={form.budget}
                      onChange={update('budget')}
                      className="form-select"
                    >
                      <option value="Under $5,000">Under $5,000</option>
                      <option value="$5,000–$10,000">$5,000–$10,000</option>
                      <option value="$10,000–$20,000">$10,000–$20,000</option>
                      <option value="$20,000+">$20,000+</option>
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                  </div>

                  {/* 8. Anything else we should know? — optional text box */}
                  <div className="form-field">
                    <label className="form-label" htmlFor="form-notes">
                      Anything else we should know? (Optional)
                    </label>
                    <textarea
                      id="form-notes"
                      rows={3}
                      placeholder="Share any special material requests, square footage, or details…"
                      value={form.notes}
                      onChange={update('notes')}
                      className="form-textarea"
                    />
                  </div>

                  {/* 9. Consent checkbox, required */}
                  <div style={{ marginTop: '0.4rem' }}>
                    <label
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem',
                        cursor: 'pointer',
                        fontSize: '0.78rem',
                        color: '#8A8A8A',
                        lineHeight: 1.5,
                      }}
                    >
                      <input
                        type="checkbox"
                        required
                        checked={form.consent}
                        onChange={update('consent')}
                        style={{
                          marginTop: '0.2rem',
                          accentColor: '#C9962F',
                          width: '18px',
                          height: '18px',
                          cursor: 'pointer',
                          flexShrink: 0,
                        }}
                      />
                      <span>
                        I agree to be contacted by phone, text, or email about my project, including by automated means.
                      </span>
                    </label>
                  </div>

                  {/* 10. Button: Get My Free Estimate */}
                  <button
                    type="submit"
                    className="btn"
                    style={{
                      width: '100%',
                      marginTop: '0.6rem',
                      background: '#C9962F',
                      color: '#0D0D0D',
                      fontWeight: '700',
                      fontSize: '0.95rem',
                      borderRadius: '6px',
                      padding: '1.05rem',
                      boxShadow: '0 4px 14px rgba(201, 150, 47, 0.3)',
                    }}
                  >
                    Get My Free Estimate
                  </button>

                  {/* 11. Below the button notice */}
                  <div
                    style={{
                      textAlign: 'center',
                      fontSize: '0.8rem',
                      color: '#8A8A8A',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.4rem',
                      marginTop: '0.2rem',
                    }}
                  >
                    <Clock size={15} style={{ color: '#C9962F' }} />
                    <span>A specialist will call you within 24 hours.</span>
                  </div>

                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
