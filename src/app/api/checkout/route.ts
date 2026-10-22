import { NextRequest, NextResponse } from "next/server";
import { getStripeClient } from "@/lib/stripe";
import { getProductBySlug } from "@/lib/products";
import { getPriceForCurrency } from "@/lib/currency";
import { siteConfig } from "@/lib/site-config";
import { CartLine, Currency } from "@/lib/types";
import { computeDiscountCents } from "@/lib/promo";
import { resolvePromo, type ResolvedPromo } from "@/lib/promo-server";
import { getMultiBuyPercent, MULTI_BUY } from "@/lib/multi-buy";
import { getSkuStock, hasSizes, parseSkuLabel, resolveLine } from "@/lib/sku";
import { allowedCountriesFor, isShippableToNorthAmerica } from "@/lib/shipping";
import { isLocale, localizePath, stripeLocales, defaultLocale, type Locale } from "@/i18n/config";
import { translate } from "@/i18n/messages";
import { translateLabel } from "@/i18n/translate";
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
    // Langue du visiteur : textes d'erreur, noms affichés sur la page de paiement Stripe, pages de retour.
    const locale: Locale = isLocale(body.locale) ? body.locale : defaultLocale;
    const tr = (text: string, vars?: Record<string, string | number>) => translate(locale, text, vars);
    const lines: CartLine[] = Array.isArray(body.lines) ? body.lines : [];
    const currency: Currency =
      body.currency === "CHF" || body.currency === "USD" || body.currency === "CAD" ? body.currency : "EUR";

    if (lines.length === 0) {
      return NextResponse.json({ error: tr("Le panier est vide.") }, { status: 400 });
    }

    // Le code est revalide ici : seul le serveur decide de la remise.
    const rawPromoCode = typeof body.promoCode === "string" ? body.promoCode : null;
    let promo: ResolvedPromo | null = null;
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
        return NextResponse.json({ error: tr("Choisissez une taille et un coloris pour {name}.", { name: tr(product.name) }) }, { status: 400 });
      }
      const available = getSkuStock(product, sku.variant.id, sku.size.id) ?? 0;
      if (totalQuantity > available) {
        return NextResponse.json(
          {
            error:
              available <= 0
                ? tr("{name} est temporairement indisponible.", { name: `${tr(product.name)} (${translateLabel(tr, label)})` })
                : tr("Il ne reste que {count} exemplaire(s) disponible(s) pour {name}.", {
                    count: available,
                    name: `${tr(product.name)} (${translateLabel(tr, label)})`,
                  }),
          },
          { status: 409 }
        );
      }
    }
    for (const [slug, totalQuantity] of quantityBySlug) {
      const product = getProductBySlug(slug);
      if (!product) {
        return NextResponse.json({ error: tr("Produit inconnu : {slug}", { slug }) }, { status: 400 });
      }
      if (product.stock && product.stock.source !== "none" && totalQuantity > product.stock.quantity) {
        return NextResponse.json(
          {
            error:
              product.stock.quantity <= 0
                ? tr("{name} est temporairement indisponible.", { name: tr(product.name) })
                : tr("Il ne reste que {count} exemplaire(s) disponible(s) pour {name}.", {
                    count: product.stock.quantity,
                    name: tr(product.name),
                  }),
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
          error: tr(
            "Livraison aux États-Unis et au Canada indisponible pour le moment pour : {names}. Retirez ces articles ou choisissez une autre devise (EUR/CHF) pour une livraison en Europe.",
            { names: blocked.map((p) => tr(p.name)).join(", ") }
          ),
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
            name: line.variantLabel ? `${tr(product.name)} — ${translateLabel(tr, line.variantLabel)}` : tr(product.name),
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
    // Code personnel : applique seulement s'il l'emporte sur la remise automatique. C'est le code
    // promotionnel Stripe lui-meme (limite a une utilisation) qui est transmis : Stripe garantit l'usage unique.
    const personal = !useMultiBuy && promo?.kind === "personal" && promo.promotionCodeId ? promo : null;
    const appliedDiscount = useMultiBuy
      ? { code: "vestes", percent: multiBuyPercent, name: tr(MULTI_BUY.label) }
      : personal
        ? { code: "bienvenue", percent: personal.percent, name: tr("Code de bienvenue") }
        : promo;

    const stripe = getStripeClient();
    const discountCents = appliedDiscount ? computeDiscountCents(subtotalCents, appliedDiscount.percent) : 0;

    const couponId = appliedDiscount && !personal ? await ensureCoupon(stripe, appliedDiscount) : null;
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      // Pas de liste forcee : Stripe affiche les moyens de paiement actives dans le tableau de bord
      // (Parametres > Moyens de paiement > configuration "Default"), selon le montant, la devise et le pays.
      line_items,
      discounts: personal
        ? [{ promotion_code: personal.promotionCodeId }]
        : couponId
          ? [{ coupon: couponId }]
          : undefined,
      // Code personnel : l'e-mail de l'abonne est pre-rempli et le code est note dans la commande.
      ...(personal
        ? {
            ...(personal.subscriber?.email ? { customer_email: personal.subscriber.email } : {}),
            metadata: { promo_code: personal.code, promo_kind: "personal" },
          }
        : {}),
      shipping_address_collection: {
        allowed_countries: allowedCountries as Stripe.Checkout.SessionCreateParams.ShippingAddressCollection.AllowedCountry[],
      },
      locale: stripeLocales[locale] as Stripe.Checkout.SessionCreateParams.Locale,
      success_url: `${siteConfig.domain}${localizePath("/confirmation", locale)}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteConfig.domain}${localizePath("/panier", locale)}`,
    });

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
