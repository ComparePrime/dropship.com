import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/panier", "/confirmation", "/admin/", "/desinscription"],
      },
    ],
    sitemap: `${siteConfig.domain}/sitemap.xml`,
  };
}
