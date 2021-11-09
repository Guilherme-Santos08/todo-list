import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";

export function RoutesApp() {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
}
