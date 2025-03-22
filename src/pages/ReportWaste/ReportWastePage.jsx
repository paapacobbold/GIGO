import { useState } from "react";
import { ChevronDown, FileUp } from "lucide-react";
import "./ReportWastePage.css";
import TopBar from "../../components/TopBar/TopBar";
import Sidebar from "../../components/sidebar/sidebar";

export default function ReportWaste() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`app-container ${isDarkMode ? "dark-mode" : ""}`}>
      <Sidebar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        activePage="subscription"
      />

      <TopBar />
      {/* Main Content */}
      <div className="main-content">
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
                  <option value="08:00">8:00 AM</option>
                  <option value="09:00">9:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="13:00">1:00 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                </select>
                <ChevronDown className="select-icon" size={20} />
              </div>
            </div>
          </div>
          <div className="text-area">
            <label className="form-label-p">Pickup Instructions</label>
            <div className="text-input">
              <textarea rows="10" placeholder="Text" required />
            </div>
          </div>
          <div className="Bottom-btns">
            <button className="Submit-btn">Submit Report</button>
            <button className="Cancel-btn">Cancel</button>
          </div>
        </main>
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
