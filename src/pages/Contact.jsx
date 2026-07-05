import { useRef, useState } from "react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import "./contact.css";

const SERVICE_OPTIONS = [
  "Branding & Identity",
  "Digital Marketing",
  "Web Design & Development",
  "Not sure yet",
];

const INITIAL_FORM = {
  name: "",
  email: "",
  company: "",
  service: SERVICE_OPTIONS[0],
  message: "",
};

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.message.trim()) errors.message = "Tell us a bit about the project.";
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const fieldRefs = useRef({});

  const handleChange = (field) => (event) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleBlur = (field) => () => {
    const fieldError = validate(values)[field];
    setErrors((prev) => ({ ...prev, [field]: fieldError }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    const firstErrorField = Object.keys(nextErrors)[0];
    if (firstErrorField) {
      fieldRefs.current[firstErrorField]?.focus();
      return;
    }

    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  if (submitted) {
    return (
      <>
        <PageHero eyebrow="Contact" title="Let's build something." />
        <section className="section">
          <div className="container">
            <Reveal className="contact-success" role="status">
              <h2 className="section-title">Thanks, {values.name.split(" ")[0]}.</h2>
              <p>
                Your project details are in. Someone from our team will reply
                to <strong>{values.email}</strong> within one business day.
              </p>
            </Reveal>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us about the project."
        subtitle="Share a few details and we'll come back with next steps — no automated sales funnel, just a real reply."
      />

      <section className="section">
        <div className="container contact-grid">
          <Reveal as="form" className="contact-form" noValidate onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="name">
                Name <span className="required">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={values.name}
                onChange={handleChange("name")}
                onBlur={handleBlur("name")}
                ref={(el) => (fieldRefs.current.name = el)}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p className="form-error" id="name-error" role="alert">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="email">
                Email <span className="required">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={handleChange("email")}
                onBlur={handleBlur("email")}
                ref={(el) => (fieldRefs.current.email = el)}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p className="form-error" id="email-error" role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="company">Company</label>
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                value={values.company}
                onChange={handleChange("company")}
              />
            </div>

            <div className="form-field">
              <label htmlFor="service">What do you need help with?</label>
              <select
                id="service"
                name="service"
                value={values.service}
                onChange={handleChange("service")}
              >
                {SERVICE_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="message">
                Project details <span className="required">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={values.message}
                onChange={handleChange("message")}
                onBlur={handleBlur("message")}
                ref={(el) => (fieldRefs.current.message = el)}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <p className="form-error" id="message-error" role="alert">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-accent"
              disabled={submitting}
              aria-busy={submitting}
            >
              {submitting ? "Sending…" : "Send Project Details"}
            </button>
          </Reveal>

          <Reveal delay={0.1} className="contact-info">
            <div>
              <p className="eyebrow">Email</p>
              <a href="mailto:hello@thebrandauthority.com" className="contact-info-link">
                hello@thebrandauthority.com
              </a>
            </div>
            <div>
              <p className="eyebrow">Response Time</p>
              <p>Within 1 business day.</p>
            </div>
            <div>
              <p className="eyebrow">New Business</p>
              <p>
                Include your budget range and timeline in your message — it
                helps us reply with something useful instead of a form
                letter.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
