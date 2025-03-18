import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import ReportWaste from "./pages/ReportWaste/ReportWastePage";
import Overview from "./pages/OverviewPage/OverviewPage";
import { Routes, Route } from "react-router-dom";
import ProfilePage from "./pages/Profile/ProfilePage";
import Subscription from "./pages/Subscription/SubscriptionPage";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/route/ProtectedRoute";
import Payment from "./pages/Payment/PaymentPage";
import ReportHistory from "./pages/ReportHistory/ReportHistoryPage";
library.add(fas);
import About from "./pages/About/AboutPage";
import Location from "./pages/LocateFacilities/Location";
import Recycling from "./pages/RecyclingTips/RecyclingPage";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/overview"
          element={
            <ProtectedRoute>
              <Overview />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route path="/report-waste" element={<ReportWaste />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/about" element={<About />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/history" element={<ReportHistory />} />
        <Route path="/facilities" element={<Location />} />
        <Route path="/recycling-tips" element={<Recycling />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
