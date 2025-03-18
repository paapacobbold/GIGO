import { React, useState } from "react";
import TopBar from "../../components/TopBar/TopBar";
import Sidebar from "../../components/sidebar/sidebar";
import "./AboutPage.css";

export default function About() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  <div className={`app-container ${isDarkMode ? "dark-mode" : ""}`}>
    <Sidebar
      isDarkMode={isDarkMode}
      setIsDarkMode={setIsDarkMode}
      activePage="overview"
    />
    <TopBar />
  </div>;
}
