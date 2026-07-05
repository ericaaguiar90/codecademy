import { NavLink } from "react-router-dom";
import Reveal from "../components/Reveal";
import "./not-found.css";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container">
        <Reveal stagger>
          <p className="eyebrow">404</p>
          <h1 className="not-found-title">This page wandered off-brand.</h1>
          <p className="not-found-subtitle">
            The page you're looking for doesn't exist. Let's get you back
            somewhere useful.
          </p>
          <NavLink to="/" className="btn btn-accent">
            Back to Home
          </NavLink>
        </Reveal>
      </div>
    </section>
  );
}
