import type { MetadataRoute } from "next";
import { journeys } from "./data/journeys";

const routes = ["", "/journeys", "/experiences", "/destinations", "/south-pakistan", "/about", "/travel-info", "/travel-trade", "/plan-your-trip"];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `https://explore-karakuram.vercel.app${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/plan-your-trip" ? 0.9 : 0.8,
  }));
  const journeyRoutes: MetadataRoute.Sitemap = journeys.map((journey) => ({
    url: `https://explore-karakuram.vercel.app/journeys/${journey.slug}`,
    changeFrequency: "monthly",
    priority: 0.85,
  }));
  return [...staticRoutes, ...journeyRoutes];
}
