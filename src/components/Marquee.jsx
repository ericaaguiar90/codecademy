import "./marquee.css";

export default function Marquee({ items, dark = false }) {
  return (
    <div className={`marquee ${dark ? "marquee-dark" : ""}`} aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div className="marquee-group" key={copy}>
            {items.map((item, i) => (
              <span className="marquee-item" key={`${copy}-${i}`}>
                {item}
                <span className="marquee-dot">&bull;</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
