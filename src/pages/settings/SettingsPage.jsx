"use client";

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Save,
  HelpCircle,
  Moon,
  Sun,
  ToggleLeft,
  ToggleRight,
  ChevronRight,
  MapPin,
  Trash2,
  Clock,
  Globe,
} from "lucide-react";
import "./SettingsPage.css";
import Sidebar from "../../components/sidebar/sidebar";

const SettingsPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  // Get the current URL hash for active section
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("notifications");

  useEffect(() => {
    // Extract the section from hash (e.g., "#notifications" -> "notifications")
    const hash = location.hash.replace("#", "");
    if (hash) {
      setActiveSection(hash);

      // Scroll to the section
      const sectionElement = document.getElementById(hash);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  // State for various settings
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
    pickupReminders: true,
    paymentAlerts: true,
    promotionalMessages: false,
  });

  const [accountSettings, setAccountSettings] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Green Street, Eco City, EC 12345",
    language: "English",
    darkMode: false,
  });

  const [privacySettings, setPrivacySettings] = useState({
    shareLocation: true,
    shareUsageData: false,
    allowThirdPartyData: false,
  });

  const [collectionPreferences, setCollectionPreferences] = useState({
    preferredDay: "Wednesday",
    preferredTimeSlot: "Morning (8AM - 12PM)",
    automaticScheduling: true,
    reminderTime: "24 hours before",
  });

  // Handlers for settings changes
  const handleNotificationChange = (setting) => {
    setNotifications({
      ...notifications,
      [setting]: !notifications[setting],
    });
  };

  const handleAccountChange = (field, value) => {
    setAccountSettings({
      ...accountSettings,
      [field]: value,
    });
  };

  const handlePrivacyChange = (setting) => {
    setPrivacySettings({
      ...privacySettings,
      [setting]: !privacySettings[setting],
    });
  };

  const handleCollectionChange = (field, value) => {
    setCollectionPreferences({
      ...collectionPreferences,
      [field]: value,
    });
  };

  const handleToggle = (settingType, field) => {
    if (settingType === "account") {
      handleAccountChange(field, !accountSettings[field]);
    } else if (settingType === "privacy") {
      handlePrivacyChange(field);
    } else if (settingType === "collection") {
      handleCollectionChange(field, !collectionPreferences[field]);
    }
  };

  const handleSaveSettings = () => {
    // Here you would typically make an API call to save settings
    alert("Settings saved successfully!");
  };

  return (
    <div className="app-container">
      <Sidebar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        activePage="settings"
        activeSettingsSection={activeSection}
      />
      <div className="settings-container">
        <header className="settings-header">
          <div className="header-content">
            <h1>Settings</h1>
          </div>
          <button className="save-button" onClick={handleSaveSettings}>
            <Save size={16} />
            <span className="button-text">Save Changes</span>
          </button>
        </header>

        <div className="settings-content">
          <div className="settings-main">
            <section id="notifications" className="settings-section">
              <h2>Notifications</h2>
              <p className="section-description">
                Configure how and when you receive notifications about waste
                collection and account updates.
              </p>

              <div className="settings-group">
                <h3>Notification Channels</h3>
                <div className="setting-item">
                  <div>
                    <h4>Email Notifications</h4>
                    <p>Receive notifications via email</p>
                  </div>
                  <button
                    className={`toggle-button ${
                      notifications.email ? "active" : ""
                    }`}
                    onClick={() => handleNotificationChange("email")}
                  >
                    {notifications.email ? (
                      <ToggleRight size={24} />
                    ) : (
                      <ToggleLeft size={24} />
                    )}
                  </button>
                </div>

                <div className="setting-item">
                  <div>
                    <h4>SMS Notifications</h4>
                    <p>Receive notifications via text message</p>
                  </div>
                  <button
                    className={`toggle-button ${
                      notifications.sms ? "active" : ""
                    }`}
                    onClick={() => handleNotificationChange("sms")}
                  >
                    {notifications.sms ? (
                      <ToggleRight size={24} />
                    ) : (
                      <ToggleLeft size={24} />
                    )}
                  </button>
                </div>

                <div className="setting-item">
                  <div>
                    <h4>Push Notifications</h4>
                    <p>Receive notifications on your device</p>
                  </div>
                  <button
                    className={`toggle-button ${
                      notifications.push ? "active" : ""
                    }`}
                    onClick={() => handleNotificationChange("push")}
                  >
                    {notifications.push ? (
                      <ToggleRight size={24} />
                    ) : (
                      <ToggleLeft size={24} />
                    )}
                  </button>
                </div>
              </div>

              <div className="settings-group">
                <h3>Notification Types</h3>
                <div className="setting-item">
                  <div>
                    <h4>Pickup Reminders</h4>
                    <p>Remind me about upcoming waste collection</p>
                  </div>
                  <button
                    className={`toggle-button ${
                      notifications.pickupReminders ? "active" : ""
                    }`}
                    onClick={() => handleNotificationChange("pickupReminders")}
                  >
                    {notifications.pickupReminders ? (
                      <ToggleRight size={24} />
                    ) : (
                      <ToggleLeft size={24} />
                    )}
                  </button>
                </div>

                <div className="setting-item">
                  <div>
                    <h4>Payment Alerts</h4>
                    <p>Notify me about payment confirmations and due dates</p>
                  </div>
                  <button
                    className={`toggle-button ${
                      notifications.paymentAlerts ? "active" : ""
                    }`}
                    onClick={() => handleNotificationChange("paymentAlerts")}
                  >
                    {notifications.paymentAlerts ? (
                      <ToggleRight size={24} />
                    ) : (
                      <ToggleLeft size={24} />
                    )}
                  </button>
                </div>

                <div className="setting-item">
                  <div>
                    <h4>Promotional Messages</h4>
                    <p>Receive updates about new services and offers</p>
                  </div>
                  <button
                    className={`toggle-button ${
                      notifications.promotionalMessages ? "active" : ""
                    }`}
                    onClick={() =>
                      handleNotificationChange("promotionalMessages")
                    }
                  >
                    {notifications.promotionalMessages ? (
                      <ToggleRight size={24} />
                    ) : (
                      <ToggleLeft size={24} />
                    )}
                  </button>
                </div>
              </div>

              <div className="settings-group">
                <h3>Personal Information</h3>
                <div className="input-setting-item">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    value={accountSettings.name}
                    onChange={(e) =>
                      handleAccountChange("name", e.target.value)
                    }
                  />
                </div>

                <div className="input-setting-item">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    value={accountSettings.email}
                    onChange={(e) =>
                      handleAccountChange("email", e.target.value)
                    }
                  />
                </div>

                <div className="input-setting-item">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    value={accountSettings.phone}
                    onChange={(e) =>
                      handleAccountChange("phone", e.target.value)
                    }
                  />
                </div>

                <div className="input-setting-item">
                  <label htmlFor="address">Service Address</label>
                  <textarea
                    id="address"
                    value={accountSettings.address}
                    onChange={(e) =>
                      handleAccountChange("address", e.target.value)
                    }
                    rows="2"
                  ></textarea>
                </div>
              </div>

              <div className="settings-group">
                <h3>Preferences</h3>
                <div className="setting-item">
                  <div>
                    <h4>Language</h4>
                    <p>Select your preferred language</p>
                  </div>
                  <select
                    value={accountSettings.language}
                    onChange={(e) =>
                      handleAccountChange("language", e.target.value)
                    }
                  >
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                    <option value="German">German</option>
                    <option value="Chinese">Chinese</option>
                  </select>
                </div>

                <div className="setting-item">
                  <div>
                    <h4>Dark Mode</h4>
                    <p>Switch between light and dark interface</p>
                  </div>
                  <button
                    className={`toggle-button ${
                      accountSettings.darkMode ? "active" : ""
                    }`}
                    onClick={() => handleToggle("account", "darkMode")}
                  >
                    {accountSettings.darkMode ? (
                      <>
                        {" "}
                        <Moon size={24} /> <ToggleRight size={24} />{" "}
                      </>
                    ) : (
                      <>
                        {" "}
                        <Sun size={24} /> <ToggleLeft size={24} />{" "}
                      </>
                    )}
                  </button>
                </div>
              </div>
            </section>

            <section id="privacy" className="settings-section">
              <h2>Privacy Settings</h2>
              <p className="section-description">
                Control how your data is collected and shared.
              </p>

              <div className="settings-group">
                <div className="setting-item">
                  <div>
                    <h4>Location Sharing</h4>
                    <p>
                      Allow the app to access your location for better service
                    </p>
                  </div>
                  <button
                    className={`toggle-button ${
                      privacySettings.shareLocation ? "active" : ""
                    }`}
                    onClick={() => handlePrivacyChange("shareLocation")}
                  >
                    {privacySettings.shareLocation ? (
                      <>
                        {" "}
                        <MapPin size={24} /> <ToggleRight size={24} />{" "}
                      </>
                    ) : (
                      <>
                        {" "}
                        <MapPin size={24} /> <ToggleLeft size={24} />{" "}
                      </>
                    )}
                  </button>
                </div>

                <div className="setting-item">
                  <div>
                    <h4>Usage Data</h4>
                    <p>Share anonymized usage data to help us improve</p>
                  </div>
                  <button
                    className={`toggle-button ${
                      privacySettings.shareUsageData ? "active" : ""
                    }`}
                    onClick={() => handlePrivacyChange("shareUsageData")}
                  >
                    {privacySettings.shareUsageData ? (
                      <ToggleRight size={24} />
                    ) : (
                      <ToggleLeft size={24} />
                    )}
                  </button>
                </div>

                <div className="setting-item">
                  <div>
                    <h4>Third-Party Data Sharing</h4>
                    <p>Allow sharing data with trusted partners</p>
                  </div>
                  <button
                    className={`toggle-button ${
                      privacySettings.allowThirdPartyData ? "active" : ""
                    }`}
                    onClick={() => handlePrivacyChange("allowThirdPartyData")}
                  >
                    {privacySettings.allowThirdPartyData ? (
                      <ToggleRight size={24} />
                    ) : (
                      <ToggleLeft size={24} />
                    )}
                  </button>
                </div>
              </div>

              <div className="privacy-links">
                <a href="#privacy-policy">
                  View Privacy Policy <ChevronRight size={16} />
                </a>
                <a href="#data-request">
                  Request My Data <ChevronRight size={16} />
                </a>
                <a href="#delete-account">
                  Delete My Account <ChevronRight size={16} />
                </a>
              </div>
            </section>

            <section id="collection" className="settings-section">
              <h2>Collection Preferences</h2>
              <p className="section-description">
                Customize your waste collection schedule and preferences.
              </p>

              <div className="settings-group">
                <div className="setting-item">
                  <div>
                    <h4>Preferred Collection Day</h4>
                  </div>
                  <select
                    value={collectionPreferences.preferredDay}
                    onChange={(e) =>
                      handleCollectionChange("preferredDay", e.target.value)
                    }
                  >
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                  </select>
                </div>

                <div className="setting-item">
                  <div>
                    <h4>Preferred Time Slot</h4>
                  </div>
                  <select
                    value={collectionPreferences.preferredTimeSlot}
                    onChange={(e) =>
                      handleCollectionChange(
                        "preferredTimeSlot",
                        e.target.value
                      )
                    }
                  >
                    <option value="Morning (8AM - 12PM)">
                      Morning (8AM - 12PM)
                    </option>
                    <option value="Afternoon (12PM - 4PM)">
                      Afternoon (12PM - 4PM)
                    </option>
                    <option value="Evening (4PM - 8PM)">
                      Evening (4PM - 8PM)
                    </option>
                  </select>
                </div>

                <div className="setting-item">
                  <div>
                    <h4>Automatic Scheduling</h4>
                    <p>Allow system to optimize your pickup schedule</p>
                  </div>
                  <button
                    className={`toggle-button ${
                      collectionPreferences.automaticScheduling ? "active" : ""
                    }`}
                    onClick={() =>
                      handleToggle("collection", "automaticScheduling")
                    }
                  >
                    {collectionPreferences.automaticScheduling ? (
                      <>
                        {" "}
                        <Clock size={24} /> <ToggleRight size={24} />{" "}
                      </>
                    ) : (
                      <>
                        {" "}
                        <Clock size={24} /> <ToggleLeft size={24} />{" "}
                      </>
                    )}
                  </button>
                </div>

                <div className="setting-item">
                  <div>
                    <h4>Reminder Time</h4>
                  </div>
                  <select
                    value={collectionPreferences.reminderTime}
                    onChange={(e) =>
                      handleCollectionChange("reminderTime", e.target.value)
                    }
                  >
                    <option value="1 hour before">1 hour before</option>
                    <option value="3 hours before">3 hours before</option>
                    <option value="12 hours before">12 hours before</option>
                    <option value="24 hours before">24 hours before</option>
                    <option value="2 days before">2 days before</option>
                  </select>
                </div>
              </div>
            </section>

            <section id="payment" className="settings-section">
              <h2>Payment Methods</h2>
              <p className="section-description">
                Manage your payment options and billing preferences.
              </p>

              <div className="payment-cards">
                <div className="payment-card">
                  <div className="card-details">
                    <div className="card-type">Visa ending in 4242</div>
                    <div className="card-expiry">Expires 12/25</div>
                  </div>
                  <div className="card-actions">
                    <button className="default-badge">Default</button>
                    <button className="edit-button">Edit</button>
                  </div>
                </div>

                <div className="payment-card">
                  <div className="card-details">
                    <div className="card-type">Mastercard ending in 8888</div>
                    <div className="card-expiry">Expires 08/24</div>
                  </div>
                  <div className="card-actions">
                    <button className="edit-button">Edit</button>
                    <button className="remove-button">Remove</button>
                  </div>
                </div>

                <button className="add-payment-button">
                  + Add Payment Method
                </button>
              </div>

              <div className="settings-group">
                <h3>Billing Preferences</h3>
                <div className="setting-item">
                  <div>
                    <h4>Billing Cycle</h4>
                  </div>
                  <select>
                    <option value="monthly">Monthly</option>
                    <option value="quarterly">Quarterly</option>
                    <option value="annually">Annually (Save 10%)</option>
                  </select>
                </div>

                <div className="setting-item">
                  <div>
                    <h4>Paperless Billing</h4>
                    <p>Receive invoices by email instead of mail</p>
                  </div>
                  <button className="toggle-button active">
                    <ToggleRight size={24} />
                  </button>
                </div>

                <div className="setting-item">
                  <div>
                    <h4>Auto-Pay</h4>
                    <p>Automatically charge your default payment method</p>
                  </div>
                  <button className="toggle-button active">
                    <ToggleRight size={24} />
                  </button>
                </div>
              </div>
            </section>

            <section id="help" className="settings-section">
              <h2>Help & Support</h2>
              <p className="section-description">
                Get assistance with your account or waste collection services.
              </p>

              <div className="help-options">
                <div className="help-option">
                  <Globe size={24} />
                  <h3>Knowledge Base</h3>
                  <p>Browse our articles to find answers to common questions</p>
                  <a href="#kb">
                    View Articles <ChevronRight size={16} />
                  </a>
                </div>

                <div className="help-option">
                  <HelpCircle size={24} />
                  <h3>Contact Support</h3>
                  <p>Get in touch with our customer support team</p>
                  <a href="#contact">
                    Contact Us <ChevronRight size={16} />
                  </a>
                </div>

                <div className="help-option">
                  <Trash2 size={24} />
                  <h3>Recycling Guide</h3>
                  <p>
                    Learn how to properly sort and recycle different materials
                  </p>
                  <a href="#guide">
                    View Guide <ChevronRight size={16} />
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
