import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyElite from './components/WhyElite';
import RecentWork from './components/RecentWork';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import GalleryPage from './components/GalleryPage';
import CampaignLandingPage from './components/CampaignLandingPage';
import { CAMPAIGN_ANGLES } from './data/campaignData';

function getActiveRoute() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  const hash = window.location.hash.replace(/^#\/?/, '/').replace(/\/$/, '');

  if (CAMPAIGN_ANGLES[path]) return { type: 'campaign', data: CAMPAIGN_ANGLES[path] };
  if (CAMPAIGN_ANGLES['/' + hash]) return { type: 'campaign', data: CAMPAIGN_ANGLES['/' + hash] };
  if (hash === 'privacy' || hash === 'privacy-policy' || path === '/privacy') return { type: 'privacy' };
  if (hash === 'gallery' || path === '/gallery') return { type: 'gallery' };

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

  const navigateTo = (view) => {
    if (view === 'gallery') {
      window.location.hash = 'gallery';
      setRouteState({ type: 'gallery' });
    } else if (view === 'privacy') {
      window.location.hash = 'privacy';
      setRouteState({ type: 'privacy' });
    } else {
      window.location.hash = '';
      setRouteState({ type: 'home' });
    }
  };

  const openPrivacy = () => navigateTo('privacy');
  const closePrivacy = () => navigateTo('home');

  if (routeState.type === 'privacy') {
    return <PrivacyPolicy onBack={closePrivacy} />;
  }

  if (routeState.type === 'campaign') {
    return <CampaignLandingPage angle={routeState.data} onOpenPrivacy={openPrivacy} />;
  }

  if (routeState.type === 'gallery') {
    return <GalleryPage onNavigate={navigateTo} onOpenPrivacy={openPrivacy} />;
  }

  return (
    <div style={{ background: '#0D0D0D', minHeight: '100vh' }}>
      <Navbar onNavigate={navigateTo} />
      <Hero onNavigate={navigateTo} />
      <Services onNavigate={navigateTo} />
      <WhyElite />
      <RecentWork onNavigate={navigateTo} />
      <CtaSection />
      <Footer onNavigate={navigateTo} onOpenPrivacy={openPrivacy} />

      {/* Sticky Mobile Call & Estimate Bar */}
      <div
        className="sticky-mobile-bar"
        style={{
          position:       'fixed',
          bottom:          0,
          left:            0,
          right:           0,
          zIndex:          200,
          background:      'rgba(13, 13, 13, 0.96)',
          backdropFilter:  'blur(12px)',
          borderTop:       '1px solid rgba(255, 255, 255, 0.12)',
          padding:         '0.65rem 1rem',
          display:         'none',
          alignItems:      'center',
          justifyContent:  'space-between',
          gap:             '0.8rem',
          boxShadow:       '0 -8px 24px rgba(0,0,0,0.6)',
        }}
      >
        <a
          href="tel:7025550142"
          style={{
            display:        'flex',
            alignItems:     'center',
            gap:            '0.4rem',
            fontFamily:     'var(--font-body)',
            fontSize:       '0.78rem',
            fontWeight:     '600',
            color:          '#FFFFFF',
            textDecoration: 'none',
            padding:        '0.6rem 0.8rem',
            borderRadius:   '4px',
            background:     'rgba(255,255,255,0.08)',
          }}
        >
          <span>📞</span>
          (702) 555-0142
        </a>

        <a
          href="#contact"
          style={{
            fontFamily:     'var(--font-body)',
            fontSize:       '0.78rem',
            fontWeight:     '700',
            letterSpacing:  '0.06em',
            textTransform:  'uppercase',
            color:          '#0D0D0D',
            background:     '#C9962F',
            padding:        '0.65rem 1rem',
            borderRadius:   '4px',
            textDecoration: 'none',
            textAlign:      'center',
            flex:           1,
          }}
        >
          GET FREE ESTIMATE
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
