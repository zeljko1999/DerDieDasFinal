/**
 * Rute na jednom mjestu, sa lijenim učitavanjem.
 *
 * Original je sve pakovao u jedan chunk od ~430 kB, pa je posjetilac koji sa
 * Google-a dođe pravo na /osd skidao i Swiper i cijelu početnu stranicu koje
 * mu ne trebaju.
 */

export interface AppRoute {
  path: string;
  load: () => Promise<{ default: React.ComponentType }>;
}

export const routes: AppRoute[] = [
  { path: "/", load: () => import("./pages/Home") },
  {
    path: "/kursevi-za-odrasle",
    load: () => import("./pages/KurseviZaOdrasle"),
  },
  { path: "/kursevi-za-djecu", load: () => import("./pages/KurseviZaDjecu") },
  {
    path: "/individualni-casovi-odrasli",
    load: () => import("./pages/IndividualniCasoviOdrasli"),
  },
  {
    path: "/individualni-casovi-djeca",
    load: () => import("./pages/IndividualniCasoviDjeca"),
  },
  {
    path: "/individualni-casovi-online",
    load: () => import("./pages/IndividualniCasoviOnline"),
  },
  { path: "/osd", load: () => import("./pages/Osd") },
  { path: "/goethe", load: () => import("./pages/Goethe") },
  { path: "/test-znanja", load: () => import("./pages/TestZnanja") },
];

/**
 * Chunk rute na kojoj je posjetilac se učitava PRIJE prvog rendera, da Suspense
 * fallback nikad ne trepne preko prerenderovanog sadržaja.
 */
export function preloadCurrentRoute(): Promise<unknown> {
  const current = window.location.pathname.toLowerCase().replace(/\/+$/, "");
  const match = routes.find(
    (route) => route.path.toLowerCase().replace(/\/+$/, "") === current,
  );
  return match ? match.load() : Promise.resolve();
}
