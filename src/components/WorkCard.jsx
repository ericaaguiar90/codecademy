import "./work-card.css";

export default function WorkCard({ item }) {
  return (
    <article className="work-card">
      <div
        className="work-card-visual"
        style={{
          background: `linear-gradient(135deg, ${item.accent} 0%, #0a0a0a 130%)`,
        }}
      >
        <span className="work-card-monogram">
          {item.name
            .split(" ")
            .map((word) => word[0])
            .slice(0, 2)
            .join("")}
        </span>
      </div>
      <div className="work-card-body">
        <p className="work-card-category">{item.category}</p>
        <h3 className="work-card-name">{item.name}</h3>
        <p className="work-card-summary">{item.summary}</p>
      </div>
    </article>
  );
}
