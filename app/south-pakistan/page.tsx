import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "../components/PageHero";
import { SiteFooter } from "../components/SiteChrome";
import { southPakistanPlaces } from "../data/site";

export const metadata: Metadata = { title: "South Pakistan", description: "Discover the Pakistan of the Indus, Desert and Sea—from Mohenjo-daro and Cholistan to Karachi, Hingol and Gwadar." };

export default function SouthPakistanPage() {
  return <main className="page-shell">
    <PageHero kicker="Beyond the Mountains" title="The Indus, Desert & Sea." copy="Discover South Pakistan through ancient civilizations, Sufi cities, desert forts, coastal roads and Karachi’s creative energy." image="/assets/images/hires/region-sindh-karachi.jpg" />
    <section className="content-section shell"><div className="feature-split"><div className="feature-image"><Image src="/assets/images/hires/region-balochistan.jpg" alt="The dramatic landscapes of southern Pakistan" fill sizes="(max-width:680px) 100vw, 50vw" /></div><div className="feature-copy"><p className="section-kicker light">A different Pakistan</p><h2>Beyond the Mountains.</h2><p>Travel from the ancient Indus to desert kingdoms and the Makran coast. South Pakistan adds history, food, architecture and sea horizons to the country’s better-known mountain story.</p><Link className="inline-cta" href="/plan-your-trip">Plan South Pakistan ↗</Link></div></div></section>
    <section className="content-section ice"><div className="shell"><header className="content-heading"><div><p className="section-kicker">Places to connect</p><h2>Ancient cities.<br/>Open horizons.</h2></div><p>These places can be combined into private cultural journeys, desert road trips and longer north-to-south itineraries.</p></header><div className="tag-collection">{southPakistanPlaces.map(place=><span key={place}>{place}</span>)}</div></div></section>
    <SiteFooter />
  </main>;
}

