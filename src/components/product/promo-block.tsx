"use client";

import { Product } from "@/lib/types";
import { Currency } from "@/lib/types";
import { getOptionalPrice, getPriceForCurrency } from "@/lib/currency";
import { useCurrency } from "@/context/currency-context";
import { Icon } from "@/components/icons";
import { BLACK_MONTH_CAMPAIGN, campaignEndLabel } from "@/lib/campaign";
import { useCampaign } from "@/lib/use-campaign";
import { useLocale, useT } from "@/i18n/provider";

/**
 * N'affiche un prix barré / une économie que si une vraie promotion est
 * configurée pour ce produit (compareAtPrice réel). Aucun faux prix de
 * référence n'est jamais inventé.
 */
export function PromoBlock({
  product,
  currency,
  variant = "compact",
  ignoreCampaign = false,
}: {
  product: Product;
  currency: Currency;
  variant?: "compact" | "full";
  /** Vrai quand le prix de reference n'est pas celui de la campagne (ex: prix d'un lot compare aux unites). */
  ignoreCampaign?: boolean;
}) {
  const t = useT();
  const locale = useLocale();
  const { formatPrice } = useCurrency();
  const { running } = useCampaign();
  const price = getPriceForCurrency(product.priceCHF, product.priceEUR, currency);
  const compareAt = getOptionalPrice(product.compareAtPriceCHF, product.compareAtPriceEUR, currency);
  const hasRealPromotion =
    product.promotion.active && !!compareAt && compareAt > price && (ignoreCampaign || running);
  const savings = hasRealPromotion ? compareAt! - price : 0;
  const discountPercent = hasRealPromotion ? Math.round((savings / compareAt!) * 100) : 0;

  if (!hasRealPromotion) {
    return (
      <div className={variant === "full" ? "text-center" : undefined}>
        <span className="font-display text-3xl text-ink">{formatPrice(price, currency)}</span>
        {product.packLabel && (
          <p className="mt-1 text-sm font-medium text-sage">{t(product.packLabel)}</p>
        )}
      </div>
    );
  }

  const black = !ignoreCampaign;
  const frame = black ? "border-gold/50 bg-ivory" : "border-terracotta/25 bg-blush/25";
  return (
    <div
      className={
        variant === "full"
          ? `mx-auto max-w-md rounded-xl2 border p-6 text-center md:p-8 ${frame}`
          : `rounded-xl2 border p-4 ${frame}`
      }
    >
      <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase ${black ? "bg-noir tracking-[0.16em] text-gold" : "motion-safe:animate-promo-pulse bg-terracotta tracking-wide text-white"}`}>
        {!black && <Icon.flame className="h-3.5 w-3.5" strokeWidth={2} />}
        {t(ignoreCampaign ? product.promotion.label : BLACK_MONTH_CAMPAIGN.name)}
      </span>

      {product.packLabel && (
        <p className="mt-3 text-sm font-medium uppercase tracking-wide text-terracottaText">
          {t(product.packLabel)}
        </p>
      )}

      <div className="mt-3 flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1">
        <span className="whitespace-nowrap font-display text-3xl text-ink sm:text-4xl">{formatPrice(price, currency)}</span>
        <span className="whitespace-nowrap text-base text-ink/40 line-through sm:text-lg" aria-label={t("Prix de référence")}>
          {formatPrice(compareAt!, currency)}
        </span>
        {discountPercent > 0 && (
          <span className={`rounded-full px-2.5 py-0.5 text-sm font-semibold ${black ? "bg-noir text-gold" : "bg-terracottaText text-white"}`}>
            −{discountPercent}%
          </span>
        )}
      </div>

      <p className="mt-2 text-center text-sm font-medium text-sage">
        {t("Vous économisez {amount}", { amount: formatPrice(savings, currency) })}
      </p>
      {black && (
        <p className="mt-1 text-center text-xs text-ink/60">
          {t("Offre valable jusqu'au {date}", { date: campaignEndLabel(locale) })}
        </p>
      )}
    </div>
  );
}
