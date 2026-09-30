import type { MetadataRoute } from "next";
import { getPublishedProducts } from "@/lib/products";
import { getAllBlogPosts } from "@/lib/blog";
import { getPublishedScenes } from "@/lib/scenes";
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

  const subcategoryRoutes = [
    { url: `${siteConfig.domain}/collections/maison-decoration/art-de-la-table`, lastModified: new Date() },
  ];

  const sceneRoutes = getPublishedScenes().map((s) => ({
    url: `${siteConfig.domain}/mises-en-scene/${s.slug}`,
    lastModified: new Date(),
  }));

  const blogRoutes = getAllBlogPosts().map((post) => ({
    url: `${siteConfig.domain}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
  }));

  return [
    ...staticRoutes,
    ...productRoutes,
    ...collectionRoutes,
    ...subcategoryRoutes,
    ...sceneRoutes,
    ...blogRoutes,
  ];
}
