import Image from "next/image";
import Link from "next/link";
import RegionalScroll from "./components/RegionalScroll";
import PakistanMapStory from "./components/PakistanMapStory";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";

const featuredJourneys = [
  {
    title: "Hunza & Skardu",
    category: "Northern Pakistan",
    copy: "Glacial lakes, heritage forts and slow days in Pakistan’s most iconic valleys.",
    image: "/assets/images/hires/journey-hunza-skardu.jpg",
  },
  {
    title: "Pakistan Cultural Trail",
    category: "Culture & Heritage",
    copy: "Historic cities, local food and living traditions from Islamabad to the north.",
    image: "/assets/images/hires/journey-cultural-trail.jpg",
  },
  {
    title: "Karakoram Adventure",
    category: "Trekking & Expeditions",
    copy: "High trails, glacier camps and legendary mountain journeys led by local experts.",
    image: "/assets/images/hires/journey-karakoram-adventure.jpg",
  },
  {
    title: "Pakistan by Road",
    category: "Road Trips & 4x4",
    copy: "Cinematic highways, remote valleys and overland routes shaped around the season.",
    image: "/assets/images/hires/region-balochistan.jpg",
  },
  {
    title: "Indus, Desert & Sea",
    category: "South Pakistan",
    copy: "Ancient civilizations, desert forts, Karachi and the long Makran coast.",
    image: "/assets/images/hires/region-sindh-karachi.jpg",
  },
  {
    title: "Your Pakistan",
    category: "Custom Journeys",
    copy: "A private route designed from scratch around your dates, interests and travel style.",
    image: "/assets/images/hires/experience-escape.jpg",
  },
];

const experiences = [
  {
    number: "01",
    title: "Adventure",
    copy: "Trekking, expeditions & mountain journeys",
    image: "/assets/images/hires/experience-adventure.jpg",
  },
  {
    number: "02",
    title: "Discover",
    copy: "Culture, history & local life",
    image: "/assets/images/hires/experience-discover.jpg",
  },
  {
    number: "03",
    title: "Escape",
    copy: "Nature, valleys & peaceful retreats",
    image: "/assets/images/hires/experience-escape.jpg",
  },
];

const reasons = [
  { number: "01", title: "Local expertise", copy: "First-hand knowledge of Pakistan’s routes, seasons and communities." },
  { number: "02", title: "Tailor-made journeys", copy: "Your dates, interests, comfort and budget shape every detail." },
  { number: "03", title: "Experienced team", copy: "Trusted guides and trip planners with deep on-ground experience." },
  { number: "04", title: "Authentic experiences", copy: "Meaningful encounters, local stories and places beyond the obvious." },
];

const destinations = [
  { name: "Hunza", copy: "Fortresses, orchards & high peaks", image: "/assets/images/hires/destination-hunza.jpg" },
  { name: "Skardu", copy: "Lakes, deserts & mountain gateways", image: "/assets/images/hires/destination-skardu.jpg" },
  { name: "Chitral", copy: "Kalash culture & wild valleys", image: "/assets/images/hires/destination-chitral.jpg" },
  { name: "Swat", copy: "Forest trails & emerald rivers", image: "/assets/images/hires/destination-swat.jpg" },
  { name: "Naran", copy: "Alpine lakes & summer escapes", image: "/assets/images/hires/destination-naran.jpg" },
  { name: "Islamabad", copy: "A calm beginning to Pakistan", image: "/assets/images/hires/destination-islamabad.jpg" },
];

const northernStories = [
  { title: "Gandhara & Buddhist Heritage", detail: "Swat" },
  { title: "Kalash Valleys & Traditional Festivals", detail: "Chitral" },
  { title: "5,000 Years of Art & History", detail: "Taxila · Lahore · Mohenjo-daro" },
  { title: "Mughal Architecture & Heritage", detail: "Lahore & Punjab" },
];

const travelStyles = [
  "Cycle Safaris",
  "Cultural & Heritage Tours",
  "Adventure & Nature Tours",
  "Trekking & Hiking",
  "Mountain Expeditions",
  "Road Trips & 4x4 Adventures",
  "Family & Private Tours",
  "Photography Tours",
];

