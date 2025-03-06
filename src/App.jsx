import React from "react";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";
import ReportWaste from "./pages/ReportPage/ReportWaste";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/report-waste" element={<ReportWaste/>} />
    </Routes>
  );
};

export default App;
