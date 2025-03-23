import React, { useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import ReportWaste from "./pages/ReportWaste/ReportWastePage";
import Overview from "./pages/OverviewPage/OverviewPage";
import { Routes, Route, useLocation } from "react-router-dom";
import ProfilePage from "./pages/Profile/ProfilePage";
import Subscription from "./pages/Subscription/SubscriptionPage";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/route/ProtectedRoute";
import Payment from "./pages/Payment/PaymentPage";
import About from "./pages/About/AboutPage";
import Location from "./pages/LocateFacilities/Location";
import Recycling from "./pages/RecyclingTips/RecyclingPage";
import ReportHistory from "./pages/ReportHistory/ReportHistoryPage";
import ChatPage from "./pages/Chat/ChatPage";
import SettingsPage from "./pages/settings/SettingsPage";
import HelpCenter from "./pages/help/HelpCenter";
import Notfound from "./pages/Notfound/404";
library.add(fas);

const App = () => {
  const location = useLocation();

  useEffect(() => {
    const appName = "GIGO";

    const pageTitles = {
      "/": `${appName} | Home`,
      "/login": `${appName} | Login`,
      "/signup": `${appName} | Sign Up`,
      "/overview": `${appName} | Dashboard`,
      "/profile": `${appName} | My Profile`,
      "/report-waste": `${appName} | Report Waste`,
      "/subscription": `${appName} | Subscription Plans`,
      "/about": `${appName} | About Us`,
      "/payment": `${appName} | Payment`,
      "/history": `${appName} | Report History`,
      "/facilities": `${appName} | Recycling Facilities`,
      "/recycling-tips": `${appName} | Recycling Tips`,
      "/pickup-schedule": `${appName} | Pickup Schedule`,
      "/chat": `${appName} | Support Chat`,
      "/settings": `${appName} | Settings`,
      "/NotFound": `${appName} | Page Not Found`,
    };

    document.title = pageTitles[location.pathname] || `${appName}`;
  }, [location]);

  return (
    <AuthProvider>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/recycling-tips" element={<Recycling />} />
        <Route path="*" element={<Notfound />} />

        {/* Protected routes */}
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
        {/* <Route path="/pickup-schedule" element={<PickupSchedule />} /> */}
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/help" element={<HelpCenter />} />
        <Route
          path="/report-waste"
          element={
            <ProtectedRoute>
              <ReportWaste />
            </ProtectedRoute>
          }
        />
        <Route
          path="/subscription"
          element={
            <ProtectedRoute>
              <Subscription />
            </ProtectedRoute>
          }
        />
        <Route
          path="/payment"
          element={
            <ProtectedRoute>
              <Payment />
            </ProtectedRoute>
          }
        />
        <Route
          path="/history"
          element={
            <ProtectedRoute>
              <ReportHistory />
            </ProtectedRoute>
          }
        />
        <Route
          path="/facilities"
          element={
            <ProtectedRoute>
              <Location />
            </ProtectedRoute>
          }
        />
        {/* <Route
          path="/pickup-schedule"
          element={
            <ProtectedRoute>
              <PickupSchedule />
            </ProtectedRoute>
          }
        /> */}
        <Route
          path="/chat"
          element={
            <ProtectedRoute>
              <ChatPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <SettingsPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
};

export default App;
