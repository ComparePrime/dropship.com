"use client";

import Link from "@/i18n/link";
import { getPublishedProducts } from "@/lib/products";
import { AUTUMN_CAMPAIGN, getCampaignDeal } from "@/lib/campaign";
import { useCampaign } from "@/lib/use-campaign";
import { useCurrency } from "@/context/currency-context";
import { CampaignCountdown } from "@/components/campaign-countdown";

/** Bandeau de l'Offre d'automne sur l'accueil. Le "jusqu'a -X %" est calcule sur le catalogue reel. */
export function HomeCampaignBanner() {
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
      <div className="overflow-hidden rounded-xl2 bg-terracotta px-6 py-8 text-white md:px-12 md:py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/85">
              {AUTUMN_CAMPAIGN.name}
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold leading-tight md:text-4xl">
              Jusqu&apos;à −{maxPercent} % sur une sélection de la boutique
            </h2>
            <p className="mt-2 text-white/90">
              {deals.length} produit{deals.length > 1 ? "s" : ""} concerné{deals.length > 1 ? "s" : ""}, jusqu&apos;au{" "}
              {AUTUMN_CAMPAIGN.endsAtLabel}.
            </p>
            <Link
              href="/collections"
              className="mt-5 inline-flex items-center justify-center rounded-full bg-cream px-8 py-3.5 text-[15px] font-medium text-ink transition-colors hover:bg-white"
            >
              Profiter de l&apos;offre
            </Link>
          </div>
          <div className="md:min-w-[22rem]">
            <CampaignCountdown variant="units" />
          </div>
        </div>
      </div>
    </section>
  );
}
