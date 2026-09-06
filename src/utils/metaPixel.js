// Meta Pixel Utility & Tracking Helper
export const DEFAULT_PIXEL_ID = '123456789012345'; // Replace with client's Meta Pixel ID when deploying

export function getPixelId() {
  if (typeof window !== 'undefined' && window.META_PIXEL_ID) {
    return window.META_PIXEL_ID;
  }
  return DEFAULT_PIXEL_ID;
}

export function initMetaPixel(pixelId = getPixelId()) {
  if (typeof window === 'undefined') return;
  if (window.fbq) return; // Already initialized

  /* eslint-disable */
  !(function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
  /* eslint-enable */

  if (window.fbq) {
    window.fbq('init', pixelId);
  }
}

export function trackPageView() {
  initMetaPixel();
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView');
    console.log('[Meta Pixel] PageView tracked for pixel:', getPixelId());
  }
}

export function trackLeadEvent(leadData = {}) {
  initMetaPixel();
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', {
      content_name: leadData.adAngle || 'General Landing Page Lead',
      service_requested: leadData.service || 'Tile & Stone Estimate',
      currency: 'USD',
      value: 0,
      ...leadData,
    });
    console.log('[Meta Pixel] Lead event tracked on Thank You Page:', leadData);
  }
}
