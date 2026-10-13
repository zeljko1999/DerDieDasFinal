import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteEffects from "./components/RouteEffects";
import { routes } from "./routes";

// lazy() se poziva jednom, na nivou modula — u renderu bi pravio novu
// komponentu svaki put i remontirao stranicu.
const lazyRoutes = routes.map((route) => ({
  path: route.path,
  Component: lazy(route.load),
}));

function App() {
  return (
    <BrowserRouter>
      <RouteEffects />
      <Suspense fallback={<div className="min-h-screen bg-white" />}>
        <Routes>
          {lazyRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
