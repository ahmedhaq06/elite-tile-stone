import React, { useState } from 'react';
import { Phone, CheckCircle, ShieldCheck, Star, Clock, AlertTriangle, ArrowRight, Award } from 'lucide-react';
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

      {/* ── Top Announcement Bar ── */}
      <div
        style={{
          background:    '#C9962F',
          color:         '#0D0D0D',
          textAlign:     'center',
          padding:       '0.45rem 1rem',
          fontSize:      '0.76rem',
          fontWeight:    '700',
          letterSpacing: '0.04em',
        }}
      >
        ⚡ Southern Nevada Paid Campaign Offer: Free On-Site Measurement &amp; Tile Estimate Included
      </div>

      {/* ── Distraction-Free Header ── */}
      <header
        style={{
          padding:         '0.85rem var(--pad-x)',
          background:      'rgba(13, 13, 13, 0.95)',
          borderBottom:    '1px solid #222222',
          position:        'sticky',
          top:             0,
          zIndex:          100,
          backdropFilter:  'blur(10px)',
          display:         'flex',
          justifyContent:  'space-between',
          alignItems:      'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img
            src="/assets/Logo.jpeg"
            alt="Elite Tile & Stone Logo"
            style={{ height: '40px', width: 'auto', borderRadius: '4px', objectFit: 'contain' }}
          />
          <div>
            <div style={{ fontSize: '0.95rem', fontWeight: '700', color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Elite Tile &amp; Stone
            </div>
            <div style={{ fontSize: '0.65rem', color: '#8A8A8A' }}>
              Las Vegas, NV · {BUSINESS_INFO.license}
            </div>
          </div>
        </div>

        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          style={{
            display:        'inline-flex',
            alignItems:     'center',
            gap:            '0.4rem',
            background:     '#1F1F1F',
            border:         '1px solid #333333',
            color:          '#C9962F',
            padding:        '0.5rem 0.9rem',
            borderRadius:   '6px',
            fontWeight:     '700',
            fontSize:       '0.8rem',
            textDecoration: 'none',
          }}
        >
          <Phone size={15} />
          <span>{BUSINESS_INFO.phone}</span>
        </a>
      </header>

      {/* ── Standalone Hero Section ── */}
      <section
        style={{
          padding: 'clamp(2.5rem, 5vw, 5rem) var(--pad-x)',
          maxWidth: '1280px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.1fr)',
            gap: 'clamp(2rem, 4vw, 4rem)',
            alignItems: 'center',
          }}
          className="campaign-hero-grid"
        >
          {/* Left Text */}
          <div>
            <div
              style={{
                display: 'inline-block',
                background: 'rgba(201, 150, 47, 0.15)',
                border: '1px solid rgba(201, 150, 47, 0.4)',
                color: '#C9962F',
                fontSize: '0.72rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                padding: '0.35rem 0.8rem',
                borderRadius: '4px',
                marginBottom: '1.2rem',
              }}
            >
              {angle.badge}
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.2rem, 4.5vw, 4rem)',
                fontWeight: '700',
                color: '#C9962F',
                lineHeight: 1.08,
                letterSpacing: '-0.01em',
                marginBottom: '1.2rem',
              }}
            >
              {angle.headline}
            </h1>

            <p
              style={{
                fontSize: 'clamp(1rem, 1.3vw, 1.2rem)',
                color: '#FFFFFF',
                lineHeight: 1.6,
                marginBottom: '1.8rem',
              }}
            >
              {angle.subheadline}
            </p>

            {/* Quick Bullet Highlights */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', marginBottom: '2rem' }}>
              {[
                'Licensed NV Contractor #0095105 · Insured & Bonded',
                '100% Waterproof Schluter-Kerdi Pan Guarantee',
                'Laser-Leveled Mortar Beds & Full Back-Butter Tile Adhesion',
              ].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.88rem', color: '#8A8A8A' }}>
                  <CheckCircle size={17} style={{ color: '#C9962F', flexShrink: 0 }} />
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
                maxWidth: '380px',
                background: '#C9962F',
                color: '#0D0D0D',
                fontWeight: '700',
                fontSize: '0.95rem',
                padding: '1rem 1.8rem',
                borderRadius: '6px',
                boxShadow: '0 4px 18px rgba(201, 150, 47, 0.35)',
              }}
            >
              Get Free Instant Estimate ↓
            </button>
            
            <div style={{ fontSize: '0.75rem', color: '#8A8A8A', marginTop: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Clock size={14} style={{ color: '#C9962F' }} />
              <span>Takes 30 seconds · No obligation</span>
            </div>
          </div>

          {/* Right Image */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid #262626',
                boxShadow: '0 12px 36px rgba(0,0,0,0.6)',
              }}
            >
              <img
                src={angle.heroImage}
                alt={angle.headline}
                style={{ width: '100%', height: '420px', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '1.2rem',
                  background: 'linear-gradient(to top, rgba(13,13,13,0.95) 0%, transparent 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.8rem',
                }}
              >
                <Award size={24} style={{ color: '#C9962F', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#FFFFFF' }}>
                    15+ Years Master Craftsmen
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#8A8A8A' }}>
                    Serving Las Vegas, Summerlin &amp; Henderson
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Problem / Solution Breakdown ── */}
      <section style={{ background: '#141414', padding: '4rem var(--pad-x)', borderTop: '1px solid #222222', borderBottom: '1px solid #222222' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: '#C9962F', fontWeight: '700', marginBottom: '0.5rem' }}>
              Why Choose Elite Tile &amp; Stone?
            </h2>
            <p style={{ color: '#8A8A8A', fontSize: '0.95rem' }}>
              Don't let amateur shortcuts ruin your largest home asset.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '2rem',
            }}
            className="campaign-comparison-grid"
          >
            {/* The Common Problem */}
            <div
              style={{
                background: '#1A1414',
                border: '1px solid #3A2222',
                padding: '2rem',
                borderRadius: '8px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#E53E3E', fontWeight: '700', fontSize: '1.1rem', marginBottom: '1.2rem' }}>
                <AlertTriangle size={20} />
                <span>The Unlicensed Shortcut Problem</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {angle.painPoints.map((pt) => (
                  <div key={pt} style={{ display: 'flex', gap: '0.6rem', fontSize: '0.88rem', color: '#E2E8F0', lineHeight: 1.5 }}>
                    <span style={{ color: '#E53E3E', fontWeight: 'bold' }}>✕</span>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* The Elite Solution */}
            <div
              style={{
                background: '#161914',
                border: '1px solid #223822',
                padding: '2rem',
                borderRadius: '8px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#C9962F', fontWeight: '700', fontSize: '1.1rem', marginBottom: '1.2rem' }}>
                <ShieldCheck size={20} />
                <span>The Elite Tile Master Standard</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {angle.solutions.map((sol) => (
                  <div key={sol} style={{ display: 'flex', gap: '0.6rem', fontSize: '0.88rem', color: '#FFFFFF', lineHeight: 1.5 }}>
                    <CheckCircle size={16} style={{ color: '#C9962F', flexShrink: 0, marginTop: '2px' }} />
                    <span>{sol}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Signals Bar ── */}
      <section style={{ padding: '2.5rem var(--pad-x)', background: '#0D0D0D' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ color: '#C9962F', fontSize: '1.4rem' }}>★★★★★</div>
            <div style={{ fontWeight: '700', fontSize: '0.9rem', color: '#FFFFFF' }}>5.0 Google Rating</div>
            <div style={{ fontSize: '0.75rem', color: '#8A8A8A' }}>150+ Homeowners Served</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ color: '#C9962F', fontWeight: '700', fontSize: '1.2rem' }}>{BUSINESS_INFO.license}</div>
            <div style={{ fontWeight: '700', fontSize: '0.9rem', color: '#FFFFFF' }}>State Licensed Contractor</div>
            <div style={{ fontSize: '0.75rem', color: '#8A8A8A' }}>Licensed, Bonded &amp; Insured</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ color: '#C9962F', fontWeight: '700', fontSize: '1.2rem' }}>15+ Years</div>
            <div style={{ fontWeight: '700', fontSize: '0.9rem', color: '#FFFFFF' }}>Southern Nevada Experience</div>
            <div style={{ fontSize: '0.75rem', color: '#8A8A8A' }}>Family Owned &amp; Operated</div>
          </div>
        </div>
      </section>

      {/* ── Qualification & Contact Form Section ── */}
      <section id="estimate-form" style={{ background: '#141414', padding: '4rem var(--pad-x)', borderTop: '1px solid #222222' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ color: '#C9962F', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
              Free On-Site Estimate Request
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#C9962F', fontWeight: '700', marginTop: '0.4rem', marginBottom: '0.6rem' }}>
              {angle.offerTitle}
            </h2>
            <p style={{ color: '#8A8A8A', fontSize: '0.95rem' }}>
              {angle.offerDesc}
            </p>
          </div>

          {submitted ? (
            <div
              style={{
                background: '#1A1A1A',
                border: '1px solid #262626',
                padding: '3rem 2rem',
                borderRadius: '10px',
                textAlign: 'center',
              }}
            >
              <CheckCircle size={48} style={{ color: '#C9962F', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.8rem', color: '#C9962F', fontWeight: '700', marginBottom: '0.8rem' }}>
                Qualification Submitted!
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#FFFFFF', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Thank you, <strong>{form.firstName}</strong>. A master contractor will review your project details and reach out to <strong>{form.phone}</strong> within 24 hours.
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
                background: '#181818',
                border: '1px solid #262626',
                padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                borderRadius: '10px',
                boxShadow: '0 8px 30px rgba(0,0,0,0.5)',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
                
                {/* 1. First name */}
                <div className="form-field">
                  <label className="form-label" htmlFor="lead-first-name">First Name *</label>
                  <input
                    id="lead-first-name"
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
                  <label className="form-label" htmlFor="lead-phone">Phone Number *</label>
                  <input
                    id="lead-phone"
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
                  <label className="form-label" htmlFor="lead-email">Email Address *</label>
                  <input
                    id="lead-email"
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
                  <label className="form-label" htmlFor="lead-looking">What are you looking to do? *</label>
                  <select
                    id="lead-looking"
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
                          padding: '0.75rem',
                          borderRadius: '6px',
                          border: form.homeOwner === opt ? '2px solid #C9962F' : '1px solid #333333',
                          background: form.homeOwner === opt ? 'rgba(201, 150, 47, 0.18)' : '#121212',
                          color: form.homeOwner === opt ? '#C9962F' : '#FFFFFF',
                          fontWeight: form.homeOwner === opt ? '700' : '400',
                          fontSize: '0.9rem',
                          cursor: 'pointer',
                        }}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 6. When are you looking to start? */}
                <div className="form-field">
                  <label className="form-label" htmlFor="lead-timeline">When are you looking to start? *</label>
                  <select
                    id="lead-timeline"
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
                  <label className="form-label" htmlFor="lead-budget">What's your budget range? *</label>
                  <select
                    id="lead-budget"
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
                  <label className="form-label" htmlFor="lead-notes">Anything else we should know? (Optional)</label>
                  <textarea
                    id="lead-notes"
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
                    padding: '1.1rem',
                    boxShadow: '0 4px 16px rgba(201, 150, 47, 0.35)',
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
          background: '#090909',
          borderTop: '1px solid #1F1F1F',
          padding: '2rem var(--pad-x)',
          textAlign: 'center',
          fontSize: '0.75rem',
          color: '#8A8A8A',
        }}
      >
        <p style={{ color: '#8A8A8A', marginBottom: '0.6rem' }}>
          © {new Date().getFullYear()} Elite Tile &amp; Stone · {BUSINESS_INFO.license} · Licensed, Insured &amp; Bonded
        </p>
        <p style={{ color: '#8A8A8A', marginBottom: '0.8rem' }}>
          Serving Las Vegas, Summerlin, Henderson &amp; Southern Nevada
        </p>
        <button
          onClick={onOpenPrivacy}
          style={{
            background: 'none',
            border: 'none',
            color: '#8A8A8A',
            textDecoration: 'underline',
            cursor: 'pointer',
            fontSize: '0.72rem',
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
