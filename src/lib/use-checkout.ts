"use client";

import { useRef, useState } from "react";
import { useCart } from "@/context/cart-context";
import { useCurrency } from "@/context/currency-context";
import { CartLine } from "@/lib/types";
import { metaContentId, trackMeta } from "@/lib/meta-pixel";
import { useLocale, useT } from "@/i18n/provider";

/**
 * Lance le vrai paiement : le panier est envoye a /api/checkout, qui recalcule
 * les prix cote serveur et cree la session Stripe ; le client est ensuite
 * redirige vers la page de paiement Stripe. Utilise par le panier ET le tiroir.
 */
export function useCheckout() {
  const t = useT();
  const locale = useLocale();
  const { lines, promo } = useCart();
  const { currency } = useCurrency();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inFlight = useRef(false);

  /** `only` : achat direct d'une seule ligne ("Acheter maintenant"), sans passer par le contenu du panier. */
  const startCheckout = async (only?: CartLine[]) => {
    const payload = only ?? lines;
    if (inFlight.current || payload.length === 0) return;
    inFlight.current = true;
    setLoading(true);
    setError(null);
    trackMeta("InitiateCheckout", {
      value: payload.reduce((sum, l) => sum + l.priceEUR * l.quantity, 0),
      currency: "EUR",
      num_items: payload.reduce((n, l) => n + l.quantity, 0),
      content_ids: payload.map((l) => metaContentId(l.productId, l.variantLabel)),
      content_type: "product",
    });
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-locale": locale },
        body: JSON.stringify({ lines: payload, currency, promoCode: promo?.code ?? null, locale }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.url) {
        throw new Error(data.error ?? t("Impossible de lancer le paiement. Votre panier est conservé, réessayez."));
      }
      window.location.href = data.url;
    } catch (e) {
      setError(e instanceof Error ? e.message : t("Une erreur est survenue. Votre panier est conservé."));
      setLoading(false);
      inFlight.current = false;
    }
  };

  return { startCheckout, loading, error };
}
