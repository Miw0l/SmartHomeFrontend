// import './App.css';
import { Route } from "react-router-dom";
import { BrowserRouter, Routes } from "react-router-dom";
import Login from "./pages/loginPage.js"
import Register from "./pages/registerPage.js"
import Dashboard from "./pages/dashboardPage.js"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
