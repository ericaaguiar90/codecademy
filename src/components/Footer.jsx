import { NavLink } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer dark">
      <div className="container footer-top">
        <div className="footer-brand">
          <p className="footer-logo">
            THE BRAND<span className="footer-logo-accent">AUTHORITY</span>
          </p>
          <p className="footer-tagline">
            A full-service creative agency building brands, marketing, and
            websites that command attention.
          </p>
          <a href="mailto:hello@thebrandauthority.com" className="footer-email">
            hello@thebrandauthority.com
          </a>
        </div>

        <div className="footer-cols">
          <div className="footer-col">
            <p className="footer-col-title">Site</p>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/work">Work</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>

          <div className="footer-col">
            <p className="footer-col-title">Services</p>
            <NavLink to="/services">Branding &amp; Identity</NavLink>
            <NavLink to="/services">Digital Marketing</NavLink>
            <NavLink to="/services">Web Design &amp; Development</NavLink>
          </div>

          <div className="footer-col">
            <p className="footer-col-title">Follow</p>
            <span className="footer-social-placeholder">Instagram</span>
            <span className="footer-social-placeholder">LinkedIn</span>
            <span className="footer-social-placeholder">X / Twitter</span>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>&copy; {year} The Brand Authority. All rights reserved.</p>
        <p>Designed &amp; built with intent.</p>
      </div>
    </footer>
  );
}
