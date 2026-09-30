import Link from "next/link";
import Image from "next/image";
import { getPublishedProducts } from "@/lib/products";
import { TrustBadges } from "@/components/trust-badges";
import { siteConfig } from "@/lib/site-config";

const univers = [
  {
    title: "Maison & décoration",
    description: "Des objets qui apportent du caractère à chaque pièce, sans jamais surcharger.",
  },
  {
    title: "Famille",
    description: "De petites attentions pensées pour les moments partagés avec ceux que vous aimez.",
  },
  {
    title: "Compagnons du quotidien",
    description: "Des objets inspirés de nos animaux, pour sourire un peu chaque jour.",
  },
  {
    title: "Idées cadeaux",
    description: "Des attentions originales, choisies pour faire plaisir sans se tromper.",
  },
];

export default function HomePage() {
  const products = getPublishedProducts();
  const featured = products[0];

  return (
    <>
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

      <section className="bg-sand/60 py-16 md:py-24">
        <div className="container-content">
          <h2 className="section-title text-center">De jolies choses pour le quotidien</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-ink/70">
            Maison Loravie choisit avec soin des objets pour la maison, la famille et ceux que
            vous aimez.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            {univers.map((u) => (
              <div key={u.title} className="rounded-xl2 border border-ink/10 bg-white/50 p-6">
                <h3 className="font-display text-lg text-ink">{u.title}</h3>
                <p className="mt-2 text-sm text-ink/70">{u.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-content py-16 text-center md:py-24">
        <h2 className="section-title">En ce moment</h2>
        <p className="mx-auto mt-3 max-w-xl text-ink/70">
          Une sélection actuelle, pensée pour apporter une touche féline et lumineuse à votre
          intérieur.
        </p>
        <Link
          href={`/produit/${featured.slug}`}
          className="mx-auto mt-8 flex max-w-md flex-col items-center gap-4 rounded-xl2 border border-ink/10 bg-white/50 p-8 transition-shadow hover:shadow-card"
        >
          {featured.images[0] && (
            <div className="relative h-48 w-48 overflow-hidden rounded-xl2 bg-sand">
              <Image
                src={featured.images[0].src}
                alt={featured.images[0].alt}
                fill
                className="object-cover"
              />
            </div>
          )}
          <span className="font-display text-xl text-ink">{featured.name}</span>
          <span className="btn-primary">Découvrir</span>
        </Link>
      </section>
    </>
  );
}
