"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/cart-context";
import { Icon } from "@/components/icons";
import { CurrencySwitcher } from "@/components/currency-switcher";
import { siteConfig } from "@/lib/site-config";
import { categories } from "@/lib/categories";

const ChevronDown = Icon["chevron-down"];

export function Header() {
  const { totalItems, openCart } = useCart();
  const [universesOpen, setUniversesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-cream/90 backdrop-blur">
      <div className="container-content flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="flex items-center" aria-label={siteConfig.name}>
          <Image
            src="/images/brand/logo-header.webp"
            alt={siteConfig.name}
            width={1357}
            height={705}
            priority
            className="h-11 w-auto md:h-12"
          />
        </Link>

        {/*
          Header volontairement épuré (règle mono-produit) : pas de recherche
          ni de mega-menu produit, mais un accès simple aux 4 univers éditoriaux.
        */}
        <nav className="hidden items-center gap-8 text-sm tracking-wide text-ink/80 md:flex">
          <div
            className="relative"
            onMouseEnter={() => setUniversesOpen(true)}
            onMouseLeave={() => setUniversesOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 hover:text-ink"
              aria-haspopup="true"
              aria-expanded={universesOpen}
              onClick={() => setUniversesOpen((v) => !v)}
            >
              Univers
              <ChevronDown className="h-3.5 w-3.5" strokeWidth={2} />
            </button>
            {universesOpen && (
              <div className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3">
                <div className="rounded-xl2 border border-ink/10 bg-cream p-2 shadow-lift">
                  {categories.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/collections/${c.slug}`}
                      className="block rounded-lg px-4 py-3 hover:bg-sand/60"
                      onClick={() => setUniversesOpen(false)}
                    >
                      <span className="block font-medium text-ink">{c.title}</span>
                      <span className="mt-0.5 block text-xs text-ink/60">{c.cardDescription}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link href="/a-propos" className="hover:text-ink">
            À propos
          </Link>
          <Link href="/contact" className="hover:text-ink">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-1 md:gap-5">
          <div className="hidden md:block">
            <CurrencySwitcher />
          </div>
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
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-ink/5 md:hidden"
          >
            {mobileOpen ? (
              <Icon.close className="h-5 w-5" strokeWidth={1.5} />
            ) : (
              <span className="flex flex-col gap-1.5" aria-hidden="true">
                <span className="block h-[1.5px] w-5 bg-ink" />
                <span className="block h-[1.5px] w-5 bg-ink" />
                <span className="block h-[1.5px] w-5 bg-ink" />
              </span>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-t border-ink/10 bg-cream md:hidden">
          <div className="container-content flex flex-col py-4 text-sm">
            <p className="px-1 pb-1 pt-3 text-xs font-medium uppercase tracking-widest text-stone">
              Univers
            </p>
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/collections/${c.slug}`}
                className="rounded-lg px-1 py-3 text-ink/85 hover:text-ink"
                onClick={() => setMobileOpen(false)}
              >
                {c.title}
              </Link>
            ))}
            <div className="mt-2 border-t border-ink/10 pt-2">
              <Link
                href="/a-propos"
                className="block rounded-lg px-1 py-3 text-ink/85 hover:text-ink"
                onClick={() => setMobileOpen(false)}
              >
                À propos
              </Link>
              <Link
                href="/contact"
                className="block rounded-lg px-1 py-3 text-ink/85 hover:text-ink"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </Link>
            </div>
            <div className="mt-3 border-t border-ink/10 pt-4">
              <CurrencySwitcher />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
