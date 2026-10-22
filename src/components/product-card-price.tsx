"use client";

import { Product } from "@/lib/types";
import { useCurrency } from "@/context/currency-context";
import { formatPrice } from "@/lib/currency";
import { getPriceRange, hasSizes } from "@/lib/sku";
import { getRealRating } from "@/lib/ratings";
import { Icon } from "@/components/icons";
import { AUTUMN_CAMPAIGN, getCampaignDeal } from "@/lib/campaign";
import { useCampaign } from "@/lib/use-campaign";
import { useT } from "@/i18n/provider";

/**
 * Etoiles + nombre d'avis, uniquement si le produit a de vrais avis verifies
 * (jamais pour des avis demo). Rien n'est rendu sinon.
 */
export function ProductCardRating({ product }: { product: Product }) {
  const t = useT();
  const rating = getRealRating(product);
  if (!rating) return null;
  const label = t("{average} sur 5, {count} avis", { average: rating.average.toFixed(1).replace(".", ","), count: rating.count });
  return (
    <div className="mt-1 flex items-center gap-1.5" role="img" aria-label={label}>
      <span className="flex items-center gap-0.5" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <Icon.star
            key={i}
            className={`h-3.5 w-3.5 ${i < Math.round(rating.average) ? "fill-terracotta text-terracotta" : "text-ink/20"}`}
          />
        ))}
      </span>
      <span className="text-xs text-ink/60" aria-hidden="true">
        {rating.average.toFixed(1).replace(".", ",")} ({rating.count})
      </span>
    </div>
  );
}

/** Prix d'une carte produit : prix actuel, et pendant l'Offre d'automne, prix de reference, remise et badge. */
export function ProductCardPrice({ product }: { product: Product }) {
  const t = useT();
  const { currency } = useCurrency();
  const { running } = useCampaign();
  const deal = running ? getCampaignDeal(product, currency) : null;
  const price = getPriceRange(product, currency).min;
  const sized = hasSizes(product);

  return (
    <>
    <ProductCardRating product={product} />
    <div className="mt-1 flex flex-wrap items-baseline gap-x-2 gap-y-1">
      <span className={`text-sm ${deal ? "font-semibold text-ink" : "text-ink/70"}`}>
        {sized && <span className="mr-1 font-normal text-ink/60">{t("Dès")}</span>}
        {formatPrice(price, currency)}
      </span>
      {deal && (
        <>
          <span className="text-xs text-ink/40 line-through">{formatPrice(deal.referencePrice, currency)}</span>
          <span className="rounded-full bg-terracottaText px-2 py-0.5 text-[11px] font-semibold text-white">
            −{deal.percent}%
          </span>
        </>
      )}
    </div>
    </>
  );
}

/** Badge a poser sur la photo d'une carte produit pendant l'Offre d'automne. */
export function CampaignCardBadge({ product }: { product: Product }) {
  const { currency } = useCurrency();
  const { running } = useCampaign();
  if (!running || !getCampaignDeal(product, currency)) return null;
  return (
    <span className="absolute left-3 top-3 z-10 rounded-full bg-terracotta px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white shadow-card">
      {AUTUMN_CAMPAIGN.name}
    </span>
  );
}
