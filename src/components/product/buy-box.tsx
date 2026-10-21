"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "@/lib/types";
import { ProductCardRating } from "@/components/product-card-price";
import { getRecommendations } from "@/lib/recommendations";
import { getCardImage } from "@/lib/product-images";
import { useCurrency } from "@/context/currency-context";
import { useCart, buildCartLine } from "@/context/cart-context";
import { useCheckout } from "@/lib/use-checkout";
import { Countdown } from "@/components/product/countdown";
import { PromoBlock } from "@/components/product/promo-block";
import { RatingStars } from "@/components/product/rating-stars";
import { CampaignCountdown } from "@/components/campaign-countdown";
import { getCampaignDeal } from "@/lib/campaign";
import { WelcomeOffer } from "@/components/product/welcome-offer";
import { StockIndicator } from "@/components/product/stock-indicator";
import { ViewerCount } from "@/components/product/viewer-count";
import { DeliveryEstimate } from "@/components/product/delivery-estimate";
import { Icon } from "@/components/icons";
import { formatPrice, getPriceForCurrency } from "@/lib/currency";
import { getPriceRange, getSkuStock, hasSizes, skuLabel } from "@/lib/sku";
import { MULTI_BUY } from "@/lib/multi-buy";
import { StockInfo } from "@/lib/types";

