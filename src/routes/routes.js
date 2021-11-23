import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Todos } from "../pages/Todos";

export function RoutesApp() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/:cardName/:id" element={<Todos />} />
    </Routes>
  );
}
