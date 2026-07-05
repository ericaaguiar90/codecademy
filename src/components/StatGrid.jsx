import Reveal from "./Reveal";
import "./stat-grid.css";

export default function StatGrid({ stats, dark = false }) {
  return (
    <Reveal as="div" className={`stat-grid${dark ? " stat-grid-dark" : ""}`} stagger>
      {stats.map((stat) => (
        <div className="stat-item" key={stat.label}>
          <p className="stat-value">{stat.value}</p>
          <p className="stat-label">{stat.label}</p>
        </div>
      ))}
    </Reveal>
  );
}
