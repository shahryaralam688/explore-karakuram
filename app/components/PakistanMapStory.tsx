"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const destinations = [
  {
    region: "Azad Kashmir",
    title: "Valleys written in water and light.",
    copy: "Quiet villages, alpine lakes and green ridgelines shape a gentle introduction to Pakistan.",
    spots: ["Neelum Valley", "Arang Kel", "Ratti Gali"],
    image: "/assets/images/hires/region-azad-kashmir.jpg",
    pin: { left: "71.6%", top: "24.1%" },
  },
  {
    region: "Gilgit-Baltistan",
    title: "Where the great ranges meet.",
    copy: "Glaciers, high passes and welcoming mountain communities beneath Pakistan’s highest peaks.",
    spots: ["Hunza", "Skardu", "Deosai"],
    image: "/assets/images/hires/destination-hunza.jpg",
    pin: { left: "74.9%", top: "10.6%" },
  },
  {
    region: "Khyber Pakhtunkhwa",
    title: "Forest valleys and living cultures.",
    copy: "Travel through story-rich valleys where rivers, old routes and local traditions remain close.",
    spots: ["Swat", "Chitral", "Kumrat"],
    image: "/assets/images/hires/destination-swat.jpg",
    pin: { left: "58.6%", top: "23.5%" },
  },
  {
    region: "Islamabad",
    title: "A green gateway to Pakistan.",
    copy: "Modern calm, wooded hills and cultural landmarks make the capital an easy place to begin.",
    spots: ["Margalla Hills", "Faisal Mosque", "Lok Virsa"],
    image: "/assets/images/hires/destination-islamabad.jpg",
    pin: { left: "66.1%", top: "26.5%" },
  },
  {
    region: "Punjab",
    title: "History in every courtyard.",
    copy: "Mughal architecture, ancient civilizations and warm city life reveal Pakistan’s cultural heart.",
    spots: ["Lahore", "Taxila", "Cholistan"],
    image: "/assets/images/hires/experience-discover.jpg",
    pin: { left: "62.1%", top: "46.7%" },
  },
  {
    region: "Balochistan",
    title: "The wild road to the coast.",
    copy: "Sculpted mountains, open desert and the Makran coast create Pakistan’s most cinematic road journey.",
    spots: ["Hingol", "Ziarat", "Gwadar"],
    image: "/assets/images/hires/region-balochistan.jpg",
    pin: { left: "26.1%", top: "64.1%" },
  },
  {
    region: "Karachi",
    title: "Where the journey meets the sea.",
    copy: "Pakistan’s energetic southern city closes the route with architecture, food and Arabian Sea sunsets.",
    spots: ["Clifton", "Mohatta Palace", "Hawksbay", "Frere Hall"],
    image: "/assets/images/hires/region-sindh-karachi.jpg",
    pin: { left: "35.5%", top: "91.2%" },
  },
];

export default function PakistanMapStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepRefs = useRef<Array<HTMLElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      stepRefs.current.forEach((step, index) => {
        if (!step) return;
        ScrollTrigger.create({
          trigger: step,
          start: "top 62%",
          end: "bottom 38%",
          onEnter: () => setActiveIndex(index),
          onEnterBack: () => setActiveIndex(index),
        });
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  const active = destinations[activeIndex];

  return (
    <section className="map-story" id="journey-map" ref={sectionRef} aria-labelledby="map-story-title">
      <header className="map-story-head shell">
        <p className="section-kicker">A journey across Pakistan</p>
        <h2 id="map-story-title">Follow the map.<br />Meet the country.</h2>
        <p>Scroll from the high valleys to Karachi. Every stop reveals a different side of Pakistan.</p>
      </header>

      <div className="map-story-grid shell">
        <div className="map-stage" aria-live="polite">
          <div className="map-stage-topline">
            <span>{String(activeIndex + 1).padStart(2, "0")} / {String(destinations.length).padStart(2, "0")}</span>
            <strong>{active.region}</strong>
          </div>
          <div className="pakistan-map">
            <Image
              src="/assets/maps/pakistan-provinces.png"
              alt="Map of Pakistan showing the active destination"
              width={1280}
              height={931}
              sizes="(max-width: 680px) 88vw, 48vw"
            />
            {destinations.map((destination, index) => (
              <span
                className={`map-pin${index === activeIndex ? " active" : ""}${index < activeIndex ? " visited" : ""}`}
                style={destination.pin}
                key={destination.region}
                aria-hidden="true"
              >
                <i />
                <b>{destination.region}</b>
              </span>
            ))}
          </div>
          <p className="map-note">Illustrative location guide · Scroll to travel south</p>
        </div>

        <div className="map-story-steps">
          {destinations.map((destination, index) => (
            <article
              className={`map-story-card${index === activeIndex ? " active" : ""}`}
              ref={(node) => { stepRefs.current[index] = node; }}
              key={destination.region}
            >
              <div className="map-story-image">
                <Image
                  src={destination.image}
                  alt={`${destination.region}, Pakistan`}
                  fill
                  sizes="(max-width: 680px) 92vw, 38vw"
                />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="map-story-copy">
                <small>{destination.region}</small>
                <h3>{destination.title}</h3>
                <p>{destination.copy}</p>
                <ul aria-label={`Places in ${destination.region}`}>
                  {destination.spots.map((spot) => <li key={spot}>{spot}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
