import { FirstPage } from "@mui/icons-material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/privateRoute";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import DashboardPage from "./pages/dashboardPage";
import ChartPage from "./pages/chartPage";
import InformationPage from "./pages/informationPage";

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<FirstPage />} />
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/register"} element={<RegisterPage />} />
         <Route
          path={"/dashboard"}
          element={<PrivateRoute Component={() => <DashboardPage />} />}
        /> 
          <Route
          path={"/Wykresy"}
          element={<PrivateRoute Component={() => <ChartPage />} />}
        /> 
          <Route
          path={"/Informacje"}
          element={<PrivateRoute Component={() => <InformationPage />} />}
        /> 
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
