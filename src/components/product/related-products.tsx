"use client";

import Link from "@/i18n/link";
import Image from "next/image";
import { Product } from "@/lib/types";
import { useCurrency } from "@/context/currency-context";
import { getCardImage } from "@/lib/product-images";
import { ProductCardRating } from "@/components/product-card-price";
import { formatPrice, getPriceForCurrency } from "@/lib/currency";

export function RelatedProducts({ products }: { products: Product[] }) {
  const { currency } = useCurrency();

  if (products.length === 0) return null;

  return (
    <section className="container-content py-16 md:py-24">
      <h2 className="section-title text-center">Vous pourriez également aimer</h2>
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/produit/${product.slug}`}
            className="group"
          >
            <div className="relative aspect-square overflow-hidden rounded-xl2 bg-sand">
              {getCardImage(product) && (
                <Image
                  src={getCardImage(product)!.src}
                  alt={getCardImage(product)!.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              )}
            </div>
            <p className="mt-3 text-sm font-medium text-ink">{product.name}</p>
            <ProductCardRating product={product} />
            <p className="text-sm text-stone">
              {formatPrice(getPriceForCurrency(product.priceCHF, product.priceEUR, currency), currency)}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
