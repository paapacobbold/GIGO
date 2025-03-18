import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Bell, Search } from "lucide-react";
import Sidebar from "../../components/sidebar/sidebar";
import "leaflet/dist/leaflet.css";
import TopBar from "../../components/TopBar/TopBar";

const Location = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`app-container ${isDarkMode ? "dark-mode" : ""}`}>
      <Sidebar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        activePage="locate-facilities"
      />
      <TopBar />
      <div className="main-content">
        <div className="content">
          <h1>Locate Recycling Facilities</h1>
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            style={{ height: "600px", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>A sample marker in London!</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Location;
