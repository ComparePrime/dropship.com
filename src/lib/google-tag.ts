export const GOOGLE_ANALYTICS_ID = "G-QWVNQQK93Q";
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

export interface PurchaseData {
  transactionId: string;
  currency: string;
  value: number;
  items: { item_name: string | null; quantity: number; price: number }[];
}

/**
 * Envoie l'evenement GA4 "purchase" une seule fois par commande, et seulement si
 * le visiteur a accepte les cookies (la balise est alors chargee). Attend
 * brievement que la balise soit prete, car elle se charge en parallele.
 */
export function trackPurchase(data: PurchaseData) {
  let consent: string | null = null;
  let alreadySent = false;
  const sentKey = `ml_purchase_${data.transactionId}`;
  try {
    consent = window.localStorage.getItem("ml_cookie_consent");
    alreadySent = window.localStorage.getItem(sentKey) === "1";
  } catch {
    return;
  }
  if (consent !== "granted" || alreadySent) return;

  let tries = 0;
  const timer = window.setInterval(() => {
    tries += 1;
    if (window.gtag) {
      window.clearInterval(timer);
      window.gtag("event", "purchase", {
        transaction_id: data.transactionId,
        currency: data.currency,
        value: data.value,
        items: data.items,
      });
      try {
        window.localStorage.setItem(sentKey, "1");
      } catch {
        // ignore
      }
    } else if (tries >= 20) {
      window.clearInterval(timer);
    }
  }, 250);
}
