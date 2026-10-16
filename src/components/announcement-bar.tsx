"use client";

import { AUTUMN_CAMPAIGN } from "@/lib/campaign";
import { useCampaign } from "@/lib/use-campaign";
import { CampaignCountdown } from "@/components/campaign-countdown";

/**
 * Bandeau defilant en haut du site. Les messages sont ceux qui sont reellement
 * vrais pour la boutique (livraison, retours, expedition, campagne en cours).
 * Le defilement s'arrete au survol/toucher et n'existe pas si l'utilisateur a
 * demande de reduire les animations (le bandeau devient alors statique).
 */
export function AnnouncementBar() {
  const { running } = useCampaign();

  const messages = [
    ...(running
      ? [
          <span key="campaign">
            <strong className="font-semibold uppercase">{AUTUMN_CAMPAIGN.name}</strong> · jusqu&apos;au{" "}
            {AUTUMN_CAMPAIGN.endsAtLabel} · se termine dans <CampaignCountdown variant="bar" />
          </span>,
        ]
      : []),
    <span key="ship">Livraison offerte</span>,
    <span key="dispatch">Expédition sous 24h</span>,
    <span key="returns">Retours gratuits sous 30 jours</span>,
    <span key="pay">Paiement 100 % sécurisé</span>,
  ];

  const track = (hidden: boolean) => (
    <ul className="flex flex-shrink-0 items-center" aria-hidden={hidden || undefined}>
      {messages.map((m, i) => (
        <li key={i} className="flex items-center whitespace-nowrap px-6 text-xs font-medium uppercase tracking-wider">
          {m}
          <span className="ml-12 text-white/50" aria-hidden="true">
            ✦
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="overflow-hidden bg-sage py-2.5 text-white">
      <div className="group flex w-max motion-safe:animate-marquee motion-safe:hover:[animation-play-state:paused] motion-reduce:hidden">
        {track(false)}
        {track(true)}
      </div>
      <p className="hidden px-4 text-center text-xs tracking-wide motion-reduce:block">
        Livraison offerte · Expédition sous 24h · Retours gratuits sous 30 jours
      </p>
    </div>
  );
}
