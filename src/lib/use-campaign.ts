"use client";

import { useEffect, useState } from "react";
import { AUTUMN_CAMPAIGN } from "./campaign";

export interface CampaignState {
  running: boolean;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function compute(): CampaignState {
  const diff = new Date(AUTUMN_CAMPAIGN.endsAt).getTime() - Date.now();
  if (diff <= 0) return { running: false, days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    running: true,
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

/**
 * Etat de la campagne cote navigateur. Le rendu serveur suppose la campagne en
 * cours (pour eviter un decalage a l'hydratation) ; le navigateur corrige
 * aussitot avec l'heure reelle, puis se met a jour chaque seconde.
 */
export function useCampaign(): CampaignState {
  const [state, setState] = useState<CampaignState>({
    running: true,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setState(compute());
    const interval = window.setInterval(() => setState(compute()), 1000);
    return () => window.clearInterval(interval);
  }, []);

  return state;
}
