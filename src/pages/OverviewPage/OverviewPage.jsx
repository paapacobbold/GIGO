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
import "./OverviewPage.css";

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
    <div className={`app-container ${isDarkMode ? "dark-mode" : " "}`}>
      <Sidebar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        activePage="overview"
      />
      <TopBar />
      <div className="main-content">
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
          {/* eco impact */}
          <div className="impact-container">
            <div className="impact-content">
              <div className="impact-text">
                <h2 className="impact-title">Our Environmental Impact</h2>
                <p>
                  Every action we take today shapes our planet's tomorrow.
                  Through sustainable waste management practices, we're helping
                  to preserve natural resources, reduce pollution, and create a
                  healthier environment for all.
                </p>
                <ul className="impact-list">
                  <li>Reduced landfill waste by over 10,000 tons annually</li>
                  <li>
                    Decreased carbon emissions through efficient collection
                    routes
                  </li>
                  <li>
                    Conserved natural resources through comprehensive recycling
                    programs
                  </li>
                  <li>
                    Prevented harmful chemicals from entering soil and water
                    systems
                  </li>
                </ul>
              </div>

              <div className="impact-visual">
                <div className="impact-chart">
                  <div className="chart-bar">
                    <div className="bar-fill" style={{ height: "75%" }}>
                      <span className="bar-label">75%</span>
                    </div>
                    <span className="bar-title">Recycling Rate</span>
                  </div>

                  <div className="chart-bar">
                    <div className="bar-fill" style={{ height: "60%" }}>
                      <span className="bar-label">60%</span>
                    </div>
                    <span className="bar-title">Carbon Reduction</span>
                  </div>

                  <div className="chart-bar">
                    <div className="bar-fill" style={{ height: "85%" }}>
                      <span className="bar-label">85%</span>
                    </div>
                    <span className="bar-title">Waste Diversion</span>
                  </div>

                  <div className="chart-bar">
                    <div className="bar-fill" style={{ height: "90%" }}>
                      <span className="bar-label">90%</span>
                    </div>
                    <span className="bar-title">Customer Satisfaction</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* misson statement */}
          <div className="mission-container">
            <div className="mission-content">
              <h2 className="mission-title">Growing a Greener Tomorrow</h2>

              <div className="mission-text">
                <p>
                  At Garbage In Garbage Out, we believe that every small action
                  contributes to a sustainable future. Just as a single seedling
                  can grow into a mighty tree, our commitment to responsible
                  waste management is creating lasting positive change for our
                  environment and communities.
                </p>
              </div>

              <div className="mission-stats">
                <div className="stat-item">
                  <span className="stat-number">10K+</span>
                  <span className="stat-label">Tons of Waste Recycled</span>
                </div>

                <div className="stat-item">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Communities Served</span>
                </div>

                <div className="stat-item">
                  <span className="stat-number">85%</span>
                  <span className="stat-label">
                    Waste Diverted from Landfills
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* cta banner */}
          <div className="cta-container">
            <div className="cta-content">
              <h2 className="cta-title">Join Us in Making a Difference</h2>
              <p className="cta-text">
                Every sustainable choice matters. Partner with us to create a
                cleaner, greener future for generations to come.
              </p>
              <div className="cta-buttons">
                <a href="#contact" className="cta-button primary">
                  Get Started
                </a>
                <a href="#learn-more" className="cta-button secondary">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
