import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { getPublishedProducts } from "@/lib/products";
import { alternatesFor, asLocale, metaT, pageSetup, LocaleParams } from "@/i18n/page";

export function generateMetadata({ params }: { params: LocaleParams }): Metadata {
  const locale = asLocale(params.locale);
  const t = metaT(locale);
  return {
    title: t("Retours"),
    description: t("Retour gratuit sous 30 jours pour changer d'avis."),
    alternates: alternatesFor(locale, "/retours"),
  };
}

export default function ReturnsPage({ params }: { params: LocaleParams }) {
  const { t } = pageSetup(params);
  const shipping = getPublishedProducts()[0].shipping;

  return (
    <section className="container-content max-w-2xl py-14">
      <h1 className="section-title">{t("{days} jours pour changer d'avis", { days: shipping.returnDays })}</h1>
      <div className="mt-6 flex flex-col gap-4 text-ink/80">
        <p>
          {t("Vous disposez de {days} jours à compter de la réception de votre commande pour changer d'avis et demander un retour gratuit.", { days: shipping.returnDays })}
        </p>
        <p>
          {t("Pour initier un retour, contactez-nous simplement à l'adresse")}{" "}
          <a href={`mailto:${siteConfig.supportEmail}`} className="underline">
            {siteConfig.supportEmail}
          </a>{" "}
          {t("en indiquant votre numéro de commande. Nous vous communiquerons alors la marche à suivre.")}
        </p>
        <p>
          {t("Les conditions détaillées (état du produit, délais de remboursement) seront précisées prochainement dans nos conditions générales de vente.")}</p>
      </div>
    </section>
  );
}
