import { NextRequest, NextResponse } from "next/server";
import { getProductBySlug } from "@/lib/products";
import { touchPresence } from "@/lib/presence-store";

export const dynamic = "force-dynamic";

const VISITOR_ID = /^[a-zA-Z0-9-]{8,64}$/;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const slug = typeof body.slug === "string" ? body.slug : "";
    const visitorId = typeof body.visitorId === "string" ? body.visitorId : "";

    const product = getProductBySlug(slug);
    if (!product || product.status !== "published" || !VISITOR_ID.test(visitorId)) {
      return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
    }

    const count = await touchPresence(slug, visitorId);
    return NextResponse.json({ count }, { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    console.error("[presence:error]", error);
    return NextResponse.json({ error: "Indisponible." }, { status: 500 });
  }
}
