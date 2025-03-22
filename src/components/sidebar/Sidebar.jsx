import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  ChevronDown,
  CircleDot,
  FileUp,
  HelpCircle,
  Info,
  Layout,
  Menu,
  MessageSquare,
  PackageOpen,
  Recycle,
  Settings,
  User,
  X,
} from "lucide-react";
import "./Sidebar.css";
import logoIcon from "../../assets/images/Logo Icon.svg";
import CustomSwitchSelector from "../Switch/CustomSwitchSelector";

const NavItem = ({ icon, label, active, hasDropdown, iconColor, onClick }) => {
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
      onClick={onClick}
    >
      <span className="nav-icon">{icon}</span>
      <span className="nav-label">{label}</span>
      {hasDropdown && <ChevronDown size={16} className="dropdown-icon" />}
    </Link>
  );
};

const Sidebar = ({ isDarkMode, setIsDarkMode, activePage }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isOpen, setIsOpen] = useState(false);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close sidebar when clicking a nav item on mobile
  const handleNavItemClick = () => {
    if (isMobile) {
      setIsOpen(false);
    }
  };

  // Toggle sidebar on mobile
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      {isMobile && (
        <button
          className="sidebar-toggle"
          onClick={toggleSidebar}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      )}

      {/* Overlay for mobile when sidebar is open */}
      {isMobile && isOpen && (
        <div className="sidebar-overlay" onClick={() => setIsOpen(false)}></div>
      )}

      {/* Sidebar */}
      <div
        className={`sidebar ${isMobile ? "mobile" : ""} ${
          isOpen ? "open" : ""
        }`}
      >
        <div className="logo">
          <div className="logo-icon">
            <img
              src={logoIcon || "/placeholder.svg"}
              alt="logo"
              width="50"
              height="50"
            />
          </div>
          <span className="logo-text">GIGO</span>
          {isMobile && (
            <button
              className="close-sidebar"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          )}
        </div>

        <div className="nav-container">
          <div className="nav-section">
            <p className="nav-section-title">Home</p>
            <NavItem
              icon={<Layout size={18} />}
              label="Overview"
              active={activePage === "overview"}
              onClick={handleNavItemClick}
            />
            <NavItem
              icon={<Recycle size={18} />}
              label="Recycling Tips"
              onClick={handleNavItemClick}
            />
            <NavItem
              icon={<User size={18} />}
              label="Profile"
              onClick={handleNavItemClick}
            />
          </div>

          <div className="nav-section">
            <p className="nav-section-title">Users</p>
            <NavItem
              icon={<MessageSquare size={18} />}
              label="Chat"
              onClick={handleNavItemClick}
            />
            <NavItem
              icon={<FileUp size={18} />}
              label="Report Waste"
              onClick={handleNavItemClick}
            />
            <NavItem
              icon={<Calendar size={18} />}
              label="Pickup Schedule"
              onClick={handleNavItemClick}
            />
            <NavItem
              icon={<PackageOpen size={18} />}
              label="Subscription"
              active={activePage === "subscription"}
              onClick={handleNavItemClick}
            />
          </div>

          <div className="nav-section">
            <p className="nav-section-title">More</p>
            <NavItem
              icon={<CircleDot size={18} className="red-icon" />}
              label="Locate Facilities"
              iconColor="red-icon"
              onClick={handleNavItemClick}
            />
            <NavItem
              icon={<CircleDot size={18} className="blue-icon" />}
              label="Payment"
              iconColor="blue-icon"
              onClick={handleNavItemClick}
            />
            <NavItem
              icon={<CircleDot size={18} className="purple-icon" />}
              label="Report History"
              iconColor="purple-icon"
              onClick={handleNavItemClick}
            />
          </div>

          <div className="nav-section preferences">
            <p className="nav-section-title">Preferences</p>
            <NavItem
              icon={<Settings size={18} />}
              label="Settings"
              hasDropdown
              onClick={handleNavItemClick}
            />
            <NavItem
              icon={<Info size={18} />}
              label="About"
              onClick={handleNavItemClick}
            />
            <NavItem
              icon={<HelpCircle size={18} />}
              label="Help Center"
              onClick={handleNavItemClick}
            />
          </div>

          <div className="theme-toggle-container">
            <CustomSwitchSelector
              isDarkMode={isDarkMode}
              setIsDarkMode={setIsDarkMode}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
