import { Currency, Product, ProductSize, ProductVariant } from "./types";
import { getPriceForCurrency } from "./currency";

/**
 * Produits declines en coloris x tailles : une ligne de panier est identifiee
 * par `variantLabel` = "<coloris> · <taille>". Ce module est la source unique
 * pour fabriquer, relire et valider ce libelle (navigateur ET serveur : le
 * prix paye et le stock verifie viennent toujours d'ici, jamais du client).
 */
const SEPARATOR = " · ";

export const skuKey = (variantId: string, sizeId: string) => `${variantId}:${sizeId}`;

export function skuLabel(variant: ProductVariant, size: ProductSize): string {
  return `${variant.label}${SEPARATOR}${size.label}`;
}

export function hasSizes(product: Product): boolean {
  return !!product.sizes && product.sizes.length > 0;
}

/** Relit un libelle de panier ; null s'il ne correspond a aucun couple reel du catalogue. */
export function parseSkuLabel(
  product: Product,
  label?: string
): { variant: ProductVariant; size: ProductSize } | null {
  if (!label || !hasSizes(product)) return null;
  for (const variant of product.variants ?? []) {
    for (const size of product.sizes!) {
      if (skuLabel(variant, size) === label) return { variant, size };
    }
  }
  return null;
}

/** Quantite disponible du couple, ou undefined si le stock n'est pas suivi pour ce produit. */
export function getSkuStock(product: Product, variantId?: string, sizeId?: string): number | undefined {
  if (!product.skuStock || !variantId || !sizeId) return undefined;
  return product.skuStock[skuKey(variantId, sizeId)] ?? 0;
}

/** Prix de reference (prix barre) de la taille dans la devise, s'il y en a un reel. */
export function getSizeCompareAt(size: ProductSize, currency: Currency): number | undefined {
  const ref = currency === "CHF" ? size.compareAtPriceCHF : size.compareAtPriceEUR;
  const price = getPriceForCurrency(size.priceCHF, size.priceEUR, currency);
  return ref && ref > price ? ref : undefined;
}

/** Fourchette de prix d'un produit a tailles (sinon prix unique). */
export function getPriceRange(product: Product, currency: Currency): { min: number; max: number } {
  const prices = hasSizes(product)
    ? product.sizes!.map((s) => getPriceForCurrency(s.priceCHF, s.priceEUR, currency))
    : [getPriceForCurrency(product.priceCHF, product.priceEUR, currency)];
  return { min: Math.min(...prices), max: Math.max(...prices) };
}

/**
 * Prix, photo et plafond d'achat d'une ligne de panier. Gere les produits
 * simples, les variantes, les lots et les couples coloris x taille.
 */
export function resolveLine(product: Product, label?: string) {
  const sku = parseSkuLabel(product, label);
  if (sku) {
    return {
      priceCHF: sku.size.priceCHF,
      priceEUR: sku.size.priceEUR,
      compareAtCHF: sku.size.compareAtPriceCHF,
      compareAtEUR: sku.size.compareAtPriceEUR,
      image: sku.variant.image.src,
      cap: getSkuStock(product, sku.variant.id, sku.size.id) ?? Infinity,
    };
  }
  const pack = product.packOffers?.find((p) => p.label === label);
  const variantImage = product.variants?.find((v) => v.label === label)?.image.src;
  return {
    priceCHF: pack?.priceCHF ?? product.priceCHF,
    priceEUR: pack?.priceEUR ?? product.priceEUR,
    compareAtCHF: undefined,
    compareAtEUR: undefined,
    image: variantImage ?? product.images[0]?.src ?? "",
    cap: product.stock && product.stock.source !== "none" ? product.stock.quantity : Infinity,
  };
}
