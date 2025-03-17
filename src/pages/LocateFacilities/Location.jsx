import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Bell, Search } from "lucide-react";
import Sidebar from "../../components/sidebar/sidebar";
import "leaflet/dist/leaflet.css";

const Location = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`app-container ${isDarkMode ? "dark-mode" : ""}`}>
      <Sidebar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        activePage="locate-facilities"
      />

      <div className="main-content">
        <header className="header">
          <div className="search-container">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Search for recycling facilities..."
              className="search-input"
            />
          </div>

          <div className="header-actions">
            <button className="notification-button">
              <Bell size={20} />
              <span className="notification-badge">3</span>
            </button>
            <div className="profile-dropdown">
              <div className="avatar">
                <img src="/default-avatar.png" alt="User avatar" />
              </div>
              <div className="user-info">
                <span className="username">John Doe</span>
                <span className="role">Admin</span>
              </div>
            </div>
          </div>
        </header>

        <div className="content">
          <h1>Locate Recycling Facilities</h1>
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            style={{ height: "400px", width: "100%" }}
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
