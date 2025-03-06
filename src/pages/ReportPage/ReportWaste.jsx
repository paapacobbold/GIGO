import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ReportWaste.css";
import logoIcon from "../../assets/images/Logo Icon.svg";

const ReportWaste = () => {
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
  const handleFileUpload = (event) => {
    // Handle file upload logic here
    const file = event.target.files[0];
    console.log("Uploaded file:", file);
  };

  const handleVerifyWaste = () => {
    // Handle waste verification logic here
  };

  return (
    <div className="main-content">
      <nav className="navbar">
        <div className="entire-search">
          <input
            id="searchInput"
            type="text"
            placeholder="Mother Earth Day is coming..."
            className="search-box"
          />
          <button className="search-button">Search</button>
        </div>
        <div className="navbar-icons">
          <Link to="#">
            <i className="fa-solid fa-bell"></i>
          </Link>
          <Link to="#">
            <i className="fa-solid fa-user"></i>
          </Link>
        </div>
      </nav>
      <div className="file-upload-container">
        <input
          type="file"
          id="fileInput"
          className="file-input"
          onChange={handleFileUpload}
          accept="image/png,image/jpeg,image/gif"
        />
        <label htmlFor="fileInput">
          <i className="fa-solid fa-upload"></i>
          <p>Upload a file, or drag and drop</p>
          <p id="sub-text">PNG,JPEG,GIF up to 10MB</p>
        </label>
      </div>
      <button className="verify-waste-btn" onClick={handleVerifyWaste}>
        Verify Waste
      </button>
      <form className="waste-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input type="text" id="location" name="Location" required />
          </div>
          <div className="form-group">
            <label htmlFor="wastetype">Waste Type</label>
            <select name="wastetype" id="wastetype">
              <option value="a">A</option>
              <option value="a">A</option>
              <option value="a">A</option>
              <option value="a">A</option>
              <option value="a">A</option>
              <option value="a">A</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReportWaste;
