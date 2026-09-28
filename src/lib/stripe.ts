import Stripe from "stripe";

let stripeClient: Stripe | null = null;

/** Crée le client Stripe à la demande, uniquement côté serveur. */
export function getStripeClient(): Stripe {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    throw new Error("STRIPE_SECRET_KEY n'est pas configurée.");
  }
  if (!stripeClient) {
    stripeClient = new Stripe(secretKey, {
      apiVersion: "2024-06-20",
    });
  }
  return stripeClient;
}
