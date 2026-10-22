"use client";

import { Product } from "@/lib/types";
import { useCart } from "@/context/cart-context";
import { hasSizes } from "@/lib/sku";
import { useT } from "@/i18n/provider";

/**
 * CTA intermédiaire, à placer après une nouvelle raison d'acheter (jamais deux fois
 * consécutivement avec le même message).
 */
export function InlineCta({ product, text }: { product: Product; text: string }) {
  const t = useT();
  const { addItem } = useCart();

  return (
    <div className="container-content flex flex-col items-center gap-4 py-10 text-center">
      <p className="max-w-sm font-display text-lg text-ink">{text}</p>
      {hasSizes(product) ? (
        <a href="#acheter" className="btn-primary">
          {t("Choisir mon coloris et ma taille")}</a>
      ) : (
        <button type="button" onClick={() => addItem(product, 1)} className="btn-primary">
          {t("Ajouter au panier")}</button>
      )}
    </div>
  );
}
