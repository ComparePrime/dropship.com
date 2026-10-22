import { NextRequest, NextResponse } from "next/server";
import { countryCurrencyMap } from "@/lib/site-config";

export const dynamic = "force-dynamic";

/** Pays du visiteur d'apres les en-tetes de l'hebergeur (Netlify : x-nf-geo, ou en-tete de pays direct). */
function readCountry(req: NextRequest): string | null {
  const direct = req.headers.get("x-country") ?? req.headers.get("cf-ipcountry");
  if (direct && /^[A-Za-z]{2}$/.test(direct)) return direct.toUpperCase();
  const encoded = req.headers.get("x-nf-geo");
  if (encoded) {
    try {
      const geo = JSON.parse(Buffer.from(encoded, "base64").toString("utf8"));
      const code = geo?.country?.code;
      if (typeof code === "string" && /^[A-Za-z]{2}$/.test(code)) return code.toUpperCase();
    } catch {
      // en-tete illisible : on ignore
    }
  }
  return null;
}

/**
 * Devise conseillee selon le pays : Suisse et Liechtenstein en CHF, Etats-Unis en USD, Canada en CAD,
 * tous les autres pays en EUR.
 * Renvoie currency: null quand le pays est inconnu (le site garde alors la devise de la langue du navigateur).
 */
export async function GET(req: NextRequest) {
  const country = readCountry(req);
  // Journal sans donnee personnelle (pays seulement) : permet de verifier que l'hebergeur fournit bien le pays.
  console.log("[geo]", country ?? "inconnu", req.headers.has("x-nf-geo") ? "x-nf-geo" : "sans-en-tete");
  const currency = country ? (countryCurrencyMap[country] ?? "EUR") : null;
  return NextResponse.json({ country, currency }, { headers: { "Cache-Control": "no-store" } });
}
