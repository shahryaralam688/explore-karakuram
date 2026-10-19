import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import EnquiryForm from "../components/EnquiryForm";
import { SiteFooter } from "../components/SiteChrome";
import { journeys } from "../data/journeys";

export const metadata: Metadata = { title: "Plan Your Trip", description: "Plan a private and tailor-made Pakistan journey around your dates, interests, travel style and budget." };

type PlanPageProps = { searchParams: Promise<{ journey?: string }> };

export default async function PlanYourTripPage({ searchParams }: PlanPageProps) {
  const { journey = "" } = await searchParams;
  const journeyOptions = journeys.map((item) => item.cardTitle);
  const validJourney = journeyOptions.includes(journey) ? journey : "";

  return <main className="page-shell">
    <PageHero kicker="Private & tailor-made" title="Your dates. Your Pakistan." copy="Tell us what you love, when you want to travel and the pace that suits you. We will shape a private journey around it." image="/assets/images/hires/destination-hunza.jpg"/>
    <section className="content-section ice"><div className="enquiry-wrap shell"><header className="content-heading"><div><p className="section-kicker">Plan your journey</p><h2>Start with what matters to you.</h2></div><p>You do not need a complete itinerary. Share the essentials and our Pakistan-based team will help develop the route.</p></header><EnquiryForm initialJourney={validJourney} journeyOptions={journeyOptions}/></div></section>
    <SiteFooter/>
  </main>;
}
