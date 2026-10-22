import { buildFeed, FEED_MARKETS } from "@/lib/merchant-feed";

export const dynamic = "force-static";

/** Flux Etats-Unis (USD) : https://maisonloravie.com/merchant-feed-us.xml */
export function GET() {
  return buildFeed(FEED_MARKETS.us);
}
