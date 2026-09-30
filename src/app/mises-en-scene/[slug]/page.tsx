import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPublishedScenes, getSceneBySlug } from "@/lib/scenes";
import { getCategoryBySlug } from "@/lib/categories";
import { siteConfig } from "@/lib/site-config";
import { ShopTheLook } from "@/components/shop-the-look";
import { Breadcrumbs } from "@/components/breadcrumbs";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getPublishedScenes().map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const scene = getSceneBySlug(params.slug);
  if (!scene || scene.status !== "published") return {};
  const url = `${siteConfig.domain}/mises-en-scene/${scene.slug}`;
  return {
    title: `${scene.title} | Maison Loravie`,
    description: scene.description,
    alternates: { canonical: url },
    openGraph: {
      title: scene.title,
      description: scene.description,
      url,
      images: [{ url: scene.image.src }],
      type: "website",
    },
  };
}

export default function ScenePage({ params }: Props) {
  const scene = getSceneBySlug(params.slug);
  if (!scene || scene.status !== "published") notFound();

  const category = getCategoryBySlug(scene.category);

  return (
    <section className="pb-16 pt-8 md:pb-24">
      <Breadcrumbs
        items={[
          { label: "Accueil", href: "/" },
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
