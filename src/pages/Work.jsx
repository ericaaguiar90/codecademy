import { NavLink } from "react-router-dom";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import WorkCard from "../components/WorkCard";
import { work } from "../data/content";

export default function Work() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Brands built to hold their ground."
        subtitle="A selection of branding, marketing, and web projects across banking, retail, mobility, and software."
      />

      <section className="section">
        <div className="container">
          <div className="grid-3">
            {work.map((item) => (
              <Reveal key={item.slug}>
                <WorkCard item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container cta-band-inner">
          <Reveal>
            <h2 className="cta-band-title">Want to see your brand here next?</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <NavLink to="/contact" className="btn btn-accent">
              Start a Project
            </NavLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
