"use client";

import { useState } from "react";
import { Product } from "@/lib/types";
import { useCurrency } from "@/context/currency-context";
import { useCart } from "@/context/cart-context";
import { Countdown } from "@/components/product/countdown";
import { PromoBlock } from "@/components/product/promo-block";
import { RatingStars } from "@/components/product/rating-stars";
import { StockIndicator } from "@/components/product/stock-indicator";
import { DeliveryEstimate } from "@/components/product/delivery-estimate";
import { TrustBadges } from "@/components/trust-badges";
import { Icon, IconName } from "@/components/icons";

export function BuyBox({ product }: { product: Product }) {
  const { currency } = useCurrency();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const hasRealReviews = product.reviews.some((r) => !r.demo);
  const isTracked = !!product.stock && product.stock.source !== "none";
  const isOutOfStock = isTracked && (product.stock?.quantity ?? 0) <= 0;
  const maxQuantity = isTracked ? Math.max(0, product.stock!.quantity) : 99;
  const topBenefits = product.benefits.slice(0, 4);

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
        Benefices mis en avant visuellement en premier (icone + titre + texte),
        pour une comprehension immediate avant meme d'arriver au prix.
      */}
      <ul className="mt-6 flex flex-col gap-4">
        {topBenefits.map((benefit) => {
          const BenefitIcon = Icon[benefit.icon as IconName] ?? Icon.check;
          return (
            <li key={benefit.title} className="flex items-start gap-3">
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-sage/10 text-sage">
                <BenefitIcon className="h-[18px] w-[18px]" strokeWidth={1.5} />
              </span>
              <div>
                <p className="text-sm font-medium text-ink">{benefit.title}</p>
                <p className="mt-0.5 text-sm text-ink/70">{benefit.description}</p>
              </div>
            </li>
          );
        })}
      </ul>

      {/*
        Etoiles/note affichees uniquement si des avis réels existent (regle
        "note réelle uniquement"). Sinon, simple lien discret vers la section avis.
      */}
      {hasRealReviews ? (
        <a href="#avis" className="mt-5 flex items-center gap-2 text-sm">
          <RatingStars value={Math.round(product.ratingAverage)} />
          <span className="text-ink/70">
            {product.ratingAverage.toFixed(1)}/5 · {product.ratingCount} avis
          </span>
        </a>
      ) : (
        <a href="#avis" className="mt-5 inline-block text-sm text-sage underline underline-offset-2">
          Voir les avis
        </a>
      )}

      {/*
        Bloc d'offre : regroupe prix, stock, quantite, CTA et delai de
        livraison dans un seul encart visuellement fort, pour que la decision
        d'achat se prenne sans devoir chercher l'information ailleurs.
      */}
      <div className="mt-6 rounded-xl2 border border-sage/30 bg-white/60 p-5 shadow-card md:p-6">
        <PromoBlock product={product} currency={currency} variant="compact" />

        {product.promotion.active && product.promotion.endsAt && (
          <div className="mt-3">
            <Countdown endsAt={product.promotion.endsAt} />
          </div>
        )}

        <StockIndicator stock={product.stock} />

        {!isOutOfStock && (
          <div className="mt-5 flex items-center gap-3">
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
          className="btn-primary mt-5 w-full text-base disabled:cursor-not-allowed disabled:opacity-40"
        >
          {isOutOfStock ? "Temporairement indisponible" : "Ajouter au panier"}
        </button>

        <div className="mt-5 border-t border-ink/10 pt-4">
          <DeliveryEstimate shipping={product.shipping} />
        </div>
      </div>

      <div className="mt-5 rounded-xl2 border border-ink/10 bg-white/40 p-4">
        <TrustBadges compact />
      </div>
    </div>
  );
}
