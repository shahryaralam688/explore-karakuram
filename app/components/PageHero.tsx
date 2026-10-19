import Image from "next/image";
import { SiteHeader } from "./SiteChrome";

export default function PageHero({ kicker, title, copy, image }: { kicker: string; title: string; copy: string; image: string }) {
  return (
    <section className="page-hero" id="top">
      <Image src={image} alt="" fill priority sizes="100vw" />
      <div className="page-hero-shade" />
      <SiteHeader overlay />
      <div className="page-hero-copy shell">
        <p>{kicker}</p>
        <h1>{title}</h1>
        <span>{copy}</span>
      </div>
    </section>
  );
}

