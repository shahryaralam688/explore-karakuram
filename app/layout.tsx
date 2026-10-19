import type { Metadata } from "next";
import "./globals.css";
import "./site-pages.css";

export const metadata: Metadata = {
    metadataBase: new URL("https://explore-karakuram.vercel.app"),
    title: {
      default: "EXPLORE KARAKURAM — Pakistan, Beyond the Obvious",
      template: "%s | EXPLORE KARAKURAM",
    },
    description:
      "Pakistan-based DMC and specialist tour operator creating private and tailor-made journeys across Pakistan.",
    icons: {
      icon: "/brand/explore-karakuram-seal.png",
      shortcut: "/brand/explore-karakuram-seal.png",
      apple: "/brand/explore-karakuram-seal.png",
    },
    openGraph: {
      title: "EXPLORE KARAKURAM — Pakistan, Beyond the Obvious",
      description: "Private and tailor-made journeys across Pakistan from the Karakoram to the Indus, desert and Arabian Sea.",
      type: "website",
      images: [{ url: "/og-v2.png", width: 1732, height: 909, alt: "EXPLORE KARAKURAM — Pakistan, Beyond the Obvious" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "EXPLORE KARAKURAM — Pakistan, Beyond the Obvious",
      description: "Private and tailor-made journeys across Pakistan from the Karakoram to the Indus, desert and Arabian Sea.",
      images: ["/og-v2.png"],
    },
  };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
