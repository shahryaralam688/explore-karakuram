import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Explore Karakuram — Travel with Altitude" },
  description:
    "Private treks, cultural journeys and mountain expeditions across Pakistan's Karakuram, Himalaya and Hindu Kush.",
};

const experiences = [
  {
    title: "Adventure",
    kicker: "Go beyond the map",
    image: "/assets/images/ADVENTURE-01-4ca137.jpg",
    copy: "High passes, glacier camps and summit horizons planned around your pace.",
  },
  {
    title: "Discover",
    kicker: "Meet the mountain cultures",
    image: "/assets/images/Discover-02-a87d86.jpg",
    copy: "Ancient forts, living traditions and stories shared by local hosts.",
  },
  {
    title: "Escape",
    kicker: "Find your wild calm",
    image: "/assets/images/Escape-01-a1ca67.jpg",
    copy: "Remote valleys, clear nights and room to breathe far from the ordinary.",
  },
];

const journeys = [
  { title: "K2 Base Camp", region: "Baltoro · Concordia", days: "21 days", level: "Challenging", image: "/assets/images/06-1-bc8bb5.jpg" },
  { title: "Rush Lake Trek", region: "Nagar Valley", days: "12 days", level: "Moderate", image: "/assets/images/05-2-8fec1c.jpg" },
  { title: "Masherbrum Valley", region: "Hushe · Baltistan", days: "14 days", level: "Active", image: "/assets/images/04-2-0e18a9.jpg" },
  { title: "Karakuram Traverse", region: "Gondogoro La", days: "24 days", level: "Expedition", image: "/assets/images/08-061ce1.jpg" },
  { title: "Shimshal Pass", region: "Upper Hunza", days: "15 days", level: "Challenging", image: "/assets/images/03-2-b538c0.jpg" },
  { title: "Rakaposhi Base Camp", region: "Minapin · Nagar", days: "8 days", level: "Moderate", image: "/assets/images/02-3-a40285.jpg" },
  { title: "Snow Lake", region: "Biafo · Hispar", days: "22 days", level: "Expedition", image: "/assets/images/01-2-3d54e5.jpg" },
  { title: "Hunza Discovery", region: "Karakuram Highway", days: "9 days", level: "Easy", image: "/assets/images/07-1-2919b3.jpg" },
];

const wonders = ["Truck Art", "Kalash", "Mughal Heritage", "Sufi Culture", "Karakuram Highway"];

