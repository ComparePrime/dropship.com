import { NextRequest, NextResponse } from "next/server";
import { allowRequest, hashIp, normalizeEmail, subscribe, WELCOME_PERCENT } from "@/lib/newsletter";
import { clientIp } from "@/lib/request-ip";

export const dynamic = "force-dynamic";

const NO_STORE = { "Cache-Control": "no-store" };
const fail = (error: string, status: number) => NextResponse.json({ error }, { status, headers: NO_STORE });

/**
 * Inscription a la newsletter + code de bienvenue. Le code n'est renvoye qu'une fois l'adresse
 * reellement enregistree. Protections : champ piege, delai minimal de saisie, limitation par
 * adresse IP (hachee), adresses jetables refusees, une seule fiche par adresse.
 */
export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return fail("Requête invalide.", 400);
  }

  // Champ piege (invisible pour les humains) et delai minimal : signes d'un robot.
  if (typeof body.website === "string" && body.website.trim() !== "") return fail("Requête invalide.", 400);
  if (typeof body.elapsedMs !== "number" || body.elapsedMs < 1500) {
    return fail("Veuillez réessayer dans un instant.", 400);
  }
  if (body.consent !== true) return fail("Cochez la case pour recevoir votre code et la newsletter.", 400);

  try {
    // Format d'abord (une faute de frappe ne compte pas), puis limitation : 10 inscriptions par heure et par adresse IP.
    const normalized = normalizeEmail(body.email);
    if ("error" in normalized) return fail(normalized.error, 400);
    if (!(await allowRequest("signup", hashIp(clientIp(req)), 10, 60 * 60 * 1000))) {
      return fail("Trop de tentatives. Réessayez dans une heure.", 429);
    }

    const result = await subscribe(normalized, "popup-bienvenue");
    if (result.status === "used") return fail("Votre code de bienvenue a déjà été utilisé.", 409);

    return NextResponse.json(
      { ok: true, code: result.subscriber.code, percent: WELCOME_PERCENT, existing: result.status === "existing" },
      { headers: NO_STORE }
    );
  } catch (error) {
    // Journal sans donnee personnelle : uniquement le type d'erreur.
    console.error("[newsletter:error]", error instanceof Error ? error.name : "unknown");
    return fail("Inscription impossible pour le moment. Réessayez dans quelques minutes.", 500);
  }
}
