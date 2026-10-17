import Image from "next/image";
import { Product } from "@/lib/types";

/**
 * Photos d'ambiance du produit (marquees `inspiration` dans products.ts). Ce sont des
 * visuels d'illustration de la marque : ils ne sont jamais presentes comme des
 * temoignages ou des photos de clients.
 */
export function InspirationSection({ product }: { product: Product }) {
  const images = product.images.filter((img) => img.inspiration);
  if (images.length === 0) return null;

  return (
    <section className="py-14 md:py-20">
      <div className="container-content">
        <h2 className="section-title">Dans votre intérieur</h2>
        <p className="mt-3 max-w-xl text-ink/70">
          Une lumière douce pour le soir, un cadeau qui marque, un détail qui change l&apos;ambiance.
        </p>
      </div>

      <div className="container-content">
      <ul
        className="-mx-4 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0"
        style={{ scrollbarWidth: "none" }}
      >
        {images.map((img) => (
          <li key={img.src} className="w-[78%] flex-shrink-0 snap-center sm:w-[46%] md:w-auto">
            <figure>
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl2 bg-sand">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 78vw"
                  className="object-cover"
                />
              </div>
              {img.caption && (
                <figcaption className="mt-3 text-center text-sm text-ink/70">{img.caption}</figcaption>
              )}
            </figure>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-center text-xs text-ink/50 md:text-left">Visuels d&apos;illustration.</p>
      </div>
    </section>
  );
}
