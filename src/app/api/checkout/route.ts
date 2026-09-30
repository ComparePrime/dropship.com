import { NextRequest, NextResponse } from "next/server";
import { getStripeClient } from "@/lib/stripe";
import { getProductBySlug } from "@/lib/products";
import { getPriceForCurrency } from "@/lib/currency";
import { siteConfig } from "@/lib/site-config";
import { CartLine, Currency } from "@/lib/types";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const lines: CartLine[] = Array.isArray(body.lines) ? body.lines : [];
    const currency: Currency = body.currency === "EUR" ? "EUR" : "CHF";

    if (lines.length === 0) {
      return NextResponse.json({ error: "Le panier est vide." }, { status: 400 });
    }

    // Les prix sont revalidés côté serveur à partir du catalogue produit,
    // jamais à partir de ce que le client envoie. Idem pour la disponibilité :
    // quand un stock est suivi, on refuse toute commande qui le dépasse.
    for (const line of lines) {
      const product = getProductBySlug(line.slug);
      if (!product) {
        return NextResponse.json({ error: `Produit inconnu: ${line.slug}` }, { status: 400 });
      }
      if (product.stock && product.stock.source !== "none" && line.quantity > product.stock.quantity) {
        return NextResponse.json(
          {
            error:
              product.stock.quantity <= 0
                ? `${product.name} est temporairement indisponible.`
                : `Il ne reste que ${product.stock.quantity} exemplaire(s) disponible(s) pour ${product.name}.`,
          },
          { status: 409 }
        );
      }
    }

    const line_items = lines.map((line) => {
      const product = getProductBySlug(line.slug);
      if (!product) {
        throw new Error(`Produit inconnu: ${line.slug}`);
      }
      const unitAmount = Math.round(
        getPriceForCurrency(product.priceCHF, product.priceEUR, currency) * 100
      );
      return {
        price_data: {
          currency: currency.toLowerCase(),
          product_data: {
            name: product.name,
            images: product.images[0]
              ? [`${siteConfig.domain}${product.images[0].src}`]
              : undefined,
          },
          unit_amount: unitAmount,
        },
        quantity: Math.max(1, line.quantity),
      };
    });

    const stripe = getStripeClient();
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items,
      shipping_address_collection: {
        allowed_countries: [
          "CH",
          "FR",
          "BE",
          "DE",
          "IT",
          "ES",
          "NL",
          "AT",
          "PT",
          "LU",
        ],
      },
      success_url: `${siteConfig.domain}/confirmation?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteConfig.domain}/panier`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("[checkout:error]", error);
    const message = error instanceof Error ? error.message : "Erreur inconnue.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
