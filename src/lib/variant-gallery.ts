import { Product, ProductImage } from "./types";

function dedupe(images: ProductImage[]): ProductImage[] {
  const seen = new Set<string>();
  return images.filter((img) => {
    if (seen.has(img.src)) return false;
    seen.add(img.src);
    return true;
  });
}

/**
 * Photos a afficher dans la galerie pour la variante choisie, dans cet ordre :
 *   1. la photo principale (celle de la variante, sinon la premiere photo) ;
 *   2. les visuels d'information (`info` : dimensions, caracteristiques),
 *      toujours places juste apres la photo principale ;
 *   3. les autres photos de la variante (`variantId`) ;
 *   4. les autres photos communes (sans `variantId`).
 * Les photos d'une AUTRE variante ne sont jamais renvoyees. Une meme photo
 * (meme `src`) n'apparait qu'une fois. Sans variante, ou sans photo dediee,
 * on retombe sur les photos communes du produit.
 */
export function getGalleryImages(product: Product, variantId?: string): ProductImage[] {
  const variant = product.variants?.find((v) => v.id === variantId);
  const common = product.images.filter((img) => !img.variantId);
  const own = variant ? product.images.filter((img) => img.variantId === variant.id) : [];

  // Sans coloris choisi (fiche a tailles), la photo principale commune ouvre la galerie,
  // suivie d'un apercu de chaque coloris.
  const allColours = !variant && product.sizes ? (product.variants ?? []).map((v) => ({ ...v.image, variantId: v.id })) : [];
  const pool = dedupe([
    ...(variant ? [{ ...variant.image, variantId: variant.id }] : []),
    ...own,
    ...common,
    ...allColours,
  ]);
  if (pool.length === 0) return product.images;

  const [main, ...rest] = pool;
  return [main, ...rest.filter((img) => img.info), ...rest.filter((img) => !img.info)];
}
