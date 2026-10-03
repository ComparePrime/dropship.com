"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { ProductImage } from "@/lib/types";

export function ProductGallery({ images }: { images: ProductImage[] }) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const current = images[active] ?? images[0];

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
            <Image src={img.src} alt={img.alt} fill sizes="100vw" className="object-cover" priority={img === images[0]} />
          </button>
        ))}
      </div>

      {images.length > 1 && (
        <div className="mt-3 flex justify-center gap-1.5 md:hidden">
          {images.map((img, idx) => (
            <button
              key={img.src}
              type="button"
              aria-label={`Voir l'image ${idx + 1}`}
              onClick={() => scrollToIndex(idx)}
              className={clsx(
                "h-1.5 rounded-full transition-all",
                idx === active ? "w-5 bg-sage" : "w-1.5 bg-ink/15"
              )}
            />
          ))}
        </div>
      )}

      {/* Desktop/tablette : grande image fixe + bande de vignettes. */}
      <button
        type="button"
        onClick={() => setLightbox(true)}
        className="relative hidden aspect-square w-full overflow-hidden rounded-xl2 bg-sand md:block"
      >
        {current && (
          <Image
            src={current.src}
            alt={current.alt}
            fill
            priority
            sizes="560px"
            className="object-cover"
          />
        )}
      </button>

      {images.length > 1 && (
        <div className="mt-4 hidden gap-3 overflow-x-auto pb-1 md:flex">
          {images.map((img, idx) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setActive(idx)}
              aria-label={`Voir l'image ${idx + 1}`}
              className={clsx(
                "relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl border transition-opacity",
                idx === active ? "border-ink opacity-100" : "border-transparent opacity-60 hover:opacity-90"
              )}
            >
              <Image src={img.src} alt={img.alt} fill className="object-cover" />
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
            <Image src={current.src} alt={current.alt} fill className="object-contain" />
          </div>
        </div>
      )}
    </div>
  );
}
