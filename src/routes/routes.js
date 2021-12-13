import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from "../pages/Home";
import { Login } from "../pages/Login/Login";
import { Todos } from "../pages/Todos/Todos";

export function RoutesApp() {
  const PrivateRoute = ({ children, redirectTo }) => {
    const data = localStorage.getItem("user");

    return data ? children : <Navigate to={redirectTo} />;
  };

  return (
    <>
      <Routes>
        <Route
          path="/home"
          element={
            <PrivateRoute redirectTo="/">
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="home/:cardName/:id"
          element={
            <PrivateRoute redirectTo="/">
              <Todos />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
}
