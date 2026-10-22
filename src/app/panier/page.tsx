"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/cart-context";
import { useCurrency } from "@/context/currency-context";
import { formatPrice, getPriceForCurrency } from "@/lib/currency";
import { ProductCardRating } from "@/components/product-card-price";
import { isShippableToNorthAmerica } from "@/lib/shipping";
import { getProductById } from "@/lib/products";
import { getRecommendations } from "@/lib/recommendations";
import { getCardImage } from "@/lib/product-images";
import { Icon } from "@/components/icons";
import { PromoCodeField } from "@/components/promo-code-field";
import { getCartTotals } from "@/lib/cart-totals";
import { countMultiBuyUnits, MULTI_BUY } from "@/lib/multi-buy";
import { useCheckout } from "@/lib/use-checkout";
import { useCampaign } from "@/lib/use-campaign";

export default function CartPage() {
  const { lines, promo, updateQuantity, removeItem } = useCart();
  const { currency } = useCurrency();
  const { startCheckout, loading, error } = useCheckout();
  const campaign = useCampaign();

  const { subtotal, discount, total, includedSavings, discountSource, discountPercent } = getCartTotals(
    lines,
    currency,
    promo?.percent ?? null,
    campaign.running
  );
  const totalSavings = Math.round((discount + includedSavings) * 100) / 100;

  const blockedForNorthAmerica =
    currency === "USD" || currency === "CAD"
      ? lines.filter((l) => {
          const product = getProductById(l.productId);
          return product && !isShippableToNorthAmerica(product);
        })
      : [];

  const suggestions = getRecommendations(
    lines.map((l) => l.slug),
    { excludeSlugs: lines.map((l) => l.slug) }
  );

  return (
    <section className="container-content py-14">
      <h1 className="section-title">Votre panier</h1>

      {lines.length === 0 ? (
        <div className="mt-10 text-center">
          <p className="text-stone">Votre panier est vide pour le moment.</p>
          <Link href="/" className="btn-primary mt-6 inline-flex">
            Continuer mes achats
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <ul className="flex flex-col gap-6">
              {lines.map((line) => (
                <li
                  key={`${line.productId}-${line.variantLabel ?? ""}`}
                  className="flex gap-4 rounded-xl2 border border-ink/10 bg-white/50 p-4"
                >
                  <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl bg-sand">
                    {line.image && (
                      <Image src={line.image} alt={line.name} fill className="object-cover" />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <Link href={`/produit/${line.slug}`} className="font-medium hover:underline">
                          {line.name}
                        </Link>
                        {line.packLabel && (
                          <p className="text-xs text-sage">{line.packLabel}</p>
                        )}
                        {line.variantLabel && (
                          <p className="text-xs text-stone">{line.variantLabel}</p>
                        )}
                      </div>
                      <button
                        onClick={() => removeItem(line.productId, line.variantLabel)}
                        aria-label="Retirer l'article"
                        className="text-stone hover:text-ink"
                      >
                        <Icon.close className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 rounded-full border border-ink/15 px-2 py-1">
                        <button
                          aria-label="Diminuer la quantité"
                          onClick={() => updateQuantity(line.productId, line.quantity - 1, line.variantLabel)}
                        >
                          <Icon.minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-4 text-center text-sm">{line.quantity}</span>
                        <button
                          aria-label="Augmenter la quantité"
                          onClick={() => updateQuantity(line.productId, line.quantity + 1, line.variantLabel)}
                        >
                          <Icon.plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <span>
                        {formatPrice(
                          getPriceForCurrency(line.priceCHF, line.priceEUR, currency) *
                            line.quantity,
                          currency
                        )}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {suggestions.length > 0 && (
              <div className="mt-10">
                <p className="text-sm font-medium text-ink">Vous pourriez aussi aimer</p>
                <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3">
                  {suggestions.map((p) => (
                    <Link key={p.id} href={`/produit/${p.slug}`} className="group">
                      <div className="relative aspect-square overflow-hidden rounded-xl2 bg-sand">
                        {getCardImage(p) && (
                          <Image
                            src={getCardImage(p)!.src}
                            alt={getCardImage(p)!.alt}
                            fill
                            className="object-cover transition-transform group-hover:scale-105"
                          />
                        )}
                      </div>
                      <p className="mt-2 text-xs">{p.name}</p>
                      <ProductCardRating product={p} />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="h-fit rounded-xl2 border border-ink/10 bg-white/60 p-6">
            <PromoCodeField />

            {countMultiBuyUnits(lines) > 0 && countMultiBuyUnits(lines) < MULTI_BUY.minUnits && (
              <p className="mb-3 rounded-lg bg-sage/10 px-3 py-2 text-xs font-medium text-sageDeep">
                Ajoutez une 2ᵉ veste : −{MULTI_BUY.percent} % sur votre panier.
              </p>
            )}
            {blockedForNorthAmerica.length > 0 && (
              <p role="alert" className="mb-3 rounded-lg bg-blush/30 px-3 py-2 text-xs text-terracottaText">
                Livraison aux États-Unis et au Canada indisponible pour :{" "}
                {blockedForNorthAmerica.map((l) => l.name).join(", ")}. Retirez ces articles ou passez en EUR/CHF
                (livraison Europe et Suisse).
              </p>
            )}
            <div className="mt-5 flex items-center justify-between text-sm text-stone">
              <span>Sous-total</span>
              <span>{formatPrice(subtotal, currency)}</span>
            </div>
            {discount > 0 && (
              <div className="mt-2 flex items-center justify-between text-sm text-sage">
                <span>
                  {discountSource === "multi-buy"
                    ? `${MULTI_BUY.label} (−${discountPercent} %)`
                    : `Remise ${promo?.code} (−${discountPercent} %)`}
                </span>
                <span>−{formatPrice(discount, currency)}</span>
              </div>
            )}
            <div className="mt-2 flex items-center justify-between text-sm text-stone">
              <span>Livraison</span>
              <span>Offerte</span>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-ink/10 pt-4 font-display text-xl">
              <span>Total</span>
              <span>{formatPrice(total, currency)}</span>
            </div>
            {totalSavings > 0 && (
              <p className="mt-1 text-right text-sm font-medium text-sage">
                Vous économisez {formatPrice(totalSavings, currency)}
              </p>
            )}

            <button
              onClick={() => startCheckout()}
              disabled={loading || lines.length === 0}
              className="btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Redirection vers le paiement…" : "Passer au paiement"}
            </button>
            {error && (
              <p role="alert" className="mt-3 text-sm text-terracottaText">
                {error}
              </p>
            )}
            <p className="mt-4 text-center text-xs text-stone">
              Paiement sécurisé via Stripe · Retours gratuits 30 jours
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
