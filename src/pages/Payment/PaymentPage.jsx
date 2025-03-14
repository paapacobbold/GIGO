import Sidebar from "../../components/sidebar/sidebar";
import TopBar from "../../components/TopBar/TopBar";
import { useState } from "react";

function Payment() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div className={`app-container ${isDarkMode ? "dark-mode" : ""}`}>
          <Sidebar
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
            activePage="overview"
          />
          <TopBar />
          <div className="main-content">
            
          </div>
    </div>
  );
}

export default Payment;
