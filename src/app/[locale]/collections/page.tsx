import Link from "@/i18n/link";
import type { Metadata } from "next";
import { categories } from "@/lib/categories";
import { Icon } from "@/components/icons";
import { alternatesFor, asLocale, metaT, pageSetup, LocaleParams } from "@/i18n/page";

export function generateMetadata({ params }: { params: LocaleParams }): Metadata {
  const locale = asLocale(params.locale);
  const t = metaT(locale);
  return {
    title: t("Nos univers"),
    description: t("Découvrez les univers Maison Loravie : Maison & décoration, Bébé & famille, Nos compagnons et Idées cadeaux."),
    alternates: alternatesFor(locale, "/collections"),
  };
}

export default function CollectionsPage({ params }: { params: LocaleParams }) {
  const { t } = pageSetup(params);
  return (
    <section className="container-content py-14">
      <h1 className="section-title">{t("Nos univers")}</h1>
      <p className="mt-3 max-w-xl text-ink/70">
        {t("Maison Loravie organise sa sélection en quatre univers éditoriaux, pour vous aider à trouver plus facilement ce que vous cherchez.")}</p>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {categories.map((c) => {
          const CategoryIcon = Icon[c.icon];
          return (
            <Link
              key={c.slug}
              href={`/collections/${c.slug}`}
              className="group flex items-start gap-4 rounded-xl2 border border-ink/10 bg-white/50 p-8 transition-shadow hover:shadow-card"
            >
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-sage/10 text-sage">
                <CategoryIcon className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <div>
                <h2 className="font-display text-2xl text-ink">{c.title}</h2>
                <p className="mt-2 text-stone">{c.cardDescription}</p>
                <span className="mt-3 inline-block text-sm font-medium text-sage group-hover:underline">
                  {t("Découvrir →")}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
