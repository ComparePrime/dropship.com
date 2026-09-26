"use client";

import { Product } from "@/lib/types";
import { useCart } from "@/context/cart-context";
import { useCurrency } from "@/context/currency-context";
import { formatPrice, getPriceForCurrency } from "@/lib/currency";

export function FinalCtaSection({ product }: { product: Product }) {
  const { addItem } = useCart();
  const { currency } = useCurrency();
  const price = getPriceForCurrency(product.priceCHF, product.priceEUR, currency);

  return (
    <section className="container-content py-16 text-center md:py-24">
      <h2 className="section-title">{product.name}</h2>
      <p className="mx-auto mt-3 max-w-lg text-ink/70">{product.subtitle}</p>
      <p className="mt-6 font-display text-2xl text-ink">{formatPrice(price, currency)}</p>
      <button type="button" onClick={() => addItem(product, 1)} className="btn-primary mt-6">
        Ajouter au panier
      </button>
      <p className="mt-4 text-xs text-stone">
        Livraison offerte · Retours gratuits sous {product.shipping.returnDays} jours
      </p>
    </section>
  );
}
