import type { MetadataRoute } from "next";
import { VACATURES } from "@/data/vacatures";

const SITE_URL = "https://www.obibeton.nl";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: {
    path: string;
    changeFrequency: "weekly" | "monthly" | "yearly";
    priority: number;
  }[] = [
    { path: "/", changeFrequency: "monthly", priority: 1 },
    { path: "/over-ons", changeFrequency: "yearly", priority: 0.8 },
    { path: "/afwerking-en-kleuren", changeFrequency: "yearly", priority: 0.8 },
    { path: "/duurzaamheid", changeFrequency: "yearly", priority: 0.7 },
    { path: "/kwaliteit", changeFrequency: "yearly", priority: 0.7 },
    { path: "/offerte", changeFrequency: "yearly", priority: 0.8 },
    { path: "/vacatures", changeFrequency: "weekly", priority: 0.7 },
    { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  ];

  return [
    ...pages.map(({ path, changeFrequency, priority }) => ({
      url: `${SITE_URL}${path === "/" ? "" : path}`,
      changeFrequency,
      priority,
    })),
    ...VACATURES.map((job) => ({
      url: `${SITE_URL}/vacatures/${job.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
