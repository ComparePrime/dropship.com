import type { Metadata } from "next";
import { UnsubscribeForm } from "./unsubscribe-form";
import { asLocale, metaT, pageSetup, type LocaleParams } from "@/i18n/page";

export function generateMetadata({ params }: { params: LocaleParams }): Metadata {
  return {
    title: metaT(asLocale(params.locale))("Désinscription de la newsletter"),
    robots: { index: false, follow: false },
  };
}

export default function UnsubscribePage({ params }: { params: LocaleParams }) {
  const { t } = pageSetup(params);
  return (
    <section className="container-content flex flex-col items-center py-24 text-center">
      <h1 className="section-title">{t("Se désinscrire de la newsletter")}</h1>
      <UnsubscribeForm />
    </section>
  );
}
