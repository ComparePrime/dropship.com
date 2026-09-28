"use client";

import { Product } from "@/lib/types";
import { useCart } from "@/context/cart-context";
import { useCurrency } from "@/context/currency-context";
import { PromoBlock } from "@/components/product/promo-block";
import { TrustBadges } from "@/components/trust-badges";

/** Bloc commercial fort, reprenant l'offre réelle sans jamais fabriquer de fausse promotion. */
export function OfferSection({ product }: { product: Product }) {
  const { addItem } = useCart();
  const { currency } = useCurrency();

  return (
    <section className="bg-sand/50 py-16 md:py-24">
      <div className="container-content text-center">
        <h2 className="section-title">Offre du moment</h2>
        <div className="mx-auto mt-8">
          <PromoBlock product={product} currency={currency} variant="full" />
        </div>
        <div className="mx-auto mt-8 max-w-sm">
          <TrustBadges compact />
        </div>
        <button
          type="button"
          onClick={() => addItem(product, 1)}
          className="btn-primary mt-8"
        >
          Ajouter au panier
        </button>
      </div>
    </section>
  );
}
