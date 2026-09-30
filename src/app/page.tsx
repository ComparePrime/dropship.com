import Link from "next/link";
import Image from "next/image";
import { getPublishedProducts } from "@/lib/products";
import { getPublishedScenes } from "@/lib/scenes";
import { TrustBadges } from "@/components/trust-badges";
import { ShopTheLook } from "@/components/shop-the-look";
import { siteConfig } from "@/lib/site-config";
import { categories } from "@/lib/categories";
import { Icon } from "@/components/icons";
import { formatPrice, getPriceForCurrency } from "@/lib/currency";

const ChevronRight = Icon["chevron-right"];

export default function HomePage() {
  const products = getPublishedProducts();
  const featured = products[0];
  const scenes = getPublishedScenes();

  return (
    <>
      {/* 1. Hero lifestyle */}
      <section className="container-content grid grid-cols-1 items-center gap-10 py-12 md:grid-cols-2 md:gap-16 md:py-20">
        <div>
          <span className="inline-block rounded-full bg-blush/40 px-3 py-1 text-xs font-medium tracking-wide text-terracottaText">
            Maison Loravie
          </span>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
            {siteConfig.slogan}
          </h1>
          <p className="mt-4 max-w-md text-ink/80">{siteConfig.description}</p>
          <Link href={`/produit/${featured.slug}`} className="btn-primary mt-8">
            Découvrir Maison Loravie
          </Link>
          <div className="mt-10">
            <TrustBadges />
          </div>
        </div>
        {featured.images[0] && (
          <div className="relative aspect-square w-full overflow-hidden rounded-xl2 bg-sand">
            <Image
              src={featured.images[0].src}
              alt={featured.images[0].alt}
              fill
              priority
              className="object-cover"
            />
          </div>
        )}
      </section>

      {/*
        2. "Recréez cette ambiance" : uniquement si au moins une mise en
        scène réelle existe (photo + produits authentiques). Masquée sinon
        plutôt que de la remplir artificiellement.
      */}
      {scenes.length > 0 && (
        <section className="bg-white/40 py-16 md:py-24">
          <div className="container-content">
            <h2 className="section-title text-center">Recréez cette ambiance</h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-ink/70">
              Une photo, une ambiance, et les objets qui la composent — prêts à rejoindre votre
              intérieur.
            </p>
            <div className="mt-12 flex flex-col gap-16">
              {scenes.map((scene) => (
                <ShopTheLook key={scene.id} scene={scene} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. Nouveautés réellement disponibles, sans grille interminable */}
      <section className="container-content py-16 md:py-24">
        <h2 className="section-title text-center">Nouveautés</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-ink/70">
          Une sélection actuelle plutôt qu'un catalogue sans fin : voici ce qui vient d'arriver
          chez Maison Loravie.
        </p>
        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
          {products.map((product) => {
            const price = getPriceForCurrency(product.priceCHF, product.priceEUR, "CHF");
            return (
              <Link
                key={product.id}
                href={`/produit/${product.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl2 border border-ink/10 bg-white/50 transition-shadow hover:shadow-card"
              >
                <div className="relative aspect-square w-full overflow-hidden bg-sand">
                  {product.images[0] && (
                    <Image
                      src={product.images[0].src}
                      alt={product.images[0].alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="p-5">
                  <span className="text-xs font-medium uppercase tracking-wide text-sage">
                    {product.badge}
                  </span>
                  <p className="mt-1 font-display text-lg text-ink">{product.name}</p>
                  <p className="mt-1 text-sm text-ink/70">{formatPrice(price, "CHF")}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 4. Les quatre univers éditoriaux (inclut Bébé & famille, même en attente de produits) */}
      <section className="bg-sand/60 py-16 md:py-24">
        <div className="container-content">
          <h2 className="section-title text-center">Découvrez nos univers</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-ink/70">
            Maison Loravie choisit avec soin des objets pour la maison, la famille et ceux que
            vous aimez, organisés en quatre univers.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            {categories.map((c) => {
              const CategoryIcon = Icon[c.icon];
              return (
                <Link
                  key={c.slug}
                  href={`/collections/${c.slug}`}
                  className="group flex flex-col rounded-xl2 border border-ink/10 bg-white/60 p-6 transition-shadow hover:shadow-card"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sage/10 text-sage">
                    <CategoryIcon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-4 font-display text-lg text-ink">{c.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-ink/70">{c.cardDescription}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-sage">
                    Découvrir
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Réassurance, uniquement les conditions réellement applicables (siteConfig.shippingTrust) */}
      <section className="container-content py-16 md:py-20">
        <div className="mx-auto max-w-4xl rounded-xl2 border border-ink/10 bg-white/50 px-6 py-10 md:px-12">
          <TrustBadges />
        </div>
      </section>
    </>
  );
}
