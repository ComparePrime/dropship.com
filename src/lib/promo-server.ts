import { findPromo } from "./promo";
import { findSubscriberByCode, isPersonalCode, Subscriber, WELCOME_PERCENT } from "./newsletter";

export interface ResolvedPromo {
  /** Identifiant du code promotionnel Stripe (codes personnels) : c'est Stripe qui garantit l'usage unique. */
  promotionCodeId?: string;
  code: string;
  percent: number;
  kind: "public" | "personal";
  subscriber?: Subscriber;
}

export type PromoResolution =
  | { ok: true; promo: ResolvedPromo }
  | { ok: false; error: string; status: number };

/**
 * Valide un code cote serveur : codes publics (promo.ts) ou code de bienvenue personnel
 * (un par adresse, une seule utilisation). Seul le serveur decide de la remise.
 */
export async function resolvePromo(input: unknown): Promise<PromoResolution> {
  if (typeof input !== "string") return { ok: false, error: "Ce code promo n'est pas valide.", status: 404 };
  const code = input.trim().toUpperCase();

  const publicPromo = findPromo(code);
  if (publicPromo) return { ok: true, promo: { code: publicPromo.code, percent: publicPromo.percent, kind: "public" } };

  if (isPersonalCode(code)) {
    const subscriber = await findSubscriberByCode(code);
    if (subscriber) {
      if (subscriber.codeStatus === "used") {
        return { ok: false, error: "Ce code de bienvenue a déjà été utilisé.", status: 410 };
      }
      return { ok: true, promo: { code, percent: WELCOME_PERCENT, kind: "personal", subscriber, promotionCodeId: subscriber.promotionCodeId } };
    }
  }
  return { ok: false, error: "Ce code promo n'est pas valide.", status: 404 };
}
