import { Link, useNavigate } from "react-router-dom";
import { Bell, Calendar, ChevronDown, ChevronUp, CircleDot, CreditCard, FileUp, HelpCircle, Info, Layout, LogOut, MessageSquare, PackageOpen, Recycle, Settings, Shield, Trash2, User, 
} from "lucide-react";
import { useState } from "react";
import "./Sidebar.css";
import logoIcon from "../../assets/images/Logo Icon.svg";
import CustomSwitchSelector from "../Switch/CustomSwitchSelector";
import { useAuth } from "../../context/AuthContext";

const NavItem = ({ icon, label, active, hasDropdown, iconColor, onClick, isOpen }) => {
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
      case "about":
        return "/about";
      case "help center":
        return "/help";
      default:
        return "#";
    }
  };

  // If the item has a dropdown and an onClick handler, use a div instead of a Link
  if (hasDropdown && onClick) {
    return (
      <div className={`nav-item ${active ? "active" : ""} ${iconColor || ""}`} onClick={onClick}>
        <span className="nav-icon">{icon}</span>
        <span className="nav-label">{label}</span>
        {hasDropdown && (
          isOpen ? (
            <ChevronUp size={16} className="dropdown-icon" />
          ) : (
            <ChevronDown size={16} className="dropdown-icon" />
          )
        )}
      </div>
    );
  }

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

const SettingsSubItem = ({ icon, label, active, href }) => {
  return (
    <Link to={`/settings${href}`} className={`settings-sub-item ${active ? "active" : ""}`}>
      <span className="nav-icon">{icon}</span>
      <span className="nav-label">{label}</span>
    </Link>
  );
};

const Sidebar = ({ isDarkMode, setIsDarkMode, activePage, activeSettingsSection }) => {
  const [settingsOpen, setSettingsOpen] = useState(activePage === "settings");
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // Toggle settings dropdown
  const toggleSettings = () => {
    setSettingsOpen(!settingsOpen);
  };

  return (
    <div className={`sidebar ${isDarkMode ? 'dark-mode' : ''}`}>
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
            onClick={toggleSettings}
            isOpen={settingsOpen}
            active={activePage === "settings"}
          />
          
          {/* Settings dropdown submenu */}
          {settingsOpen && (
            <div className="settings-submenu">
              <SettingsSubItem 
                icon={<Bell size={16} />} 
                label="Notifications" 
                href="#notifications"
                active={activeSettingsSection === "notifications"} 
              />
              <SettingsSubItem 
                icon={<User size={16} />} 
                label="Account" 
                href="#account"
                active={activeSettingsSection === "account"} 
              />
              <SettingsSubItem 
                icon={<Shield size={16} />} 
                label="Privacy" 
                href="#privacy"
                active={activeSettingsSection === "privacy"} 
              />
              <SettingsSubItem 
                icon={<Trash2 size={16} />} 
                label="Collection Preferences" 
                href="#collection"
                active={activeSettingsSection === "collection"} 
              />
              <SettingsSubItem 
                icon={<CreditCard size={16} />} 
                label="Payment Methods" 
                href="#payment"
                active={activeSettingsSection === "payment"} 
              />
              <SettingsSubItem 
                icon={<HelpCircle size={16} />} 
                label="Help Center" 
                href="#help"
                active={activeSettingsSection === "help"} 
              />
              </div>
          )}
          
          <NavItem icon={<Info size={18} />} label="About" />
          <NavItem icon={<HelpCircle size={18} />} label="Help Center" />
        </div>

        <div className="nav-item" onClick={handleLogout}>
        <span className="nav-icon"><LogOut size={16} /></span>
        <span className="nav-label">Logout</span>
      </div>
    </div>

        <div className="theme-toggle-container">
          <CustomSwitchSelector isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        </div>
      </div>
  );
};

export default Sidebar;