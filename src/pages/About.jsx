import { NavLink } from "react-router-dom";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import StatGrid from "../components/StatGrid";
import { stats } from "../data/content";
import "./about.css";

const VALUES = [
  {
    title: "Strategy first",
    body: "Every design decision traces back to a business goal. If we can't explain why, we don't ship it.",
  },
  {
    title: "No hand-offs",
    body: "The team that pitches the work builds it. Branding, marketing, and web sit under one roof.",
  },
  {
    title: "Built to last",
    body: "Systems over one-offs. What we build should still make sense — and still look sharp — in five years.",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="We build brands that don't need to shout."
        subtitle="The Brand Authority is a full-service creative agency for companies that want to look, sound, and perform like the category leader — before the market agrees they are."
      />

      <section className="section">
        <div className="container about-grid">
          <Reveal>
            <p className="eyebrow">Our Story</p>
            <h2 className="section-title">
              Founded on a simple idea: great work needs one accountable team.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="about-copy">
            <p>
              Too many brands get fragmented across a branding studio, a
              performance agency, and a dev shop — and the seams show. The
              Brand Authority was built to close that gap: one team that
              carries a brand from positioning to pixels to paid media.
            </p>
            <p>
              We work with founders and marketing leaders who are done
              blending in, and ready to build something with a point of view.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <StatGrid stats={stats} dark />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">How We Work</p>
            <h2 className="section-title">The principles behind every project.</h2>
          </Reveal>
          <div className="grid-3">
            {VALUES.map((value) => (
              <Reveal className="value-card" key={value.title}>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-body">{value.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container cta-band-inner">
          <Reveal>
            <h2 className="cta-band-title">Let&rsquo;s build something with a point of view.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <NavLink to="/contact" className="btn btn-accent">
              Get in Touch
            </NavLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
