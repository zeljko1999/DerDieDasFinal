import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "../lib/analytics";

/**
 * Dvije stvari koje SPA mora sama da odradi na svakoj promjeni rute:
 *  1. skrol do sekcije kad navigacija nosi `state.scrollToId`
 *     (Navbar je to slao, ali niko nije čitao — pa KONTAKT sa podstranice nije radio),
 *  2. pageview za analitiku (bez ovoga se broji samo prvo učitavanje).
 */
const RouteEffects = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const scrollToId = (location.state as { scrollToId?: string } | null)
      ?.scrollToId;
    if (!scrollToId) return;

    // Sačekaj da se nova stranica iscrta prije skrolovanja.
    const timer = window.setTimeout(() => {
      document
        .getElementById(scrollToId)
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
    return () => window.clearTimeout(timer);
  }, [location]);

  return null;
};

export default RouteEffects;
