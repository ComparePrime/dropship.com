import type { MetadataRoute } from "next";
import { getPublishedProducts } from "@/lib/products";
import { getAllBlogPosts } from "@/lib/blog";
import { categories } from "@/lib/categories";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/collections", "/blog", "/panier"].map((path) => ({
    url: `${siteConfig.domain}${path}`,
    lastModified: new Date(),
  }));

  const productRoutes = getPublishedProducts().map((product) => ({
    url: `${siteConfig.domain}/produit/${product.slug}`,
    lastModified: new Date(),
  }));

  const collectionRoutes = categories.map((c) => ({
    url: `${siteConfig.domain}/collections/${c.slug}`,
    lastModified: new Date(),
  }));

  const blogRoutes = getAllBlogPosts().map((post) => ({
    url: `${siteConfig.domain}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
  }));

  return [...staticRoutes, ...productRoutes, ...collectionRoutes, ...blogRoutes];
}
