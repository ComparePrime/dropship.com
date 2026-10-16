export const GOOGLE_ANALYTICS_ID = "G-0FHNZVR7ES";
export const GOOGLE_ADS_TAG_ID = "AW-11045179820";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
    __googleTagLoaded?: boolean;
  }
}

/** Charge la balise Google (une seule fois). A n'appeler qu'apres le consentement du visiteur. */
export function loadGoogleTag() {
  if (typeof window === "undefined" || window.__googleTagLoaded) return;
  window.__googleTagLoaded = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", GOOGLE_ANALYTICS_ID);
  window.gtag("config", GOOGLE_ADS_TAG_ID);

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`;
  document.head.appendChild(script);
}
