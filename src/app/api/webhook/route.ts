import { NextRequest, NextResponse } from "next/server";
import { getStripeClient } from "@/lib/stripe";
import { saveOrder } from "@/lib/orders";
import Stripe from "stripe";

export async function POST(req: NextRequest) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    return NextResponse.json({ error: "Webhook non configuré." }, { status: 500 });
  }

  const signature = req.headers.get("stripe-signature");
  const payload = await req.text();

  let event: Stripe.Event;
  try {
    const stripe = getStripeClient();
    event = stripe.webhooks.constructEvent(payload, signature ?? "", webhookSecret);
  } catch (error) {
    console.error("[webhook:signature-error]", error);
    return NextResponse.json({ error: "Signature invalide." }, { status: 400 });
  }

  // TODO: dès qu'une base de données est branchée (Supabase), vérifier ici
  // que `event.id` / `session.id` n'a pas déjà été traité avant de créer la commande,
  // pour éviter les doublons en cas de nouvelle tentative d'envoi par Stripe.

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      await saveOrder({
        id: session.id,
        customerEmail: session.customer_details?.email ?? null,
        country: session.customer_details?.address?.country ?? null,
        currency: (session.currency ?? "chf").toUpperCase(),
        items: [],
        subtotal: (session.amount_subtotal ?? 0) / 100,
        shipping: 0,
        total: (session.amount_total ?? 0) / 100,
        paymentStatus: session.payment_status === "paid" ? "paid" : "pending",
        fulfillmentStatus: "unfulfilled",
        stripePaymentId: (session.payment_intent as string) ?? session.id,
        createdAt: new Date().toISOString(),
      });
      break;
    }
    case "checkout.session.async_payment_failed":
    case "payment_intent.payment_failed": {
      console.warn("[webhook:payment-failed]", event.id);
      break;
    }
    default:
      break;
  }

  return NextResponse.json({ received: true });
}
