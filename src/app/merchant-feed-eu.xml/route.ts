import { buildFeed, FEED_MARKETS } from "@/lib/merchant-feed";

export const dynamic = "force-static";

/** Flux Europe (EUR) : https://maisonloravie.com/merchant-feed-eu.xml */
export function GET() {
  return buildFeed(FEED_MARKETS.eu);
}
