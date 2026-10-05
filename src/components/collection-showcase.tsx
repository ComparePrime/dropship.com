"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { collectionShowcase } from "@/lib/collection-showcase";
import { getProductBySlug } from "@/lib/products";
import { useCurrency } from "@/context/currency-context";
import { formatPrice, getPriceForCurrency } from "@/lib/currency";
import { Icon } from "@/components/icons";

/**
 * Section "Decouvrez la collection" : une photo editoriale (jamais recadree
 * ni modifiee) avec des points interactifs positionnes en pourcentage,
 * entierement pilotes par `src/lib/collection-showcase.ts`.
 *
 * Pour deplacer/ajouter/retirer un point : editer ce fichier de donnees,
 * jamais ce composant. Un point sans `productSlug` reste affiche mais non
 * cliquable ("Bientot disponible") plutot que de pointer vers une fausse
 * URL — a activer des que le vrai produit est identifie/publie.
 */
export function CollectionShowcase() {
  const { currency } = useCurrency();
  const [activeId, setActiveId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { title, tagline, image, hotspots } = collectionShowcase;

  const resolved = hotspots.map((hotspot) => ({
    hotspot,
    product: hotspot.productSlug ? getProductBySlug(hotspot.productSlug) : undefined,
  }));
  const linkedItems = resolved.filter(
    (r): r is typeof r & { product: NonNullable<typeof r.product> } => !!r.product
  );

  // Fermeture robuste multi-device : clic/tap en dehors, ou touche Echap.
  // On evite volontairement onMouseLeave/onBlur pour la fermeture : sur
  // mobile, un tap synthetise aussi des evenements souris qui refermaient
  // la fiche juste apres l'avoir ouverte.
  useEffect(() => {
    if (!activeId) return;
    const handlePointerDown = (event: PointerEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setActiveId(null);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveId(null);
    };
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeId]);

  return (
    <section className="container-content py-16 md:py-24">
      <h2 className="section-title text-center">{title}</h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-ink/70">{tagline}</p>

      {/*
        Les points interactifs sont des freres du cadre image (pas des
        enfants), pour ne jamais etre rognes par son `overflow-hidden` —
        leurs coordonnees en % restent justes car ce conteneur englobe
        exactement les memes dimensions que l'image.
      */}
      <div ref={containerRef} className="relative mx-auto mt-12 max-w-4xl">
        <div className="relative aspect-[5/4] w-full overflow-hidden rounded-xl2 bg-sand md:aspect-[4/3]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 896px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="pointer-events-none absolute inset-0">
          {resolved.map(({ hotspot, product }) => {
            const isActive = activeId === hotspot.id;
            const price = product
              ? getPriceForCurrency(product.priceCHF, product.priceEUR, currency)
              : null;
            const label = product ? product.name : hotspot.placeholderLabel ?? "Bientôt disponible";

            return (
              <div
                key={hotspot.id}
                className="pointer-events-auto absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
              >
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={isActive}
                  aria-label={product ? `Voir ${product.name}` : label}
                  onMouseEnter={() => setActiveId(hotspot.id)}
                  onFocus={() => setActiveId(hotspot.id)}
                  onClick={() => setActiveId(hotspot.id)}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 shadow-lift transition-transform motion-safe:duration-200 md:h-7 md:w-7 ${
                    product
                      ? "border-white bg-ink/75 text-white hover:scale-110"
                      : "border-white/70 bg-ink/40 text-white/80"
                  } ${isActive ? "scale-110" : ""}`}
                >
                  <Icon.plus className="h-4 w-4 md:h-3.5 md:w-3.5" strokeWidth={2.5} />
                </button>

                {/* Fiche au survol/focus (desktop) ou au tap (mobile) */}
                <div
                  role="dialog"
                  aria-hidden={!isActive}
                  className={`absolute left-1/2 top-full z-10 mt-2 w-44 -translate-x-1/2 rounded-xl2 border border-ink/10 bg-cream p-3 text-left shadow-lift transition-opacity motion-safe:duration-150 sm:w-52 ${
                    isActive ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
                  }`}
                >
                  {product ? (
                    <>
                      <div className="flex items-center gap-2">
                        {product.images[0] && (
                          <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-lg bg-sand">
                            <Image
                              src={product.images[0].src}
                              alt=""
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                        <div className="min-w-0">
                          <p className="truncate text-xs font-medium text-ink">{product.name}</p>
                          <p className="text-xs text-ink/60">{formatPrice(price!, currency)}</p>
                        </div>
                      </div>
                      <Link
                        href={`/produit/${product.slug}`}
                        className="btn-primary mt-3 block py-2 text-center text-xs"
                        tabIndex={isActive ? 0 : -1}
                      >
                        Découvrir
                      </Link>
                    </>
                  ) : (
                    <p className="text-center text-xs text-ink/60">{label}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/*
        Liste accessible sous la photo : reprend les memes produits,
        utilisable au clavier/lecteur d'ecran sans dependre du survol.
      */}
      {linkedItems.length > 0 && (
        <ul className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {linkedItems.map(({ hotspot, product }) => {
            const price = getPriceForCurrency(product.priceCHF, product.priceEUR, currency);
            return (
              <li key={hotspot.id}>
                <Link
                  href={`/produit/${product.slug}`}
                  className="flex items-center gap-2 rounded-xl border border-ink/10 bg-white/50 p-2 transition-shadow hover:shadow-card"
                >
                  <div className="relative h-11 w-11 flex-shrink-0 overflow-hidden rounded-lg bg-sand">
                    {product.images[0] && (
                      <Image src={product.images[0].src} alt="" fill className="object-cover" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-xs font-medium text-ink">{product.name}</p>
                    <p className="text-xs text-ink/60">{formatPrice(price, currency)}</p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
