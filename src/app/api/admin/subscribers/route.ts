import { NextRequest, NextResponse } from "next/server";
import { allowRequest, exportSubscribersCsv, hashIp, safeEqual } from "@/lib/newsletter";
import { clientIp } from "@/lib/request-ip";

export const dynamic = "force-dynamic";

/**
 * Export CSV des abonnes. Protege par la variable d'environnement ADMIN_EXPORT_TOKEN (a creer dans
 * Netlify) : sans elle l'export est desactive. Le jeton se transmet dans l'en-tete Authorization.
 */
export async function GET(req: NextRequest) {
  const expected = process.env.ADMIN_EXPORT_TOKEN;
  if (!expected || expected.length < 16) {
    return NextResponse.json({ error: "Export non configuré." }, { status: 503 });
  }
  if (!(await allowRequest("admin", hashIp(clientIp(req)), 10, 15 * 60 * 1000))) {
    return NextResponse.json({ error: "Trop de tentatives." }, { status: 429 });
  }
  const provided = req.headers.get("authorization")?.replace(/^Bearer\s+/i, "") ?? "";
  if (!provided || !safeEqual(provided, expected)) {
    return NextResponse.json({ error: "Accès refusé." }, { status: 401 });
  }

  try {
    const { csv, count } = await exportSubscribersCsv();
    return new NextResponse(csv, {
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="abonnes-maison-loravie-${new Date().toISOString().slice(0, 10)}.csv"`,
        "X-Subscriber-Count": String(count),
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("[admin:export-error]", error instanceof Error ? error.name : "unknown");
    return NextResponse.json({ error: "Export impossible." }, { status: 500 });
  }
}
