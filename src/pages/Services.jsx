import { NavLink } from "react-router-dom";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { services } from "../data/content";
import "./services.css";

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything a brand needs to be unforgettable."
        subtitle="Three disciplines, one accountable team — from first strategy session to the campaign that fills the pipeline."
      />

      <section className="section services-list">
        <div className="container">
          {services.map((service, index) => (
            <Reveal as="article" className="service-row" key={service.slug}>
              <span className="service-row-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="service-row-body">
                <h2 className="service-row-title">{service.name}</h2>
                <p className="service-row-desc">{service.description}</p>
                <ul className="service-row-caps">
                  {service.capabilities.map((cap) => (
                    <li key={cap}>{cap}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section cta-band">
        <div className="container cta-band-inner">
          <Reveal>
            <h2 className="cta-band-title">
              Not sure which service you need? Let&rsquo;s talk it through.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <NavLink to="/contact" className="btn btn-accent">
              Book a Call
            </NavLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
