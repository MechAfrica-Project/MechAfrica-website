import type { MetadataRoute } from "next";

import { siteConfig } from "@/content/site-config";

const routes = [
  "/",
  "/about",
  "/how-it-works",
  "/solutions/farmers",
  "/solutions/service-providers",
  "/solutions/agents",
  "/impact",
  "/download",
  "/faq",
  "/contact",
  "/legal/terms",
  "/legal/privacy",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((path) => ({
    url: new URL(path, siteConfig.url).toString(),
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}

