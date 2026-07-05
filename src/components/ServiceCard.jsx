import { Link } from "react-router-dom";
import "./service-card.css";

export default function ServiceCard({ service, index }) {
  return (
    <article className="service-card">
      <span className="service-card-index">{String(index + 1).padStart(2, "0")}</span>
      <h3 className="service-card-title">{service.name}</h3>
      <p className="service-card-short">{service.short}</p>
      <ul className="service-card-caps">
        {service.capabilities.slice(0, 3).map((cap) => (
          <li key={cap}>{cap}</li>
        ))}
      </ul>
      <Link to="/services" className="service-card-link">
        Learn more <span aria-hidden="true">&rarr;</span>
      </Link>
    </article>
  );
}
