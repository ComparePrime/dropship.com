"use client";

import { useState } from "react";
import { Product } from "@/lib/types";
import { getGalleryImages } from "@/lib/variant-gallery";
import { ProductGallery } from "@/components/product/gallery";
import { BuyBox } from "@/components/product/buy-box";

/**
 * Relie la galerie et la zone d'achat : la variante choisie dans le BuyBox
 * determine les photos affichees dans la galerie.
 */
export function ProductHero({ product }: { product: Product }) {
  const [variantId, setVariantId] = useState(product.sizes ? undefined : product.variants?.[0]?.id);
  const images = getGalleryImages(product, variantId);

  return (
    <>
      <ProductGallery images={images} />
      <BuyBox product={product} variantId={variantId} onVariantChange={setVariantId} />
    </>
  );
}
