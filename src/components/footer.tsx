import Link from "@/i18n/link";
import { CookieSettingsLink } from "@/components/cookie-settings-link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { CurrencySwitcher } from "@/components/currency-switcher";
import { getT } from "@/i18n/server";

export function Footer() {
  const t = getT();
  return (
    <footer className="border-t border-ink/10 bg-sand/60">
      <div className="container-content grid grid-cols-2 gap-8 py-14 md:grid-cols-4">
        <div className="col-span-2 md:col-span-1">
          <Image
            src="/images/brand/logo-landscape.webp"
            alt={siteConfig.name}
            width={1536}
            height={1024}
            className="h-14 w-auto"
          />
          <p className="mt-3 max-w-xs text-sm text-stone">{t(siteConfig.description)}</p>
          <div className="mt-5">
            <CurrencySwitcher />
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-ink">{t("À propos")}</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm text-stone">
            <li>
              <Link href="/a-propos" className="hover:text-ink">
                {t("Notre histoire")}</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-ink">
                {t("Contact")}</Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-ink">
                {t("Journal")}</Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-ink">{t("Commandes")}</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm text-stone">
            <li>
              <Link href="/livraison" className="hover:text-ink">
                {t("Livraison")}</Link>
            </li>
            <li>
              <Link href="/retours" className="hover:text-ink">
                {t("Retours")}</Link>
            </li>
            <li>
              <Link href="/panier" className="hover:text-ink">
                {t("Mon panier")}</Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-ink">{t("Legal")}</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm text-stone">
            <li>
              <Link href="/cgv" className="hover:text-ink">
                {t("CGV")}</Link>
            </li>
            <li>
              <Link href="/confidentialite" className="hover:text-ink">
                {t("Confidentialité")}</Link>
            </li>
            <li>
              <Link href="/mentions-legales" className="hover:text-ink">
                {t("Mentions légales")}</Link>
            </li>
            <li>
              <CookieSettingsLink />
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink/10 py-6">
        <p className="container-content text-xs text-stone">
          © {new Date().getFullYear()} {siteConfig.legalName}. {t("Tous droits réservés.")}
        </p>
      </div>
    </footer>
  );
}
