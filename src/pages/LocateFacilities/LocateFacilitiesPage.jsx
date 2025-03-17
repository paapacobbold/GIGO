import Sidebar from "../../components/sidebar/sidebar";
import TopBar from "../../components/TopBar/TopBar";
import { React, useState } from "react";
import "./LocateFacilitiesPage.css"

function LocateFacilities() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div className={`app-container ${isDarkMode ? "dark-mode" : ""}`}>
          <Sidebar
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
            activePage="payment"
          />
          <TopBar />
          <div className="main-content">
           <p>LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem</p>
            <div className ="locate-facilities-content">
                <p>Lorem</p>
            </div>
          </div>
    </div>
  );
}

export default LocateFacilities;
