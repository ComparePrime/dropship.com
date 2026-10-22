"use client";

import { Product } from "@/lib/types";
import { useCart } from "@/context/cart-context";
import { useCurrency } from "@/context/currency-context";

import { getPriceRange, hasSizes } from "@/lib/sku";
import { useT } from "@/i18n/provider";

export function FinalCtaSection({ product }: { product: Product }) {
  const t = useT();
  const { addItem } = useCart();
  const { currency, formatPrice } = useCurrency();
  const sized = hasSizes(product);
  const price = getPriceRange(product, currency).min;

  return (
    <section className="container-content py-16 text-center md:py-24">
      <h2 className="section-title">{product.name}</h2>
      <p className="mx-auto mt-3 max-w-lg text-ink/70">{product.subtitle}</p>
      <p className="mt-6 font-display text-2xl text-ink">
        {sized && <span className="mr-1.5 text-base text-ink/60">{t("Dès")}</span>}
        {formatPrice(price, currency)}
      </p>
      {sized ? (
        <a href="#acheter" className="btn-primary mt-6">
          {t("Choisir mon coloris et ma taille")}</a>
      ) : (
        <button type="button" onClick={() => addItem(product, 1)} className="btn-primary mt-6">
          {t("Ajouter au panier")}</button>
      )}
      <p className="mt-4 text-xs text-stone">
        {t("Livraison offerte · Retours gratuits sous {days} jours", { days: product.shipping.returnDays })}
      </p>
    </section>
  );
}
