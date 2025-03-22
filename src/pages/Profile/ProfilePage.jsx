"use client";

import { useState, useRef } from "react";
import { FileUp } from "lucide-react";
import "./ProfilePage.css";
import Sidebar from "../../components/sidebar/sidebar";
import TopBar from "../../components/TopBar/TopBar";
import { useUser } from "../../context/UserContext";

export default function ProfilePage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const fileInputRef = useRef(null);

  // Get user data and update function from context
  const { userData, updateUserData } = useUser();

  // Local form state
  const [formData, setFormData] = useState(userData);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle profile image selection
  const handleImageSelect = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setFormData((prevData) => ({
        ...prevData,
        profileImage: imageUrl,
      }));
    }
  };

  // Trigger file input click
  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Update the global user data
    updateUserData(formData);
    alert("Profile changes saved successfully!");
  };

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
        <div className="content">
          {/* Profile Section */}
          <div className="profile-container">
            <div className="profile-header">
              <div className="profile-pic-container" onClick={triggerFileInput}>
                <img
                  src={
                    formData.profileImage ||
                    "/placeholder.svg?height=100&width=100"
                  }
                  alt=""
                  className="profile-pic"
                />
                <div className="profile-pic-overlay">
                  <FileUp size={20} />
                  <span>Upload</span>
                </div>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageSelect}
                  accept="image/*"
                  style={{ display: "none" }}
                />
              </div>
              <div className="profile-info">
                <h2>User Profile</h2>
                <p>This will be displayed on your profile.</p>
              </div>
            </div>

            <form className="profile-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group" style={{ flex: 1 }}>
                  <label>Email</label>
                  <input
                    type="email"
                    id="email-textbox"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Date of Birth</label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Language</label>
                  <input
                    type="text"
                    name="language"
                    value={formData.language}
                    onChange={handleInputChange}
                  />
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
