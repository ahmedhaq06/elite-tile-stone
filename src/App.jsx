import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyElite from './components/WhyElite';
import RecentWork from './components/RecentWork';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsPage from './components/TermsPage';
import GalleryPage from './components/GalleryPage';
import EstimatePage from './components/EstimatePage';
import CampaignLandingPage from './components/CampaignLandingPage';
import { CAMPAIGN_ANGLES, getCampaignAngle } from './data/campaignData';

function getActiveRoute() {
  if (typeof window === 'undefined') return { type: 'home' };

  const path = window.location.pathname.replace(/\/$/, '') || '/';
  const hash = window.location.hash.replace(/^#\/?/, '/').replace(/\/$/, '');
  const searchParams = new URLSearchParams(window.location.search);
  const adParam = searchParams.get('ad');

  // Check for ad parameter first (e.g., ?ad=failed-shower)
  if (adParam) {
    return { type: 'campaign', data: getCampaignAngle(adParam) };
  }

  // Terms page route
  if (hash === 'terms' || hash === 'terms-of-service' || path === '/terms' || path === '/terms-of-service') {
    return { type: 'terms' };
  }

  // Privacy policy page route
  if (hash === 'privacy' || hash === 'privacy-policy' || path === '/privacy' || path === '/privacy-policy') {
    return { type: 'privacy' };
  }

  // Gallery page route
  if (hash === 'gallery' || path === '/gallery') {
    return { type: 'gallery' };
  }

  // Estimate page route
  if (hash === 'estimate' || hash === 'contact' || path === '/estimate' || path === '/contact') {
    return { type: 'estimate' };
  }

  // Campaign path routes (e.g., /failed-shower, /tub-conversion, /offer, /landing, /ad)
  if (path !== '/' && path !== '') {
    const cleanPath = path.replace(/^\//, '');
    if (CAMPAIGN_ANGLES[cleanPath] || cleanPath === 'offer' || cleanPath === 'landing' || cleanPath === 'ad') {
      return { type: 'campaign', data: getCampaignAngle(cleanPath) };
    }
  }

  // Hash campaign route (e.g., #ad=failed-shower)
  if (hash.startsWith('ad=')) {
    const param = hash.split('ad=')[1];
    return { type: 'campaign', data: getCampaignAngle(param) };
  }

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

  const navigateTo = (view, targetId) => {
    if (view === 'estimate') {
      if (window.location.hash !== '#estimate') {
        window.history.pushState(null, '', '#estimate');
      }
      setRouteState({ type: 'estimate' });
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (view === 'gallery') {
      if (window.location.hash !== '#gallery') {
        window.history.pushState(null, '', '#gallery');
      }
      setRouteState({ type: 'gallery' });
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (view === 'privacy') {
      if (window.location.hash !== '#privacy') {
        window.history.pushState(null, '', '#privacy');
      }
      setRouteState({ type: 'privacy' });
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (view === 'terms') {
      if (window.location.hash !== '#terms') {
        window.history.pushState(null, '', '#terms');
      }
      setRouteState({ type: 'terms' });
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else {
      const isCurrentlyHome = routeState.type === 'home';
      if (window.location.hash !== '') {
        window.history.pushState(null, '', window.location.pathname);
      }
      setRouteState({ type: 'home' });

      if (targetId) {
        const scrollToElement = () => {
          const el = document.getElementById(targetId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
          else window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        if (isCurrentlyHome) {
          scrollToElement();
        } else {
          setTimeout(scrollToElement, 60);
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const openPrivacy = () => navigateTo('privacy');
  const openTerms = () => navigateTo('terms');
  const closeLegal = () => navigateTo('home');

  if (routeState.type === 'terms') {
    return <TermsPage onBack={closeLegal} />;
  }

  if (routeState.type === 'privacy') {
    return <PrivacyPolicy onBack={closeLegal} />;
  }

  if (routeState.type === 'campaign') {
    return <CampaignLandingPage angle={routeState.data} onOpenPrivacy={openPrivacy} onOpenTerms={openTerms} />;
  }

  if (routeState.type === 'gallery') {
    return <GalleryPage onNavigate={navigateTo} onOpenPrivacy={openPrivacy} />;
  }

  if (routeState.type === 'estimate') {
    return <EstimatePage onNavigate={navigateTo} onOpenPrivacy={openPrivacy} />;
  }

  return (
    <div style={{ background: '#0D0D0D', minHeight: '100vh' }}>
      <Navbar onNavigate={navigateTo} activeRoute={routeState.type} />
      <Hero onNavigate={navigateTo} />
      <Services onNavigate={navigateTo} />
      <WhyElite />
      <RecentWork onNavigate={navigateTo} />
      <CtaSection onNavigate={navigateTo} />
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
          href="tel:7023341707"
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
          702 334 1707
        </a>

        <button
          onClick={() => navigateTo('estimate')}
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
            border:         'none',
            cursor:         'pointer',
            textAlign:      'center',
            flex:           1,
          }}
        >
          GET FREE ESTIMATE
        </button>
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
