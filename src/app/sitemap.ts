import type { MetadataRoute } from "next";
import { getAllProducts } from "@/lib/products";
import { getAllBlogPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/collections", "/blog", "/panier"].map((path) => ({
    url: `${siteConfig.domain}${path}`,
    lastModified: new Date(),
  }));

  const productRoutes = getAllProducts().map((product) => ({
    url: `${siteConfig.domain}/produit/${product.slug}`,
    lastModified: new Date(),
  }));

  const collectionRoutes = ["chats", "decoration", "maison", "cadeaux"].map((slug) => ({
    url: `${siteConfig.domain}/collections/${slug}`,
    lastModified: new Date(),
  }));

  const blogRoutes = getAllBlogPosts().map((post) => ({
    url: `${siteConfig.domain}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
  }));

  return [...staticRoutes, ...productRoutes, ...collectionRoutes, ...blogRoutes];
}
