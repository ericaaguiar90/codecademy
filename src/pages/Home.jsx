import { NavLink } from "react-router-dom";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Reveal from "../components/Reveal";
import ServiceCard from "../components/ServiceCard";
import WorkCard from "../components/WorkCard";
import StatGrid from "../components/StatGrid";
import TestimonialCard from "../components/TestimonialCard";
import { services, work, stats, testimonials } from "../data/content";

const MARQUEE_ITEMS = [
  "Branding",
  "Strategy",
  "Digital Marketing",
  "Web Design",
  "Development",
  "Growth",
];

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee items={MARQUEE_ITEMS} dark />

      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">What We Do</p>
            <h2 className="section-title">
              Three disciplines. One accountable team.
            </h2>
          </Reveal>

          <div className="grid-3">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.05}>
                <ServiceCard service={service} index={index} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <StatGrid stats={stats} dark />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head section-head-split">
            <div>
              <p className="eyebrow">Selected Work</p>
              <h2 className="section-title">Recent brands we&rsquo;ve built.</h2>
            </div>
            <NavLink to="/work" className="btn btn-outline">
              View All Work
            </NavLink>
          </Reveal>

          <div className="grid-3">
            {work.slice(0, 3).map((item) => (
              <Reveal key={item.slug}>
                <WorkCard item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Client Words</p>
            <h2 className="section-title">Don&rsquo;t take our word for it.</h2>
          </Reveal>

          <div className="grid-3">
            {testimonials.map((testimonial) => (
              <Reveal key={testimonial.name}>
                <TestimonialCard testimonial={testimonial} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container cta-band-inner">
          <Reveal>
            <h2 className="cta-band-title">
              Ready to build a brand people remember?
            </h2>
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
