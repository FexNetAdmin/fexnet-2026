export const dynamic = "force-static";

import type { MetadataRoute } from "next";
import { sessions } from "@/lib/content/sessions";
import { vaultTopics } from "@/lib/content/workbooks";

const BASE_URL = "https://fexnetadmin.github.io/fexnet-2026";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/sessions`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    // /vault intentionally excluded — gated content should not be indexed
  ];

  const sessionRoutes: MetadataRoute.Sitemap = sessions.map((s) => ({
    url: `${BASE_URL}/sessions/${s.slug}`,
    lastModified: new Date(s.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Vault topic routes excluded from sitemap — robots.txt disallows /vault/
  void vaultTopics;

  return [...staticRoutes, ...sessionRoutes];
}
