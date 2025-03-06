import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import logoIcon from "../../assets/images/Logo Icon.svg";
// Add these imports at the top of your file
import plantImage from "../../assets/images/picture.png";
import group4 from "../../assets/images/Group 4.png";
import group5 from "../../assets/images/Group 5.png";
import group6 from "../../assets/images/Group 6.png";
import group7 from "../../assets/images/Group 7.png";

const Dashboard = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const [activeIcon, setActiveIcon] = useState("");

  const handleMenuClick = (menuItem) => {
    setActiveMenu(menuItem);
  };

  const handleIconClick = (icon) => {
    setActiveIcon(icon);
  };

  return (
    <div className="container">
      <Sidebar
        activeMenu={activeMenu}
        activeIcon={activeIcon}
        onMenuClick={handleMenuClick}
        onIconClick={handleIconClick}
      />
      <MainContent />
    </div>
  );
};

const Sidebar = ({ activeMenu, activeIcon, onMenuClick, onIconClick }) => {
  const menuItems = [
    {
      icon: "fa-solid fa-table-columns",
      text: "Dashboard",
      path: "/dashboard",
    },
    { icon: "fa-regular fa-calendar-days", text: "Pickup Schedule", path: "#" },
    { icon: "fa-regular fa-lightbulb", text: "Recycling Topics", path: "#" },
    {
      icon: "fa-solid fa-location-crosshairs",
      text: "Locate Facilities",
      path: "#",
    },
    { icon: "fa-solid fa-pen", text: "Report Waste", path: "/report-waste" },
  ];

  return (
    <div className="sidebar">
      <div className="logo">
        <div className="logo-circle">
          <img src={logoIcon} alt="Logo" width="40" height="40" />
        </div>
        <span>GIGO</span>
      </div>
      <div className="menu-items-column">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`menu-item ${activeMenu === item.text ? "active" : ""}`}
            onClick={() => onMenuClick(item.text)}
          >
            <Link to={item.path} className="menu-item-link">
              <i className={item.icon}></i>
              {item.text}
            </Link>
          </div>
        ))}
      </div>
      <div className="bottom-icons">
        <Link
          to="#"
          onClick={() => onIconClick("chat")}
          className={activeIcon === "chat" ? "active" : ""}
        >
          <i className="fa-regular fa-comment-dots"></i>
        </Link>
        <Link
          to="#"
          onClick={() => onIconClick("logout")}
          className={activeIcon === "logout" ? "active" : ""}
        >
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
        </Link>
        <Link
          to="/settings"
          onClick={() => onIconClick("settings")}
          className={activeIcon === "settings" ? "active" : ""}
        >
          <i className="fa-solid fa-gear"></i>
        </Link>
      </div>
    </div>
  );
};

const MainContent = () => {
  // Process steps data
  const processSteps = [
    {
      icon: group4, // Updated to use imported image
      title: "Pickup",
      description:
        "Lorem ipsum dolor sit amet consectetur. Senectus dolor aliquam dolor nisi duis ornare lacus. At ullamcorper ut id pharetra sapien in commodo. Morbi lobortis cursus nec vel.",
    },
    {
      icon: group5, // Updated to use imported image
      title: "Collection",
      description:
        "Lorem ipsum dolor sit amet consectetur. Senectus dolor aliquam dolor nisi duis ornare lacus. At ullamcorper ut id pharetra sapien in commodo. Morbi lobortis cursus nec vel.",
    },
    {
      icon: group6, // Updated to use imported image
      title: "Recycling",
      description:
        "Lorem ipsum dolor sit amet consectetur. Senectus dolor aliquam dolor nisi duis ornare lacus. At ullamcorper ut id pharetra sapien in commodo. Morbi lobortis cursus nec vel.",
    },
    {
      icon: group7, // Updated to use imported image
      title: "Cleanup",
      description:
        "Lorem ipsum dolor sit amet consectetur. Senectus dolor aliquam dolor nisi duis ornare lacus. At ullamcorper ut id pharetra sapien in commodo. Morbi lobortis cursus nec vel.",
    },
  ];

  return (
    <div className="main-content">
      <nav className="navbar">
        <div className="entire-search">
          <div className="search-container">
            <i className="fa-solid fa-search search-icon"></i>
            <input
              id="searchInput"
              type="text"
              placeholder="Mother Earth Day is coming..."
              className="search-box"
            />
          </div>
        </div>
        <div className="navbar-icons">
          <Link to="#" className="notification-icon">
            <i className="fa-solid fa-bell"></i>
          </Link>
          <Link to="#" className="profile-icon">
            <div className="profile-image">
              {/* Replace with your profile image */}
              <img src={plantImage} alt="Profile" />
            </div>
          </Link>
        </div>
      </nav>

      <div className="dashboard-content">
        {/* Banner Image */}
        <div className="banner-container">
          <img
            src={plantImage} // Updated to use imported image
            alt="Hands holding plant with soil"
            className="banner-image"
          />
        </div>

        {/* Working Process Section */}
        <div className="process-section">
          <h2 className="section-title">Our working process</h2>

          <div className="process-steps">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="icon-circle">
                  <img
                    src={step.icon} // This will need to reference your actual imported icons
                    alt={`${step.title} icon`}
                    className="process-icon"
                  />
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
