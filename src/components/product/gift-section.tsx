"use client";

import { Product } from "@/lib/types";
import { useCart } from "@/context/cart-context";

export function GiftSection({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <section className="bg-sage py-16 text-white md:py-24">
      <div className="container-content text-center">
        <h2 className="font-display text-3xl font-semibold md:text-4xl">
          Une idée cadeau originale pour les amoureux des chats
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white">
          Offrir un objet un peu différent, qui sort des cadeaux habituels : voilà ce que
          propose {product.name}, pour une personne qui aime les chats autant que les jolis
          détails décoratifs.
        </p>
        <button
          type="button"
          onClick={() => addItem(product, 1)}
          className="mt-8 inline-flex items-center justify-center rounded-full bg-cream px-8 py-4 text-sm font-medium tracking-wide text-ink transition-colors hover:bg-cream/90"
        >
          Offrir ce produit
        </button>
      </div>
    </section>
  );
}
