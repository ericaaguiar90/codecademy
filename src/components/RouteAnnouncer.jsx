import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const TITLES = {
  "/": "The Brand Authority — Branding, Marketing & Web",
  "/services": "Services — The Brand Authority",
  "/work": "Work — The Brand Authority",
  "/about": "About — The Brand Authority",
  "/contact": "Contact — The Brand Authority",
};

export default function RouteAnnouncer() {
  const { pathname } = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    document.title = TITLES[pathname] ?? "Page Not Found — The Brand Authority";

    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.getElementById("main-content")?.focus({ preventScroll: true });
  }, [pathname]);

  return null;
}
