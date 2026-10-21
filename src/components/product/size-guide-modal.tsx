"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { SizeGuide } from "@/lib/types";
import { Icon } from "@/components/icons";
import { SizeGuideTable } from "@/components/product/size-guide-table";

/** Bouton bien visible pres du choix de taille : ouvre le guide sans quitter la zone d'achat. */
export function SizeGuideButton({ guide }: { guide: SizeGuide }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border-2 border-terracotta/60 bg-blush/30 px-4 py-2.5 text-sm font-semibold text-terracottaText transition-colors hover:bg-blush/50"
      >
        <Icon.ruler className="h-4 w-4" strokeWidth={2} />
        Guide des tailles : trouver la taille de mon chien
      </button>

      {open && (
        <div className="fixed inset-0 z-[998] flex items-end justify-center md:items-center" role="dialog" aria-modal="true" aria-label={guide.title}>
          <button type="button" aria-label="Fermer le guide des tailles" onClick={() => setOpen(false)} className="absolute inset-0 bg-ink/50" />
          <div className="relative flex max-h-[90vh] w-full max-w-4xl flex-col rounded-t-xl2 bg-cream shadow-lift md:rounded-xl2">
            <div className="flex items-start justify-between gap-4 border-b border-ink/10 px-5 py-4">
              <div>
                <h2 className="font-display text-2xl text-ink">{guide.title}</h2>
                <p className="mt-1 text-sm text-ink/70">{guide.intro}</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Fermer"
                className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink/70 hover:text-ink"
              >
                <Icon.close className="h-4 w-4" />
              </button>
            </div>
            <div className="overflow-y-auto px-5 py-4">
              {guide.image && (
                <Image
                  src={guide.image.src}
                  alt={guide.image.alt}
                  width={1254}
                  height={1254}
                  sizes="(min-width: 768px) 360px, 90vw"
                  className="mx-auto mb-5 w-full max-w-sm rounded-xl2"
                />
              )}
              <SizeGuideTable guide={guide} />
              <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm text-ink/70">
                {guide.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
