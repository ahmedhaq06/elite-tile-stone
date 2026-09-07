import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Phone, CheckCircle, Clock, ShieldCheck, Star } from 'lucide-react';
import { BUSINESS_INFO } from '../data/tilesData';

export default function EstimatePage({ onNavigate, onOpenPrivacy }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName:   '',
    phone:       '',
    email:       '',
    lookingToDo: 'Custom showers (master / walk-in)',
    homeOwner:   'Yes',
    timeline:    'As soon as possible',
    budget:      '$5,000–$10,000',
    notes:       '',
    consent:     false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.consent) return;
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const update = (field) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const setHomeOwnerValue = (val) => {
    setForm((prev) => ({ ...prev, homeOwner: val }));
  };

  return (
    <div style={{ background: '#0D0D0D', minHeight: '100vh', color: '#FFFFFF', fontFamily: "'Poppins', sans-serif" }}>
      <Navbar onNavigate={onNavigate} />

      {/* Header Section */}
      <section
        style={{
          paddingTop:    '130px',
          paddingBottom: '3rem',
          paddingLeft:   'clamp(1.5rem, 5vw, 4rem)',
          paddingRight:  'clamp(1.5rem, 5vw, 4rem)',
          background:    'linear-gradient(to bottom, #141414 0%, #0D0D0D 100%)',
          borderBottom:  '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div
            style={{
              fontSize:      '0.75rem',
              fontWeight:    '700',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color:         '#C9962F',
              marginBottom:  '0.8rem',
            }}
          >
            FREE IN-HOME MEASUREMENT &amp; QUOTE
          </div>
          <h1
            style={{
              fontFamily:    'var(--font-display)',
              fontSize:      'clamp(2.4rem, 5vw, 4.2rem)',
              fontWeight:    '700',
              lineHeight:    1.08,
              textTransform: 'uppercase',
              color:         '#C9962F',
              marginBottom:  '1rem',
            }}
          >
            REQUEST YOUR FREE ESTIMATE
          </h1>
          <p
            style={{
              fontSize:   '1.05rem',
              color:      '#8A8A8A',
              maxWidth:   '640px',
              lineHeight: 1.6,
            }}
          >
            Get a custom, itemized estimate for your custom tile installation, master bath remodel, or whole-home flooring in Las Vegas, Henderson &amp; Summerlin.
          </p>
        </div>
      </section>

      {/* Form Content Section */}
      <section
        style={{
          padding: '4rem clamp(1.5rem, 5vw, 4rem)',
        }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div
            style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap:                 '3rem',
              alignItems:          'start',
            }}
          >
            {/* Left Column: Direct Contact & Trust Signals */}
            <div>
              <h2
                style={{
                  fontFamily:   'var(--font-display)',
                  fontSize:     '1.8rem',
                  fontWeight:   '700',
                  color:        '#FFFFFF',
                  marginBottom: '1.2rem',
                }}
              >
                Why Choose Elite Tile &amp; Stone?
              </h2>

              <p
                style={{
                  fontSize:     '0.95rem',
                  lineHeight:   1.65,
                  color:        '#8A8A8A',
                  marginBottom: '2rem',
                }}
              >
                Every estimate includes an on-site visit by an experienced master tile installer—not a pushy salesperson. We inspect subfloor conditions, take laser measurements, and present a written estimate with zero hidden fees.
              </p>

              {/* Direct Call Box */}
              <div
                style={{
                  background:    '#141414',
                  border:        '1px solid #262626',
                  padding:       '1.8rem',
                  borderRadius:  '10px',
                  marginBottom:  '1.8rem',
                  boxShadow:     '0 10px 30px rgba(0,0,0,0.4)',
                }}
              >
                <div
                  style={{
                    fontSize:      '0.72rem',
                    fontWeight:    '700',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color:         '#8A8A8A',
                    marginBottom:  '0.6rem',
                  }}
                >
                  PREFER TO TALK RIGHT NOW?
                </div>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  style={{
                    display:       'flex',
                    alignItems:    'center',
                    gap:           '0.6rem',
                    fontSize:      'clamp(1.5rem, 2.5vw, 2rem)',
                    fontWeight:    '700',
                    color:         '#C9962F',
                    textDecoration: 'none',
                  }}
                >
                  <Phone size={24} style={{ color: '#C9962F' }} />
                  (702) 555-0142
                </a>
                <p style={{ fontSize: '0.82rem', color: '#8A8A8A', marginTop: '0.5rem' }}>
                  Direct contractor line · Mon–Sat 7:00 AM – 6:00 PM
                </p>
              </div>

              {/* Trust Badges List */}
              <div
                style={{
                  display:       'flex',
                  flexDirection: 'column',
                  gap:           '1rem',
                }}
              >
                {[
                  { title: 'Licensed, Bonded & Insured in Nevada', desc: 'Nevada Contractors License #0095105.' },
                  { title: 'Schluter-Certified Waterproofing', desc: 'Full manufacturer warranty on all shower seals.' },
                  { title: 'Itemized Written Estimate', desc: 'No surprise add-ons or hidden fees after work begins.' },
                  { title: 'Workmanship Guarantee', desc: 'Precision laser leveling & zero lippage guarantee.' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display:    'flex',
                      alignItems: 'flex-start',
                      gap:        '0.8rem',
                      background: '#141414',
                      border:     '1px solid rgba(255,255,255,0.06)',
                      padding:    '1rem 1.2rem',
                      borderRadius: '8px',
                    }}
                  >
                    <ShieldCheck size={22} style={{ color: '#C9962F', flexShrink: 0, marginTop: '0.1rem' }} />
                    <div>
                      <div style={{ fontWeight: '700', fontSize: '0.9rem', color: '#FFFFFF' }}>{item.title}</div>
                      <div style={{ fontSize: '0.8rem', color: '#8A8A8A', marginTop: '0.15rem' }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Complete Form */}
            <div>
              {submitted ? (
                <div
                  style={{
                    padding:      '3.5rem 2rem',
                    background:   '#141414',
                    border:       '1px solid #C9962F',
                    borderRadius: '10px',
                    textAlign:    'center',
                    boxShadow:    '0 15px 40px rgba(0,0,0,0.6)',
                  }}
                >
                  <CheckCircle
                    size={48}
                    style={{ color: '#C9962F', marginBottom: '1.2rem' }}
                  />
                  <h2
                    style={{
                      fontFamily:   'var(--font-display)',
                      fontSize:     '2rem',
                      fontWeight:   '700',
                      color:        '#C9962F',
                      marginBottom: '0.8rem',
                    }}
                  >
                    Estimate Request Received!
                  </h2>
                  <p
                    style={{
                      fontSize:     '1rem',
                      lineHeight:   1.65,
                      color:        '#FFFFFF',
                      marginBottom: '1.8rem',
                      maxWidth:     '480px',
                      margin:       '0 auto 1.8rem auto',
                    }}
                  >
                    Thank you, <strong>{form.firstName}</strong>. A specialist will call you at <strong>{form.phone}</strong> within 24 hours to confirm your complimentary in-home measurement.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    style={{
                      padding:       '0.85rem 1.8rem',
                      background:    'transparent',
                      border:        '1px solid #C9962F',
                      color:         '#C9962F',
                      fontWeight:    '700',
                      borderRadius:  '4px',
                      cursor:        'pointer',
                      fontSize:      '0.85rem',
                    }}
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
                    padding:      'clamp(1.8rem, 3vw, 2.5rem)',
                    borderRadius: '10px',
                    boxShadow:    '0 15px 40px rgba(0,0,0,0.5)',
                  }}
                >
                  <div
                    style={{
                      display:       'flex',
                      flexDirection: 'column',
                      gap:           '1.4rem',
                    }}
                  >
                    <div style={{ borderBottom: '1px solid #222222', paddingBottom: '1rem', marginBottom: '0.4rem' }}>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: '700', color: '#FFFFFF' }}>
                        Fill Out Your Project Details
                      </h3>
                      <p style={{ fontSize: '0.82rem', color: '#8A8A8A', marginTop: '0.2rem' }}>
                        Takes under 60 seconds · No obligation
                      </p>
                    </div>

                    {/* 1. First name — text */}
                    <div className="form-field">
                      <label className="form-label" htmlFor="est-first-name">
                        First Name *
                      </label>
                      <input
                        id="est-first-name"
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
                      <label className="form-label" htmlFor="est-phone">
                        Phone Number *
                      </label>
                      <input
                        id="est-phone"
                        type="tel"
                        required
                        placeholder="702-555-0142"
                        value={form.phone}
                        onChange={update('phone')}
                        className="form-input"
                      />
                    </div>

                    {/* 3. Email — text */}
                    <div className="form-field">
                      <label className="form-label" htmlFor="est-email">
                        Email Address *
                      </label>
                      <input
                        id="est-email"
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
                      <label className="form-label" htmlFor="est-looking-to-do">
                        What are you looking to do? *
                      </label>
                      <select
                        id="est-looking-to-do"
                        value={form.lookingToDo}
                        onChange={update('lookingToDo')}
                        className="form-select"
                      >
                        <option value="Custom showers (master / walk-in)">Custom showers (master / walk-in)</option>
                        <option value="Flooring">Flooring</option>
                        <option value="Kitchen countertops (slab)">Kitchen countertops (slab)</option>
                        <option value="Kitchen backsplashes">Kitchen backsplashes</option>
                        <option value="Stone columns (exterior)">Stone columns (exterior)</option>
                        <option value="Fireplaces">Fireplaces</option>
                        <option value="Other / Multiple services">Other / Multiple services</option>
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
                      <label className="form-label" htmlFor="est-timeline">
                        When are you looking to start? *
                      </label>
                      <select
                        id="est-timeline"
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
                      <label className="form-label" htmlFor="est-budget">
                        What's your budget range? *
                      </label>
                      <select
                        id="est-budget"
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
                      <label className="form-label" htmlFor="est-notes">
                        Anything else we should know? (Optional)
                      </label>
                      <textarea
                        id="est-notes"
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
                      style={{
                        width:        '100%',
                        marginTop:    '0.6rem',
                        background:   '#C9962F',
                        color:        '#0D0D0D',
                        fontWeight:   '700',
                        fontSize:     '0.95rem',
                        borderRadius: '6px',
                        padding:      '1.05rem',
                        border:       'none',
                        cursor:       'pointer',
                        boxShadow:    '0 4px 14px rgba(201, 150, 47, 0.3)',
                        transition:   'background 0.2s ease',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = '#D9A43B'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = '#C9962F'; }}
                    >
                      Get My Free Estimate
                    </button>

                    {/* 11. Below the button notice */}
                    <div
                      style={{
                        textAlign:      'center',
                        fontSize:       '0.8rem',
                        color:          '#8A8A8A',
                        display:        'flex',
                        alignItems:     'center',
                        justifyContent: 'center',
                        gap:            '0.4rem',
                        marginTop:      '0.2rem',
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

      <Footer onNavigate={onNavigate} onOpenPrivacy={onOpenPrivacy} />
    </div>
  );
}
