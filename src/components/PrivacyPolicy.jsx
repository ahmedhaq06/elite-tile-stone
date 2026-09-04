import React, { useEffect } from 'react';
import { BUSINESS_INFO } from '../data/tilesData';

export default function PrivacyPolicy({ onBack }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div
      style={{
        background: '#0C0B0A',
        color: 'var(--c-off-white)',
        minHeight: '100vh',
        padding: '6rem var(--pad-x) 8rem var(--pad-x)',
        fontFamily: 'var(--font-body)',
      }}
    >
      {/* Top navigation header */}
      <div
        style={{
          maxWidth: '840px',
          margin: '0 auto 4rem auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          paddingBottom: '2rem',
        }}
      >
        <button
          onClick={onBack}
          style={{
            background: 'none',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: 'var(--c-off-white)',
            padding: '0.6rem 1.4rem',
            fontSize: '0.75rem',
            fontWeight: '600',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            borderRadius: '4px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'none';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
          }}
        >
          ← Return to Main Site
        </button>

        <span
          style={{
            fontSize: '0.7rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'rgba(196, 185, 173, 0.5)',
          }}
        >
          {BUSINESS_INFO.name}
        </span>
      </div>

      {/* Main content container */}
      <main
        style={{
          maxWidth: '840px',
          margin: '0 auto',
          lineHeight: 1.7,
          color: 'rgba(242, 237, 232, 0.85)',
        }}
      >
        {/* Title */}
        <div style={{ marginBottom: '3.5rem' }}>
          <span
            style={{
              fontSize: '0.68rem',
              fontWeight: '600',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#D4AF37',
              display: 'block',
              marginBottom: '0.8rem',
            }}
          >
            Legal &amp; Disclosure
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '400',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: 'var(--c-off-white)',
              marginBottom: '1rem',
            }}
          >
            Privacy Policy
          </h1>
          <p
            style={{
              fontSize: '0.85rem',
              color: 'rgba(196, 185, 173, 0.6)',
            }}
          >
            Last Updated: September 2026 &nbsp;|&nbsp; {BUSINESS_INFO.license}
          </p>
        </div>

        {/* Policy content sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          
          <section>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                fontWeight: '400',
                color: 'var(--c-off-white)',
                marginBottom: '1rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                paddingBottom: '0.5rem',
              }}
            >
              1. Overview &amp; Scope
            </h2>
            <p>
              At <strong>{BUSINESS_INFO.name}</strong> ("we," "us," or "our"), we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you visit our website, submit a consultation request, or communicate with our master craftsmen across Las Vegas, Henderson, Summerlin, and the greater Nevada region.
            </p>
          </section>

          <section>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                fontWeight: '400',
                color: 'var(--c-off-white)',
                marginBottom: '1rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                paddingBottom: '0.5rem',
              }}
            >
              2. Information We Collect
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              We collect information that you voluntarily provide to us when expressing interest in our custom tile, marble, and natural stone installation services:
            </p>
            <ul style={{ paddingLeft: '1.4rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <li><strong>Contact Information:</strong> Full name, phone number, email address, and project location address for on-site measurement.</li>
              <li><strong>Project Details:</strong> Material preferences (such as Calacatta marble, slab quartzite, or porcelain), timeline requirements, and project scope notes.</li>
              <li><strong>Technical Data:</strong> Standard browser telemetry, IP address, device type, and page interaction metrics collected via security &amp; analytics tools.</li>
            </ul>
          </section>

          <section>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                fontWeight: '400',
                color: 'var(--c-off-white)',
                marginBottom: '1rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                paddingBottom: '0.5rem',
              }}
            >
              3. How We Use Your Information
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              Your information is utilized solely to deliver high-touch custom craftsmanship services:
            </p>
            <ul style={{ paddingLeft: '1.4rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <li>Scheduling and conducting complimentary on-site measurement consultations.</li>
              <li>Preparing accurate estimates and structural substrate specifications.</li>
              <li>Direct project communications, updates, and follow-ups regarding your installation.</li>
              <li>Maintaining Nevada state compliance, licensing records, and client records.</li>
            </ul>
          </section>

          <section>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                fontWeight: '400',
                color: 'var(--c-off-white)',
                marginBottom: '1rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                paddingBottom: '0.5rem',
              }}
            >
              4. SMS &amp; Phone Communication Policy
            </h2>
            <p>
              By providing your telephone number via our consultation forms or direct calls, you consent to receive direct phone calls or text messages regarding your service inquiry. We <strong>never sell, rent, lease, or share</strong> your telephone numbers or opt-in data with third-party marketers or external lead brokers under any circumstances.
            </p>
          </section>

          <section>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                fontWeight: '400',
                color: 'var(--c-off-white)',
                marginBottom: '1rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                paddingBottom: '0.5rem',
              }}
            >
              5. Data Protection &amp; Third-Party Sharing
            </h2>
            <p>
              We implement industry-standard administrative and technical safeguards to keep your personal information secure. We do not sell or monetize personal data. We only share information with trusted service partners (such as stone suppliers or slab distributors) when necessary to execute your project order, or when required by Nevada state law.
            </p>
          </section>

          <section>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                fontWeight: '400',
                color: 'var(--c-off-white)',
                marginBottom: '1rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                paddingBottom: '0.5rem',
              }}
            >
              6. Your Rights &amp; Contact Information
            </h2>
            <p style={{ marginBottom: '1.2rem' }}>
              You may request access to, correction of, or deletion of your personal data at any time by contacting our office:
            </p>
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '1.5rem',
                borderRadius: '6px',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                fontSize: '0.9rem',
              }}
            >
              <p><strong>{BUSINESS_INFO.name}</strong></p>
              <p>License: {BUSINESS_INFO.license} ({BUSINESS_INFO.licenseText})</p>
              <p>Service Area: {BUSINESS_INFO.location}</p>
              <p>Phone: <a href={`tel:${BUSINESS_INFO.phoneRaw}`} style={{ color: 'var(--c-off-white)', textDecoration: 'underline' }}>{BUSINESS_INFO.phone}</a></p>
            </div>
          </section>

        </div>

        {/* Bottom back button */}
        <div style={{ marginTop: '5rem', paddingTop: '2rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <button
            onClick={onBack}
            style={{
              background: 'var(--c-off-white)',
              color: 'var(--c-black)',
              border: 'none',
              padding: '0.85rem 2rem',
              fontSize: '0.75rem',
              fontWeight: '600',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              borderRadius: '4px',
              transition: 'background 0.2s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#e8e4df'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--c-off-white)'; }}
          >
            ← Return to Main Site
          </button>
        </div>
      </main>
    </div>
  );
}
