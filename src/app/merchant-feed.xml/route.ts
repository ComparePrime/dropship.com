import { buildFeed, FEED_MARKETS } from "@/lib/merchant-feed";

export const dynamic = "force-static";

/** Flux Suisse (CHF) : https://maisonloravie.com/merchant-feed.xml */
export function GET() {
  return buildFeed(FEED_MARKETS.ch);
}
