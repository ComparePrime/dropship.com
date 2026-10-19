import { Product, ProductImage } from "./types";

/**
 * Photo a utiliser sur une carte produit : la premiere qui n'est ni un visuel
 * d'information (dimensions, caracteristiques) ni une photo d'ambiance avec texte
 * superpose. Retombe sur la premiere photo du produit s'il n'y en a pas d'autre.
 */
export function getCardImage(product: Product): ProductImage | undefined {
  return product.images.find((img) => !img.info && !img.inspiration) ?? product.images[0];
}
