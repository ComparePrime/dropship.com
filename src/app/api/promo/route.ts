import { NextRequest, NextResponse } from "next/server";
import { findPromo } from "@/lib/promo";

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

  const promo = findPromo(code);
  if (!promo) {
    return NextResponse.json({ error: "Ce code promo n'est pas valide." }, { status: 404 });
  }

  return NextResponse.json({ code: promo.code, percent: promo.percent });
}
