import { NextRequest, NextResponse } from "next/server";
import { getStripeClient } from "@/lib/stripe";
import { markCodeUsed } from "@/lib/newsletter";

export const dynamic = "force-dynamic";

const SESSION_ID = /^cs_(test|live)_[A-Za-z0-9]+$/;

/** Donnees d'une commande payee, lues chez Stripe, pour le suivi d'achat de la page de confirmation. */
export async function GET(req: NextRequest) {
  const sessionId = req.nextUrl.searchParams.get("session_id") ?? "";
  if (!SESSION_ID.test(sessionId)) {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  try {
    const session = await getStripeClient().checkout.sessions.retrieve(sessionId, {
      expand: ["line_items"],
    });
    if (session.payment_status !== "paid") {
      return NextResponse.json({ error: "Commande non payée." }, { status: 404 });
    }
    // Code de bienvenue personnel : consomme des que le paiement est confirme (idempotent).
    if (session.metadata?.promo_kind === "personal" && session.metadata.promo_code) {
      await markCodeUsed(session.metadata.promo_code, session.id);
    }
    return NextResponse.json(
      {
        transactionId: session.id,
        currency: (session.currency ?? "chf").toUpperCase(),
        value: (session.amount_total ?? 0) / 100,
        items: (session.line_items?.data ?? []).map((item) => ({
          item_name: item.description,
          quantity: item.quantity ?? 1,
          price: (item.price?.unit_amount ?? 0) / 100,
        })),
      },
      { headers: { "Cache-Control": "no-store" } }
    );
  } catch (error) {
    console.error("[order-summary:error]", error);
    return NextResponse.json({ error: "Indisponible." }, { status: 500 });
  }
}
