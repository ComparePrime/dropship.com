import { NextRequest, NextResponse } from "next/server";
import { allowRequest, hashIp, unsubscribeByToken } from "@/lib/newsletter";
import { clientIp } from "@/lib/request-ip";
import { apiTranslator, requestLocale } from "@/i18n/api";

export const dynamic = "force-dynamic";

/** Desinscription par jeton personnel (lien present dans chaque envoi marketing). */
export async function POST(req: NextRequest) {
  const tr = apiTranslator(requestLocale(req));
  try {
    const { token } = await req.json();
    if (!(await allowRequest("unsub", hashIp(clientIp(req)), 20, 60 * 60 * 1000))) {
      return NextResponse.json({ error: tr("Trop de tentatives.") }, { status: 429 });
    }
    const ok = typeof token === "string" && (await unsubscribeByToken(token));
    if (!ok) return NextResponse.json({ error: tr("Lien de désinscription invalide.") }, { status: 404 });
    return NextResponse.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return NextResponse.json({ error: tr("Requête invalide.") }, { status: 400 });
  }
}
