import { Product, ProductImage } from "./types";

/**
 * Photos a afficher dans la galerie pour la variante choisie :
 *   1. la photo principale de la variante (`variant.image`) ;
 *   2. les autres photos du produit marquees pour cette variante (`variantId`) ;
 *   3. les photos communes (sans `variantId`) : dimensions, caracteristiques, etc.
 * Les photos d'une AUTRE variante ne sont jamais renvoyees. Une meme photo
 * (meme `src`) n'apparait qu'une fois. Sans variante ou sans photo dediee, on
 * retombe sur les photos communes du produit.
 */
export function getGalleryImages(product: Product, variantId?: string): ProductImage[] {
  const variant = product.variants?.find((v) => v.id === variantId);
  if (!variant) {
    const common = product.images.filter((img) => !img.variantId);
    return common.length > 0 ? common : product.images;
  }

  const own = product.images.filter((img) => img.variantId === variant.id);
  const common = product.images.filter((img) => !img.variantId);
  const ordered = [{ ...variant.image, variantId: variant.id }, ...own, ...common];

  const seen = new Set<string>();
  return ordered.filter((img) => {
    if (seen.has(img.src)) return false;
    seen.add(img.src);
    return true;
  });
}
