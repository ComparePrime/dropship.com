import { NextRequest, NextResponse } from "next/server";
import { resolvePromo } from "@/lib/promo-server";
import { apiTranslator, requestLocale } from "@/i18n/api";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const tr = apiTranslator(requestLocale(req));
  let code: unknown;
  try {
    ({ code } = await req.json());
  } catch {
    return NextResponse.json({ error: tr("Requête invalide.") }, { status: 400 });
  }

  if (typeof code !== "string" || code.trim() === "") {
    return NextResponse.json({ error: tr("Saisissez un code promo.") }, { status: 400 });
  }

  const result = await resolvePromo(code);
  if (!result.ok) {
    return NextResponse.json({ error: tr(result.error) }, { status: result.status });
  }

  return NextResponse.json({ code: result.promo.code, percent: result.promo.percent });
}
