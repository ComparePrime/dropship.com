import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getPublishedProducts } from "@/lib/products";
import { getPublishedScenes } from "@/lib/scenes";
import { TrustBadges } from "@/components/trust-badges";
import { ShopTheLook } from "@/components/shop-the-look";
import { CollectionShowcase } from "@/components/collection-showcase";
import { HomeJsonLd } from "@/components/home-jsonld";
import { siteConfig } from "@/lib/site-config";
import { categories } from "@/lib/categories";
import { Icon } from "@/components/icons";
import { formatPrice, getPriceForCurrency } from "@/lib/currency";

const ChevronRight = Icon["chevron-right"];
const ShieldCheck = Icon["shield-check"];

export const metadata: Metadata = {
  title: `${siteConfig.name} — Décoration et objets soignés pour la maison`,
  description:
    "Maison Loravie sélectionne des objets soignés pour la maison, la famille et ceux que vous aimez : décoration, idées cadeaux et petites attentions du quotidien, livrées en Suisse et en Europe.",
  alternates: { canonical: siteConfig.domain },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.domain,
    type: "website",
  },
};

/** Sélection éditoriale mise en avant sur l'accueil : des produits réels, répartis entre les univers. */
const FEATURED_SLUGS = [
  "crochet-chat-lanterne",
  "coussin-bras-allaitement-biberon",
  "meduse-dansante-jouet-interactif",
  "bougeoir-ceramique-argente-reflet",
  "vase-sculpture-fleurs-sechees",
  "pendule-newton-metal-bureau",
];

/** Produit mis en avant dans le hero : une mise en scène, pas un simple produit isolé. */
const HERO_SLUG = "trio-vases-porcelaine-wabi-sabi";

export default function HomePage() {
  const products = getPublishedProducts();
  const featured = products.find((p) => p.slug === HERO_SLUG) ?? products[0];
  const scenes = getPublishedScenes();
  const selection = FEATURED_SLUGS.map((slug) => products.find((p) => p.slug === slug)).filter(
    (p): p is NonNullable<typeof p> => !!p
  );

  return (
    <>
      <HomeJsonLd />

      {/* 1. Hero lifestyle */}
      <section className="container-content grid grid-cols-1 items-center gap-10 py-12 md:grid-cols-2 md:gap-16 md:py-20">
        <div>
          <span className="inline-block rounded-full bg-blush/40 px-3 py-1 text-xs font-medium tracking-wide text-terracottaText">
            Maison Loravie
          </span>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
            {siteConfig.slogan}
          </h1>
          <p className="mt-4 max-w-md text-ink/80">
            Maison Loravie sélectionne avec soin des objets pour la maison, la famille et ceux
            que vous aimez — pensés pour durer, pas pour remplir un catalogue.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/collections" className="btn-primary">
              Découvrir la boutique
            </Link>
            <Link href={`/produit/${featured.slug}`} className="btn-secondary">
              Voir {featured.name}
            </Link>
          </div>
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
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        )}
      </section>

      {/*
        2. "Découvrez la collection" : photo éditoriale avec points
        interactifs, entièrement pilotée par src/lib/collection-showcase.ts.
      */}
      <CollectionShowcase />

      {/*
        3. "Recréez cette ambiance" : uniquement si au moins une mise en
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

      {/* 3. Sélection éditoriale : quelques produits réels, pas un catalogue infini */}
      <section className="container-content py-16 md:py-24">
        <h2 className="section-title text-center">La sélection Maison Loravie</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-ink/70">
          Quelques pièces choisies dans notre catalogue actuel, representatives de chaque
          univers — pas une grille sans fin.
        </p>
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
          {selection.map((product) => {
            const price = getPriceForCurrency(product.priceCHF, product.priceEUR, "CHF");
            const compareAt = product.compareAtPriceCHF;
            const hasPromo = product.promotion.active && !!compareAt && compareAt > price;
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
                      sizes="(min-width: 768px) 33vw, 50vw"
                      loading="lazy"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="p-4 md:p-5">
                  <span className="text-xs font-medium uppercase tracking-wide text-sage">
                    {product.badge}
                  </span>
                  <p className="mt-1 font-display text-base text-ink md:text-lg">{product.name}</p>
                  <div className="mt-1 flex items-baseline gap-2">
                    {hasPromo && (
                      <span className="text-xs text-ink/40 line-through">
                        {formatPrice(compareAt!, "CHF")}
                      </span>
                    )}
                    <span className="text-sm text-ink/70">{formatPrice(price, "CHF")}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <Link href="/collections" className="btn-secondary">
            Voir toute la sélection
          </Link>
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

      {/* 5. Pourquoi Maison Loravie : arguments reels, rien d'invente */}
      <section className="container-content py-16 md:py-24">
        <h2 className="section-title text-center">Pourquoi Maison Loravie</h2>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="text-center">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sage/10 text-sage">
              <Icon.star className="h-5 w-5" strokeWidth={1.5} />
            </span>
            <h3 className="mt-4 font-display text-lg text-ink">Une sélection choisie</h3>
            <p className="mt-2 text-sm text-ink/70">
              Chaque objet est choisi un par un pour son allure et son utilité, plutôt que
              d'empiler un catalogue sans fin.
            </p>
          </div>
          <div className="text-center">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sage/10 text-sage">
              <Icon.truck className="h-5 w-5" strokeWidth={1.5} />
            </span>
            <h3 className="mt-4 font-display text-lg text-ink">Livraison et retours sereins</h3>
            <p className="mt-2 text-sm text-ink/70">
              Livraison offerte, expédition sous 24h et 30 jours pour changer d'avis, sans
              condition cachée.
            </p>
          </div>
          <div className="text-center">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sage/10 text-sage">
              <ShieldCheck className="h-5 w-5" strokeWidth={1.5} />
            </span>
            <h3 className="mt-4 font-display text-lg text-ink">Paiement sécurisé</h3>
            <p className="mt-2 text-sm text-ink/70">
              Vos commandes sont traitées via un paiement en ligne sécurisé, du panier à la
              confirmation.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Reassurance detaillee (conditions reellement applicables) */}
      <section className="container-content pb-16 md:pb-20">
        <div className="mx-auto max-w-4xl rounded-xl2 border border-ink/10 bg-white/50 px-6 py-10 md:px-12">
          <TrustBadges />
        </div>
      </section>

      {/* 7. CTA final */}
      <section className="bg-sage py-16 text-center text-white md:py-20">
        <div className="container-content">
          <h2 className="font-display text-2xl font-semibold md:text-3xl">
            Prête à trouver votre prochain petit détail ?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-white/90">
            Parcourez nos univers et laissez-vous guider jusqu'à l'objet qui manquait chez vous.
          </p>
          <Link
            href="/collections"
            className="mt-7 inline-flex items-center justify-center rounded-full bg-cream px-8 py-4 text-sm font-medium tracking-wide text-ink transition-colors hover:bg-cream/90"
          >
            Découvrir la boutique
          </Link>
        </div>
      </section>
    </>
  );
}
