"use client";

import { Product } from "@/lib/types";
import { useCurrency } from "@/context/currency-context";
import { formatPrice } from "@/lib/currency";
import { getPriceRange, hasSizes } from "@/lib/sku";
import { AUTUMN_CAMPAIGN, getCampaignDeal } from "@/lib/campaign";
import { useCampaign } from "@/lib/use-campaign";

/** Prix d'une carte produit : prix actuel, et pendant l'Offre d'automne, prix de reference, remise et badge. */
export function ProductCardPrice({ product }: { product: Product }) {
  const { currency } = useCurrency();
  const { running } = useCampaign();
  const deal = running ? getCampaignDeal(product, currency) : null;
  const price = getPriceRange(product, currency).min;
  const sized = hasSizes(product);

  return (
    <div className="mt-1 flex flex-wrap items-baseline gap-x-2 gap-y-1">
      <span className={`text-sm ${deal ? "font-semibold text-ink" : "text-ink/70"}`}>
        {sized && <span className="mr-1 font-normal text-ink/60">Dès</span>}
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
