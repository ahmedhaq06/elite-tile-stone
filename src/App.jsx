import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import PortfolioGallery from './components/PortfolioGallery';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import SectionCounter from './components/SectionCounter';

/*
  Page rhythm (background / visual grammar):

  Navbar         — fixed overlay, transparent → dark on scroll
  Hero           — #0C0B0A  | photography-dominant, full viewport
  Services       — #141210  | typography-dominant, hover photography
  Before/After   — #0C0B0A  | two-column: copy + vertical slider
  Portfolio      — #0C0B0A  | asymmetric image grid, image-dominant
  Contact        — #F2EDE8  | LIGHT — tonal break, editorial form
  Footer         — #0C0B0A  | giant wordmark close
*/

export default function App() {
  return (
    <div style={{ background: 'var(--c-black)', minHeight: '100vh', paddingBottom: '0' }}>
      <Navbar />
      <Hero />
      <Services />
      <BeforeAfterSlider />
      <PortfolioGallery />
      <ContactSection />
      <Footer />

      {/* Sticky editorial section counter — desktop only */}
      <SectionCounter />

      {/* ── Sticky Mobile Bar (Visible only < 768px) ── */}
      <div
        className="sticky-mobile-bar"
        style={{
          position:       'fixed',
          bottom:          0,
          left:            0,
          right:           0,
          zIndex:          200,
          background:      'rgba(12, 11, 10, 0.94)',
          backdropFilter:  'blur(12px)',
          borderTop:       '1px solid rgba(255, 255, 255, 0.12)',
          padding:         '0.65rem 1rem',
          display:         'none',
          alignItems:      'center',
          justifyContent:  'space-between',
          gap:             '0.8rem',
          boxShadow:       '0 -8px 24px rgba(0,0,0,0.5)',
        }}
      >
        <a
          href="tel:7023341707"
          style={{
            display:        'flex',
            alignItems:     'center',
            gap:            '0.4rem',
            fontFamily:     'var(--font-body)',
            fontSize:       '0.75rem',
            fontWeight:     '600',
            color:          'var(--c-off-white)',
            textDecoration: 'none',
            letterSpacing:  '0.04em',
            padding:        '0.55rem 0.8rem',
            borderRadius:   '4px',
            background:     'rgba(255,255,255,0.08)',
          }}
        >
          <span style={{ fontSize: '0.85rem' }}>📞</span>
          702-334-1707
        </a>

        <a
          href="#contact"
          style={{
            fontFamily:     'var(--font-body)',
            fontSize:       '0.72rem',
            fontWeight:     '600',
            letterSpacing:  '0.08em',
            textTransform:  'uppercase',
            color:          'var(--c-black)',
            background:     'var(--c-off-white)',
            padding:        '0.6rem 1rem',
            borderRadius:   '4px',
            textDecoration: 'none',
            textAlign:      'center',
            flex:           1,
          }}
        >
          Request Consultation
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .sticky-mobile-bar {
            display: flex !important;
          }
          body {
            padding-bottom: 56px;
          }
        }
      `}</style>
    </div>
  );
}
