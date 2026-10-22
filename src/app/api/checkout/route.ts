import { NextRequest, NextResponse } from "next/server";
import { getStripeClient } from "@/lib/stripe";
import { getProductBySlug } from "@/lib/products";
import { getPriceForCurrency } from "@/lib/currency";
import { siteConfig } from "@/lib/site-config";
import { CartLine, Currency } from "@/lib/types";
import { computeDiscountCents } from "@/lib/promo";
import { resolvePromo } from "@/lib/promo-server";
import { markCodePending, markCodeUsed, Subscriber } from "@/lib/newsletter";
import { getMultiBuyPercent, MULTI_BUY } from "@/lib/multi-buy";
import { getSkuStock, hasSizes, parseSkuLabel, resolveLine } from "@/lib/sku";
import { allowedCountriesFor, isShippableToNorthAmerica } from "@/lib/shipping";
import type Stripe from "stripe";

/**
 * Coupon Stripe correspondant au code : identifiant deterministe (code +
 * pourcentage), donc cree une seule fois puis reutilise, sans doublon.
 */
async function ensureCoupon(
  stripe: Stripe,
  promo: { code: string; percent: number; name?: string }
): Promise<string> {
  const id = `loravie_${promo.code.toLowerCase()}_${promo.percent}`;
  try {
    await stripe.coupons.retrieve(id);
    return id;
  } catch (error) {
    if ((error as { code?: string }).code !== "resource_missing") throw error;
  }
  try {
    await stripe.coupons.create({
      id,
      name: promo.name ?? promo.code,
      percent_off: promo.percent,
      duration: "once",
    });
  } catch (error) {
    // Creation simultanee par une autre requete : le coupon existe, c'est suffisant.
    if ((error as { code?: string }).code !== "resource_already_exists") throw error;
  }
  return id;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const lines: CartLine[] = Array.isArray(body.lines) ? body.lines : [];
    const currency: Currency =
      body.currency === "CHF" || body.currency === "USD" || body.currency === "CAD" ? body.currency : "EUR";

    if (lines.length === 0) {
      return NextResponse.json({ error: "Le panier est vide." }, { status: 400 });
    }

    // Le code est revalide ici : seul le serveur decide de la remise.
    const rawPromoCode = typeof body.promoCode === "string" ? body.promoCode : null;
    let promo: { code: string; percent: number; kind: "public" | "personal"; subscriber?: Subscriber } | null = null;
    if (rawPromoCode) {
      const resolved = await resolvePromo(rawPromoCode);
      if (!resolved.ok) {
        return NextResponse.json({ error: resolved.error }, { status: resolved.status === 410 ? 409 : 400 });
      }
      promo = resolved.promo;
    }

    // Les prix sont revalidés côté serveur à partir du catalogue produit,
    // jamais à partir de ce que le client envoie. Idem pour la disponibilité :
    // quand un stock est suivi, on refuse toute commande qui le depasse (le
    // stock reste suivi par produit, pas par variante : on additionne donc
    // les quantites de toutes les lignes d'un meme produit avant de verifier).
    const quantityBySlug = new Map<string, number>();
    const quantityBySku = new Map<string, number>();
    for (const line of lines) {
      const product = getProductBySlug(line.slug);
      if (product && hasSizes(product)) {
        // Produit a tailles : le stock se suit par couple coloris x taille.
        const key = `${line.slug}|${line.variantLabel ?? ""}`;
        quantityBySku.set(key, (quantityBySku.get(key) ?? 0) + line.quantity);
      } else {
        quantityBySlug.set(line.slug, (quantityBySlug.get(line.slug) ?? 0) + line.quantity);
      }
    }
    for (const [key, totalQuantity] of quantityBySku) {
      const [slug, label] = key.split("|");
      const product = getProductBySlug(slug)!;
      const sku = parseSkuLabel(product, label);
      if (!sku) {
        return NextResponse.json({ error: `Choisissez une taille et un coloris pour ${product.name}.` }, { status: 400 });
      }
      const available = getSkuStock(product, sku.variant.id, sku.size.id) ?? 0;
      if (totalQuantity > available) {
        return NextResponse.json(
          {
            error:
              available <= 0
                ? `${product.name} (${label}) est temporairement indisponible.`
                : `Il ne reste que ${available} exemplaire(s) disponible(s) pour ${product.name} (${label}).`,
          },
          { status: 409 }
        );
      }
    }
    for (const [slug, totalQuantity] of quantityBySlug) {
      const product = getProductBySlug(slug);
      if (!product) {
        return NextResponse.json({ error: `Produit inconnu: ${slug}` }, { status: 400 });
      }
      if (product.stock && product.stock.source !== "none" && totalQuantity > product.stock.quantity) {
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

    // Pays livrables : l'Amerique du Nord (US, CA) n'est proposee que si tous les articles y sont autorises.
    const cartProducts = [...new Set(lines.map((l) => l.slug))].flatMap((slug) => {
      const product = getProductBySlug(slug);
      return product ? [product] : [];
    });
    const blocked = cartProducts.filter((p) => !isShippableToNorthAmerica(p));
    if ((currency === "USD" || currency === "CAD") && blocked.length > 0) {
      return NextResponse.json(
        {
          error: `Livraison aux États-Unis et au Canada indisponible pour le moment pour : ${blocked
            .map((p) => p.name)
            .join(", ")}. Retirez ces articles ou choisissez une autre devise (EUR/CHF) pour une livraison en Europe.`,
        },
        { status: 409 }
      );
    }
    const allowedCountries = allowedCountriesFor(cartProducts);

    const line_items = lines.map((line) => {
      const product = getProductBySlug(line.slug);
      if (!product) {
        throw new Error(`Produit inconnu: ${line.slug}`);
      }
      // Un lot est identifie par son libelle (variantLabel) ; son prix vient du catalogue.
      const resolved = resolveLine(product, line.variantLabel);
      const unitAmount = Math.round(
        getPriceForCurrency(resolved.priceCHF, resolved.priceEUR, currency) * 100
      );
      const imageSrc = hasSizes(product) ? resolved.image : product.images[0]?.src;
      return {
        price_data: {
          currency: currency.toLowerCase(),
          product_data: {
            name: line.variantLabel ? `${product.name} — ${line.variantLabel}` : product.name,
            images: imageSrc ? [`${siteConfig.domain}${imageSrc}`] : undefined,
          },
          unit_amount: unitAmount,
        },
        quantity: Math.max(1, line.quantity),
      };
    });

    const subtotalCents = line_items.reduce(
      (sum, item) => sum + item.price_data.unit_amount * item.quantity,
      0
    );
    // Remise automatique et code promo ne se cumulent pas : la plus avantageuse est appliquee.
    const multiBuyPercent = getMultiBuyPercent(lines);
    const useMultiBuy = multiBuyPercent > 0 && multiBuyPercent >= (promo?.percent ?? 0);
    const appliedDiscount = useMultiBuy
      ? { code: "vestes", percent: multiBuyPercent, name: MULTI_BUY.label }
      : promo?.kind === "personal"
        ? { code: "bienvenue", percent: promo.percent, name: "Code de bienvenue" }
        : promo;
    // Le code personnel n'est consomme que s'il s'applique reellement (pas si la remise automatique l'emporte).
    const personal = !useMultiBuy && promo?.kind === "personal" ? promo : null;

    const stripe = getStripeClient();
    if (personal?.subscriber?.pendingSessionId) {
      // Un paiement precedent avec ce code est reste ouvert : on l'annule pour qu'un seul reste possible.
      try {
        const previous = await stripe.checkout.sessions.retrieve(personal.subscriber.pendingSessionId);
        if (previous.payment_status === "paid") {
          await markCodeUsed(personal.code, previous.id);
          return NextResponse.json({ error: "Ce code de bienvenue a déjà été utilisé." }, { status: 409 });
        }
        if (previous.status === "open") await stripe.checkout.sessions.expire(previous.id);
      } catch {
        // Session introuvable ou deja expiree : le code redevient utilisable.
      }
    }
    const discountCents = appliedDiscount ? computeDiscountCents(subtotalCents, appliedDiscount.percent) : 0;

    const couponId = appliedDiscount ? await ensureCoupon(stripe, appliedDiscount) : null;
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      // Pas de liste forcee : Stripe affiche les moyens de paiement actives dans le tableau de bord
      // (Parametres > Moyens de paiement > configuration "Default"), selon le montant, la devise et le pays.
      line_items,
      discounts: couponId ? [{ coupon: couponId }] : undefined,
      // Code personnel : l'e-mail de l'abonne est pre-rempli, et le code est relie a cette session.
      ...(personal
        ? { customer_email: personal.subscriber?.email, metadata: { promo_code: personal.code, promo_kind: "personal" } }
        : {}),
      shipping_address_collection: {
        allowed_countries: allowedCountries as Stripe.Checkout.SessionCreateParams.ShippingAddressCollection.AllowedCountry[],
      },
      success_url: `${siteConfig.domain}/confirmation?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteConfig.domain}/panier`,
    });

    if (personal?.subscriber) await markCodePending(personal.subscriber, session.id);

    // Garde-fou : le total Stripe doit correspondre au total calcule ici (et affiche dans le panier).
    const expectedTotal = subtotalCents - discountCents;
    if (session.amount_total !== null && session.amount_total !== expectedTotal) {
      console.error("[checkout:total-mismatch]", {
        sessionId: session.id,
        stripe: session.amount_total,
        expected: expectedTotal,
      });
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("[checkout:error]", error);
    const message = error instanceof Error ? error.message : "Erreur inconnue.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
