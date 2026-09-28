"use client";

import { Product } from "@/lib/types";
import { useCart } from "@/context/cart-context";
import { useCurrency } from "@/context/currency-context";
import { formatPrice, getPriceForCurrency } from "@/lib/currency";
import { Icon } from "@/components/icons";

/** Justifie le prix par ce qui est réellement inclus, sans faux prix barre. */
export function ValueStackSection({ product }: { product: Product }) {
  const { addItem } = useCart();
  const { currency } = useCurrency();
  const price = getPriceForCurrency(product.priceCHF, product.priceEUR, currency);

  return (
    <section className="container-content py-16 md:py-24">
      <div className="mx-auto max-w-xl rounded-xl2 border border-ink/10 bg-white/60 p-8 text-center md:p-12">
        <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">
          Ce que vous obtenez
        </h2>
        <ul className="mx-auto mt-6 flex max-w-sm flex-col gap-3 text-left">
          {product.valueStack.map((item) => (
            <li key={item} className="flex items-start gap-2 text-ink/80">
              <Icon.check className="mt-1 h-4 w-4 flex-shrink-0 text-sage" strokeWidth={2} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 font-display text-3xl text-ink">{formatPrice(price, currency)}</p>
        <button type="button" onClick={() => addItem(product, 1)} className="btn-primary mt-6">
          Ajouter au panier
        </button>
      </div>
    </section>
  );
}
