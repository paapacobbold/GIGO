import { useState } from "react";
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
  Search,
  Settings,
  Sun,
  User,
} from "lucide-react";
import "./ProfilePage.css";
import Sidebar from "../../components/sidebar/sidebar";
import TopBar from "../../components/TopBar/TopBar";

export default function ProfilePage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`app-container ${isDarkMode ? "dark-mode" : ""}`}>
      {/* Sidebar */}
      <Sidebar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        activePage="profile"
      />

      <TopBar />
      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        {/* <header className="header">
                <div className="search-container">
                    <Search className="search-icon" size={20} />
                    <input type="text" placeholder="Mother Earth Day is coming..." className="search-input"  />
                </div>

                <div className="header-actions">
                    <button className="notification-button">
                    <Bell size={20} />
                    </button>
                    <div className="avatar">
                    <span>👤</span>
                    </div>
                </div>
            </header> */}
        <div className="content">
          {/* {Profile Section} */}
          <div className="profile-container">
            <div className="profile-header">
              <img src="" alt="" className="profile-pic" />
              <div className="profile-info">
                <h2>User</h2>
                <p>This will be displayed on your profile.</p>
              </div>
            </div>

            <form className="profile-form">
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group" style={{ flex: 1 }}>
                  <label>Email</label>
                  <input type="email" id="email-textbox" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Date of Birth</label>
                  <input type="date" />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Location</label>
                  <input type="text" />
                </div>
                <div className="form-group">
                  <label>Language</label>
                  <input type="text" />
                </div>
              </div>
              <button type="submit" className="submit-btn">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
function NavItem({ icon, label, active, hasDropdown, iconColor }) {
  return (
    <div className={`nav-item ${active ? "active" : ""} ${iconColor || ""}`}>
      <span className="nav-icon">{icon}</span>
      <span className="nav-label">{label}</span>
      {hasDropdown && <ChevronDown size={16} className="dropdown-icon" />}
    </div>
  );
}
