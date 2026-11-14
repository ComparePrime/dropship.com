"use client";

import Link from "@/i18n/link";
import { getPublishedProducts } from "@/lib/products";
import { BLACK_MONTH_CAMPAIGN, campaignEndLabel, getCampaignDeal } from "@/lib/campaign";
import { useCampaign } from "@/lib/use-campaign";
import { useCurrency } from "@/context/currency-context";
import { useLocale, useT } from "@/i18n/provider";

/** Bandeau Black Month sur l'accueil. Le "jusqu'a -X %" est calcule sur le catalogue reel. */
export function HomeCampaignBanner() {
  const t = useT();
  const locale = useLocale();
  const { running } = useCampaign();
  const { currency } = useCurrency();
  if (!running) return null;

  const deals = getPublishedProducts()
    .map((p) => getCampaignDeal(p, currency))
    .filter((d): d is NonNullable<typeof d> => !!d);
  if (deals.length === 0) return null;
  const maxPercent = Math.max(...deals.map((d) => d.percent));

  return (
    <section className="container-content pb-4 md:pb-8">
      <div className="relative overflow-hidden rounded-xl2 bg-noir px-6 py-10 text-ivory md:px-14 md:py-14">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,164,92,0.18),transparent_60%)]" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-3 rounded-[1rem] border border-gold/30 md:inset-4" />
        <div className="relative flex flex-col items-center text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold md:text-sm">
            {t(BLACK_MONTH_CAMPAIGN.name)}
          </p>
          <span aria-hidden="true" className="mt-4 block h-px w-14 bg-gold/70" />
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-semibold leading-tight md:text-5xl">
            {t("Jusqu'à −{percent} % sur une sélection de la boutique", { percent: maxPercent })}
          </h2>
          <p className="mt-4 max-w-xl text-ivory/85">
            {t(deals.length > 1 ? "{count} produits concernés, jusqu'au {date}." : "{count} produit concerné, jusqu'au {date}.", {
              count: deals.length,
              date: campaignEndLabel(locale),
            })}
          </p>
          <Link
            href="/collections"
            className="mt-7 inline-flex items-center justify-center rounded-full bg-gold px-9 py-3.5 text-[15px] font-medium text-noir transition-colors hover:bg-ivory"
          >
            {t("Découvrir les offres Black Month")}
          </Link>
        </div>
      </div>
    </section>
  );
}
