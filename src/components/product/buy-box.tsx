"use client";

import { Product } from "@/lib/types";
import { useCurrency } from "@/context/currency-context";
import { useCart } from "@/context/cart-context";
import { formatPrice, getPriceForCurrency } from "@/lib/currency";
import { Countdown } from "@/components/product/countdown";
import { TrustBadges } from "@/components/trust-badges";
import { Icon } from "@/components/icons";

const ShieldCheck = Icon["shield-check"];
const RotateCcw = Icon["rotate-ccw"];

export function BuyBox({ product }: { product: Product }) {
  const { currency } = useCurrency();
  const { addItem } = useCart();
  const price = getPriceForCurrency(product.priceCHF, product.priceEUR, currency);
  const compareAt =
    currency === "CHF" ? product.compareAtPriceCHF : product.compareAtPriceEUR;

  return (
    <div id="acheter">
      <span className="inline-block rounded-full bg-blush/40 px-3 py-1 text-xs font-medium tracking-wide text-terracottaText">
        {product.badge}
      </span>

      <p className="mt-4 text-xs font-medium uppercase tracking-widest text-sage">
        {product.name}
      </p>

      {/* Headline oriente benefice : le vrai H1 de la page, pas le titre fournisseur. */}
      <h1 className="mt-2 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
        {product.headline}
      </h1>

      <p className="mt-3 text-base text-ink/70">{product.subtitle}</p>

      {/*
        Pas d'etoiles ni de note affichees ici tant qu'aucune donnee d'avis reelle
        n'existe (regle "note reelle uniquement"). Un lien discret renvoie vers la
        section avis des qu'elle existe.
      */}
      <a href="#avis" className="mt-3 inline-block text-sm text-sage underline underline-offset-2">
        Voir les avis
      </a>

      <div className="mt-6 flex items-baseline gap-3">
        {compareAt && (
          <span className="text-lg text-ink/40 line-through">
            {formatPrice(compareAt, currency)}
          </span>
        )}
        <span className="font-display text-3xl text-ink">{formatPrice(price, currency)}</span>
      </div>

      {product.promotion.active && (
        <div className="mt-2">
          <p className="text-sm font-medium text-terracottaText">{product.promotion.label}</p>
          <Countdown endsAt={product.promotion.endsAt} />
        </div>
      )}

      <div className="mt-6 rounded-xl2 border border-ink/10 bg-white/40 p-4">
        <TrustBadges compact />
      </div>

      <button
        type="button"
        onClick={() => addItem(product, 1)}
        className="btn-primary mt-6 w-full text-base"
      >
        Ajouter au panier
      </button>

      <div className="mt-4 flex items-center justify-center gap-6 text-xs text-stone">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="h-4 w-4" strokeWidth={1.5} />
          Paiement securise
        </span>
        <span className="flex items-center gap-1.5">
          <RotateCcw className="h-4 w-4" strokeWidth={1.5} />
          Retours gratuits 30 jours
        </span>
      </div>
    </div>
  );
}
