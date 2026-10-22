"use client";

import { useCart } from "@/context/cart-context";
import { useCurrency } from "@/context/currency-context";
import { formatPrice } from "@/lib/currency";
import { WELCOME_OFFER_PERCENT } from "@/lib/promo";
import { OPEN_WELCOME_POPUP_EVENT } from "@/components/welcome-popup";
import { Icon } from "@/components/icons";

/**
 * Offre de bienvenue de la fiche produit. Le code est personnel : il s'obtient par inscription a
 * la newsletter (fenetre de bienvenue). Une fois un code applique au panier, la remise est
 * reellement deduite au paiement ; le montant affiche ici n'est jamais promis avant cela.
 */
export function WelcomeOffer({ unitPrice, quantity }: { unitPrice: number; quantity: number }) {
  const { currency } = useCurrency();
  const { promo } = useCart();

  const percent = WELCOME_OFFER_PERCENT;
  const saving = Math.round(unitPrice * quantity * 100 * (percent / 100)) / 100;

  if (promo) {
    return (
      <p
        role="status"
        className="mt-4 flex items-center gap-2 rounded-xl2 bg-sage/15 px-4 py-3 text-sm font-medium text-sageDeep"
      >
        <Icon.check className="h-4 w-4 flex-shrink-0" strokeWidth={2.25} />
        Code {promo.code} appliqué : −{promo.percent} % déduit à l&apos;étape de paiement
      </p>
    );
  }

  return (
    <div className="mt-4 rounded-xl2 border border-dashed border-terracotta/50 bg-blush/20 p-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-terracottaText">Offre de bienvenue</p>
      <p className="mt-1 font-display text-xl leading-snug text-ink">
        −{percent} % sur votre première commande
      </p>
      <p className="mt-1 text-sm text-ink/70">
        Soit −{formatPrice(saving, currency)} sur cet article{quantity > 1 ? ` (×${quantity})` : ""}. Inscrivez-vous à
        la newsletter pour recevoir votre code personnel.
      </p>
      <button
        type="button"
        onClick={() => window.dispatchEvent(new Event(OPEN_WELCOME_POPUP_EVENT))}
        className="mt-3 w-full rounded-full border border-sage bg-cream px-5 py-2.5 text-sm font-medium text-sageDeep transition-colors hover:bg-sage hover:text-white"
      >
        Débloquer mes {percent} %
      </button>
    </div>
  );
}
