import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { alternatesFor, asLocale, metaT, pageSetup, LocaleParams } from "@/i18n/page";

export function generateMetadata({ params }: { params: LocaleParams }): Metadata {
  const locale = asLocale(params.locale);
  const t = metaT(locale);
  return {
    title: t("À propos"),
    description: `${siteConfig.name} : ${t(siteConfig.slogan)}`,
    alternates: alternatesFor(locale, "/a-propos"),
  };
}

export default function AboutPage({ params }: { params: LocaleParams }) {
  const { t } = pageSetup(params);
  return (
    <section className="container-content max-w-2xl py-14">
      <h1 className="section-title">{t(siteConfig.slogan)}</h1>
      <div className="mt-6 flex flex-col gap-4 text-ink/80">
        <p>
          {t("{name} propose une sélection d'objets pensés pour la maison, la famille et ceux que vous aimez : décoration, quotidien, compagnons à quatre pattes et petites attentions à offrir.", { name: siteConfig.name })}
        </p>
        <p>
          {t("Nous choisissons chaque produit avec soin, en pensant à la fois à l'esthétique, à l'utilité et à la qualité de l'expérience d'achat — de la présentation jusqu'à la livraison.")}</p>
      </div>
    </section>
  );
}
