"use client";

import { useState } from "react";
import { useCart } from "@/context/cart-context";
import { useCurrency } from "@/context/currency-context";
import { formatPrice } from "@/lib/currency";
import { findPromo } from "@/lib/promo";
import { Icon } from "@/components/icons";

const OFFER_CODE = "WELCOME10";

/**
 * Offre de bienvenue visible sur la fiche produit. Le bouton active reellement
 * le code dans le panier (meme mecanisme et meme validation serveur que le
 * champ du panier) ; la remise s'applique ensuite a l'ensemble du panier au
 * paiement. Le montant affiche est calcule sur l'article en cours de selection.
 */
export function WelcomeOffer({ unitPrice, quantity }: { unitPrice: number; quantity: number }) {
  const { currency } = useCurrency();
  const { promo, applyPromo } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const percent = findPromo(OFFER_CODE)?.percent ?? 10;
  const saving = Math.round(unitPrice * quantity * 100 * (percent / 100)) / 100;
  const active = promo?.code === OFFER_CODE;

  const activate = async () => {
    if (loading) return;
    setLoading(true);
    setError(null);
    const result = await applyPromo(OFFER_CODE);
    if (!result.ok) setError(result.message);
    setLoading(false);
  };

  return (
    <div className="mt-4 rounded-xl2 border border-dashed border-terracotta/50 bg-blush/20 p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-terracottaText">
            Offre de bienvenue
          </p>
          <p className="mt-1 font-display text-xl leading-snug text-ink">
            Profitez de −{percent} % sur votre commande
          </p>
          <p className="mt-1 text-sm text-ink/70">
            Soit −{formatPrice(saving, currency)} sur cet article
            {quantity > 1 ? ` (×${quantity})` : ""}. La remise s&apos;applique à tout votre panier.
          </p>
        </div>
        <span className="flex-shrink-0 rounded-md border border-terracotta/40 bg-cream px-2.5 py-1 font-mono text-sm font-semibold tracking-wider text-terracottaText">
          {OFFER_CODE}
        </span>
      </div>

      {active ? (
        <p
          role="status"
          className="motion-safe:animate-soft-in mt-3 flex items-center gap-2 rounded-full bg-sage/15 px-4 py-2.5 text-sm font-medium text-sageDeep"
        >
          <Icon.check className="h-4 w-4 flex-shrink-0" strokeWidth={2.25} />
          Code {OFFER_CODE} activé : −{percent} % appliqué à votre panier
        </p>
      ) : (
        <button
          type="button"
          onClick={activate}
          disabled={loading}
          className="mt-3 w-full rounded-full border border-sage bg-cream px-5 py-2.5 text-sm font-medium text-sageDeep transition-colors hover:bg-sage hover:text-white disabled:cursor-wait disabled:opacity-60"
        >
          {loading ? "Activation…" : "Activer ma remise"}
        </button>
      )}
      {error && (
        <p role="alert" className="mt-2 text-sm text-terracottaText">
          {error}
        </p>
      )}
    </div>
  );
}
