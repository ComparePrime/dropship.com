import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getPublishedProducts } from "@/lib/products";
import { siteConfig } from "@/lib/site-config";
import { Icon } from "@/components/icons";
import { Breadcrumbs } from "@/components/breadcrumbs";

const CategoryIcon = Icon.home;

export const metadata: Metadata = {
  title: "Art de la table | Maison Loravie",
  description:
    "Assiettes, verres, linge de table et accessoires de présentation : découvrez la sélection Art de la table de Maison Loravie.",
  alternates: { canonical: `${siteConfig.domain}/collections/maison-decoration/art-de-la-table` },
};

/**
 * Sous-catégorie dédiée de "Maison & décoration". Filtre sur le même tableau
 * `collections` que les univers principaux (aucun produit n'y est encore
 * rattaché : la section reste en état vide tant que le catalogue n'est pas
 * élargi, plutôt que d'afficher des articles inventés).
 */
export default function ArtDeLaTablePage() {
  const products = getPublishedProducts().filter((p) => p.collections.includes("art-de-la-table"));

  return (
    <section className="pb-16 pt-8 md:pb-24">
      <Breadcrumbs
        items={[
          { label: "Accueil", href: "/" },
          { label: "Maison & décoration", href: "/collections/maison-decoration" },
          { label: "Art de la table" },
        ]}
      />

      <div className="container-content mt-6">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sage/10 text-sage">
            <CategoryIcon className="h-5 w-5" strokeWidth={1.5} />
          </span>
          <h1 className="font-display text-3xl font-semibold text-ink md:text-4xl">
            Art de la table
          </h1>
        </div>
        <p className="mt-4 max-w-2xl text-ink/70">
          Assiettes, bols, tasses, verres, couverts, plats de service, linge de table et objets de
          présentation : une sélection pensée pour dresser une table qui donne envie de s'attarder.
        </p>
      </div>

      <div className="container-content mt-12">
        {products.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
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
          </div>
        ) : (
          <div className="mx-auto flex max-w-md flex-col items-center rounded-xl2 border border-ink/10 bg-white/40 px-8 py-14 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sage/10 text-sage">
              <CategoryIcon className="h-6 w-6" strokeWidth={1.5} />
            </span>
            <h2 className="mt-5 font-display text-xl text-ink">
              Notre sélection Art de la table se prépare
            </h2>
            <p className="mt-2 text-sm text-ink/70">
              Nous choisissons actuellement les premières pièces de cette sélection : céramiques,
              verres et linge de table. Revenez bientôt les découvrir.
            </p>
            <Link href="/collections/maison-decoration" className="btn-secondary mt-6">
              Voir Maison & décoration
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
