import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { NavLink, useLocation } from "react-router-dom";
import "./navbar.css";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <NavLink to="/" className="navbar-logo" aria-label="The Brand Authority — home">
          THE BRAND<span className="navbar-logo-accent">AUTHORITY</span>
        </NavLink>

        <nav className="navbar-links" aria-label="Primary">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `navbar-link${isActive ? " navbar-link-active" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <NavLink to="/contact" className="btn btn-accent navbar-cta">
          Start a Project
        </NavLink>

        <button
          className={`navbar-toggle${open ? " navbar-toggle-open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {createPortal(
        <div
          id="mobile-menu"
          className={`navbar-mobile${open ? " navbar-mobile-open" : ""}`}
          inert={open ? undefined : ""}
        >
          <nav aria-label="Mobile">
            {LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `navbar-mobile-link${isActive ? " navbar-mobile-link-active" : ""}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <NavLink to="/contact" className="btn btn-accent navbar-mobile-cta">
            Start a Project
          </NavLink>
        </div>,
        document.body
      )}
    </header>
  );
}
