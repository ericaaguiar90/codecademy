import "./testimonial-card.css";

export default function TestimonialCard({ testimonial }) {
  return (
    <figure className="testimonial-card">
      <blockquote>
        <p>&ldquo;{testimonial.quote}&rdquo;</p>
      </blockquote>
      <figcaption>
        <span className="testimonial-name">{testimonial.name}</span>
        <span className="testimonial-role">{testimonial.role}</span>
      </figcaption>
    </figure>
  );
}
