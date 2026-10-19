import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../components/PageHero";
import { SiteFooter } from "../components/SiteChrome";
import { destinationRegions } from "../data/site";

export const metadata: Metadata = { title: "Destinations", description: "Explore destinations across Gilgit-Baltistan, Khyber Pakhtunkhwa, Punjab, Sindh, Balochistan, Azad Kashmir, Islamabad and Karachi." };
const slug = (value: string) => value.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function DestinationsPage() {
  return <main className="page-shell">
    <PageHero kicker="The whole country" title="Pakistan, place by place." copy="A country of high ranges, river civilizations, layered cities, desert stories and a long Arabian Sea coast." image="/assets/images/hires/destination-skardu.jpg" />
    <section className="content-section shell"><header className="content-heading"><div><p className="section-kicker">Destinations</p><h2>Eight gateways.<br/>One Pakistan.</h2></div><p>Explore by region, then let us connect the places into a journey that works naturally with your dates and interests.</p></header><div className="overview-grid">{destinationRegions.map(([title,copy],index)=><article className="overview-card" id={slug(title)} key={title}><span>{String(index+1).padStart(2,"0")}</span><div><h3>{title}</h3><p>{copy}</p><Link href="/plan-your-trip">Explore with us ↗</Link></div></article>)}</div></section>
    <SiteFooter />
  </main>;
}

