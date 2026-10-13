/**
 * Tanak sloj za analitiku. Bez `VITE_GA_ID` sve je no-op —
 * sajt radi normalno, samo se ništa ne mjeri.
 *
 * Da uključiš: upiši VITE_GA_ID=G-XXXXXXXXXX u .env i rebuild-uj.
 */

const GA_ID = import.meta.env.VITE_GA_ID;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const isAnalyticsEnabled = Boolean(GA_ID && GA_ID !== "undefined");

export function initAnalytics() {
  if (!isAnalyticsEnabled || document.getElementById("ga-script")) return;

  const script = document.createElement("script");
  script.id = "ga-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID);
}

/** Poziv stranice pri promjeni rute (SPA ne šalje pageview sam). */
export function trackPageView(path: string) {
  if (!isAnalyticsEnabled || !window.gtag) return;
  window.gtag("event", "page_view", { page_path: path });
}

/**
 * Događaji koji zapravo nešto znače za školu:
 * cta_open, form_submit, form_fallback, call_click, whatsapp_click, viber_click, email_click
 */
export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (!isAnalyticsEnabled || !window.gtag) return;
  window.gtag("event", name, params);
}
