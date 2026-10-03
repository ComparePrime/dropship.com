"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "@/lib/types";
import { getRelatedProducts } from "@/lib/products";
import { useCurrency } from "@/context/currency-context";
import { useCart } from "@/context/cart-context";
import { Countdown } from "@/components/product/countdown";
import { PromoBlock } from "@/components/product/promo-block";
import { RatingStars } from "@/components/product/rating-stars";
import { StockIndicator } from "@/components/product/stock-indicator";
import { DeliveryEstimate } from "@/components/product/delivery-estimate";
import { TrustBadges } from "@/components/trust-badges";
import { Icon, IconName } from "@/components/icons";
import { formatPrice, getPriceForCurrency } from "@/lib/currency";

export function BuyBox({ product }: { product: Product }) {
  const { currency } = useCurrency();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedVariantId, setSelectedVariantId] = useState(product.variants?.[0]?.id);
  const selectedVariant = product.variants?.find((v) => v.id === selectedVariantId);
  const hasRealReviews = product.reviews.some((r) => !r.demo);
  const isTracked = !!product.stock && product.stock.source !== "none";
  const isOutOfStock = isTracked && (product.stock?.quantity ?? 0) <= 0;
  const maxQuantity = isTracked ? Math.max(0, product.stock!.quantity) : 99;
  const topBenefits = product.benefits.slice(0, 4);
  // Jamais plus de 2 produits complementaires, et uniquement des produits
  // reels du catalogue (jamais invente/duplique).
  const addOns = getRelatedProducts(product.slug, 2);
  const [selectedAddOnIds, setSelectedAddOnIds] = useState<string[]>([]);
  const toggleAddOn = (id: string) =>
    setSelectedAddOnIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

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

        {product.variants && product.variants.length > 0 && (
          <div className="mt-5">
            <span className="text-sm font-medium text-ink/70">
              Choix{selectedVariant ? ` — ${selectedVariant.label}` : ""}
            </span>
            <div className="mt-2 flex flex-wrap gap-2">
              {product.variants.map((variant) => (
                <button
                  key={variant.id}
                  type="button"
                  onClick={() => setSelectedVariantId(variant.id)}
                  aria-label={variant.label}
                  aria-pressed={selectedVariantId === variant.id}
                  title={variant.label}
                  className={`relative h-12 w-12 overflow-hidden rounded-lg border-2 transition-colors ${
                    selectedVariantId === variant.id ? "border-sage" : "border-transparent hover:border-ink/20"
                  }`}
                >
                  <Image src={variant.image.src} alt={variant.label} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>
        )}

        {addOns.length > 0 && (
          <div className="mt-5">
            <span className="text-sm font-medium text-ink/70">Complétez votre commande</span>
            <div className="mt-2 flex flex-col gap-2">
              {addOns.map((addOn) => {
                const addOnPrice = getPriceForCurrency(addOn.priceCHF, addOn.priceEUR, currency);
                const checked = selectedAddOnIds.includes(addOn.id);
                return (
                  <label
                    key={addOn.id}
                    className="flex cursor-pointer items-center gap-3 rounded-xl border border-ink/10 bg-white/50 p-2.5"
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleAddOn(addOn.id)}
                      className="h-4 w-4 flex-shrink-0 accent-sage"
                    />
                    <div className="relative h-11 w-11 flex-shrink-0 overflow-hidden rounded-lg bg-sand">
                      {addOn.images[0] && (
                        <Image src={addOn.images[0].src} alt="" fill className="object-cover" />
                      )}
                    </div>
                    <span className="flex-1 text-sm text-ink">{addOn.name}</span>
                    <span className="text-sm text-ink/70">{formatPrice(addOnPrice, currency)}</span>
                  </label>
                );
              })}
            </div>
          </div>
        )}

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
          onClick={() => {
            addItem(product, quantity, selectedVariant?.label);
            for (const addOn of addOns) {
              if (selectedAddOnIds.includes(addOn.id)) addItem(addOn, 1);
            }
          }}
          disabled={isOutOfStock}
          className="btn-primary mt-5 w-full text-base disabled:cursor-not-allowed disabled:opacity-40"
        >
          {isOutOfStock
            ? "Temporairement indisponible"
            : selectedAddOnIds.length > 0
              ? `Ajouter ${1 + selectedAddOnIds.length} articles au panier`
              : "Ajouter au panier"}
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
