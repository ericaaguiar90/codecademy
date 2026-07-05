import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { useMagnetic } from "../hooks/useMagnetic";
import "./hero.css";

const HEADLINE = ["Brands", "that", "command", "attention."];

export default function Hero() {
  const ref = useRef(null);
  const reducedMotion = usePrefersReducedMotion();
  const primaryCtaRef = useMagnetic(0.25);
  const secondaryCtaRef = useMagnetic(0.25);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    function handleMove(event) {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--glow-x", `${event.clientX - rect.left}px`);
      el.style.setProperty("--glow-y", `${event.clientY - rect.top}px`);
    }
    el.addEventListener("mousemove", handleMove);
    return () => el.removeEventListener("mousemove", handleMove);
  }, []);

  useGSAP(
    () => {
      if (reducedMotion) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-word", {
        opacity: 0,
        y: 40,
        rotate: 3,
        duration: 0.7,
        stagger: 0.08,
      })
        .from(
          ".hero-subtitle, .hero-actions, .hero-scroll",
          { opacity: 0, y: 16, duration: 0.5, stagger: 0.1 },
          "-=0.35"
        );
    },
    { scope: ref }
  );

  return (
    <section className="hero dark" ref={ref}>
      <div className="container hero-inner">
        <p className="eyebrow">Full-Service Creative Agency</p>
        <h1 className="hero-title">
          {HEADLINE.map((word) => (
            <span className="hero-word-wrap" key={word}>
              <span
                className={`hero-word${word === "attention." ? " hero-word-accent" : ""}`}
              >
                {word}
              </span>
            </span>
          ))}
        </h1>
        <p className="hero-subtitle">
          The Brand Authority builds identities, campaigns, and websites for
          companies who refuse to blend in. Strategy-led. Design-obsessed.
          Built to perform.
        </p>
        <div className="hero-actions">
          <NavLink to="/contact" className="btn btn-accent" ref={primaryCtaRef}>
            Start a Project
          </NavLink>
          <NavLink to="/work" className="btn btn-outline" ref={secondaryCtaRef}>
            See Our Work
          </NavLink>
        </div>
      </div>
      <div className="hero-scroll" aria-hidden="true">
        <span />
        Scroll
      </div>
    </section>
  );
}
