import React from 'react';

export default function TermsPage({ onBack }) {
  return (
    <div style={{ background: '#0D0D0D', minHeight: '100vh', color: '#FFFFFF', fontFamily: "'Poppins', sans-serif" }}>
      {/* Header Bar */}
      <header
        style={{
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          padding: '1.2rem clamp(1.5rem, 5vw, 4rem)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: '#141414',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img src="/assets/Logo.jpeg" alt="Elite Tile & Stone" style={{ height: '36px', borderRadius: '4px' }} />
          <span style={{ fontWeight: '700', color: '#C9962F', letterSpacing: '0.1em' }}>
            ELITE TILE &amp; STONE LLC
          </span>
        </div>
        {onBack && (
          <button
            onClick={onBack}
            style={{
              background: 'transparent',
              border: '1px solid #C9962F',
              color: '#C9962F',
              padding: '0.5rem 1.2rem',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '0.8rem',
            }}
          >
            ← Return to Site
          </button>
        )}
      </header>

      {/* Main Legal Content */}
      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '3.5rem 1.5rem' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: '#C9962F', marginBottom: '0.5rem' }}>
          Terms of Service
        </h1>
        <p style={{ color: '#8A8A8A', fontSize: '0.85rem', marginBottom: '2.5rem' }}>
          Last Updated: September 2026
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', lineHeight: 1.7, color: '#CCCCCC', fontSize: '0.92rem' }}>
          <section>
            <h2 style={{ color: '#FFFFFF', fontSize: '1.25rem', marginBottom: '0.6rem' }}>1. Agreement to Terms</h2>
            <p>
              By accessing our website or requesting an estimate from Elite Tile &amp; Stone LLC ("Company", "we", "us"), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not access the service or submit estimate requests.
            </p>
          </section>

          <section>
            <h2 style={{ color: '#FFFFFF', fontSize: '1.25rem', marginBottom: '0.6rem' }}>2. Services &amp; Estimates</h2>
            <p>
              All initial estimates provided via website forms, telephone calls, or digital communication are preliminary estimates based on customer-provided details. Formal, binding contracts are subject to on-site physical measurement, subfloor inspection, and written contract execution signed by both parties.
            </p>
          </section>

          <section>
            <h2 style={{ color: '#FFFFFF', fontSize: '1.25rem', marginBottom: '0.6rem' }}>3. Contractor License &amp; Insurance</h2>
            <p>
              Elite Tile &amp; Stone LLC is licensed, bonded, and insured in the State of Nevada (Nevada State Contractors Board License #0095105). All installation work is performed according to TCNA (Tile Council of North America) standards and local Nevada building codes.
            </p>
          </section>

          <section>
            <h2 style={{ color: '#FFFFFF', fontSize: '1.25rem', marginBottom: '0.6rem' }}>4. User Communications &amp; Consent</h2>
            <p>
              By submitting your telephone number or email address on our website lead forms, you expressly consent to receive communications (including phone calls, SMS text messages, and emails) regarding your project estimate from Elite Tile &amp; Stone LLC. Consent is not a condition of purchase.
            </p>
          </section>

          <section>
            <h2 style={{ color: '#FFFFFF', fontSize: '1.25rem', marginBottom: '0.6rem' }}>5. Intellectual Property</h2>
            <p>
              All content on this website—including photography, branding, text, graphic assets, and project portfolios—is the exclusive property of Elite Tile &amp; Stone LLC and protected under applicable copyright laws.
            </p>
          </section>

          <section>
            <h2 style={{ color: '#FFFFFF', fontSize: '1.25rem', marginBottom: '0.6rem' }}>6. Contact Information</h2>
            <p>
              If you have any questions regarding these Terms of Service, please contact us at:
            </p>
            <div style={{ marginTop: '0.8rem', background: '#141414', padding: '1.2rem', borderRadius: '6px', border: '1px solid #262626' }}>
              <div><strong>Elite Tile &amp; Stone LLC</strong></div>
              <div>7495 W Azure Dr, Suite 120, Las Vegas, NV 89130</div>
              <div>Phone: (702) 555-0142 / 702-334-1707</div>
              <div>Email: info@elitetileandstonelv.com</div>
              <div>NV License #0095105</div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
