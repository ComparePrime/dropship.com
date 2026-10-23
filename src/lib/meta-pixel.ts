export const META_PIXEL_ID = "473111698599994";

type Fbq = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[];
  loaded?: boolean;
  version?: string;
  push?: unknown;
};

declare global {
  interface Window {
    fbq?: Fbq;
    _fbq?: Fbq;
    __metaPixelLoaded?: boolean;
  }
}

/** Le visiteur a-t-il accepté les cookies de mesure et de publicité ? */
function hasConsent(): boolean {
  try {
    return window.localStorage.getItem("ml_cookie_consent") === "granted";
  } catch {
    return false;
  }
}

/**
 * Charge le Pixel Meta (une seule fois). A n'appeler qu'apres le consentement du visiteur : tant qu'il n'a
 * pas accepte, rien n'est charge et aucune donnee n'est envoyee a Meta. Equivalent du code officiel de Meta.
 */
export function loadMetaPixel() {
  if (typeof window === "undefined" || window.__metaPixelLoaded) return;
  window.__metaPixelLoaded = true;

  const fbq = function (...args: unknown[]) {
    if (fbq.callMethod) fbq.callMethod(...args);
    else fbq.queue.push(args);
  } as Fbq;
  if (!window._fbq) window._fbq = fbq;
  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = "2.0";
  fbq.queue = [];
  window.fbq = fbq;

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(script);

  fbq("init", META_PIXEL_ID);
  fbq("track", "PageView");
}

/** Evenement standard Meta ; sans effet si le visiteur n'a pas accepte les cookies. */
export function trackMeta(event: string, params?: Record<string, unknown>, eventId?: string) {
  if (typeof window === "undefined" || !window.fbq || !hasConsent()) return;
  if (eventId) window.fbq("track", event, params ?? {}, { eventID: eventId });
  else window.fbq("track", event, params ?? {});
}

/** Achat : une seule fois par commande (même garde-fou que pour Google). */
export function trackMetaPurchase(data: { transactionId: string; currency: string; value: number; items: { quantity: number }[] }) {
  const sentKey = `ml_meta_purchase_${data.transactionId}`;
  try {
    if (window.localStorage.getItem(sentKey) === "1") return;
  } catch {
    return;
  }
  if (!hasConsent()) return;
  let tries = 0;
  const timer = window.setInterval(() => {
    tries += 1;
    if (window.fbq) {
      window.clearInterval(timer);
      trackMeta("Purchase", { value: data.value, currency: data.currency, num_items: data.items.reduce((n, i) => n + i.quantity, 0) }, `purchase_${data.transactionId}`);
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
