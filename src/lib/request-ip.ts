import { NextRequest } from "next/server";

/** Adresse IP du visiteur (Netlify, puis en-tete standard) : uniquement pour la limitation anti-abus. */
export function clientIp(req: NextRequest): string {
  return (
    req.headers.get("x-nf-client-connection-ip") ??
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown"
  );
}
