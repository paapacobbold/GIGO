import { useState } from "react";
import { Bell, Search } from "lucide-react";
import Sidebar from "../../components/sidebar/sidebar";
import "./OverviewPage.css";
// import logoIcon from "../../assets/images/Logo Icon.svg";
import plantImage from "../../assets/images/picture.png";
import group4 from "../../assets/images/Group 4.png";
import group5 from "../../assets/images/Group 5.png";
import group6 from "../../assets/images/Group 6.png";
import group7 from "../../assets/images/Group 7.png";
import TopBar from "../../components/TopBar/TopBar";

export default function Overview() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Updated Process steps data
  const processSteps = [
    {
      icon: group4,
      title: "Pickup",
      description:
        "We help you get rid of waste easily with different types of bins and collection services. Our bins are designed to keep waste organized and clean. We also provide guidance on what can and cannot be recycled.",
    },
    {
      icon: group5,
      title: "Collection",
      description:
        "Our efficient collection system ensures timely waste pickup from your location. We use modern vehicles and tracking technology to optimize routes. Our trained staff handles waste safely and professionally.",
    },
    {
      icon: group6,
      title: "Recycling",
      description:
        "We turn old things into new things to save the planet and reduce waste. Our recycling program helps conserve natural resources and reduces landfill waste. We partner with local recycling facilities to ensure responsible processing.",
    },
    {
      icon: group7,
      title: "Cleanup",
      description:
        "We keep public places clean and beautiful so everyone can enjoy them. Our team uses eco-friendly cleaning products and equipment to protect the environment. We also work with local communities to promote cleanliness and sustainability.",
    },
  ];

  return (
    <div className={`app-container ${isDarkMode ? "dark-mode" : ""}`}>
      <Sidebar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        activePage="overview"
      />

      <div className="main-content">
        {/* Header */}
        <header className="header">
          <div className="search-container">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Mother Earth Day is coming..."
              className="search-input"
            />
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

        {/* Dashboard Content */}
        <div className="dashboard-content">
          {/* Banner Image */}
          <div className="banner-container">
            <img
              src={plantImage}
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
                      src={step.icon}
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
    </div>
  );
}
