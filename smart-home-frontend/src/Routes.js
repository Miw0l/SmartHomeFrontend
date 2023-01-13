import { Dashboard, FirstPage } from "@mui/icons-material";
import React from "react";
import { RequireAuth } from "react-auth-kit";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import DashboardPage from "./pages/dashboardPage";

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<FirstPage />} />
        {/* Strona publiczna */}
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/register"} element={<RegisterPage />} />
        {/* Strona prywatna, zawsze zwracaj komponent docelowy przez funkcje */}
        {/* <Route
          path={"/dashboard"}
          element={<PrivateRoute Component={() => <DashboardPage />} />}
        /> */}
        <Route path={"/dashboard"} element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