export default function Home() {
  return (
    <main>
      <div className="topbar">
        <p>Welcome to Explore Karakuram — travel with altitude.</p>
        <a href="mailto:info@explorekarakuram.com">info@explorekarakuram.com</a>
      </div>

      <section className="hero" id="home">
        <nav className="nav shell" aria-label="Primary navigation">
          <a className="brand" href="#home" aria-label="Explore Karakuram home">
            <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
            <span><b>Explore</b> Karakuram</span>
          </a>
          <div className="desktop-nav">
            <a href="#journeys">Journeys</a>
            <a href="#experiences">Experiences</a>
            <a href="#story">Our story</a>
            <a href="#contact">Contact</a>
          </div>
          <a className="nav-cta" href="mailto:info@explorekarakuram.com?subject=Plan%20my%20Karakuram%20journey">Plan your trip <span>↗</span></a>
          <details className="mobile-nav">
            <summary aria-label="Open menu">Menu</summary>
            <div>
              <a href="#journeys">Journeys</a>
              <a href="#experiences">Experiences</a>
              <a href="#story">Our story</a>
              <a href="#contact">Contact</a>
            </div>
          </details>
        </nav>

        <div className="hero-content shell">
          <p className="eyebrow light">Pakistan · Karakuram · Himalaya · Hindu Kush</p>
          <h1>Travel with<br /><em>altitude.</em></h1>
          <p className="hero-copy">Private mountain journeys shaped by local knowledge, honest hospitality and a deep respect for the wild.</p>
          <div className="hero-actions">
            <a className="button primary" href="#journeys">Explore journeys <span>↓</span></a>
            <a className="button ghost" href="#story">Meet your local team</a>
          </div>
        </div>

        <div className="hero-footer shell">
          <div><strong>20+</strong><span>signature journeys</span></div>
          <div><strong>3</strong><span>great mountain ranges</span></div>
          <div><strong>Local</strong><span>guides &amp; operations</span></div>
          <p>Scroll to explore <span aria-hidden="true">↓</span></p>
        </div>
      </section>

      <section className="planner shell" aria-label="Trip planning shortcuts">
        <div className="planner-label"><span>01</span><p>Start your<br />journey</p></div>
        <div className="planner-field"><small>I want to explore</small><strong>Karakuram Mountains</strong></div>
        <div className="planner-field"><small>My travel style</small><strong>Trekking &amp; culture</strong></div>
        <div className="planner-field"><small>Preferred season</small><strong>May — October</strong></div>
        <a href="mailto:info@explorekarakuram.com?subject=Build%20my%20custom%20journey" aria-label="Send a trip enquiry">Build my trip <span>↗</span></a>
      </section>

      <section className="intro shell">
        <div>
          <p className="eyebrow">The mountains are calling</p>
          <h2>Pakistan’s most<br />extraordinary north.</h2>
        </div>
        <div className="intro-copy">
          <p>From the turquoise lakes of Hunza to the ice highways of Baltoro, every journey is a rare meeting of landscape, culture and human spirit.</p>
          <a className="text-link" href="#story">Why travel with us <span>→</span></a>
        </div>
      </section>

      <section className="experiences shell" id="experiences">
        {experiences.map((item, index) => (
          <article className="experience-card" key={item.title}>
            <img src={item.image} alt={`${item.title} in northern Pakistan`} />
            <div className="experience-overlay" />
            <span className="card-number">0{index + 1}</span>
            <div className="experience-copy">
              <small>{item.kicker}</small>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </div>
            <span className="round-arrow" aria-hidden="true">↗</span>
          </article>
        ))}
      </section>

      <section className="journeys" id="journeys">
        <div className="shell">
          <div className="section-head dark-head">
            <div><p className="eyebrow light">Signature adventures</p><h2>Choose your<br /><em>own horizon.</em></h2></div>
            <p>Handpicked treks and cultural escapes across the high valleys of northern Pakistan.</p>
          </div>
          <div className="journey-grid">
            {journeys.map((journey) => (
              <article className="journey-card" key={journey.title}>
                <div className="journey-image">
                  <img src={journey.image} alt={`${journey.title}, ${journey.region}`} />
                  <span>{journey.level}</span>
                </div>
                <div className="journey-info">
                  <small>{journey.region}</small>
                  <h3>{journey.title}</h3>
                  <div><span>{journey.days}</span><span aria-hidden="true">↗</span></div>
                </div>
              </article>
            ))}
          </div>
          <div className="journey-cta"><a className="button primary" href="mailto:info@explorekarakuram.com?subject=Explore%20all%20journeys">Design a custom journey <span>↗</span></a></div>
        </div>
      </section>

      <section className="story shell" id="story">
        <div className="story-image">
          <img src="/assets/images/01-5ddf7f.jpg" alt="Snow-covered peaks of the Karakuram" />
          <div className="altitude-stamp"><strong>8,000m+</strong><span>five giants<br />one country</span></div>
        </div>
        <div className="story-copy">
          <p className="eyebrow">Rooted in the north</p>
          <h2>Local insight.<br />Limitless perspective.</h2>
          <p>Explore Karakuram was born in the mountains. Our team connects travellers with experienced local guides, trusted communities and routes that reveal the real character of Pakistan’s north.</p>
          <ul>
            <li><span>01</span>Locally led, deeply personal journeys</li>
            <li><span>02</span>Flexible itineraries built around you</li>
            <li><span>03</span>Responsible travel that supports communities</li>
          </ul>
          <a className="text-link" href="mailto:info@explorekarakuram.com?subject=Meet%20the%20Explore%20Karakuram%20team">Talk to our team <span>→</span></a>
        </div>
      </section>

      <section className="wonders">
        <div className="shell wonders-inner">
          <p className="eyebrow light">Beyond the summits</p>
          <h2>Wonders of Pakistan</h2>
          <p>A living mosaic of ancient monuments, contemporary art, sacred traditions and landscapes beyond imagination.</p>
          <div>{wonders.map((wonder) => <span key={wonder}>{wonder}</span>)}</div>
        </div>
      </section>

      <section className="quote shell">
        <div className="quote-mark">“</div>
        <blockquote>“My words can’t do justice to the beauty we witnessed. The team turned a demanding trek into the journey of a lifetime.”</blockquote>
        <div className="quote-by"><span /><p><strong>A guest of Explore Karakuram</strong><small>Baltoro trekking expedition</small></p></div>
      </section>

      <footer id="contact">
        <div className="footer-main shell">
          <div>
            <p className="eyebrow light">Your journey starts here</p>
            <h2>Ready for a higher<br />point of view?</h2>
            <a className="button primary" href="mailto:info@explorekarakuram.com?subject=Plan%20my%20Pakistan%20adventure">Plan your adventure <span>↗</span></a>
          </div>
          <div className="footer-contact">
            <p><small>Email</small><a href="mailto:info@explorekarakuram.com">info@explorekarakuram.com</a></p>
            <p><small>Call / WhatsApp</small><a href="tel:+923065230318">+92 306 523 0318</a></p>
            <p><small>Follow</small><span><a href="https://www.facebook.com/explorekarakuram/">Facebook</a><a href="https://www.instagram.com/nasirekk/">Instagram</a></span></p>
          </div>
        </div>
        <div className="footer-bottom shell">
          <a className="brand inverse" href="#home"><span className="brand-mark" aria-hidden="true"><i /><i /><i /></span><span><b>Explore</b> Karakuram</span></a>
          <p>© {new Date().getFullYear()} Explore Karakuram. Travel with altitude.</p>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
