"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Scene } from "@/lib/types";
import { getProductById } from "@/lib/products";
import { useCurrency } from "@/context/currency-context";
import { useCart } from "@/context/cart-context";
import { formatPrice, getPriceForCurrency } from "@/lib/currency";
import { Icon } from "@/components/icons";

/**
 * "Shop the look" : une photo lifestyle réelle avec des points interactifs
 * reliés à de vrais produits du catalogue (jamais de produit inventé ou
 * dupliqué). Les coordonnées des points sont en pourcentage de l'image,
 * donc stables sur mobile, tablette et desktop. La liste sous la photo
 * reprend les mêmes produits pour rester utilisable au clavier et par les
 * lecteurs d'écran, sans dépendre des points cliquables.
 */
export function ShopTheLook({ scene }: { scene: Scene }) {
  const { currency } = useCurrency();
  const { addItem } = useCart();
  const [activeProductId, setActiveProductId] = useState<string | null>(null);

  const items = scene.hotspots
    .map((h) => ({ hotspot: h, product: getProductById(h.productId) }))
    .filter((i) => i.product);

  if (items.length === 0) return null;

  const availableItems = items.filter((i) => {
    const stock = i.product!.stock;
    return !(stock && stock.source !== "none" && stock.quantity <= 0);
  });
  const canAddAllInOneClick = availableItems.length === items.length && items.length > 1;

  const addAllToCart = () => {
    for (const { product } of availableItems) {
      addItem(product!, 1);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-10">
      <div className="relative md:col-span-3">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl2 bg-sand">
          <Image
            src={scene.image.src}
            alt={scene.image.alt}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 60vw, 100vw"
          />

          {items.map(({ hotspot, product }) => (
            <button
              key={hotspot.productId}
              type="button"
              className="absolute flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-ink/80 text-white shadow-lift transition-transform hover:scale-110 motion-safe:animate-stock-glow"
              style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
              aria-label={`Voir ${product!.name}`}
              aria-expanded={activeProductId === hotspot.productId}
              onClick={() =>
                setActiveProductId((current) => (current === hotspot.productId ? null : hotspot.productId))
              }
            >
              <Icon.plus className="h-4 w-4" strokeWidth={2} />
            </button>
          ))}

          {items.map(({ hotspot, product }) => {
            if (activeProductId !== hotspot.productId) return null;
            const price = getPriceForCurrency(product!.priceCHF, product!.priceEUR, currency);
            const isOut =
              !!product!.stock && product!.stock.source !== "none" && product!.stock.quantity <= 0;
            return (
              <div
                key={`card-${hotspot.productId}`}
                className="absolute z-10 w-56 -translate-x-1/2 rounded-xl2 border border-ink/10 bg-cream p-4 shadow-lift"
                style={{
                  left: `${hotspot.x}%`,
                  top: `${Math.min(hotspot.y + 10, 78)}%`,
                }}
              >
                <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-sand">
                  {product!.images[0] && (
                    <Image src={product!.images[0].src} alt="" fill className="object-cover" />
                  )}
                </div>
                <p className="mt-3 text-sm font-medium text-ink">{product!.name}</p>
                <p className="mt-1 text-sm text-ink/70">
                  {isOut ? "Indisponible" : formatPrice(price, currency)}
                </p>
                <div className="mt-3 flex flex-col gap-2">
                  <Link
                    href={`/produit/${product!.slug}`}
                    className="text-center text-xs font-medium text-sage underline underline-offset-2"
                  >
                    Voir la fiche produit
                  </Link>
                  {!isOut && (
                    <button
                      type="button"
                      onClick={() => addItem(product!, 1)}
                      className="btn-primary py-2 text-xs"
                    >
                      Ajouter au panier
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="md:col-span-2">
        <h3 className="font-display text-xl text-ink">{scene.title}</h3>
        <p className="mt-2 text-sm text-ink/70">{scene.description}</p>

        <ul className="mt-6 flex flex-col gap-3">
          {items.map(({ product }) => {
            const price = getPriceForCurrency(product!.priceCHF, product!.priceEUR, currency);
            const isOut =
              !!product!.stock && product!.stock.source !== "none" && product!.stock.quantity <= 0;
            return (
              <li
                key={product!.id}
                className="flex items-center gap-3 rounded-xl2 border border-ink/10 bg-white/50 p-3"
              >
                <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-lg bg-sand">
                  {product!.images[0] && (
                    <Image src={product!.images[0].src} alt="" fill className="object-cover" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <Link
                    href={`/produit/${product!.slug}`}
                    className="block truncate text-sm font-medium text-ink hover:underline"
                  >
                    {product!.name}
                  </Link>
                  <p className="text-xs text-ink/60">
                    {isOut ? "Indisponible" : formatPrice(price, currency)}
                  </p>
                </div>
                {!isOut && (
                  <button
                    type="button"
                    onClick={() => addItem(product!, 1)}
                    aria-label={`Ajouter ${product!.name} au panier`}
                    className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink/70 hover:bg-sand"
                  >
                    <Icon.plus className="h-4 w-4" strokeWidth={1.75} />
                  </button>
                )}
              </li>
            );
          })}
        </ul>

        {canAddAllInOneClick && (
          <button type="button" onClick={addAllToCart} className="btn-primary mt-5 w-full">
            Recréer cette ambiance — tout ajouter au panier
          </button>
        )}
      </div>
    </div>
  );
}
