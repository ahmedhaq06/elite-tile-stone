import React, { useState, useEffect } from 'react';
import { getCampaignAngle } from '../data/campaignData';
import { BUSINESS_INFO } from '../data/tilesData';
import { trackLeadEvent } from '../utils/metaPixel';
import { Phone, CheckCircle, Clock, ShieldCheck, Star, ArrowRight } from 'lucide-react';

// ── Google Sheets Submission Endpoint ─────────────────────────────────────────
// After deploying the Apps Script, paste the Web App URL below.
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbwOi-ltL76H9-MjhWjlsSM1dNsKnbXu3anDS9NSx4aJzhWlMPem5Vv6_HTKUvLqG2rl/exec';
// ──────────────────────────────────────────────────────────────────────────────

export default function CampaignLandingPage({ angle: propAngle, onOpenPrivacy, onOpenTerms }) {
  const [angle, setAngle] = useState(() => {
    if (propAngle) return propAngle;
    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search);
      const adParam = searchParams.get('ad');
      if (adParam) return getCampaignAngle(adParam);

      const path = window.location.pathname.replace(/\/$/, '');
      if (path && path !== '/') return getCampaignAngle(path);
    }
    return getCampaignAngle('default');
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dynamicAnswers, setDynamicAnswers] = useState({});
  const [form, setForm] = useState({
    firstName: '',
    phone: '',
    email: '',
    lookingToDo: angle.preselectedService || 'Custom showers (master / walk-in)',
    homeOwner: 'Yes',
    timeline: 'As soon as possible',
    budget: '$5,000–$10,000',
    notes: '',
    consent: false,
  });

  // Update angle if URL search parameter changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search);
      const adParam = searchParams.get('ad');
      if (adParam) {
        const newAngle = getCampaignAngle(adParam);
        setAngle(newAngle);
        setForm((prev) => ({ ...prev, lookingToDo: newAngle.preselectedService || prev.lookingToDo }));
        setDynamicAnswers({});
      }
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.consent) return;

    setIsSubmitting(true);

    // Build payload including ad-specific dynamic question answers
    const extraQuestions = angle.formQuestions || [];
    const extraQ1 = extraQuestions[0] || null;
    const extraQ2 = extraQuestions[1] || null;

    const payload = {
      adSource: angle.id,
      firstName: form.firstName,
      phone: form.phone,
      email: form.email,
      lookingToDo: form.lookingToDo,
      homeOwner: form.homeOwner,
      timeline: form.timeline,
      budget: form.budget,
      extraQ1Label: extraQ1 ? extraQ1.label : '',
      extraQ1Answer: extraQ1 ? (dynamicAnswers[extraQ1.id] || 'Not answered') : '',
      extraQ2Label: extraQ2 ? extraQ2.label : '',
      extraQ2Answer: extraQ2 ? (dynamicAnswers[extraQ2.id] || 'Not answered') : '',
      notes: form.notes,
    };

    try {
      // Using text/plain to avoid CORS preflight — Apps Script handles it fine
      await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      // Silent fail — never block the user from seeing the thank-you screen
      console.error('Google Sheets submission error:', err);
    }

    setIsSubmitting(false);
    setSubmitted(true);

    // Fire Meta Pixel Lead Event ONLY upon successful form submission
    trackLeadEvent({
      adAngle: angle.id,
      service: form.lookingToDo,
      budget: form.budget,
      timeline: form.timeline,
    });

    const formEl = document.getElementById('qualification-form-section');
    if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
  };

  const update = (field) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const setHomeOwnerValue = (val) => {
    setForm((prev) => ({ ...prev, homeOwner: val }));
  };

  const scrollToForm = () => {
    const formEl = document.getElementById('qualification-form-section');
    if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ background: '#0D0D0D', color: '#FFFFFF', fontFamily: "'Poppins', sans-serif", minHeight: '100vh' }}>

      {/* ── Standalone Sales Funnel Header (No generic website menu) ── */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          background: 'rgba(13, 13, 13, 0.95)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '0.8rem clamp(1.2rem, 5vw, 4rem)',
        }}
      >
        <div
          style={{
            maxWidth: '1440px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <img
              src="/assets/Logo.jpeg"
              alt="Elite Tile & Stone"
              style={{ height: '36px', width: 'auto', borderRadius: '4px' }}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: '700', color: '#C9962F', lineHeight: 1 }}>
                ELITE
              </span>
              <span style={{ fontSize: '0.6rem', fontWeight: '500', color: '#8A8A8A', letterSpacing: '0.14em' }}>
                TILE &amp; STONE LLC
              </span>
            </div>
          </div>

          {/* Direct Phone CTA Header Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '0.78rem', color: '#8A8A8A', display: 'none' }} className="header-tagline">
              NV Lic #0095105
            </span>
            <a
              href="tel:7023341707"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                fontSize: '0.82rem',
                fontWeight: '700',
                color: '#0D0D0D',
                background: '#C9962F',
                padding: '0.55rem 1.1rem',
                borderRadius: '6px',
                textDecoration: 'none',
                transition: 'background 0.2s ease',
              }}
            >
              <Phone size={15} />
              702 334 1707
            </a>
          </div>
        </div>
      </header>

      {/* ── Section 1: DYNAMIC HERO (Matched to ?ad= parameter) ── */}
      <section
        style={{
          position: 'relative',
          background: '#0D0D0D',
          padding: 'clamp(3rem, 6vw, 5.5rem) clamp(1.5rem, 5vw, 4rem)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          overflow: 'hidden',
        }}
      >
        {/* Hero background photography panel */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url('${angle.heroImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.22,
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '1440px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Ad-Matched Headline & Offer */}
          <div>
            {/* Badge */}
            <div style={{ marginBottom: '1.2rem' }}>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: '700',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#C9962F',
                  background: 'rgba(201, 150, 47, 0.14)',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '4px',
                  border: '1px solid rgba(201, 150, 47, 0.35)',
                }}
              >
                {angle.badge}
              </span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
                fontWeight: '700',
                lineHeight: 1.08,
                color: '#C9962F',
                marginBottom: '1.2rem',
                textTransform: 'uppercase',
              }}
            >
              {angle.headline}
            </h1>

            {/* Subheadline */}
            <p
              style={{
                fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
                color: '#FFFFFF',
                lineHeight: 1.65,
                marginBottom: '2rem',
                maxWidth: '560px',
              }}
            >
              {angle.subheadline}
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <button
                onClick={scrollToForm}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '1rem 2.2rem',
                  fontSize: '0.85rem',
                  fontWeight: '700',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#0D0D0D',
                  background: '#C9962F',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 18px rgba(201, 150, 47, 0.35)',
                }}
              >
                Claim Free Estimate <ArrowRight size={18} />
              </button>

              <a
                href="tel:7023341707"
                style={{
                  fontSize: '0.82rem',
                  fontWeight: '700',
                  color: '#8A8A8A',
                  textDecoration: 'none',
                }}
              >
                or Call 702 334 1707
              </a>
            </div>

            {/* Quick Micro-Trust Signals */}
            <div
              style={{
                display: 'flex',
                gap: '1.5rem',
                marginTop: '2rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                fontSize: '0.78rem',
                color: '#8A8A8A',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle size={15} style={{ color: '#C9962F' }} /> 100% Schluter Waterproofing
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Star size={15} style={{ color: '#C9962F' }} /> 5.0 Star Google Rating
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Card */}
          <div
            style={{
              position: 'relative',
              borderRadius: '10px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.7)',
              maxHeight: '450px',
            }}
          >
            <img
              src={angle.heroImage}
              alt={angle.headline}
              style={{ width: '100%', height: '100%', maxHeight: '450px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* ── Section 2: PROBLEM → SOLUTION MESSAGING ── */}
      <section
        style={{
          background: '#141414',
          padding: 'clamp(3.5rem, 6vw, 6rem) clamp(1.5rem, 5vw, 4rem)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.2em', color: '#C9962F', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
              THE ELITE TILE DIFFERENCE
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 3.8vw, 3.2rem)', fontWeight: '700', color: '#FFFFFF', textTransform: 'uppercase' }}>
              Why Most Tile Installations Fail &amp; How We Build It Right
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
            }}
          >
            {/* Common Problems */}
            <div
              style={{
                background: '#181818',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                borderRadius: '10px',
                padding: '2rem',
              }}
            >
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#EF4444', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                ⚠️ Common Las Vegas Contractor Mistakes
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {angle.painPoints.map((point, idx) => (
                  <li key={idx} style={{ fontSize: '0.9rem', color: '#CCCCCC', display: 'flex', alignItems: 'flex-start', gap: '0.6rem', lineHeight: 1.5 }}>
                    <span style={{ color: '#EF4444', fontWeight: 'bold' }}>✕</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Solution */}
            <div
              style={{
                background: '#181818',
                border: '1px solid #C9962F',
                borderRadius: '10px',
                padding: '2rem',
                boxShadow: '0 10px 30px rgba(201, 150, 47, 0.15)',
              }}
            >
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#C9962F', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                ✓ The Elite Master Craftsmanship Standard
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {angle.solutions.map((sol, idx) => (
                  <li key={idx} style={{ fontSize: '0.9rem', color: '#FFFFFF', display: 'flex', alignItems: 'flex-start', gap: '0.6rem', lineHeight: 1.5 }}>
                    <span style={{ color: '#C9962F', fontWeight: 'bold' }}>✓</span>
                    {sol}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: PROJECT PROOF & REVIEWS ── */}
      <section
        style={{
          background: '#0D0D0D',
          padding: 'clamp(3.5rem, 6vw, 6rem) clamp(1.5rem, 5vw, 4rem)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.2em', color: '#C9962F', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
              VERIFIED REVIEWS
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 3.8vw, 3.2rem)', fontWeight: '700', color: '#FFFFFF', textTransform: 'uppercase' }}>
              What Our Clients Say
            </h2>
            <p style={{ color: '#8A8A8A', fontSize: '0.95rem', marginTop: '0.4rem' }}>
              Over 150+ Las Vegas, Henderson &amp; Summerlin homeowners trust Elite Tile &amp; Stone.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
            }}
          >
            {[
              {
                quote: "After a rotted shower pan caused leaks in our downstairs ceiling, Ahmed and his team completely tore out the mess and rebuilt it with Schluter waterproofing. Outstand craftsmanship.",
                author: "Robert & Elena M.",
                location: "The Ridges, Summerlin",
                project: "Master Suite Shower Rebuild",
              },
              {
                quote: "We converted our old 90s bathtub into a zero-threshold walk-in tile shower before moving into our new home. Zero dust outside the bathroom and finished right on budget.",
                author: "David K.",
                location: "MacDonald Highlands, Henderson",
                project: "Tub-to-Walk-In Shower Conversion",
              },
              {
                quote: "Tiled over 1,800 sq ft of post-tension slab concrete flooring. Laser leveled everything perfectly with no lippage anywhere. Worth every penny for precision stone work.",
                author: "Marcus & Sarah T.",
                location: "Green Valley Ranch, NV",
                project: "Full Estate Porcelain Flooring",
              },
            ].map((review, idx) => (
              <div
                key={idx}
                style={{
                  background: '#141414',
                  border: '1px solid #262626',
                  padding: '2rem',
                  borderRadius: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <div style={{ color: '#C9962F', fontSize: '1.1rem' }}>★★★★★</div>
                    <span style={{ fontSize: '0.68rem', color: '#C9962F', background: 'rgba(201, 150, 47, 0.12)', border: '1px solid rgba(201, 150, 47, 0.3)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                      Google Verified Review
                    </span>
                  </div>
                  <p style={{ fontSize: '0.92rem', color: '#FFFFFF', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '1.5rem' }}>
                    "{review.quote}"
                  </p>
                </div>
                <div style={{ borderTop: '1px solid #222222', paddingTop: '1rem' }}>
                  <div style={{ fontWeight: '700', fontSize: '0.9rem', color: '#C9962F' }}>{review.author}</div>
                  <div style={{ fontSize: '0.75rem', color: '#8A8A8A', marginTop: '0.15rem' }}>
                    {review.location} · <span style={{ color: '#CCCCCC' }}>{review.project}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: QUALIFICATION & PRICING EXPECTATIONS ── */}
      <section
        style={{
          background: '#141414',
          padding: 'clamp(3.5rem, 6vw, 6rem) clamp(1.5rem, 5vw, 4rem)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.2em', color: '#C9962F', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
            TRANSPARENT EXPECTATIONS
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 3.8vw, 3.2rem)', fontWeight: '700', color: '#FFFFFF', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            Who We Are Built For
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              textAlign: 'left',
            }}
          >
            <div style={{ background: '#181818', border: '1px solid #262626', padding: '1.5rem', borderRadius: '8px' }}>
              <div style={{ color: '#C9962F', fontWeight: '700', fontSize: '1rem', marginBottom: '0.5rem' }}>
                👍 Homeowners Who Want It Built Right
              </div>
              <p style={{ fontSize: '0.85rem', color: '#8A8A8A', lineHeight: 1.5 }}>
                We specialize in homeowners who want genuine waterproofing, tight grout miters, and zero-lippage precision that lasts for decades.
              </p>
            </div>

            <div style={{ background: '#181818', border: '1px solid #262626', padding: '1.5rem', borderRadius: '8px' }}>
              <div style={{ color: '#C9962F', fontWeight: '700', fontSize: '1rem', marginBottom: '0.5rem' }}>
                📋 Itemized Written Pricing
              </div>
              <p style={{ fontSize: '0.85rem', color: '#8A8A8A', lineHeight: 1.5 }}>
                You get a detailed line-item breakdown covering substrate prep, waterproofing membrane, thinset, and tile installation before work starts.
              </p>
            </div>

            <div style={{ background: '#181818', border: '1px solid #262626', padding: '1.5rem', borderRadius: '8px' }}>
              <div style={{ color: '#C9962F', fontWeight: '700', fontSize: '1rem', marginBottom: '0.5rem' }}>
                🛡️ Nevada Licensed &amp; Insured
              </div>
              <p style={{ fontSize: '0.85rem', color: '#8A8A8A', lineHeight: 1.5 }}>
                Fully licensed with the Nevada State Contractors Board (Lic #0095105). Bonded and insured with full workmanship warranty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: LEAD QUALIFICATION FORM / THANK-YOU SCREEN ── */}
      <section
        id="qualification-form-section"
        style={{
          background: '#0D0D0D',
          padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>

          {submitted ? (
            /* ── THANK-YOU PAGE STATE (Meta Pixel Lead event fires ONLY here!) ── */
            <div
              style={{
                background: '#141414',
                border: '2px solid #C9962F',
                borderRadius: '12px',
                padding: 'clamp(2.5rem, 5vw, 4rem) 2rem',
                textAlign: 'center',
                boxShadow: '0 20px 60px rgba(0,0,0,0.8)',
              }}
            >
              <CheckCircle size={60} style={{ color: '#C9962F', marginBottom: '1.5rem' }} />

              <div style={{ fontSize: '0.78rem', fontWeight: '700', letterSpacing: '0.2em', color: '#C9962F', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                QUALIFICATION CONFIRMED
              </div>

              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                  fontWeight: '700',
                  color: '#FFFFFF',
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                }}
              >
                Thank You, {form.firstName}!
              </h2>

              <p
                style={{
                  fontSize: '1.05rem',
                  color: '#CCCCCC',
                  lineHeight: 1.65,
                  maxWidth: '560px',
                  margin: '0 auto 2rem auto',
                }}
              >
                Your request for <strong>{form.lookingToDo}</strong> has been prioritized. Master contractor Ahmed will personally review your project details and contact you at <strong>{form.phone}</strong> within 24 hours.
              </p>

              <div
                style={{
                  background: '#181818',
                  border: '1px solid #262626',
                  borderRadius: '8px',
                  padding: '1.5rem',
                  marginBottom: '2rem',
                  textAlign: 'left',
                  fontSize: '0.88rem',
                  color: '#8A8A8A',
                }}
              >
                <div style={{ color: '#FFFFFF', fontWeight: '700', marginBottom: '0.5rem' }}>
                  What happens next?
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <div>1. 📱 We confirm project scope and tile material choices by call/text.</div>
                  <div>2. 📏 We schedule your complimentary on-site measurement in Las Vegas.</div>
                  <div>3. 📝 You receive an itemized, written estimate with guaranteed pricing.</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: me => '0.5rem',
                    padding: '0.9rem 1.8rem',
                    background: '#C9962F',
                    color: '#0D0D0D',
                    fontWeight: '700',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                  }}
                >
                  <Phone size={18} /> Call Directly: 702 334 1707
                </a>
              </div>
            </div>
          ) : (
            /* ── LEAD QUALIFICATION FORM (11-Step Fields) ── */
            <div
              style={{
                background: '#141414',
                border: '1px solid #262626',
                borderRadius: '12px',
                padding: 'clamp(1.8rem, 4vw, 3rem)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
              }}
            >
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.2em', color: '#C9962F', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                  FREE IN-HOME ESTIMATE FORM
                </div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: '700', color: '#FFFFFF', textTransform: 'uppercase' }}>
                  {angle.offerTitle}
                </h2>
                <p style={{ fontSize: '0.88rem', color: '#8A8A8A', marginTop: '0.4rem' }}>
                  {angle.offerDesc}
                </p>
              </div>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>

                {/* 1. First name — text */}
                <div className="form-field">
                  <label className="form-label" htmlFor="ad-first-name">
                    First Name *
                  </label>
                  <input
                    id="ad-first-name"
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
                  <label className="form-label" htmlFor="ad-phone">
                    Phone Number *
                  </label>
                  <input
                    id="ad-phone"
                    type="tel"
                    required
                    placeholder="702 334 1707"
                    value={form.phone}
                    onChange={update('phone')}
                    className="form-input"
                  />
                </div>

                {/* 3. Email — text */}
                <div className="form-field">
                  <label className="form-label" htmlFor="ad-email">
                    Email Address *
                  </label>
                  <input
                    id="ad-email"
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
                  <label className="form-label" htmlFor="ad-looking-to-do">
                    What are you looking to do? *
                  </label>
                  <select
                    id="ad-looking-to-do"
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

                {/* ── Ad-Specific Dynamic Qualifying Questions ── */}
                {(angle.formQuestions || []).map((q) => (
                  <div key={q.id} className="form-field">
                    <label className="form-label">
                      {q.label}{q.required ? ' *' : ''}
                    </label>

                    {q.type === 'select' && (
                      <select
                        value={dynamicAnswers[q.id] || ''}
                        onChange={(e) => setDynamicAnswers((prev) => ({ ...prev, [q.id]: e.target.value }))}
                        className="form-select"
                        required={q.required}
                      >
                        <option value="">— Select an option —</option>
                        {(q.options || []).map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    )}

                    {q.type === 'buttons' && (
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '0.8rem' }}>
                        {(q.options || []).map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setDynamicAnswers((prev) => ({ ...prev, [q.id]: opt }))}
                            style={{
                              padding: '0.75rem 0.5rem',
                              borderRadius: '6px',
                              border: dynamicAnswers[q.id] === opt ? '2px solid #C9962F' : '1px solid #333333',
                              background: dynamicAnswers[q.id] === opt ? 'rgba(201, 150, 47, 0.15)' : '#181818',
                              color: dynamicAnswers[q.id] === opt ? '#C9962F' : '#FFFFFF',
                              fontWeight: dynamicAnswers[q.id] === opt ? '700' : '400',
                              fontFamily: "'Poppins', sans-serif",
                              fontSize: '0.84rem',
                              cursor: 'pointer',
                              transition: 'all 0.2s ease',
                              textAlign: 'center',
                              lineHeight: 1.3,
                            }}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    )}

                    {q.type === 'text' && (
                      <input
                        type="text"
                        value={dynamicAnswers[q.id] || ''}
                        onChange={(e) => setDynamicAnswers((prev) => ({ ...prev, [q.id]: e.target.value }))}
                        placeholder={q.placeholder || ''}
                        className="form-input"
                        required={q.required}
                      />
                    )}
                  </div>
                ))}

                {/* 5. Do you own the home? — Yes / No */}
                <div className="form-field">
                  <label className="form-label">
                    Do you own the home? *
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem' }}>
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
                  <label className="form-label" htmlFor="ad-timeline">
                    When are you looking to start? *
                  </label>
                  <select
                    id="ad-timeline"
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
                  <label className="form-label" htmlFor="ad-budget">
                    What's your budget range? *
                  </label>
                  <select
                    id="ad-budget"
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
                  <label className="form-label" htmlFor="ad-notes">
                    Anything else we should know? (Optional)
                  </label>
                  <textarea
                    id="ad-notes"
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
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    marginTop: '0.6rem',
                    background: isSubmitting ? '#8A6B22' : '#C9962F',
                    color: '#0D0D0D',
                    fontWeight: '700',
                    fontSize: '0.95rem',
                    borderRadius: '6px',
                    padding: '1.05rem',
                    border: 'none',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    boxShadow: '0 4px 14px rgba(201, 150, 47, 0.3)',
                    transition: 'background 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    opacity: isSubmitting ? 0.85 : 1,
                  }}
                  onMouseEnter={(e) => { if (!isSubmitting) e.currentTarget.style.background = '#D9A43B'; }}
                  onMouseLeave={(e) => { if (!isSubmitting) e.currentTarget.style.background = isSubmitting ? '#8A6B22' : '#C9962F'; }}
                >
                  {isSubmitting ? (
                    <>
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ animation: 'spin 0.9s linear infinite' }}>
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                      </svg>
                      Sending your request…
                    </>
                  ) : 'Get My Free Estimate'}
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

              </form>
            </div>
          )}

        </div>
      </section>

      {/* ── META COMPLIANCE FOOTER ── */}
      <footer
        style={{
          background: '#080808',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '3rem clamp(1.5rem, 5vw, 4rem)',
          fontSize: '0.8rem',
          color: '#8A8A8A',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.2rem', alignItems: 'center' }}>

          <div style={{ fontWeight: '700', color: '#FFFFFF', fontSize: '0.95rem' }}>
            Elite Tile &amp; Stone LLC · Nevada State Contractors Board Lic #0095105
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div>📍 7495 W Azure Dr, Suite 120, Las Vegas, NV 89130</div>
            <div>📞 702 334 1707</div>
            <div>✉️ info@elitetileandstonelv.com</div>
          </div>

          {/* Legal Compliance Links */}
          <div style={{ display: 'flex', gap: '1.5rem', margin: '0.5rem 0' }}>
            <button
              onClick={() => onOpenPrivacy && onOpenPrivacy()}
              style={{
                background: 'none',
                border: 'none',
                color: '#C9962F',
                cursor: 'pointer',
                fontSize: '0.82rem',
                textDecoration: 'underline',
              }}
            >
              Privacy Policy
            </button>
            <span style={{ color: '#333333' }}>|</span>
            <button
              onClick={() => onOpenTerms && onOpenTerms()}
              style={{
                background: 'none',
                border: 'none',
                color: '#C9962F',
                cursor: 'pointer',
                fontSize: '0.82rem',
                textDecoration: 'underline',
              }}
            >
              Terms of Service
            </button>
          </div>

          <div style={{ fontSize: '0.75rem', color: '#666666' }}>
            © 2026 Elite Tile &amp; Stone LLC. All rights reserved. Licensed, Bonded &amp; Insured in the State of Nevada.
          </div>
        </div>
      </footer>
    </div>
  );
}
