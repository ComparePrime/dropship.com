import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { alternatesFor, asLocale, metaT, pageSetup, LocaleParams } from "@/i18n/page";

export function generateMetadata({ params }: { params: LocaleParams }): Metadata {
  const locale = asLocale(params.locale);
  const t = metaT(locale);
  return {
    title: t("Contact"),
    description: t("Contactez l'équipe {name}.", { name: siteConfig.name }),
    alternates: alternatesFor(locale, "/contact"),
  };
}

export default function ContactPage({ params }: { params: LocaleParams }) {
  const { t } = pageSetup(params);
  return (
    <section className="container-content max-w-2xl py-14">
      <h1 className="section-title">{t("Contact")}</h1>
      <p className="mt-6 text-ink/80">
        {t("Une question sur une commande ou un produit ? Écrivez-nous à")}{" "}
        <a href={`mailto:${siteConfig.supportEmail}`} className="underline">
          {siteConfig.supportEmail}
        </a>{" "}
        {t("et nous vous répondrons dans les meilleurs délais.")}
      </p>
    </section>
  );
}
