"use client";

import { Product } from "@/lib/types";
import { useCurrency } from "@/context/currency-context";
import { useCart } from "@/context/cart-context";
import { Countdown } from "@/components/product/countdown";
import { PromoBlock } from "@/components/product/promo-block";
import { RatingStars } from "@/components/product/rating-stars";
import { TrustBadges } from "@/components/trust-badges";
import { Icon } from "@/components/icons";

const ShieldCheck = Icon["shield-check"];
const RotateCcw = Icon["rotate-ccw"];

export function BuyBox({ product }: { product: Product }) {
  const { currency } = useCurrency();
  const { addItem } = useCart();
  const hasRealReviews = product.reviews.some((r) => !r.demo);

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

      <ul className="mt-4 flex flex-col gap-2">
        {product.heroBullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-2 text-sm text-ink/80">
            <Icon.check className="mt-0.5 h-4 w-4 flex-shrink-0 text-sage" strokeWidth={2} />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      {/*
        Etoiles/note affichees uniquement si des avis reels existent (regle
        "note reelle uniquement"). Sinon, simple lien discret vers la section avis.
      */}
      {hasRealReviews ? (
        <a href="#avis" className="mt-3 flex items-center gap-2 text-sm">
          <RatingStars value={Math.round(product.ratingAverage)} />
          <span className="text-ink/70">
            {product.ratingAverage.toFixed(1)}/5 · {product.ratingCount} avis
          </span>
        </a>
      ) : (
        <a href="#avis" className="mt-3 inline-block text-sm text-sage underline underline-offset-2">
          Voir les avis
        </a>
      )}

      <div className="mt-6">
        <PromoBlock product={product} currency={currency} variant="compact" />
      </div>

      {product.promotion.active && product.promotion.endsAt && (
        <div className="mt-2">
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
