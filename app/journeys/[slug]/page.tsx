import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "../../components/PageHero";
import { SiteFooter } from "../../components/SiteChrome";
import { excludedServices, getJourney, includedServices, journeyImportantInformation, journeys } from "../../data/journeys";

type JourneyPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return journeys.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: JourneyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const journey = getJourney(slug);
  if (!journey) return { title: "Journey not found" };

  const description = `${journey.duration} private Pakistan journey. Best season: ${journey.season}. ${journey.overview[0]}`;
  return {
    title: journey.title,
    description,
    openGraph: {
      title: `${journey.title} | EXPLORE KARAKURAM`,
      description,
      type: "website",
      images: [{ url: journey.image, alt: journey.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${journey.title} | EXPLORE KARAKURAM`,
      description,
      images: [journey.image],
    },
  };
}

export default async function JourneyPage({ params }: JourneyPageProps) {
  const { slug } = await params;
  const journey = getJourney(slug);
  if (!journey) notFound();

  const enquiryHref = `/plan-your-trip?journey=${encodeURIComponent(journey.cardTitle)}`;
  const quickFacts = [
    ["Duration", journey.duration],
    ["Best Season", journey.season],
    ...(journey.start ? [["Starting Point", journey.start]] : []),
    ...(journey.end ? [["Ending Point", journey.end]] : []),
    ["Travel Style", journey.styles.join(" / ")],
    ["Difficulty", journey.difficulty],
    ["Price", journey.price],
  ];

  return (
    <main className="page-shell journey-detail-page">
      <PageHero kicker={`Journey ${journey.number} · ${journey.duration}`} title={journey.title} copy={journey.overview[0]} image={journey.image} />

      <nav className="journey-breadcrumb shell" aria-label="Breadcrumb">
        <Link href="/journeys">All journeys</Link><span>›</span><span>{journey.cardTitle}</span>
      </nav>

      <section className="journey-facts shell" aria-label="Journey quick facts">
        {quickFacts.map(([label, value]) => <article key={label}><span>{label}</span><strong>{value}</strong></article>)}
      </section>

      <section className="journey-introduction shell">
        <div className="journey-overview">
          <p className="section-kicker">Overview</p>
          <h2>A closer look at the journey.</h2>
          {journey.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <div className="journey-style-tags">{journey.styles.map((style) => <span key={style}>{style}</span>)}</div>
        </div>
        <aside className="journey-highlights">
          <p className="section-kicker">{journey.customOptions ? "Choose from" : "Highlights"}</p>
          <ul>{(journey.customOptions ?? journey.highlights).map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
        </aside>
      </section>

      {journey.itinerary && (
        <section className="journey-itinerary">
          <div className="shell">
            <header className="content-heading">
              <div><p className="section-kicker">Suggested itinerary</p><h2>Day by day.</h2></div>
              <p>The route is a carefully considered starting point and remains adaptable to weather, road conditions and guest interests.</p>
            </header>
            <div className="itinerary-list">
              {journey.itinerary.map((stop, index) => (
                <details key={`${stop.label}-${stop.title}`} open={index === 0}>
                  <summary><span>{stop.label}</span><strong>{stop.title}</strong><i aria-hidden="true">+</i></summary>
                  <p>{stop.description}</p>
                </details>
              ))}
            </div>
            {journey.specialNote && <aside className="journey-special-note"><span>Important</span><div><h3>{journey.specialNote.title}</h3><p>{journey.specialNote.copy}</p></div></aside>}
          </div>
        </section>
      )}

      {journey.process && (
        <section className="journey-itinerary custom-process-section">
          <div className="shell">
            <header className="content-heading"><div><p className="section-kicker">How it works</p><h2>From idea to arrival.</h2></div><p>A private journey designed around your interests, preferred pace and travel dates.</p></header>
            <div className="custom-process-grid">{journey.process.map((step) => <article key={step.label}><span>{step.label}</span><h3>{step.title}</h3><p>{step.description}</p></article>)}</div>
          </div>
        </section>
      )}

      {journey.itinerary && (
        <section className="journey-services shell">
          <div className="accommodation-note">
            <p className="section-kicker">Accommodation</p>
            <h2>Selected around your route.</h2>
            <p>Hotel category and accommodation style will be selected according to the route, availability and traveller preferences, then confirmed in the tailored proposal.</p>
          </div>
          <div className="service-list-card included"><p className="section-kicker">Included</p><ul>{includedServices.map((item) => <li key={item}>{item}</li>)}</ul></div>
          <div className="service-list-card excluded"><p className="section-kicker">Excluded</p><ul>{excludedServices.map((item) => <li key={item}>{item}</li>)}</ul></div>
        </section>
      )}

      <section className="journey-important shell">
        <span>Important information</span>
        <p>{journeyImportantInformation} Exact duration, hotel selection, route and pricing may be adjusted according to season, availability and client requirements.</p>
      </section>

      <section className="journey-request shell">
        <div><p className="section-kicker light">Private & tailor-made</p><h2>{journey.slug === "custom-pakistan" ? "Start planning your Pakistan." : "Request this journey."}</h2><p>Tell us your dates, interests, group size and preferred travel style. Our Pakistan-based team will shape the details with you.</p></div>
        <div className="journey-request-actions"><Link className="inline-cta" href={enquiryHref}>Request this journey ↗</Link>{journey.slug !== "custom-pakistan" && <Link className="secondary-light-cta" href="/plan-your-trip?journey=Custom%20Pakistan">Customize this journey</Link>}</div>
      </section>

      <SiteFooter />
    </main>
  );
}
