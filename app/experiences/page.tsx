import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../components/PageHero";
import { SiteFooter } from "../components/SiteChrome";
import { experienceCategories } from "../data/site";

export const metadata: Metadata = { title: "Experiences", description: "Trekking, expeditions, culture, heritage, photography, road adventures, nature and local life across Pakistan." };
const slug = (value: string) => value.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function ExperiencesPage() {
  return <main className="page-shell">
    <PageHero kicker="Travel with purpose" title="Experience Pakistan deeply." copy="Choose the feeling you want from the journey. Our local team shapes the route, rhythm and encounters around it." image="/assets/images/hires/experience-adventure.jpg" />
    <section className="content-section dark"><div className="shell"><header className="content-heading"><div><p className="section-kicker light">Experiences</p><h2>Go beyond sightseeing.</h2></div><p>Active adventures, living heritage and meaningful local encounters—designed for private travellers and specialist groups.</p></header><div className="service-grid">{experienceCategories.map((title,index)=><article id={slug(title)} key={title}><span>{String(index+1).padStart(2,"0")}</span><h3>{title}</h3></article>)}</div></div></section>
    <section className="page-closing-cta shell"><div><h2>Combine experiences your way.</h2><p>Pair culture with hiking, photography with a road trip, or a family journey with quiet nature stays.</p></div><Link className="inline-cta" href="/plan-your-trip">Create your journey ↗</Link></section>
    <SiteFooter />
  </main>;
}

