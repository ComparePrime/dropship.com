"use client";

import Link from "next/link";
import { useCart } from "@/context/cart-context";
import { Icon } from "@/components/icons";
import { CurrencySwitcher } from "@/components/currency-switcher";
import { CartDrawer } from "@/components/cart-drawer";
import { siteConfig } from "@/lib/site-config";

export function Header() {
  const { totalItems, openCart } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-cream/90 backdrop-blur">
      <div className="container-content flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="font-display text-xl tracking-tight md:text-2xl">
          {siteConfig.name}
        </Link>

        {/*
          Header volontairement minimal (regle mono-produit) :
          pas de recherche, pas de catalogue, pas de mega-menu.
        */}
        <nav className="hidden items-center gap-8 text-sm tracking-wide text-ink/80 md:flex">
          <Link href="/a-propos" className="hover:text-ink">
            À propos
          </Link>
          <Link href="/contact" className="hover:text-ink">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3 md:gap-5">
          <CurrencySwitcher />
          <button
            type="button"
            onClick={openCart}
            aria-label="Ouvrir le panier"
            className="relative flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-ink/5"
          >
            <Icon.bag className="h-5 w-5" strokeWidth={1.5} />
            {totalItems > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-sage text-[11px] font-medium text-white">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
      <CartDrawer />
    </header>
  );
}
