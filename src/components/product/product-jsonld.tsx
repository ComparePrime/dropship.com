import { Product } from "@/lib/types";
import { siteConfig } from "@/lib/site-config";
import { getPriceRange, hasSizes } from "@/lib/sku";
import { getPriceForCurrency } from "@/lib/currency";
import { isShippableToNorthAmerica } from "@/lib/shipping";
import type { Currency } from "@/lib/types";
import { localizePath, type Locale } from "@/i18n/config";
import { translate } from "@/i18n/messages";

export function ProductJsonLd({ product, locale = "fr" }: { product: Product; locale?: Locale }) {
  const url = `${siteConfig.domain}${localizePath(`/produit/${product.slug}`, locale)}`;
  const realReviews = product.reviews.filter((r) => !r.demo);
  const sized = hasSizes(product);
  // Produit a tailles : le stock se suit par coloris x taille ; il est disponible tant qu'une combinaison l'est.
  const isOutOfStock = sized
    ? !Object.values(product.skuStock ?? {}).some((q) => q > 0)
    : !!product.stock && product.stock.source !== "none" && product.stock.quantity <= 0;
  const skuCount = (product.variants?.length ?? 1) * (product.sizes?.length ?? 1);

  // Une offre par devise : CHF (Suisse), EUR (reste de l'Europe), USD (Etats-Unis) et CAD (Canada) ;
  // les deux dernieres seulement pour les produits livrables en Amerique du Nord.
  const northAmerica = isShippableToNorthAmerica(product);
  const offerCurrencies: Currency[] = northAmerica ? ["CHF", "EUR", "USD", "CAD"] : ["CHF", "EUR"];
  const countriesFor = (currency: Currency): string[] =>
    currency === "CHF"
      ? ["CH"]
      : currency === "USD"
        ? ["US"]
        : currency === "CAD"
          ? ["CA"]
          : siteConfig.markets.filter((c) => c !== "CH");

  const productSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.seo.metaDescription,
    image: product.images.map((img) => `${siteConfig.domain}${img.src}`),
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    ...(sized
      ? {
          color: product.variants?.map((v) => v.label),
          size: product.sizes?.map((s) => s.label),
        }
      : {}),
    offers: offerCurrencies.map((currency) => ({
      "@type": sized ? "AggregateOffer" : "Offer",
      url,
      priceCurrency: currency,
      ...(sized
        ? {
            lowPrice: getPriceRange(product, currency).min.toFixed(2),
            highPrice: getPriceRange(product, currency).max.toFixed(2),
            offerCount: skuCount,
          }
        : { price: getPriceForCurrency(product.priceCHF, product.priceEUR, currency).toFixed(2) }),
      availability: isOutOfStock ? "https://schema.org/OutOfStock" : "https://schema.org/InStock",
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingDestination: countriesFor(currency).map(
          (country) => ({
            "@type": "DefinedRegion",
            addressCountry: country,
          })
        ),
        shippingRate: {
          "@type": "MonetaryAmount",
          value: "0",
          currency,
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: 0,
            maxValue: 1,
            unitCode: "DAY",
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: product.shipping.minDays,
            maxValue: product.shipping.maxDays,
            unitCode: "DAY",
          },
        },
      },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: countriesFor(currency),
        returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: product.shipping.returnDays,
        returnMethod: "https://schema.org/ReturnByMail",
        returnFees: "https://schema.org/FreeReturn",
      },
    })),
  };

  // AggregateRating uniquement lorsque des avis réels existent (jamais de note fabriquee).
  if (realReviews.length > 0) {
    productSchema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: product.ratingAverage.toFixed(1),
      reviewCount: product.ratingCount,
    };
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: translate(locale, "Accueil"), item: `${siteConfig.domain}${localizePath("/", locale)}` },
      { "@type": "ListItem", position: 2, name: product.name, item: url },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: product.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
