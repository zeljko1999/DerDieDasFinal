import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initAnalytics } from "./lib/analytics";
import { preloadCurrentRoute } from "./routes";

initAnalytics();

// Sačekaj chunk trenutne rute prije prvog rendera: bez ovoga bi prerenderovani
// HTML na trenutak bio zamijenjen praznim Suspense fallback-om.
preloadCurrentRoute().finally(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
});
