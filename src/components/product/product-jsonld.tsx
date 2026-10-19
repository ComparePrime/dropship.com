import { Product } from "@/lib/types";
import { siteConfig } from "@/lib/site-config";

export function ProductJsonLd({ product }: { product: Product }) {
  const url = `${siteConfig.domain}/produit/${product.slug}`;
  const realReviews = product.reviews.filter((r) => !r.demo);
  const isOutOfStock =
    !!product.stock && product.stock.source !== "none" && product.stock.quantity <= 0;

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
    offers: (["CHF", "EUR"] as const).map((currency) => ({
      "@type": "Offer",
      url,
      priceCurrency: currency,
      price: (currency === "CHF" ? product.priceCHF : product.priceEUR).toFixed(2),
      availability: isOutOfStock ? "https://schema.org/OutOfStock" : "https://schema.org/InStock",
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingDestination: (currency === "CHF" ? ["CH"] : siteConfig.markets.filter((c) => c !== "CH")).map(
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
        applicableCountry: currency === "CHF" ? ["CH"] : siteConfig.markets.filter((c) => c !== "CH"),
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
      { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.domain },
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
