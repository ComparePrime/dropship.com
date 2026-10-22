"use client";

import { Product } from "@/lib/types";
import { useCart } from "@/context/cart-context";
import { useT } from "@/i18n/provider";

export function GiftSection({ product }: { product: Product }) {
  const t = useT();
  const { addItem } = useCart();

  return (
    <section className="bg-sage py-16 text-white md:py-24">
      <div className="container-content text-center">
        <h2 className="font-display text-3xl font-semibold md:text-4xl">
          {t("Une idée cadeau qui sort de l'ordinaire")}</h2>
        <p className="mx-auto mt-4 max-w-xl text-white">
          {t("Offrir un objet un peu différent, qui change des cadeaux habituels : voilà ce que propose {name}.", { name: product.name })}
        </p>
        <button
          type="button"
          onClick={() => addItem(product, 1)}
          className="mt-8 inline-flex items-center justify-center rounded-full bg-cream px-8 py-4 text-sm font-medium tracking-wide text-ink transition-colors hover:bg-cream/90"
        >
          {t("Offrir ce produit")}</button>
      </div>
    </section>
  );
}
