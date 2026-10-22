import type { Metadata } from "next";
import { getPublishedProducts } from "@/lib/products";
import { TrustBadges } from "@/components/trust-badges";
import { alternatesFor, asLocale, metaT, pageSetup, LocaleParams } from "@/i18n/page";

export function generateMetadata({ params }: { params: LocaleParams }): Metadata {
  const locale = asLocale(params.locale);
  const t = metaT(locale);
  return {
    title: t("Livraison"),
    description: t("Nos conditions de livraison : livraison offerte, expédition sous 24h."),
    alternates: alternatesFor(locale, "/livraison"),
  };
}

export default function ShippingPage({ params }: { params: LocaleParams }) {
  const { t } = pageSetup(params);
  const shipping = getPublishedProducts()[0].shipping;

  return (
    <section className="container-content max-w-2xl py-14">
      <h1 className="section-title">{t("Livraison")}</h1>
      <div className="mt-6">
        <TrustBadges />
      </div>
      <div className="mt-8 flex flex-col gap-4 text-ink/80">
        <p>
          {t("Toutes les commandes bénéficient de la livraison offerte, sans minimum d'achat.")}</p>
        <p>
          {t("Chaque commande est expédiée sous {hours} heures. Le délai de livraison estimé est de {min} à {max} jours ouvrables selon votre pays de livraison.", { hours: shipping.dispatchWithinHours, min: shipping.minDays, max: shipping.maxDays })}
        </p>
        <p>
          {t("Un numéro de suivi vous est communiqué dès l'expédition de votre colis, afin de suivre son acheminement jusqu'à votre domicile.")}</p>
      </div>
    </section>
  );
}
