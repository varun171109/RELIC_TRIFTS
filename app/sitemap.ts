import { MetadataRoute } from "next";
import { products } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://example.com";
  const staticRoutes = ["", "/shop", "/about", "/contact", "/login", "/register"].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));
  const productRoutes = products.map((p) => ({
    url: `${base}/product/${p.id}`,
    lastModified: new Date(),
  }));
  return [...staticRoutes, ...productRoutes];
}
