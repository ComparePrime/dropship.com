"use client";

import { useEffect, useState } from "react";

function getRemaining(endsAt: string) {
  const diff = new Date(endsAt).getTime() - Date.now();
  if (diff <= 0) return null;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

/** N'est rendu que si une vraie date de fin de promotion est configuree. */
export function Countdown({ endsAt }: { endsAt?: string }) {
  const [remaining, setRemaining] = useState(() => (endsAt ? getRemaining(endsAt) : null));

  useEffect(() => {
    if (!endsAt) return;
    const interval = setInterval(() => setRemaining(getRemaining(endsAt)), 1000);
    return () => clearInterval(interval);
  }, [endsAt]);

  if (!endsAt || !remaining) return null;

  return (
    <div className="flex items-center gap-2 text-xs text-ink/70">
      <span>Se termine dans</span>
      <div className="flex gap-1 font-medium tabular-nums">
        <span>{remaining.days}j</span>
        <span>{String(remaining.hours).padStart(2, "0")}h</span>
        <span>{String(remaining.minutes).padStart(2, "0")}m</span>
        <span>{String(remaining.seconds).padStart(2, "0")}s</span>
      </div>
    </div>
  );
}
