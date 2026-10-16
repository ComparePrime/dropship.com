"use client";

import { useRef, useState } from "react";
import { useCart } from "@/context/cart-context";
import { useCurrency } from "@/context/currency-context";

/**
 * Lance le vrai paiement : le panier est envoye a /api/checkout, qui recalcule
 * les prix cote serveur et cree la session Stripe ; le client est ensuite
 * redirige vers la page de paiement Stripe. Utilise par le panier ET le tiroir.
 */
export function useCheckout() {
  const { lines, promo } = useCart();
  const { currency } = useCurrency();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inFlight = useRef(false);

  const startCheckout = async () => {
    if (inFlight.current || lines.length === 0) return;
    inFlight.current = true;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lines, currency, promoCode: promo?.code ?? null }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.url) {
        throw new Error(data.error ?? "Impossible de lancer le paiement. Votre panier est conservé, réessayez.");
      }
      window.location.href = data.url;
    } catch (e) {
      setError(e instanceof Error ? e.message : "Une erreur est survenue. Votre panier est conservé.");
      setLoading(false);
      inFlight.current = false;
    }
  };

  return { startCheckout, loading, error };
}
