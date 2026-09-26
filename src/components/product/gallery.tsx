"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { ProductImage } from "@/lib/types";

export function ProductGallery({ images }: { images: ProductImage[] }) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const current = images[active] ?? images[0];

  return (
    <div>
      <button
        type="button"
        onClick={() => setLightbox(true)}
        className="relative block aspect-square w-full overflow-hidden rounded-xl2 bg-sand"
      >
        {current && (
          <Image
            src={current.src}
            alt={current.alt}
            fill
            priority
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-cover"
          />
        )}
      </button>

      {images.length > 1 && (
        <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
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
