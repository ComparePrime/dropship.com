"use client";

import { AUTUMN_CAMPAIGN } from "@/lib/campaign";
import { useCampaign } from "@/lib/use-campaign";
import { CampaignCountdown } from "@/components/campaign-countdown";

export function AnnouncementBar() {
  const { running } = useCampaign();

  return (
    <div>
      {running && (
        <div className="bg-terracotta py-2 text-center text-xs tracking-wide text-white">
          <span className="font-semibold uppercase">{AUTUMN_CAMPAIGN.name}</span>
          <span className="hidden sm:inline"> · jusqu&apos;au {AUTUMN_CAMPAIGN.endsAtLabel}</span>
          <span> · se termine dans </span>
          <CampaignCountdown variant="bar" />
        </div>
      )}
      <div className="bg-sage py-2 text-center text-xs tracking-wide text-white">
        Livraison offerte · Expédition sous 24h · Retours gratuits sous 30 jours
      </div>
    </div>
  );
}
