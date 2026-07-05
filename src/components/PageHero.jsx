import Reveal from "./Reveal";
import "./page-hero.css";

export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="page-hero dark">
      <div className="container">
        <Reveal stagger>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="page-hero-title">{title}</h1>
          {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
        </Reveal>
      </div>
    </section>
  );
}