export function BuyBox({
  product,
  variantId,
  onVariantChange,
}: {
  product: Product;
  variantId?: string;
  onVariantChange: (id: string) => void;
}) {
  const { currency } = useCurrency();
  const { addItem } = useCart();
  const { startCheckout, loading: buyLoading, error: buyError } = useCheckout();
  const [quantity, setQuantity] = useState(1);
  const selectedVariantId = variantId;
  const setSelectedVariantId = onVariantChange;
  const selectedVariant = product.variants?.find((v) => v.id === selectedVariantId);
  const [selectedPackLabel, setSelectedPackLabel] = useState<string | undefined>(undefined);
  const selectedPack = product.packOffers?.find((p) => p.label === selectedPackLabel);
  // Pour un lot, le prix barre est celui des memes unites achetees une par une.
  const sized = hasSizes(product);
  const [selectedSizeId, setSelectedSizeId] = useState<string | undefined>(undefined);
  const [sizeError, setSizeError] = useState(false);
  const selectedSize = product.sizes?.find((s) => s.id === selectedSizeId);
  const skuQuantity =
    sized && selectedVariant && selectedSize
      ? getSkuStock(product, selectedVariant.id, selectedSize.id)
      : undefined;
  // Stock du couple coloris x taille choisi (affiche avec le meme indicateur que les autres produits).
  const skuStockInfo: StockInfo | undefined =
    skuQuantity === undefined
      ? undefined
      : { source: "manual", quantity: skuQuantity, referenceCapacity: 15, updatedAt: "" };
  const displayedProduct: Product = selectedSize
    ? {
        ...product,
        priceCHF: selectedSize.priceCHF,
        priceEUR: selectedSize.priceEUR,
        compareAtPriceCHF: selectedSize.compareAtPriceCHF,
        compareAtPriceEUR: selectedSize.compareAtPriceEUR,
      }
    : selectedPack
    ? {
        ...product,
        priceCHF: selectedPack.priceCHF,
        priceEUR: selectedPack.priceEUR,
        compareAtPriceCHF: product.priceCHF * selectedPack.quantity,
        compareAtPriceEUR: product.priceEUR * selectedPack.quantity,
        packLabel: selectedPack.label,
      }
    : product;
  const hasRealReviews = product.reviews.some((r) => !r.demo);
  const isTracked = sized ? skuQuantity !== undefined : !!product.stock && product.stock.source !== "none";
  const trackedQuantity = sized ? (skuQuantity ?? 0) : (product.stock?.quantity ?? 0);
  const isOutOfStock = isTracked && trackedQuantity <= 0;
  const maxQuantity = isTracked ? Math.max(0, trackedQuantity) : 99;
  const unitPrice = selectedSize
    ? getPriceForCurrency(selectedSize.priceCHF, selectedSize.priceEUR, currency)
    : selectedPack
    ? getPriceForCurrency(selectedPack.priceCHF, selectedPack.priceEUR, currency)
    : getPriceForCurrency(product.priceCHF, product.priceEUR, currency);
  const ctaTotal = Math.round(unitPrice * quantity * 100) / 100;
  // Produit a tailles : aucun libelle tant que coloris ET taille ne sont pas choisis (jamais un coloris seul).
  const chosenLabel = sized
    ? selectedVariant && selectedSize
      ? skuLabel(selectedVariant, selectedSize)
      : undefined
    : (selectedPack?.label ?? selectedVariant?.label);
  const priceFrom = getPriceRange(product, currency).min;
  // Jamais plus de 2 produits complementaires, et uniquement des produits
  // reels du catalogue (jamais invente/duplique).
  const addOns = getRecommendations(product.slug);
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
        Etoiles/note affichees uniquement si des avis réels existent (regle
        "note réelle uniquement"). Sinon, simple lien discret vers la section avis.
      */}
      {hasRealReviews && (
        <a href="#avis" className="mt-4 flex items-center gap-2 text-sm">
          <RatingStars value={Math.round(product.ratingAverage)} />
          <span className="text-ink/70">
            {product.ratingAverage.toFixed(1)}/5 · {product.ratingCount} avis
          </span>
        </a>
      )}

      {/*
        Bloc d'offre : regroupe prix, stock, quantite, CTA et delai de
        livraison dans un seul encart visuellement fort, pour que la decision
        d'achat se prenne sans devoir chercher l'information ailleurs.
      */}
      <div className="mt-6 rounded-xl2 border border-sage/30 bg-white/60 p-4 shadow-card sm:p-5 md:p-6">
        {!selectedPack && (sized ? !!(selectedSize ? displayedProduct.compareAtPriceCHF : product.compareAtPriceCHF) : !!getCampaignDeal(product, currency)) && (
          <div className="mb-3">
            <CampaignCountdown />
          </div>
        )}
        {sized && !selectedSize && (
          <p className="mb-2 text-sm font-medium text-ink/70">
            À partir de {formatPrice(priceFrom, currency)} — le prix dépend de la taille
          </p>
        )}
        <PromoBlock
          product={displayedProduct}
          currency={currency}
          variant="compact"
          ignoreCampaign={!!selectedPack}
        />

        {product.promotion.active && product.promotion.endsAt && (
          <div className="mt-3">
            <Countdown endsAt={product.promotion.endsAt} />
          </div>
        )}

        <StockIndicator stock={sized ? skuStockInfo : product.stock} />
        <ViewerCount slug={product.slug} />

        {product.variants && product.variants.length > 0 && (
          <div className="mt-5">
            <span className="text-sm font-medium text-ink/70">
              {sized ? "Coloris" : "Choix"}
              {selectedVariant ? ` — ${selectedVariant.label}` : ""}
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

        {sized && (
          <div className="mt-5" id="choix-taille">
            <div className="flex items-baseline justify-between gap-3">
              <span className="text-sm font-medium text-ink/70">
                Taille{selectedSize ? ` — ${selectedSize.label}` : ""}
              </span>
              {product.sizeGuide && (
                <a href="#guide-des-tailles" className="text-xs font-medium text-terracottaText underline underline-offset-2">
                  Guide des tailles
                </a>
              )}
            </div>
            <div className="mt-2 grid grid-cols-5 gap-2" role="group" aria-label="Choisir une taille">
              {product.sizes!.map((size) => {
                const unavailable = !!selectedVariant && getSkuStock(product, selectedVariant.id, size.id) === 0;
                const active = selectedSizeId === size.id;
                return (
                  <button
                    key={size.id}
                    type="button"
                    onClick={() => {
                      setSelectedSizeId(size.id);
                      setSizeError(false);
                      setQuantity(1);
                    }}
                    aria-pressed={active}
                    title={unavailable ? "Indisponible dans ce coloris" : size.label}
                    className={`rounded-lg border-2 py-2 text-sm font-medium transition-colors ${
                      active
                        ? "border-sage bg-sage/10 text-ink"
                        : "border-ink/10 bg-white/50 text-ink hover:border-ink/30"
                    } ${unavailable ? "text-ink/35 line-through" : ""}`}
                  >
                    {size.label}
                  </button>
                );
              })}
            </div>
            {sizeError && (
              <p role="alert" className="mt-2 text-sm text-terracottaText">
                {selectedVariant ? "Choisissez la taille de votre chien pour continuer." : "Choisissez le coloris puis la taille pour continuer."}
              </p>
            )}
            <p className="mt-2 text-xs text-ink/60">
              Pas sûr de la taille ? Mesurez votre chien et consultez le guide des tailles.
            </p>
            <p className="mt-2 rounded-lg bg-sage/10 px-3 py-2 text-xs font-medium text-sageDeep">
              −{MULTI_BUY.percent} % sur votre panier dès la 2ᵉ veste, quels que soient la taille et le coloris.
            </p>
          </div>
        )}

        {product.packOffers && product.packOffers.length > 0 && (
          <div className="mt-5">
            <span className="text-sm font-medium text-ink/70">Choisissez votre formule</span>
            <div className="mt-2 flex flex-col gap-2">
              {[undefined, ...product.packOffers].map((pack) => {
                const unitCount = pack?.quantity ?? 1;
                const packPrice = getPriceForCurrency(
                  pack?.priceCHF ?? product.priceCHF,
                  pack?.priceEUR ?? product.priceEUR,
                  currency
                );
                const singlePrice = getPriceForCurrency(product.priceCHF, product.priceEUR, currency);
                const saving = Math.round((1 - packPrice / (singlePrice * unitCount)) * 100);
                const checked = selectedPackLabel === pack?.label;
                return (
                  <label
                    key={pack?.label ?? "single"}
                    className={`flex cursor-pointer items-center gap-3 rounded-xl border-2 p-3 transition-colors ${
                      checked ? "border-sage bg-sage/5" : "border-ink/10 bg-white/50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="pack-offer"
                      checked={checked}
                      onChange={() => setSelectedPackLabel(pack?.label)}
                      className="h-4 w-4 flex-shrink-0 accent-sage"
                    />
                    <span className="flex-1 text-sm text-ink">
                      {pack ? pack.label : "À l'unité"}
                      {saving > 0 && (
                        <span className="ml-2 rounded-full bg-terracottaText px-2 py-0.5 text-xs font-semibold text-white">
                          −{saving}%
                        </span>
                      )}
                    </span>
                    <span className="text-sm font-medium text-ink">{formatPrice(packPrice, currency)}</span>
                  </label>
                );
              })}
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
                      {getCardImage(addOn) && (
                        <Image src={getCardImage(addOn)!.src} alt="" fill sizes="44px" className="object-cover" />
                      )}
                    </div>
                    <span className="flex-1 text-sm text-ink">
                      {addOn.name}
                      <ProductCardRating product={addOn} />
                    </span>
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
            if (sized && !chosenLabel) {
              setSizeError(true);
              document.getElementById("choix-taille")?.scrollIntoView({ behavior: "smooth", block: "center" });
              return;
            }
            addItem(product, quantity, chosenLabel);
            for (const addOn of addOns) {
              if (selectedAddOnIds.includes(addOn.id)) addItem(addOn, 1);
            }
          }}
          disabled={isOutOfStock}
          className="btn-primary mt-5 w-full gap-2 py-4 text-base shadow-card disabled:cursor-not-allowed disabled:opacity-40"
        >
          {isOutOfStock ? (
            sized ? "Indisponible dans ce coloris" : "Temporairement indisponible"
          ) : (
            sized && !selectedSize ? (
              selectedVariant ? "Choisir une taille" : "Choisir coloris et taille"
            ) : (
            <>
              {selectedAddOnIds.length > 0
                ? `Ajouter ${1 + selectedAddOnIds.length} articles au panier`
                : "Ajouter au panier"}
              <span aria-hidden="true">•</span>
              <span>{formatPrice(ctaTotal, currency)}</span>
            </>
            )
          )}
        </button>

        {!isOutOfStock && (
          <>
            <button
              type="button"
              onClick={() => {
                if (sized && !chosenLabel) {
                  setSizeError(true);
                  document.getElementById("choix-taille")?.scrollIntoView({ behavior: "smooth", block: "center" });
                  return;
                }
                startCheckout([buildCartLine(product, quantity, chosenLabel)]);
              }}
              disabled={buyLoading}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-ink py-4 text-base font-medium text-white transition-colors hover:bg-charcoal disabled:cursor-wait disabled:opacity-60"
            >
              <Icon.lock className="h-4 w-4" strokeWidth={1.75} />
              {buyLoading ? "Redirection vers le paiement…" : "Acheter maintenant"}
            </button>
            <p className="mt-2 text-center text-xs text-ink/60">
              Paiement express et sécurisé via Stripe
            </p>
            {buyError && (
              <p role="alert" className="mt-2 text-center text-sm text-terracottaText">
                {buyError}
              </p>
            )}
          </>
        )}

        <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-sm text-ink/75">
          <li className="flex items-center gap-1.5">
            <Icon.check className="h-4 w-4 text-sage" strokeWidth={2.25} />
            Retours gratuits {product.shipping.returnDays} jours
          </li>
          <li className="flex items-center gap-1.5">
            <Icon.check className="h-4 w-4 text-sage" strokeWidth={2.25} />
            Livraison {product.shipping.minDays} à {product.shipping.maxDays} jours
          </li>
        </ul>

        {!isOutOfStock && (
          <WelcomeOffer
            unitPrice={getPriceForCurrency(displayedProduct.priceCHF, displayedProduct.priceEUR, currency)}
            quantity={quantity}
          />
        )}

        <div className="mt-5 border-t border-ink/10 pt-4">
          <DeliveryEstimate shipping={product.shipping} />
        </div>
      </div>

      <div className="mt-5 rounded-xl2 bg-sand/70 p-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-sage">Votre commande comprend</p>
        <dl className="mt-3 text-[15px]">
          {[
            [`${product.name}${chosenLabel ? ` · ${chosenLabel}` : ""}`, formatPrice(unitPrice, currency)],
            ["Livraison", `Offerte, expédiée sous ${product.shipping.dispatchWithinHours} h`],
            ["Retours", `Gratuits sous ${product.shipping.returnDays} jours`],
          ].map(([label, value], i) => (
            <div
              key={label}
              className={`flex items-baseline justify-between gap-4 py-2.5 ${
                i > 0 ? "border-t border-dashed border-ink/15" : ""
              }`}
            >
              <dt className="text-ink">{label}</dt>
              <dd className="text-right font-medium text-sage">{value}</dd>
            </div>
          ))}
        </dl>
      </div>

    </div>
  );
}
