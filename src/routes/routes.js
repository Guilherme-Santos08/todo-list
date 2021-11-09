import { Routes, Route } from "react-router-dom";
import { render } from "react-dom";

import { Home } from "../pages/Home";

export function RoutesApp() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="teams" element={<Home />} />
    </Routes>
  );
}
