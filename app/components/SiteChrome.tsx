import Image from "next/image";
import Link from "next/link";
import { contact } from "../data/site";

const menus = [
  {
    label: "Journeys",
    href: "/journeys",
    items: ["Northern Pakistan", "Culture & Heritage", "South Pakistan", "Adventure", "Road Trips", "Custom Journeys"],
  },
  {
    label: "Experiences",
    href: "/experiences",
    items: ["Trekking & Hiking", "Mountain Expeditions", "Gandhara Heritage", "Kalash Valleys", "Photography", "Food & Local Life"],
  },
  {
    label: "Destinations",
    href: "/destinations",
    items: ["Gilgit-Baltistan", "Khyber Pakhtunkhwa", "Punjab", "Sindh", "Balochistan", "Azad Kashmir", "Islamabad", "Karachi"],
  },
];

const slug = (value: string) => value.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  return (
    <header className={`site-header${overlay ? " overlay" : ""}`}>
      <nav className="site-nav-bar shell" aria-label="Primary navigation">
        <Link className="brand" href="/" aria-label="EXPLORE KARAKURAM home">
          <Image className="brand-logo" src={overlay ? "/brand/explore-karakuram-logo.png" : "/brand/explore-karakuram-logo.png"} alt="EXPLORE KARAKURAM" width={150} height={74} priority={overlay} />
        </Link>

        <div className="site-desktop-nav">
          <Link href="/">Home</Link>
          {menus.map((menu) => (
            <details className="nav-dropdown" key={menu.label}>
              <summary>{menu.label}</summary>
              <div>
                <Link className="nav-view-all" href={menu.href}>View all {menu.label.toLowerCase()}</Link>
                {menu.items.map((item) => <Link href={`${menu.href}#${slug(item)}`} key={item}>{item}</Link>)}
              </div>
            </details>
          ))}
          <Link href="/south-pakistan">South Pakistan</Link>
          <details className="nav-dropdown compact">
            <summary>Company</summary>
            <div>
              <Link href="/about">About us</Link>
              <Link href="/travel-info">Travel information</Link>
              <Link href="/travel-trade">Travel Trade / B2B</Link>
            </div>
          </details>
        </div>

        <Link className="nav-cta" href="/plan-your-trip">Plan your trip <span>↗</span></Link>

        <details className="site-mobile-nav">
          <summary aria-label="Open navigation">Menu</summary>
          <div>
            <Link href="/">Home</Link>
            <Link href="/journeys">Journeys</Link>
            <Link href="/experiences">Experiences</Link>
            <Link href="/destinations">Destinations</Link>
            <Link href="/south-pakistan">South Pakistan</Link>
            <Link href="/about">About us</Link>
            <Link href="/travel-info">Travel information</Link>
            <Link href="/travel-trade">Travel Trade / B2B</Link>
            <Link className="mobile-plan-link" href="/plan-your-trip">Plan your trip ↗</Link>
          </div>
        </details>
      </nav>
    </header>
  );
}

const footerGroups = [
  { title: "Explore", links: [["Journeys", "/journeys"], ["Experiences", "/experiences"], ["Destinations", "/destinations"], ["South Pakistan", "/south-pakistan"], ["Custom Journeys", "/plan-your-trip"]] },
  { title: "About", links: [["About Us", "/about"], ["Travel Information", "/travel-info"], ["Responsible Travel", "/travel-info#responsible-travel"], ["Contact", `mailto:${contact.email}`]] },
  { title: "Travel Trade", links: [["B2B / DMC", "/travel-trade"], ["Become a Partner", "/travel-trade#trade-enquiry"], ["Trade Rates", "/travel-trade#trade-enquiry"], ["Request a Proposal", "/travel-trade#trade-enquiry"]] },
];

export function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-brand-row shell">
        <Link href="/" aria-label="EXPLORE KARAKURAM home">
          <Image src="/brand/explore-karakuram-logo-light.png" alt="EXPLORE KARAKURAM" width={180} height={88} />
        </Link>
        <p>Private & Tailor-Made Journeys Across Pakistan</p>
      </div>
      <div className="footer-sitemap shell">
        {footerGroups.map((group) => (
          <div key={group.title}>
            <h2>{group.title}</h2>
            {group.links.map(([label, href]) => <Link href={href} key={label}>{label}</Link>)}
          </div>
        ))}
        <div>
          <h2>Contact</h2>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={`tel:${contact.phoneHref}`}>{contact.phoneDisplay}</a>
          <a href={contact.instagram} target="_blank" rel="noreferrer">Instagram ↗</a>
          <a href={contact.facebook} target="_blank" rel="noreferrer">Facebook ↗</a>
        </div>
      </div>
      <div className="footer-legal shell">
        <p>© {new Date().getFullYear()} EXPLORE KARAKURAM</p>
        <p>Pakistan DMC & Specialist Tour Operator</p>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
