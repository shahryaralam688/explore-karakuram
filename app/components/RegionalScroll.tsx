"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const regions = [
  {
    name: "Gilgit-Baltistan",
    label: "High mountains",
    copy: "Legendary landscapes at the meeting point of the Karakoram, Himalaya and Hindu Kush.",
    places: ["Hunza", "Skardu", "Deosai"],
    image: "/assets/images/hires/destination-skardu.jpg",
  },
  {
    name: "Khyber Pakhtunkhwa",
    label: "Valleys & heritage",
    copy: "Forest valleys, living cultures and historic routes across Pakistan’s northwest.",
    places: ["Swat", "Chitral", "Kumrat"],
    image: "/assets/images/hires/destination-swat.jpg",
  },
  {
    name: "Punjab",
    label: "Culture & history",
    copy: "Mughal landmarks, ancient civilizations and desert stories in Pakistan’s cultural heart.",
    places: ["Lahore", "Taxila", "Cholistan"],
    image: "/assets/images/hires/experience-discover.jpg",
  },
  {
    name: "Sindh",
    label: "Coast & civilization",
    copy: "A journey from Karachi’s Arabian Sea coast to the cities of the Indus civilization.",
    places: ["Karachi", "Mohenjo-daro", "Tharparkar"],
    image: "/assets/images/hires/region-sindh-karachi.jpg",
  },
  {
    name: "Balochistan",
    label: "Wild frontiers",
    copy: "Sculpted coastlines, desert highways and landscapes unlike anywhere else in Pakistan.",
    places: ["Hingol", "Ziarat", "Gwadar"],
    image: "/assets/images/hires/region-balochistan.jpg",
  },
  {
    name: "Islamabad",
    label: "Capital calm",
    copy: "A green, welcoming gateway where modern Pakistan meets the Margalla Hills.",
    places: ["Margalla Hills", "Faisal Mosque", "Lok Virsa"],
    image: "/assets/images/hires/destination-islamabad.jpg",
  },
  {
    name: "Azad Kashmir",
    label: "Lakes & meadows",
    copy: "Alpine lakes, riverside villages and peaceful mountain escapes close to nature.",
    places: ["Neelum Valley", "Ratti Gali", "Arang Kel"],
    image: "/assets/images/hires/region-azad-kashmir.jpg",
  },
];

export default function RegionalScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add("(min-width: 769px) and (prefers-reduced-motion: no-preference)", () => {
        const cards = gsap.utils.toArray<HTMLElement>(".region-card", track);
        const travel = () => Math.max(0, track.scrollWidth - section.clientWidth);

        gsap.to(track, {
          x: () => -travel(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${Math.max(2200, travel() * 1.35)}`,
            pin: true,
            scrub: 0.75,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            snap: cards.length > 1 ? {
              snapTo: 1 / (cards.length - 1),
              duration: { min: 0.16, max: 0.42 },
              delay: 0.04,
              ease: "power1.inOut",
            } : undefined,
          },
        });

      });

      media.add("(max-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        const cards = gsap.utils.toArray<HTMLElement>(".region-card", track);
        const travel = () => Math.max(0, track.scrollWidth - section.clientWidth);

        gsap.to(track, {
          x: () => -travel(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${Math.max(1500, travel() * 1.05)}`,
            pin: true,
            scrub: 0.55,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            snap: cards.length > 1 ? {
              snapTo: 1 / (cards.length - 1),
              duration: { min: 0.12, max: 0.3 },
              delay: 0.02,
              ease: "power1.inOut",
            } : undefined,
          },
        });
      });
    }, section);

    return () => {
      media.revert();
      context.revert();
    };
  }, []);

  return (
    <section className="region-scroll" id="explore-pakistan" ref={sectionRef} aria-labelledby="region-scroll-title">
      <header className="region-scroll-head shell">
        <div>
          <p className="section-kicker light">Explore the whole country</p>
          <h2 id="region-scroll-title">Pakistan, beyond<br />one horizon.</h2>
        </div>
        <div className="region-scroll-intro">
          <p>From Karachi’s coast to the high valleys, discover a country of culture, nature and adventure.</p>
          <span>Scroll to explore <b aria-hidden="true">→</b></span>
        </div>
      </header>

      <div className="region-track" ref={trackRef}>
        {regions.map((region, index) => (
          <article className="region-card" key={region.name}>
            <Image
              src={region.image}
              alt={`${region.name}, Pakistan`}
              fill
              sizes="(max-width: 768px) 82vw, 340px"
            />
            <div className="region-card-shade" />
            <span className="region-card-number">{String(index + 1).padStart(2, "0")}</span>
            <div className="region-card-copy">
              <small>{region.label}</small>
              <h3>{region.name}</h3>
              <p>{region.copy}</p>
              <ul aria-label={`Highlights in ${region.name}`}>
                {region.places.map((place) => <li key={place}>{place}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="region-progress shell" aria-hidden="true">
        <span>01</span><i /><span>07</span>
      </div>
    </section>
  );
}
