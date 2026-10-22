import { buildFeed, FEED_MARKETS } from "@/lib/merchant-feed";

export const dynamic = "force-static";

/** Flux Canada (CAD) : https://maisonloravie.com/merchant-feed-ca.xml */
export function GET() {
  return buildFeed(FEED_MARKETS.ca);
}
