import { Dashboard, FirstPage } from "@mui/icons-material";
import React from "react";
import { RequireAuth } from "react-auth-kit";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import LoginPage from "./pages/loginPage";
import DashboardPage from "./pages/dashboardPage";

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<FirstPage />} />
        {/* Strona publiczna */}
        <Route path={"/login"} element={<LoginPage />} />
        {/* Strona prywatna, zawsze zwracaj komponent docelowy przez funkcje */}
        <Route
          path={"/dashboard"}
          element={<PrivateRoute Component={() => <DashboardPage />} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
