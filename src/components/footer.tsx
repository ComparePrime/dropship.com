import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { CurrencySwitcher } from "@/components/currency-switcher";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-sand/60">
      <div className="container-content grid grid-cols-2 gap-8 py-14 md:grid-cols-4">
        <div className="col-span-2 md:col-span-1">
          <p className="font-display text-xl">{siteConfig.name}</p>
          <p className="mt-3 max-w-xs text-sm text-stone">{siteConfig.description}</p>
          <div className="mt-5">
            <CurrencySwitcher />
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-ink">À propos</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm text-stone">
            <li>
              <Link href="/a-propos" className="hover:text-ink">
                Notre histoire
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-ink">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-ink">
                Journal
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-ink">Commandes</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm text-stone">
            <li>
              <Link href="/livraison" className="hover:text-ink">
                Livraison
              </Link>
            </li>
            <li>
              <Link href="/retours" className="hover:text-ink">
                Retours
              </Link>
            </li>
            <li>
              <Link href="/panier" className="hover:text-ink">
                Mon panier
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-ink">Legal</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm text-stone">
            <li>
              <Link href="/cgv" className="hover:text-ink">
                CGV
              </Link>
            </li>
            <li>
              <Link href="/confidentialite" className="hover:text-ink">
                Confidentialité
              </Link>
            </li>
            <li>
              <Link href="/mentions-legales" className="hover:text-ink">
                Mentions légales
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink/10 py-6">
        <p className="container-content text-xs text-stone">
          © {new Date().getFullYear()} {siteConfig.legalName}. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
