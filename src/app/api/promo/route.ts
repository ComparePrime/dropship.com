import { NextRequest, NextResponse } from "next/server";
import { resolvePromo } from "@/lib/promo-server";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  let code: unknown;
  try {
    ({ code } = await req.json());
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  if (typeof code !== "string" || code.trim() === "") {
    return NextResponse.json({ error: "Saisissez un code promo." }, { status: 400 });
  }

  const result = await resolvePromo(code);
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: result.status });
  }

  return NextResponse.json({ code: result.promo.code, percent: result.promo.percent });
}
