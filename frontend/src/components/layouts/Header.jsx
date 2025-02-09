// Dependencies & Packages Import
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components Import
import Home from "../pages/Home.jsx";
import Registration from "../pages/Registration.jsx";
import Login from "../pages/Login.jsx";
import Dashboard from "../pages/interface/dashboard.jsx";

function WebsiteRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default WebsiteRouter;
