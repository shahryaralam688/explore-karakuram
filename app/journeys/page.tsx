import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "../components/PageHero";
import { SiteFooter } from "../components/SiteChrome";
import { journeys } from "../data/journeys";

export const metadata: Metadata = {
  title: "Journeys",
  description: "Explore ten private and tailor-made journeys across Pakistan, from the Karakoram and Gandhara to the Indus, desert and Arabian Sea.",
};

export default function JourneysPage() {
  return (
    <main className="page-shell">
      <PageHero
        kicker="Private & tailor-made"
        title="Journeys across Pakistan."
        copy="Ten starting points for experiencing Pakistan—from mountain roads and living cultures to ancient cities, desert horizons and the Arabian Sea."
        image="/assets/images/hires/journey-hunza-skardu.jpg"
      />

      <section className="content-section shell">
        <header className="content-heading journeys-index-heading">
          <div>
            <p className="section-kicker">Flagship collection</p>
            <h2>Pakistan, beyond a single route.</h2>
          </div>
          <p>These journeys are private and adaptable. The route, duration, accommodation and final quotation are refined around season, road conditions and your requirements.</p>
        </header>

        <div className="journey-catalogue">
          {journeys.map((journey) => (
            <article className="catalogue-card" key={journey.slug}>
              <Link className="catalogue-image" href={`/journeys/${journey.slug}`} aria-label={`View ${journey.title}`}>
                <Image src={journey.image} alt={journey.imageAlt} fill sizes="(max-width: 680px) 100vw, (max-width: 1030px) 50vw, 33vw" />
                <span>{journey.number}</span>
              </Link>
              <div className="catalogue-copy">
                <p>{journey.styles.slice(0, 2).join(" · ")}</p>
                <h2><Link href={`/journeys/${journey.slug}`}>{journey.cardTitle}</Link></h2>
                <div className="catalogue-facts">
                  <span>{journey.duration}</span>
                  <span>Best Season: {journey.season}</span>
                </div>
                <Link className="catalogue-link" href={`/journeys/${journey.slug}`}>View journey <span>↗</span></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-closing-cta shell">
        <div>
          <h2>Your journey can begin differently.</h2>
          <p>Share your dates, interests and preferred pace. We will build a private Pakistan itinerary around you.</p>
        </div>
        <Link className="inline-cta" href="/plan-your-trip?journey=Custom%20Pakistan">Plan your journey ↗</Link>
      </section>
      <SiteFooter />
    </main>
  );
}
