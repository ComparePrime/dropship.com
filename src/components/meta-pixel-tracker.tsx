"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackMeta } from "@/lib/meta-pixel";

/** Pages vues du Pixel Meta lors des changements de page (la première est envoyée au chargement du pixel). */
export function MetaPixelRouteTracker() {
  const pathname = usePathname();
  const first = useRef(true);
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    trackMeta("PageView");
  }, [pathname]);
  return null;
}

/** Evenement ViewContent d'une fiche produit. */
export function MetaViewContent({ id, name, value, group = false }: { id: string; name: string; value: number; group?: boolean }) {
  useEffect(() => {
    // Le pixel peut se charger juste après l'affichage : courte attente avant l'envoi.
    const timer = window.setTimeout(
      () => trackMeta("ViewContent", { content_ids: [id], content_name: name, content_type: group ? "product_group" : "product", value, currency: "EUR" }),
      800
    );
    return () => window.clearTimeout(timer);
  }, [id, name, value, group]);
  return null;
}
