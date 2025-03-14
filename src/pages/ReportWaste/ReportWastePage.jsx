"use client"

import { useState } from "react"
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
} from "lucide-react"
import "./ReportWastePage.css"
import logoIcon from "../../assets/images/Logo Icon.svg";

export default function ReportWaste() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <div className={`app-container ${isDarkMode ? "dark-mode" : ""}`}>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Logo */}
        <div className="logo">
          <div className="logo-icon">
            <img src={logoIcon} alt="logo" width="50" height="50" />
          </div>
          <span className="logo-text">GIGO</span>
        </div>

        {/* Navigation */}
        <div className="nav-container">
          <div className="nav-section">
            <p className="nav-section-title">Home</p>
            <NavItem icon={<Layout size={18} />} label="Overview" />
            <NavItem icon={<Recycle size={18} />} label="Recycling Tips" />
            <NavItem icon={<User size={18} />} label="Profile" />
          </div>

          <div className="nav-section">
            <p className="nav-section-title">Users</p>
            <NavItem icon={<MessageSquare size={18} />} label="Chat" />
            <NavItem icon={<FileUp size={18} />} label="Report Waste" active />
            <NavItem icon={<Calendar size={18} />} label="Pickup Schedule" />
            <NavItem icon={<PackageOpen size={18} />} label="Subscription" />
          </div>

          <div className="nav-section">
            <p className="nav-section-title">More</p>
            <NavItem
              icon={<CircleDot size={18} className="red-icon" />}
              label="Locate Facilities"
              iconColor="red-icon"
            />
            <NavItem icon={<CircleDot size={18} className="blue-icon" />} label="Payment" iconColor="blue-icon" />
            <NavItem
              icon={<CircleDot size={18} className="purple-icon" />}
              label="Report History"
              iconColor="purple-icon"
            />
          </div>

          <div className="nav-section preferences">
            <p className="nav-section-title">Preferences</p>
            <NavItem icon={<Settings size={18} />} label="Settings" hasDropdown />
            <NavItem icon={<Info size={18} />} label="About" />
            <NavItem icon={<HelpCircle size={18} />} label="Help Center" />
          </div>

          {/* Theme Toggle */}
          <div className="theme-toggle">
            <button className={`theme-button ${!isDarkMode ? "active" : ""}`} onClick={() => setIsDarkMode(false)}>
              <Sun size={16} />
              <span>Light</span>
            </button>
            <button className={`theme-button ${isDarkMode ? "active" : ""}`} onClick={() => setIsDarkMode(true)}>
              <Moon size={16} />
              <span>Dark</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
        <div className="main-content">
            {/* Header */}
            <header className="header">
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
            </header>

            {/* Main Content */}
            <main className="content">
            {/* Upload Area */}
            <div className="upload-area">
                <div className="upload-icon-container">
                <FileUp size={32} className="upload-icon" />
                </div>
                <h3 className="upload-title">Upload a file, or drag and drop</h3>
                <p className="upload-description">PNG, JPEG, GIF up to 10MB</p>
            </div>

            {/* Verify Button */}
            <button className="verify-button">Verify Waste</button>

            {/* Form */}
            <div className="form-grid">
                <div className="form-group">
                    <label className="form-label">Location</label>
                    <input type="text" className="form-input" />
                </div>
                <div className="form-group">
                    <label className="form-label">Waste Type</label>
                    <div className="select-container">
                        <select className="form-select">
                            <option value="">Select waste type</option>
                            <option value="organic">Organic Waste</option>
                            <option value="plastic">Plastic</option>
                            <option value="glass">Glass</option>
                            <option value="metal">Metal</option>
                            <option value="paper">Paper</option>
                            <option value="electronics">Electronic Waste</option>
                            <option value="textiles">Textiles</option>
                            <option value="hazardous">Hazardous Waste</option>
                            <option value="construction">Construction Debris</option>
                            <option value="medical">Medical Waste</option>
                        </select>
                        <ChevronDown className="select-icon" size={20} />
                     </div>
                </div>
                <div className="form-group">
                    <label className="form-label">Date</label>
                    <div className="input-with-icon">
                        <input type="date" className="form-input" />
                    </div>
                </div>

                <div className="form-group">
                    <label className="form-label">Time</label>
                    <div className="select-container">
                        <select className="form-select">
                        <option value="">Select time</option>
                        </select>
                        <ChevronDown className="select-icon" size={20} />
                    </div>
                </div>
            </div>
            </main>
        </div>
    </div>
  )
}

function NavItem({ icon, label, active, hasDropdown, iconColor }) {
  return (
    <div className={`nav-item ${active ? "active" : ""} ${iconColor || ""}`}>
      <span className="nav-icon">{icon}</span>
      <span className="nav-label">{label}</span>
      {hasDropdown && <ChevronDown size={16} className="dropdown-icon" />}
    </div>
  )
}

