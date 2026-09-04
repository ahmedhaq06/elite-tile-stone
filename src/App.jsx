import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import PortfolioGallery from './components/PortfolioGallery';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import SectionCounter from './components/SectionCounter';
import PrivacyPolicy from './components/PrivacyPolicy';
import { LANDING_PAGES } from './data/landingPages';

function getActiveRoute() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  const hash = window.location.hash.replace(/^#\/?/, '/').replace(/\/$/, '');

  if (LANDING_PAGES[path]) return { type: 'landing', data: LANDING_PAGES[path] };
  if (LANDING_PAGES['/' + hash]) return { type: 'landing', data: LANDING_PAGES['/' + hash] };
  if (hash === 'privacy' || hash === 'privacy-policy' || path === '/privacy') return { type: 'privacy' };

  return { type: 'home' };
}

export default function App() {
  const [routeState, setRouteState] = useState(getActiveRoute);

  useEffect(() => {
    const handleNavigation = () => {
      setRouteState(getActiveRoute());
    };
    window.addEventListener('popstate', handleNavigation);
    window.addEventListener('hashchange', handleNavigation);
    return () => {
      window.removeEventListener('popstate', handleNavigation);
      window.removeEventListener('hashchange', handleNavigation);
    };
  }, []);

  const openPrivacy = () => {
    window.location.hash = 'privacy';
    setRouteState({ type: 'privacy' });
  };

  const closePrivacy = () => {
    window.location.hash = '';
    setRouteState({ type: 'home' });
  };

  if (routeState.type === 'privacy') {
    return <PrivacyPolicy onBack={closePrivacy} />;
  }

  const landingData = routeState.type === 'landing' ? routeState.data : null;

  return (
    <div style={{ background: 'var(--c-black)', minHeight: '100vh', paddingBottom: '0' }}>
      <Navbar />
      <Hero
        headline={landingData?.headline}
        subheadline={landingData?.subheadline}
        ctaText={landingData?.ctaText}
        heroImage={landingData?.heroImage}
        badge={landingData?.badge}
      />
      <Services />
      <BeforeAfterSlider />
      <PortfolioGallery />
      <ContactSection />
      <Footer onOpenPrivacy={openPrivacy} />

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
            fontSize:       '0.75rem',
            fontWeight:     '700',
            letterSpacing:  '0.06em',
            textTransform:  'uppercase',
            color:          '#0D0D0D',
            background:     'var(--c-gold)',
            padding:        '0.65rem 1rem',
            borderRadius:   '4px',
            textDecoration: 'none',
            textAlign:      'center',
            flex:           1,
          }}
        >
          Get Free Estimate
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
