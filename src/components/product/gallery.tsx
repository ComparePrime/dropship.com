"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { ProductImage } from "@/lib/types";
import { useT } from "@/i18n/provider";

export function ProductGallery({ images }: { images: ProductImage[] }) {
  const t = useT();
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const current = images[active] ?? images[0];

  // Quand la variante change, la galerie recommence sur sa photo principale.
  const imagesKey = images.map((img) => img.src).join("|");
  useEffect(() => {
    setActive(0);
    scrollerRef.current?.scrollTo({ left: 0, behavior: "auto" });
  }, [imagesKey]);

  const scrollToIndex = (idx: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({ left: idx * el.clientWidth, behavior: "smooth" });
    setActive(idx);
  };

  const handleScroll = () => {
    const el = scrollerRef.current;
    if (!el || el.clientWidth === 0) return;
    const idx = Math.round(el.scrollLeft / el.clientWidth);
    if (idx !== active) setActive(idx);
  };

  return (
    <div>
      {/* Carrousel tactile (mobile) : une image par ecran, defilement au doigt. */}
      <div
        ref={scrollerRef}
        onScroll={handleScroll}
        className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth rounded-xl2 md:hidden"
        style={{ scrollbarWidth: "none" }}
      >
        {images.map((img) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setLightbox(true)}
            className="relative aspect-square w-full flex-shrink-0 snap-start bg-sand"
          >
            <Image src={img.src} alt={t(img.alt)} fill sizes="100vw" className="object-cover" priority={img === images[0]} />
          </button>
        ))}
      </div>

      {/* Desktop/tablette : grande image fixe + bande de vignettes. */}
      <button
        type="button"
        onClick={() => setLightbox(true)}
        className="relative hidden aspect-square w-full overflow-hidden rounded-xl2 bg-sand md:block"
      >
        {current && (
          <Image
            src={current.src}
            alt={t(current.alt)}
            fill
            priority
            sizes="560px"
            className="object-cover"
          />
        )}
      </button>

      {images.length > 1 && (
        <div className="mt-3 flex gap-2.5 overflow-x-auto pb-1 md:mt-4 md:gap-3">
          {images.map((img, idx) => (
            <button
              key={img.src}
              type="button"
              onClick={() => scrollToIndex(idx)}
              aria-label={`Voir l'image ${idx + 1}`}
              className={clsx(
                "relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl border-2 transition-opacity md:h-20 md:w-20",
                idx === active ? "border-sage opacity-100" : "border-transparent opacity-70 hover:opacity-100"
              )}
            >
              <Image src={img.src} alt={t(img.alt)} fill className="object-cover" />
            </button>
          ))}
        </div>
      )}

      {lightbox && current && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4"
          onClick={() => setLightbox(false)}
        >
          <div className="relative h-full w-full max-w-3xl">
            <Image src={current.src} alt={t(current.alt)} fill className="object-contain" />
          </div>
        </div>
      )}
    </div>
  );
}
