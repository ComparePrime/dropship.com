"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/icons";

const HEARTBEAT_MS = 20_000;
/** En dessous, rien n'est affiche : un seul visiteur, c'est vous-meme. */
const MIN_VIEWERS_TO_DISPLAY = 2;

function getVisitorId(): string {
  try {
    const key = "ml_visitor";
    let id = window.sessionStorage.getItem(key);
    if (!id) {
      id = crypto.randomUUID();
      window.sessionStorage.setItem(key, id);
    }
    return id;
  } catch {
    return crypto.randomUUID();
  }
}

/**
 * Nombre REEL de personnes ayant cette fiche ouverte en ce moment (signal de
 * presence anonyme toutes les 20 s, voir /api/presence). Aucun chiffre
 * simule : si personne d'autre n'est present, ou si le comptage est
 * indisponible, rien ne s'affiche.
 */
export function ViewerCount({ slug }: { slug: string }) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const visitorId = getVisitorId();
    let cancelled = false;

    const ping = async () => {
      if (document.visibilityState !== "visible") return;
      try {
        const res = await fetch("/api/presence", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ slug, visitorId }),
          cache: "no-store",
        });
        if (!res.ok) return;
        const data = (await res.json()) as { count?: number };
        if (!cancelled && typeof data.count === "number") setCount(data.count);
      } catch {
        // comptage indisponible : on n'affiche rien
      }
    };

    ping();
    const timer = window.setInterval(ping, HEARTBEAT_MS);
    document.addEventListener("visibilitychange", ping);
    return () => {
      cancelled = true;
      window.clearInterval(timer);
      document.removeEventListener("visibilitychange", ping);
    };
  }, [slug]);

  if (count === null || count < MIN_VIEWERS_TO_DISPLAY) return null;

  return (
    <p className="mt-3 flex items-center gap-2 text-sm text-ink/70" aria-live="polite">
      <Icon.eye className="h-4 w-4 flex-shrink-0 text-sage" strokeWidth={1.5} />
      <span>
        {count} personnes regardent ce produit en ce moment
      </span>
    </p>
  );
}
