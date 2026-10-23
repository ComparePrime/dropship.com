import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "../globals.css";
import { CartProvider } from "@/context/cart-context";
import { CurrencyProvider } from "@/context/currency-context";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AnnouncementBar } from "@/components/announcement-bar";
import { CartDrawer } from "@/components/cart-drawer";
import { CookieBanner } from "@/components/cookie-banner";
import { MetaPixelRouteTracker } from "@/components/meta-pixel-tracker";
import { WelcomePopup } from "@/components/welcome-popup";
import { siteConfig } from "@/lib/site-config";
import { LocaleProvider } from "@/i18n/provider";
import { alternatesFor, isLiveLocale, isLocale, locales, Locale, ogLocales } from "@/i18n/config";
import { notFound } from "next/navigation";
import { setLocale } from "@/i18n/server";
import { getMessages, translate } from "@/i18n/messages";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale: Locale = isLocale(params.locale) ? params.locale : "fr";
  return {
    metadataBase: new URL(siteConfig.domain),
    title: {
      default: `${siteConfig.name} — ${translate(locale, siteConfig.slogan)}`,
      template: `%s | ${siteConfig.name}`,
    },
    description: translate(locale, siteConfig.description),
    alternates: alternatesFor(locale, "/"),
    // Langue pas encore ouverte : visible par adresse directe pour relecture, mais jamais indexee.
    ...(isLiveLocale(locale) ? {} : { robots: { index: false, follow: false } }),
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      locale: ogLocales[locale],
      images: [{ url: "/images/brand/logo-square.webp", width: 1254, height: 1254 }],
    },
    twitter: {
      card: "summary_large_image",
    },
    // Verification de propriete Google Search Console (methode balise HTML).
    verification: {
      google: "KqB5l63CHvoB4JRDSCxyTxiwKHy790LQpoMNTECs_P8",
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  setLocale(locale);
  return (
    <html lang={locale} className={`${cormorant.variable} ${manrope.variable}`}>
      <body>
        <LocaleProvider locale={locale} messages={getMessages(locale)}>
        <CurrencyProvider>
          <CartProvider>
            <AnnouncementBar />
            <Header />
            <main>{children}</main>
            <Footer />
            <CartDrawer />
            <CookieBanner />
            <MetaPixelRouteTracker />
            <WelcomePopup />
          </CartProvider>
        </CurrencyProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
