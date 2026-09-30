"use client";

import { useState } from "react";
import { Product } from "@/lib/types";
import { useCurrency } from "@/context/currency-context";
import { useCart } from "@/context/cart-context";
import { Countdown } from "@/components/product/countdown";
import { PromoBlock } from "@/components/product/promo-block";
import { RatingStars } from "@/components/product/rating-stars";
import { StockIndicator } from "@/components/product/stock-indicator";
import { TrustBadges } from "@/components/trust-badges";
import { Icon } from "@/components/icons";

const ShieldCheck = Icon["shield-check"];
const RotateCcw = Icon["rotate-ccw"];

export function BuyBox({ product }: { product: Product }) {
  const { currency } = useCurrency();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const hasRealReviews = product.reviews.some((r) => !r.demo);
  const isTracked = !!product.stock && product.stock.source !== "none";
  const isOutOfStock = isTracked && (product.stock?.quantity ?? 0) <= 0;
  const maxQuantity = isTracked ? Math.max(0, product.stock!.quantity) : 99;

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
        Etoiles/note affichees uniquement si des avis réels existent (regle
        "note réelle uniquement"). Sinon, simple lien discret vers la section avis.
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

      <StockIndicator stock={product.stock} />

      <div className="mt-6 rounded-xl2 border border-ink/10 bg-white/40 p-4">
        <TrustBadges compact />
      </div>

      {!isOutOfStock && (
        <div className="mt-6 flex items-center gap-3">
          <span className="text-sm font-medium text-ink/70">Quantité</span>
          <div className="flex items-center rounded-full border border-ink/15">
            <button
              type="button"
              aria-label="Diminuer la quantité"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="flex h-9 w-9 items-center justify-center text-ink/70 hover:text-ink"
            >
              <Icon.minus className="h-4 w-4" strokeWidth={1.75} />
            </button>
            <span className="w-6 text-center text-sm font-medium text-ink">{quantity}</span>
            <button
              type="button"
              aria-label="Augmenter la quantité"
              onClick={() => setQuantity((q) => Math.min(maxQuantity, q + 1))}
              disabled={isTracked && quantity >= maxQuantity}
              className="flex h-9 w-9 items-center justify-center text-ink/70 hover:text-ink disabled:opacity-30"
            >
              <Icon.plus className="h-4 w-4" strokeWidth={1.75} />
            </button>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => addItem(product, quantity)}
        disabled={isOutOfStock}
        className="btn-primary mt-6 w-full text-base disabled:cursor-not-allowed disabled:opacity-40"
      >
        {isOutOfStock ? "Temporairement indisponible" : "Ajouter au panier"}
      </button>

      <div className="mt-4 flex items-center justify-center gap-6 text-xs text-stone">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="h-4 w-4" strokeWidth={1.5} />
          Paiement sécurisé
        </span>
        <span className="flex items-center gap-1.5">
          <RotateCcw className="h-4 w-4" strokeWidth={1.5} />
          Retours gratuits 30 jours
        </span>
      </div>
    </div>
  );
}
