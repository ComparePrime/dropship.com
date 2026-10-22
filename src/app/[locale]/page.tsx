import type { Metadata } from "next";
import Link from "@/i18n/link";
import Image from "next/image";
import { getPublishedProducts } from "@/lib/products";
import { TrustBadges } from "@/components/trust-badges";
import { CollectionShowcase } from "@/components/collection-showcase";
import { HomeJsonLd } from "@/components/home-jsonld";
import { HomeCampaignBanner } from "@/components/home-campaign-banner";
import { siteConfig } from "@/lib/site-config";
import { Icon } from "@/components/icons";
import { ProductCardPrice, CampaignCardBadge } from "@/components/product-card-price";
import { getCardImage } from "@/lib/product-images";
import { alternatesFor, asLocale, metaT, pageSetup, LocaleParams } from "@/i18n/page";
import { localizeProducts } from "@/i18n/product-translation";

const ChevronRight = Icon["chevron-right"];

export function generateMetadata({ params }: { params: LocaleParams }): Metadata {
  const locale = asLocale(params.locale);
  const t = metaT(locale);
  const alternates = alternatesFor(locale, "/");
  return {
    title: `${siteConfig.name} — ${t("Décoration, vases et lampes pour un intérieur chaleureux")}`,
    description: t(
      "Maison Loravie sélectionne des objets de décoration, des vases, des lampes et un ventilateur plafonnier lumineux pour un intérieur chaleureux et élégant. Livraison offerte en Suisse et en Europe."
    ),
    alternates,
    openGraph: {
      title: siteConfig.name,
      description: t(siteConfig.description),
      url: alternates.canonical,
      type: "website",
    },
  };
}

/** Sélection de l'accueil : décoration, vases, lampes et ventilateur plafonnier uniquement. */
const SELECTION_SLUGS = [
  "lampe-table-led-diamant-usb",
  "trio-vases-porcelaine-wabi-sabi",
  "ventilateur-plafond-invisible-led",
  "vase-sculpture-fleurs-sechees",
  "plateau-decoratif-rond-resine-vague",
  "bougeoir-ceramique-argente-reflet",
];

const COLLECTIONS = [
  {
    title: "Décoration & vases",
    text: "Vases, bougeoirs et plateaux aux matières naturelles.",
    href: "/collections/maison-decoration",
    image: "/images/products/trio-vases-wabi-sabi/plateau-bois.jpg",
    alt: "Trois vases en porcelaine blanche et branches d'eucalyptus sur un plateau en bois",
  },
  {
    title: "Lampes & éclairage",
    text: "Une lumière douce pour chaque moment de la journée.",
    href: "/collections/maison-decoration/eclairage-et-ambiance",
    image: "/images/products/lampe-diamant/lumiere-projetee.jpg",
    alt: "Lampe de table à facettes allumée, projetant des motifs de lumière sur le mur",
  },
  {
    title: "Maison & confort",
    text: "Des objets qui rendent la maison plus agréable à vivre.",
    href: "/collections/maison-decoration/maison-et-confort",
    image: "/images/products/ventilateur-plafond-led/salle-a-manger.jpg",
    alt: "Ventilateur de plafond blanc avec éclairage LED au-dessus d'une salle à manger",
  },
];

