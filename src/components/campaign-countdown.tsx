"use client";

import { AUTUMN_CAMPAIGN } from "@/lib/campaign";
import { useCampaign } from "@/lib/use-campaign";

const pad = (n: number) => String(n).padStart(2, "0");

/** Compte a rebours de l'Offre d'automne. Disparait automatiquement apres la date de fin. */
export function CampaignCountdown({ variant = "block" }: { variant?: "block" | "bar" | "units" }) {
  const c = useCampaign();
  if (!c.running) return null;

  const units = [
    { label: "j", value: c.days },
    { label: "h", value: pad(c.hours) },
    { label: "min", value: pad(c.minutes) },
    { label: "s", value: pad(c.seconds) },
  ];

  if (variant === "bar") {
    return (
      <span className="font-medium tabular-nums">
        {c.days}j {pad(c.hours)}h {pad(c.minutes)}m {pad(c.seconds)}s
      </span>
    );
  }

  if (variant === "units") {
    return (
      <div className="grid grid-cols-4 gap-2 md:gap-3" role="timer" aria-label="Temps restant pour profiter de l'offre">
        {units.map((u) => (
          <div key={u.label} className="rounded-xl bg-white/15 px-2 py-3 text-center">
            <span className="block font-display text-3xl leading-none tabular-nums md:text-4xl">{u.value}</span>
            <span className="mt-1 block text-[11px] uppercase tracking-wide text-white/80">{u.label}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="rounded-xl2 border border-terracotta/40 bg-terracotta px-4 py-3 text-white">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-white/90">
            {AUTUMN_CAMPAIGN.name}
          </p>
          <p className="text-sm text-white/90">Jusqu&apos;au {AUTUMN_CAMPAIGN.endsAtLabel}</p>
        </div>
        <div
          className="grid grid-cols-4 gap-1.5 sm:flex"
          role="timer"
          aria-label="Temps restant pour profiter de l'offre"
        >
          {units.map((u) => (
            <div key={u.label} className="rounded-lg bg-white/15 px-1.5 py-1 text-center sm:min-w-[2.75rem]">
              <span className="block font-display text-xl leading-none tabular-nums">{u.value}</span>
              <span className="text-[10px] uppercase tracking-wide text-white/80">{u.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
