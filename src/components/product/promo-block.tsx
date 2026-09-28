import { Product } from "@/lib/types";
import { Currency } from "@/lib/types";
import { formatPrice, getPriceForCurrency } from "@/lib/currency";
import { Icon } from "@/components/icons";

/**
 * N'affiche un prix barré / une économie que si une vraie promotion est
 * configurée pour ce produit (compareAtPrice réel). Aucun faux prix de
 * référence n'est jamais inventé.
 */
export function PromoBlock({
  product,
  currency,
  variant = "compact",
}: {
  product: Product;
  currency: Currency;
  variant?: "compact" | "full";
}) {
  const price = getPriceForCurrency(product.priceCHF, product.priceEUR, currency);
  const compareAt =
    currency === "CHF" ? product.compareAtPriceCHF : product.compareAtPriceEUR;
  const hasRealPromotion = product.promotion.active && !!compareAt && compareAt > price;
  const savings = hasRealPromotion ? compareAt! - price : 0;

  if (!hasRealPromotion) {
    return (
      <div className={variant === "full" ? "text-center" : undefined}>
        <span className="font-display text-3xl text-ink">{formatPrice(price, currency)}</span>
        {product.packLabel && (
          <p className="mt-1 text-sm font-medium text-sage">{product.packLabel}</p>
        )}
      </div>
    );
  }

  return (
    <div
      className={
        variant === "full"
          ? "mx-auto max-w-md rounded-xl2 border border-terracotta/25 bg-blush/25 p-6 text-center md:p-8"
          : "rounded-xl2 border border-terracotta/25 bg-blush/25 p-4"
      }
    >
      <span className="motion-safe:animate-promo-pulse inline-flex items-center gap-1.5 rounded-full bg-terracotta px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
        <Icon.flame className="h-3.5 w-3.5" strokeWidth={2} />
        {product.promotion.label}
      </span>

      {product.packLabel && (
        <p className="mt-3 text-sm font-medium uppercase tracking-wide text-terracottaText">
          {product.packLabel}
        </p>
      )}

      <div className="mt-2 flex items-baseline justify-center gap-3">
        <span className="text-lg text-ink/40 line-through">
          {formatPrice(compareAt!, currency)}
        </span>
        <span className="font-display text-3xl text-ink">{formatPrice(price, currency)}</span>
      </div>

      <p className="mt-2 text-sm font-medium text-sage">
        Économisez {formatPrice(savings, currency)}
      </p>
    </div>
  );
}