export default function HomePage({ params }: { params: LocaleParams }) {
  const { t, locale } = pageSetup(params);
  const published = localizeProducts(getPublishedProducts(), locale);
  const bySlug = (slug: string) => published.find((p) => p.slug === slug);
  const selection = SELECTION_SLUGS.map(bySlug).filter((p): p is NonNullable<typeof p> => !!p);
  const lamp = bySlug("lampe-table-led-diamant-usb");
  const fan = bySlug("ventilateur-plafond-invisible-led");

  return (
    <>
      <HomeJsonLd />

      {/* 1. Hero : ambiance lumineuse et décoration */}
      <section className="container-content grid grid-cols-1 items-center gap-10 py-10 md:grid-cols-2 md:gap-16 md:py-20">
        <div>
          <span className="inline-block rounded-full bg-blush/40 px-3 py-1 text-xs font-medium tracking-wide text-terracottaText">
            {t("Maison Loravie")}</span>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
            {t("Des objets qui donnent une âme à votre intérieur")}</h1>
          <p className="mt-5 max-w-md text-lg text-ink/75">
            {t("Décoration, vases et lampes choisis avec soin : une lumière douce, des matières naturelles, et ces petits détails qui rendent une pièce chaleureuse.")}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/collections/maison-decoration" className="btn-primary">
              {t("Découvrir la collection")}</Link>
            {lamp && (
              <Link href={`/produit/${lamp.slug}`} className="btn-secondary">
                {t("Voir la Lampe Diamant")}</Link>
            )}
          </div>
          <div className="mt-10">
            <TrustBadges />
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl2 bg-sand md:aspect-square">
            <Image
              src="/images/products/lampe-diamant/commode-miroir.webp"
              alt={t("Lampe de table à facettes allumée sur une commode, près d'un vase et d'un miroir rond")}
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          {lamp && (
            <Link
              href={`/produit/${lamp.slug}`}
              className="absolute -bottom-4 left-4 right-4 flex items-center justify-between gap-3 rounded-xl2 bg-cream/95 px-4 py-3 shadow-lift backdrop-blur transition-transform hover:-translate-y-0.5 md:left-6 md:right-auto md:min-w-[18rem]"
            >
              <span>
                <span className="block text-xs uppercase tracking-widest text-sage">{t("À la une")}</span>
                <span className="block font-display text-lg text-ink">{lamp.name}</span>
                <ProductCardPrice product={lamp} />
              </span>
              <ChevronRight className="h-5 w-5 flex-shrink-0 text-sage" />
            </Link>
          )}
        </div>
      </section>

      <HomeCampaignBanner />

      {/* 2. Collections principales */}
      <section className="container-content py-14 md:py-20">
        <h2 className="section-title text-center">{t("Nos collections")}</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-ink/70">
          {t("Trois façons d'habiller votre intérieur, de la décoration à la lumière.")}</p>
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {COLLECTIONS.map((c) => (
            <Link key={c.href} href={c.href} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl2 bg-sand">
                <Image
                  src={c.image}
                  alt={t(c.alt)}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 font-display text-2xl text-ink">{t(c.title)}</h3>
              <p className="mt-1 text-sm text-ink/70">{t(c.text)}</p>
              <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-sage">
                {t("Découvrir")}
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. Sélection Maison Loravie */}
      <section className="bg-sand/50 py-14 md:py-20">
        <div className="container-content">
          <h2 className="section-title text-center">{t("La sélection Maison Loravie")}</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-ink/70">
            {t("Les pièces qui racontent le mieux notre univers : lampes, vases et décoration.")}</p>
          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
            {selection.map((product) => (
              <Link
                key={product.id}
                href={`/produit/${product.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl2 border border-ink/10 bg-cream transition-shadow hover:shadow-card"
              >
                <div className="relative aspect-square w-full overflow-hidden bg-sand">
                  <CampaignCardBadge product={product} />
                  {(() => {
                    const img = getCardImage(product);
                    return (
                      img && (
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          sizes="(min-width: 768px) 33vw, 50vw"
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      )
                    );
                  })()}
                </div>
                <div className="p-4 md:p-5">
                  <p className="font-display text-base text-ink md:text-lg">{product.name}</p>
                  <ProductCardPrice product={product} />
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/collections" className="btn-secondary">
              {t("Voir toute la boutique")}</Link>
          </div>
        </div>
      </section>

      {/* 4. Focus Lampe Diamant */}
      {lamp && (
        <section className="container-content py-16 md:py-24">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
            <div className="grid grid-cols-5 grid-rows-2 gap-3 md:gap-4">
              <div className="relative col-span-3 row-span-2 aspect-[3/4] overflow-hidden rounded-xl2 bg-sand">
                <Image
                  src="/images/products/lampe-diamant/lifestyle-lecture.webp"
                  alt={t("Une femme lit sur son canapé à la lumière de la lampe à facettes, qui projette des reflets sur le mur")}
                  fill
                  sizes="(min-width: 768px) 30vw, 60vw"
                  className="object-cover"
                />
              </div>
              <div className="relative col-span-2 overflow-hidden rounded-xl2 bg-sand">
                <Image
                  src="/images/products/lampe-diamant/lifestyle-console.webp"
                  alt={t("Une femme pose la lampe à facettes allumée sur une commode en bois")}
                  fill
                  sizes="(min-width: 768px) 20vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="relative col-span-2 overflow-hidden rounded-xl2 bg-sand">
                <Image
                  src="/images/products/lampe-diamant/lifestyle-cadeau.webp"
                  alt={t("Un homme souriant pose la lampe à facettes allumée à côté d'un cadeau déballé")}
                  fill
                  sizes="(min-width: 768px) 20vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-sage">{t("Focus lampe")}</p>
              <h2 className="mt-2 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
                {t("La Lampe Diamant : une lumière taillée comme un bijou")}</h2>
              <p className="mt-4 text-ink/75">
                {t("Un abat-jour transparent aux facettes en diamant, qui joue avec la lumière et garde du caractère même éteint. Elle se pose sur une commode, une table de nuit ou un bureau, sans câble à brancher.")}</p>
              <ul className="mt-5 flex flex-col gap-2.5 text-ink/80">
                {[
                  "3 ambiances lumineuses au choix",
                  "Interrupteur tactile on/off",
                  "Batterie rechargeable par USB",
                  "26 cm de haut, 12 cm de large",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sage text-white">
                      <Icon.check className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                    {t(item)}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <ProductCardPrice product={lamp} />
              </div>
              <Link href={`/produit/${lamp.slug}`} className="btn-primary mt-6">
                {t("Découvrir la Lampe Diamant")}</Link>
            </div>
          </div>
        </section>
      )}

      {/* 5. Focus ventilateur plafonnier */}
      {fan && (
        <section className="bg-sand/50 py-16 md:py-24">
          <div className="container-content grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
            <div className="order-2 md:order-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-sage">
                {t("Confort & décoration")}</p>
              <h2 className="mt-2 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
                {t("Le ventilateur plafonnier lumineux")}</h2>
              <p className="mt-4 text-ink/75">
                {t("Un luminaire au design épuré dont les pales se rétractent : il se fond dans le plafond, et réunit éclairage et ventilation dans un seul objet.")}</p>
              <ul className="mt-5 flex flex-col gap-2.5 text-ink/80">
                {[
                  "Éclairage LED intégré, 3 tonalités lumineuses",
                  "Télécommande incluse",
                  "Corps lumineux Ø 48 cm, pales déployées Ø 120 cm",
                  "Finitions blanche ou noire",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sage text-white">
                      <Icon.check className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                    {t(item)}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-ink/60">
                {t("Raccordement au réseau électrique : installation par un électricien qualifié recommandée.")}</p>
              <div className="mt-6">
                <ProductCardPrice product={fan} />
              </div>
              <Link href={`/produit/${fan.slug}`} className="btn-primary mt-6">
                {t("Découvrir le ventilateur plafonnier")}</Link>
            </div>
            <div className="order-1 grid grid-cols-2 gap-3 md:order-2 md:gap-4">
              <div className="relative col-span-2 aspect-[4/3] overflow-hidden rounded-xl2 bg-sand">
                <Image
                  src="/images/products/ventilateur-plafond-led/salle-a-manger.jpg"
                  alt={t("Ventilateur de plafond blanc avec éclairage LED allumé au-dessus d'une salle à manger")}
                  fill
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-xl2 bg-sand">
                <Image
                  src="/images/products/ventilateur-plafond-led/noir-salle-a-manger.webp"
                  alt={t("Ventilateur de plafond noir avec éclairage LED, pales déployées, au-dessus d'une table à manger")}
                  fill
                  sizes="(min-width: 768px) 22vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-xl2 bg-sand">
                <Image
                  src="/images/products/ventilateur-plafond-led/caracteristiques.webp"
                  alt={t("Caractéristiques du ventilateur : éclairage LED intégré, 3 tonalités, télécommande incluse")}
                  fill
                  sizes="(min-width: 768px) 22vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 6. Inspiration : la table mise en scène, avec points cliquables vers les produits */}
      <CollectionShowcase />

      {/* Pourquoi Maison Loravie */}
      <section className="container-content pb-16 md:pb-20">
        <h2 className="section-title">{t("Pourquoi Maison Loravie")}</h2>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            {
              title: "Une sélection choisie",
              text: "Chaque objet est choisi un par un pour son allure et son utilité, plutôt que d'empiler un catalogue sans fin.",
            },
            {
              title: "Livraison et retours sereins",
              text: "Livraison offerte, expédition sous 24h et 30 jours pour changer d'avis, sans condition cachée.",
            },
            {
              title: "Paiement sécurisé",
              text: "Vos commandes sont traitées via un paiement en ligne sécurisé, du panier à la confirmation.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 rounded-xl2 border border-sage/15 bg-sage/5 p-5 md:p-6"
            >
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-sage text-white">
                <Icon.check className="h-5 w-5" strokeWidth={2.25} />
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold text-ink">{t(item.title)}</h3>
                <p className="mt-1 text-[15px] leading-relaxed text-ink/70">{t(item.text)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Bloc final */}
      <section className="bg-sage py-16 text-center text-white md:py-20">
        <div className="container-content">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            {t("Donnez du caractère à votre intérieur")}</h2>
          <p className="mx-auto mt-3 max-w-lg text-white/90">
            {t("Parcourez nos collections et laissez-vous guider jusqu'à l'objet qui manquait chez vous.")}</p>
          <Link
            href="/collections"
            className="mt-7 inline-flex items-center justify-center rounded-full bg-cream px-8 py-4 text-sm font-medium tracking-wide text-ink transition-colors hover:bg-cream/90"
          >
            {t("Découvrir la boutique")}</Link>
          <p className="mt-6 text-sm text-white/80">
            {t("À explorer aussi :")}{" "}
            <Link href="/collections/bebe-famille" className="underline underline-offset-2">
              {t("Bébé & famille")}</Link>
            {" · "}
            <Link href="/collections/idees-cadeaux" className="underline underline-offset-2">
              {t("Idées cadeaux")}</Link>
          </p>
        </div>
      </section>
    </>
  );
}
