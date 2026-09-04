import React, { useState } from 'react';
import { Phone, CheckCircle, ShieldCheck, Clock, AlertTriangle, Award, Star, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/tilesData';

export default function CampaignLandingPage({ angle, onOpenPrivacy }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName:   '',
    phone:       '',
    email:       '',
    lookingToDo: angle.preselectedService || 'Shower remodel',
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
  };

  const update = (field) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const scrollToForm = () => {
    const el = document.getElementById('estimate-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ background: '#0D0D0D', color: '#FFFFFF', minHeight: '100vh', fontFamily: "'Poppins', sans-serif" }}>

      {/* ── Top Announcement Ticker ── */}
      <div
        style={{
          background:    '#C9962F',
          color:         '#0D0D0D',
          textAlign:     'center',
          padding:       '0.5rem 1rem',
          fontSize:      '0.76rem',
          fontWeight:    '700',
          letterSpacing: '0.04em',
        }}
      >
        ⚡ Southern Nevada Paid Campaign Offer: Free On-Site Measurement &amp; Itemized Estimate Included
      </div>

      {/* ── Distraction-Free Header ── */}
      <header
        style={{
          padding:         '0.9rem var(--pad-x)',
          background:      'rgba(13, 13, 13, 0.92)',
          borderBottom:    '1px solid rgba(255, 255, 255, 0.08)',
          position:        'sticky',
          top:             0,
          zIndex:          100,
          backdropFilter:  'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          display:         'flex',
          justifyContent:  'space-between',
          alignItems:      'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <img
            src="/assets/Logo.jpeg"
            alt="Elite Tile & Stone Logo"
            style={{ height: '42px', width: 'auto', borderRadius: '4px', objectFit: 'contain' }}
          />
          <div>
            <div
              style={{
                fontFamily:    "'Cormorant Garamond', Georgia, serif",
                fontSize:      '1.15rem',
                fontWeight:    '700',
                color:         '#FFFFFF',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                lineHeight:    1,
              }}
            >
              Elite Tile &amp; Stone
            </div>
            <div style={{ fontSize: '0.66rem', color: '#8A8A8A', marginTop: '0.15rem' }}>
              Las Vegas, NV · {BUSINESS_INFO.license}
            </div>
          </div>
        </div>

        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          style={{
            display:        'inline-flex',
            alignItems:     'center',
            gap:            '0.5rem',
            background:     'rgba(201, 150, 47, 0.12)',
            border:         '1px solid rgba(201, 150, 47, 0.4)',
            color:          '#C9962F',
            padding:        '0.55rem 1.1rem',
            borderRadius:   '6px',
            fontWeight:     '700',
            fontSize:       '0.82rem',
            textDecoration: 'none',
            transition:     'all 0.2s ease',
          }}
        >
          <Phone size={15} />
          <span>{BUSINESS_INFO.phone}</span>
        </a>
      </header>

      {/* ── Editorial Cinematic Hero ── */}
      <section
        style={{
          position:   'relative',
          padding:    'clamp(3rem, 6vw, 6rem) var(--pad-x)',
          overflow:   'hidden',
          background: 'linear-gradient(180deg, #0D0D0D 0%, #141414 100%)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 1fr)',
            gap: 'clamp(2rem, 4vw, 4rem)',
            alignItems: 'center',
          }}
          className="campaign-hero-grid"
        >
          {/* Left Editorial Copy */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                background: 'rgba(201, 150, 47, 0.12)',
                border: '1px solid rgba(201, 150, 47, 0.35)',
                color: '#C9962F',
                fontSize: '0.72rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                padding: '0.4rem 0.9rem',
                borderRadius: '4px',
                marginBottom: '1.4rem',
              }}
            >
              <Award size={14} />
              <span>{angle.badge}</span>
            </div>

            {/* Cormorant Garamond Serif Headline */}
            <h1
              style={{
                fontFamily:    "'Cormorant Garamond', Georgia, serif",
                fontSize:      'clamp(2.6rem, 5.2vw, 4.8rem)',
                fontWeight:    '700',
                color:         '#C9962F',
                lineHeight:    1.04,
                letterSpacing: '-0.01em',
                marginBottom:  '1.4rem',
              }}
            >
              {angle.headline}
            </h1>

            <p
              style={{
                fontSize:      'clamp(1rem, 1.25vw, 1.2rem)',
                color:         'rgba(255, 255, 255, 0.9)',
                lineHeight:    1.65,
                marginBottom:  '2rem',
                maxWidth:      '48ch',
              }}
            >
              {angle.subheadline}
            </p>

            {/* Bullet Checklist */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.2rem' }}>
              {[
                'Licensed NV Contractor #0095105 · Insured & Bonded',
                '100% Waterproof Schluter-Kerdi Pan Guarantee',
                'Laser-Leveled Mortar Beds & Hand-Mitered 45° Edges',
              ].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.9rem', color: '#8A8A8A' }}>
                  <CheckCircle size={18} style={{ color: '#C9962F', flexShrink: 0 }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={scrollToForm}
              className="btn"
              style={{
                width: '100%',
                maxWidth: '400px',
                background: '#C9962F',
                color: '#0D0D0D',
                fontFamily: "'Poppins', sans-serif",
                fontWeight: '700',
                fontSize: '0.95rem',
                padding: '1.05rem 2rem',
                borderRadius: '6px',
                boxShadow: '0 6px 20px rgba(201, 150, 47, 0.35)',
                transition: 'transform 0.2s ease, background 0.2s ease',
              }}
            >
              Get Free Instant Estimate ↓
            </button>
            
            <div style={{ fontSize: '0.76rem', color: '#8A8A8A', marginTop: '0.7rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Clock size={14} style={{ color: '#C9962F' }} />
              <span>Takes 30 seconds · Complimentary on-site measurement</span>
            </div>
          </div>

          {/* Right Showcase Image Card */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: '0 20px 48px rgba(0,0,0,0.8)',
              }}
            >
              <img
                src={angle.heroImage}
                alt={angle.headline}
                style={{ width: '100%', height: '460px', objectFit: 'cover', objectPosition: 'center 35%' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(13,13,13,0.95) 0%, rgba(13,13,13,0.2) 60%, transparent 100%)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                <div style={{ color: '#C9962F', fontSize: '1.2rem', letterSpacing: '0.1em' }}>
                  ★★★★★
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: '700', color: '#FFFFFF' }}>
                    150+ Nevada Master Bathroom Projects
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#8A8A8A' }}>
                    Las Vegas · Henderson · Summerlin · MacDonald Highlands
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Problem vs. Solution Section ── */}
      <section style={{ background: '#0D0D0D', padding: '4.5rem var(--pad-x)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ color: '#8A8A8A', fontSize: '0.72rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
              The Master Difference
            </span>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(2.2rem, 3.8vw, 3.5rem)',
                color: '#C9962F',
                fontWeight: '700',
                marginTop: '0.4rem',
              }}
            >
              Why Shortcuts Fail vs. The Elite Standard
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '2.5rem',
            }}
            className="campaign-comparison-grid"
          >
            {/* Common Unlicensed Failures */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(229, 62, 62, 0.3)',
                padding: '2.2rem',
                borderRadius: '10px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#E53E3E', fontWeight: '700', fontSize: '1.15rem', marginBottom: '1.4rem' }}>
                <AlertTriangle size={22} />
                <span>The Unlicensed Shortcut Problem</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                {angle.painPoints.map((pt) => (
                  <div key={pt} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.55 }}>
                    <span style={{ color: '#E53E3E', fontWeight: 'bold' }}>✕</span>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* The Elite Tile Standard */}
            <div
              style={{
                background: 'rgba(201, 150, 47, 0.04)',
                border: '1px solid rgba(201, 150, 47, 0.4)',
                padding: '2.2rem',
                borderRadius: '10px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#C9962F', fontWeight: '700', fontSize: '1.15rem', marginBottom: '1.4rem' }}>
                <ShieldCheck size={22} />
                <span>The Elite Master Tile Standard</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                {angle.solutions.map((sol) => (
                  <div key={sol} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.9rem', color: '#FFFFFF', lineHeight: 1.55 }}>
                    <CheckCircle size={18} style={{ color: '#C9962F', flexShrink: 0, marginTop: '2px' }} />
                    <span>{sol}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust & Authority Credentials Bar ── */}
      <section style={{ padding: '3rem var(--pad-x)', background: '#141414', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ color: '#C9962F', fontSize: '1.5rem', letterSpacing: '0.1em' }}>★★★★★</div>
            <div style={{ fontWeight: '700', fontSize: '0.95rem', color: '#FFFFFF', marginTop: '0.2rem' }}>5.0 Rating on Google</div>
            <div style={{ fontSize: '0.78rem', color: '#8A8A8A' }}>150+ Satisfied Homeowners</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ color: '#C9962F', fontWeight: '700', fontSize: '1.3rem' }}>{BUSINESS_INFO.license}</div>
            <div style={{ fontWeight: '700', fontSize: '0.95rem', color: '#FFFFFF', marginTop: '0.2rem' }}>State Licensed Contractor</div>
            <div style={{ fontSize: '0.78rem', color: '#8A8A8A' }}>Licensed, Bonded &amp; Insured</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ color: '#C9962F', fontWeight: '700', fontSize: '1.3rem' }}>15+ Years</div>
            <div style={{ fontWeight: '700', fontSize: '0.95rem', color: '#FFFFFF', marginTop: '0.2rem' }}>Southern Nevada Masters</div>
            <div style={{ fontSize: '0.78rem', color: '#8A8A8A' }}>Family Owned &amp; Operated</div>
          </div>
        </div>
      </section>

      {/* ── Dedicated Qualification Form Section ── */}
      <section id="estimate-form" style={{ background: '#0D0D0D', padding: '5rem var(--pad-x)' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ color: '#8A8A8A', fontSize: '0.72rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
              Complimentary Consultation
            </span>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(2.4rem, 4vw, 3.8rem)',
                color: '#C9962F',
                fontWeight: '700',
                marginTop: '0.3rem',
                marginBottom: '0.6rem',
              }}
            >
              {angle.offerTitle}
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.98rem' }}>
              {angle.offerDesc}
            </p>
          </div>

          {submitted ? (
            <div
              style={{
                background: 'rgba(201, 150, 47, 0.06)',
                border: '1px solid rgba(201, 150, 47, 0.4)',
                padding: '3.5rem 2rem',
                borderRadius: '12px',
                textAlign: 'center',
              }}
            >
              <CheckCircle size={52} style={{ color: '#C9962F', marginBottom: '1.2rem' }} />
              <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '2.4rem', color: '#C9962F', fontWeight: '700', marginBottom: '0.8rem' }}>
                Qualification Submitted!
              </h3>
              <p style={{ fontSize: '1rem', color: '#FFFFFF', lineHeight: 1.65, marginBottom: '1.8rem', maxWidth: '40ch', margin: '0 auto 1.8rem auto' }}>
                Thank you, <strong>{form.firstName}</strong>. A master tile contractor will review your project details and reach out to <strong>{form.phone}</strong> within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="btn"
                style={{ background: 'transparent', border: '1px solid #C9962F', color: '#C9962F' }}
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                background: '#141414',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: 'clamp(1.8rem, 3.5vw, 3rem)',
                borderRadius: '12px',
                boxShadow: '0 12px 40px rgba(0,0,0,0.6)',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                
                {/* 1. First name */}
                <div className="form-field">
                  <label className="form-label" htmlFor="campaign-first-name">First Name *</label>
                  <input
                    id="campaign-first-name"
                    type="text"
                    required
                    placeholder="Enter your first name"
                    value={form.firstName}
                    onChange={update('firstName')}
                    className="form-input"
                  />
                </div>

                {/* 2. Phone */}
                <div className="form-field">
                  <label className="form-label" htmlFor="campaign-phone">Phone Number *</label>
                  <input
                    id="campaign-phone"
                    type="tel"
                    required
                    placeholder="702-334-1707"
                    value={form.phone}
                    onChange={update('phone')}
                    className="form-input"
                  />
                </div>

                {/* 3. Email */}
                <div className="form-field">
                  <label className="form-label" htmlFor="campaign-email">Email Address *</label>
                  <input
                    id="campaign-email"
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={form.email}
                    onChange={update('email')}
                    className="form-input"
                  />
                </div>

                {/* 4. What are you looking to do? */}
                <div className="form-field">
                  <label className="form-label" htmlFor="campaign-looking">What are you looking to do? *</label>
                  <select
                    id="campaign-looking"
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

                {/* 5. Do you own the home? */}
                <div className="form-field">
                  <label className="form-label">Do you own the home? *</label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem' }}>
                    {['Yes', 'No'].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setForm((p) => ({ ...p, homeOwner: opt }))}
                        style={{
                          padding: '0.85rem',
                          borderRadius: '6px',
                          border: form.homeOwner === opt ? '2px solid #C9962F' : '1px solid #333333',
                          background: form.homeOwner === opt ? 'rgba(201, 150, 47, 0.18)' : '#181818',
                          color: form.homeOwner === opt ? '#C9962F' : '#FFFFFF',
                          fontWeight: form.homeOwner === opt ? '700' : '400',
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

                {/* 6. When are you looking to start? */}
                <div className="form-field">
                  <label className="form-label" htmlFor="campaign-timeline">When are you looking to start? *</label>
                  <select
                    id="campaign-timeline"
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

                {/* 7. What's your budget range? */}
                <div className="form-field">
                  <label className="form-label" htmlFor="campaign-budget">What's your budget range? *</label>
                  <select
                    id="campaign-budget"
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

                {/* 8. Anything else we should know? */}
                <div className="form-field">
                  <label className="form-label" htmlFor="campaign-notes">Anything else we should know? (Optional)</label>
                  <textarea
                    id="campaign-notes"
                    rows={3}
                    placeholder="Share any special material requests, square footage, or project goals…"
                    value={form.notes}
                    onChange={update('notes')}
                    className="form-textarea"
                  />
                </div>

                {/* 9. Consent checkbox */}
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

                {/* 10. Submit Button */}
                <button
                  type="submit"
                  className="btn"
                  style={{
                    width: '100%',
                    marginTop: '0.6rem',
                    background: '#C9962F',
                    color: '#0D0D0D',
                    fontWeight: '700',
                    fontSize: '1rem',
                    borderRadius: '6px',
                    padding: '1.15rem',
                    boxShadow: '0 6px 20px rgba(201, 150, 47, 0.35)',
                    transition: 'background 0.2s ease',
                  }}
                >
                  Get My Free Estimate
                </button>

                {/* 11. Below button notice */}
                <div
                  style={{
                    textAlign: 'center',
                    fontSize: '0.8rem',
                    color: '#8A8A8A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.4rem',
                  }}
                >
                  <Clock size={15} style={{ color: '#C9962F' }} />
                  <span>A specialist will call you within 24 hours.</span>
                </div>

              </div>
            </form>
          )}
        </div>
      </section>

      {/* ── Standalone Footer ── */}
      <footer
        style={{
          background: '#080808',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '2.5rem var(--pad-x)',
          textAlign: 'center',
          fontSize: '0.78rem',
          color: '#8A8A8A',
        }}
      >
        <p style={{ color: '#8A8A8A', marginBottom: '0.6rem' }}>
          © {new Date().getFullYear()} Elite Tile &amp; Stone · {BUSINESS_INFO.license} · Licensed, Insured &amp; Bonded
        </p>
        <p style={{ color: '#8A8A8A', marginBottom: '1rem' }}>
          Serving Las Vegas, Summerlin, Henderson &amp; Southern Nevada Region
        </p>
        <button
          onClick={onOpenPrivacy}
          style={{
            background: 'none',
            border: 'none',
            color: '#8A8A8A',
            textDecoration: 'underline',
            cursor: 'pointer',
            fontSize: '0.75rem',
          }}
        >
          Privacy Policy
        </button>
      </footer>

      {/* Responsive Media Query Styles */}
      <style>{`
        @media (max-width: 860px) {
          .campaign-hero-grid {
            grid-template-columns: 1fr !important;
          }
          .campaign-comparison-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

    </div>
  );
}
