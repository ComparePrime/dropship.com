import type { Metadata } from "next";
import { alternatesFor, asLocale, metaT, pageSetup, LocaleParams } from "@/i18n/page";

export function generateMetadata({ params }: { params: LocaleParams }): Metadata {
  const locale = asLocale(params.locale);
  const t = metaT(locale);
  return {
    title: t("Conditions générales de vente"),
    robots: { index: false },
    alternates: alternatesFor(locale, "/cgv"),
  };
}

export default function CgvPage({ params }: { params: LocaleParams }) {
  const { t } = pageSetup(params);
  return (
    <section className="container-content max-w-2xl py-14">
      <h1 className="section-title">{t("Conditions générales de vente")}</h1>
      <p className="mt-6 text-ink/80">
        {t("Cette page sera complétée avec les conditions générales de vente définitives avant la mise en ligne publique du site (identité légale de l'entreprise, modalités de paiement, garanties, droit applicable).")}</p>
    </section>
  );
}
