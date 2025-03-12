// import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Bell,
  Calendar,
  ChevronDown,
  CircleDot,
  FileUp,
  HelpCircle,
  Info,
  Layout,
  MessageSquare,
  Moon,
  PackageOpen,
  Recycle,
  Settings,
  Sun,
  User,
} from "lucide-react";
import "./Sidebar.css";
import logoIcon from "../../assets/images/Logo Icon.svg";

const NavItem = ({ icon, label, active, hasDropdown, iconColor }) => {
  const getPath = (label) => {
    switch (label.toLowerCase()) {
      case "overview":
        return "/overview";
      case "recycling tips":
        return "/recycling-tips";
      case "profile":
        return "/profile";
      case "chat":
        return "/chat";
      case "report waste":
        return "/report-waste";
      case "pickup schedule":
        return "/pickup-schedule";
      case "subscription":
        return "/subscription";
      case "locate facilities":
        return "/facilities";
      case "payment":
        return "/payment";
      case "report history":
        return "/history";
      case "settings":
        return "/settings";
      case "about":
        return "/about";
      case "help center":
        return "/help";
      default:
        return "#";
    }
  };

  return (
    <Link
      to={getPath(label)}
      className={`nav-item ${active ? "active" : ""} ${iconColor || ""}`}
    >
      <span className="nav-icon">{icon}</span>
      <span className="nav-label">{label}</span>
      {hasDropdown && <ChevronDown size={16} className="dropdown-icon" />}
    </Link>
  );
};

const Sidebar = ({ isDarkMode, setIsDarkMode, activePage }) => {
  return (
    <div className="sidebar">
      <div className="logo">
        <div className="logo-icon">
          <img src={logoIcon} alt="logo" width="50" height="50" />
        </div>
        <span className="logo-text">GIGO</span>
      </div>

      <div className="nav-container">
        <div className="nav-section">
          <p className="nav-section-title">Home</p>
          <NavItem 
            icon={<Layout size={18} />} 
            label="Overview" 
            active={activePage === "overview"} 
          />
          <NavItem icon={<Recycle size={18} />} label="Recycling Tips" />
          <NavItem icon={<User size={18} />} label="Profile" />
        </div>

        <div className="nav-section">
          <p className="nav-section-title">Users</p>
          <NavItem icon={<MessageSquare size={18} />} label="Chat" />
          <NavItem icon={<FileUp size={18} />} label="Report Waste" />
          <NavItem icon={<Calendar size={18} />} label="Pickup Schedule" />
          <NavItem 
            icon={<PackageOpen size={18} />} 
            label="Subscription" 
            active={activePage === "subscription"}
          />
        </div>

        <div className="nav-section">
          <p className="nav-section-title">More</p>
          <NavItem
            icon={<CircleDot size={18} className="red-icon" />}
            label="Locate Facilities"
            iconColor="red-icon"
          />
          <NavItem
            icon={<CircleDot size={18} className="blue-icon" />}
            label="Payment"
            iconColor="blue-icon"
          />
          <NavItem
            icon={<CircleDot size={18} className="purple-icon" />}
            label="Report History"
            iconColor="purple-icon"
          />
        </div>

        <div className="nav-section preferences">
          <p className="nav-section-title">Preferences</p>
          <NavItem
            icon={<Settings size={18} />}
            label="Settings"
            hasDropdown
          />
          <NavItem icon={<Info size={18} />} label="About" />
          <NavItem icon={<HelpCircle size={18} />} label="Help Center" />
        </div>

        <div className="theme-toggle">
          <button
            className={`theme-button ${!isDarkMode ? "active" : ""}`}
            onClick={() => setIsDarkMode(false)}
          >
            <Sun size={16} />
            <span>Light</span>
          </button>
          <button
            className={`theme-button ${isDarkMode ? "active" : ""}`}
            onClick={() => setIsDarkMode(true)}
          >
            <Moon size={16} />
            <span>Dark</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;