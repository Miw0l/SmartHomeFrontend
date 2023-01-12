// import './App.css';
import { Route } from "react-router-dom";
import { BrowserRouter, Routes } from "react-router-dom";
import Login from "./pages/loginPage.js";
import Register from "./pages/registerPage.js";
import Dashboard from "./pages/dashboardPage.js";
import { AuthProvider } from "react-auth-kit";
import { RequireAuth } from "react-auth-kit";
import RoutesComponent from "./Routes";

function App() {
  return (
    <AuthProvider authName={"_auth"} authType={"cookie"}>
      <RoutesComponent />
    </AuthProvider>
  );
}

export default App;
