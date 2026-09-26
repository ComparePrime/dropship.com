import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProducts } from "@/lib/products";

const collectionLabels: Record<string, string> = {
  chats: "Chats",
  decoration: "Decoration",
  maison: "Maison",
  cadeaux: "Idees cadeaux",
};

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return Object.keys(collectionLabels).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const label = collectionLabels[params.slug];
  if (!label) return {};
  return {
    title: `Collection ${label}`,
    description: `Decouvrez notre collection ${label.toLowerCase()}, une decoration originale inspiree des chats.`,
  };
}

export default function CollectionPage({ params }: Props) {
  const label = collectionLabels[params.slug];
  if (!label) notFound();

  const products = getAllProducts().filter((p) => p.collections.includes(params.slug));

  return (
    <section className="container-content py-14">
      <h1 className="section-title">Collection {label}</h1>
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
        {products.map((product) => (
          <Link key={product.id} href={`/produit/${product.slug}`} className="group">
            <div className="relative aspect-square overflow-hidden rounded-xl2 bg-sand">
              {product.images[0] && (
                <Image
                  src={product.images[0].src}
                  alt={product.images[0].alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              )}
            </div>
            <p className="mt-3 text-sm font-medium text-ink">{product.name}</p>
          </Link>
        ))}
        {products.length === 0 && (
          <p className="col-span-full text-stone">
            De nouveaux produits arrivent prochainement dans cette collection.
          </p>
        )}
      </div>
    </section>
  );
}
