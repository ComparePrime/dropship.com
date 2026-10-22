import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPublishedScenes, getSceneBySlug } from "@/lib/scenes";
import { getCategoryBySlug } from "@/lib/categories";
import { siteConfig } from "@/lib/site-config";
import { ShopTheLook } from "@/components/shop-the-look";
import { Breadcrumbs } from "@/components/breadcrumbs";

interface Props {
  params: { locale: string; slug: string };
}

import { locales } from "@/i18n/config";
import { alternatesFor, asLocale, pageSetup } from "@/i18n/page";
import { localizeCategory } from "@/i18n/data";
import { translate } from "@/i18n/messages";

export function generateStaticParams() {
  return locales.flatMap((locale) => getPublishedScenes().map((s) => ({ locale, slug: s.slug })));
}

export function generateMetadata({ params }: Props): Metadata {
  const locale = asLocale(params.locale);
  const base = getSceneBySlug(params.slug);
  if (!base || base.status !== "published") return {};
  const title = translate(locale, base.title);
  const description = translate(locale, base.description);
  const alternates = alternatesFor(locale, `/mises-en-scene/${base.slug}`);
  const url = alternates.canonical;
  return {
    title: { absolute: `${title} | Maison Loravie` },
    description,
    alternates,
    openGraph: {
      title,
      description,
      url,
      images: [{ url: base.image.src }],
      type: "website",
    },
  };
}

export default function ScenePage({ params }: Props) {
  const { t, locale } = pageSetup(params);
  const base = getSceneBySlug(params.slug);
  if (!base || base.status !== "published") notFound();
  const scene = {
    ...base,
    title: t(base.title),
    description: t(base.description),
    image: { ...base.image, alt: t(base.image.alt) },
  };

  const baseCategory = getCategoryBySlug(scene.category);
  const category = baseCategory ? localizeCategory(baseCategory, locale) : undefined;

  return (
    <section className="pb-16 pt-8 md:pb-24">
      <Breadcrumbs
        items={[
          { label: t("Accueil"), href: "/" },
          ...(category ? [{ label: category.title, href: `/collections/${category.slug}` }] : []),
          { label: scene.title },
        ]}
      />

      <div className="container-content mt-6">
        <h1 className="font-display text-3xl font-semibold text-ink md:text-4xl">{scene.title}</h1>
        <p className="mt-4 max-w-2xl text-ink/70">{scene.description}</p>
      </div>

      <div className="container-content mt-10">
        <ShopTheLook scene={scene} />
      </div>
    </section>
  );
}
