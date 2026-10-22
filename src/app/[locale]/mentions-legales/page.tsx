import type { Metadata } from "next";
import { alternatesFor, asLocale, metaT, pageSetup, LocaleParams } from "@/i18n/page";

export function generateMetadata({ params }: { params: LocaleParams }): Metadata {
  const locale = asLocale(params.locale);
  const t = metaT(locale);
  return {
    title: t("Mentions légales"),
    robots: { index: false },
    alternates: alternatesFor(locale, "/mentions-legales"),
  };
}

export default function LegalNoticePage({ params }: { params: LocaleParams }) {
  const { t } = pageSetup(params);
  return (
    <section className="container-content max-w-2xl py-14">
      <h1 className="section-title">{t("Mentions légales")}</h1>
      <p className="mt-6 text-ink/80">
        {t("Cette page sera complétée avec les mentions légales définitives avant la mise en ligne publique du site (raison sociale, adresse, numéro d'immatriculation, hébergeur).")}</p>
    </section>
  );
}
