import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "explorekarakuram.com";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const siteUrl = `${protocol}://${host}`;
  const socialImage = `${siteUrl}/og.png`;

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: "Explore Karakuram — Travel with Altitude",
      template: "%s | Explore Karakuram",
    },
    description:
      "Private treks, cultural journeys and mountain expeditions across Pakistan's Karakuram, Himalaya and Hindu Kush.",
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: {
      title: "Explore Karakuram — Travel with Altitude",
      description: "Private mountain journeys across the wild north of Pakistan.",
      type: "website",
      images: [{ url: socialImage, width: 1732, height: 909, alt: "Explore Karakuram — Travel with Altitude" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Explore Karakuram — Travel with Altitude",
      description: "Private mountain journeys across the wild north of Pakistan.",
      images: [socialImage],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