export default function Home() {
  return (
    <main className="site-frame">
      <section className="hero" id="home">
        <video
          className="hero-media"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/assets/images/hero-mountain-stream-poster.jpg"
          aria-hidden="true"
        >
          <source src="/assets/video/hero-mountain-stream.mp4" type="video/mp4" />
        </video>

        <SiteHeader overlay />

        <div className="hero-content shell">
          <p className="hero-kicker">Pakistan-based DMC & Specialist Tour Operator</p>
          <h1>Pakistan,<br />Beyond the Obvious.</h1>
          <p className="hero-copy">
            We create private and tailor-made journeys across Pakistan—from the high valleys of the Karakoram and Hindu Kush to the ancient cities of the Indus, the deserts of the south and the Arabian Sea.
          </p>
          <div className="hero-actions">
            <Link className="primary-button" href="/journeys">Explore journeys <span>↗</span></Link>
            <Link className="outline-button" href="/plan-your-trip">Plan your journey</Link>
          </div>
        </div>

        <div className="hero-foot shell" aria-label="Journey types">
          <span>Northern Pakistan</span><span>Culture & Heritage</span><span>Adventure</span><span>Road Trips</span><span>South Pakistan</span><span>Custom Journeys</span>
        </div>
      </section>

      <section className="custom-strip shell" aria-label="Custom journey planning">
        <div>
          <span className="custom-icon" aria-hidden="true">✦</span>
          <p><small>Made for you</small><strong>A private Pakistan journey, built from scratch.</strong></p>
        </div>
        <Link href="/plan-your-trip">Start planning <span>↗</span></Link>
      </section>

      <RegionalScroll />

      <PakistanMapStory />

      <section className="journeys" id="journeys">
        <div className="shell">
          <header className="section-head center-head">
            <p className="section-kicker">Featured journeys</p>
            <h2>More than mountains.</h2>
            <p>Six ways to begin—from the high north to the Indus, desert and sea—with room to make each one your own.</p>
          </header>

          <div className="journey-grid">
            {featuredJourneys.map((journey) => (
              <article className="journey-card" key={journey.title}>
                <div className="journey-image">
                  <Image src={journey.image} alt={`${journey.title} in Pakistan`} fill sizes="(max-width: 680px) 100vw, (max-width: 980px) 50vw, 33vw" />
                  <span>{journey.category}</span>
                </div>
                <div className="journey-info">
                  <h3>{journey.title}</h3>
                  <p>{journey.copy}</p>
                  <Link href="/journeys">
                    Explore this journey <span>↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="experiences shell" id="experiences">
        <header className="section-head split-head">
          <div>
            <p className="section-kicker">Three ways to experience Pakistan</p>
            <h2>Choose the feeling.<br />We shape the journey.</h2>
          </div>
          <p>Travel deeper through adventure, living culture or the quiet beauty of Pakistan’s landscapes.</p>
        </header>

        <div className="experience-grid">
          {experiences.map((experience) => (
            <article className="experience-card" key={experience.title}>
              <Image src={experience.image} alt={`${experience.title} experiences in Pakistan`} fill sizes="(max-width: 680px) 100vw, 33vw" />
              <div className="experience-overlay" />
              <span className="card-number">{experience.number}</span>
              <div className="experience-copy">
                <h3>{experience.title}</h3>
                <p>{experience.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="why-us" id="why-us">
        <div className="why-layout shell">
          <div className="why-intro">
            <p className="section-kicker light">Why EXPLORE KARAKURAM</p>
            <h2>Local knowledge.<br />Personal journeys.</h2>
            <p>We make Pakistan feel clear, welcoming and completely your own.</p>
            <Image src="/brand/explore-karakuram-seal.png" alt="" aria-hidden="true" width={74} height={74} />
          </div>
          <div className="reason-grid">
            {reasons.map((reason) => (
              <article key={reason.title}>
                <span>{reason.number}</span>
                <h3>{reason.title}</h3>
                <p>{reason.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="destinations shell" id="destinations">
        <header className="section-head split-head destination-head">
          <div>
            <p className="section-kicker">Destinations</p>
            <h2>Pakistan, place by place.</h2>
          </div>
          <p>From the Karakoram Mountains to cultural cities and peaceful valleys.</p>
        </header>

        <div className="destination-grid">
          {destinations.map((destination, index) => (
            <article className={`destination-card destination-${index + 1}`} key={destination.name}>
              <Image src={destination.image} alt={`${destination.name}, Pakistan`} fill sizes="(max-width: 680px) 100vw, (max-width: 980px) 50vw, 33vw" />
              <div />
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p><strong>{destination.name}</strong><small>{destination.copy}</small></p>
            </article>
          ))}
        </div>

        <div className="stories-of-north">
          <header className="stories-head">
            <div>
              <p className="section-kicker light">Northern Pakistan</p>
              <h3>Stories of the North</h3>
            </div>
            <p>Follow ancient routes, living traditions and landscapes shaped over thousands of years.</p>
          </header>

          <div className="story-route-grid">
            {northernStories.map((story, index) => (
              <article key={story.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h4>{story.title}</h4>
                <p>{story.detail}</p>
              </article>
            ))}
          </div>

          <div className="travel-style-row" aria-label="Travel styles">
            {travelStyles.map((style) => <span key={style}>{style}</span>)}
          </div>

          <Link className="story-custom-link" href="/plan-your-trip">
            <span><small>Designed around you</small>Customized Journeys</span>
            <b aria-hidden="true">↗</b>
          </Link>
        </div>
      </section>

      <section className="testimonials shell" id="testimonials">
        <p className="section-kicker">Guest story</p>
        <div className="testimonial-card">
          <div className="quote-mark" aria-hidden="true">“</div>
          <blockquote>
            My words can’t do justice to the beauty we witnessed. The team turned a demanding trek into the journey of a lifetime.
          </blockquote>
          <p><strong>EXPLORE KARAKURAM guest</strong><span>Baltoro trekking expedition</span></p>
        </div>
      </section>

      <section className="plan-trip shell" id="plan">
        <div>
          <p className="section-kicker light">Custom journeys</p>
          <h2>Your dates. Your interests.<br />Your Pakistan.</h2>
          <p>Tell us what you love, when you want to travel and the pace that suits you. We’ll design a private journey around it.</p>
        </div>
        <Link className="plan-button" href="/plan-your-trip">Plan your trip <span>↗</span></Link>
      </section>

      <SiteFooter />
    </main>
  );
}
