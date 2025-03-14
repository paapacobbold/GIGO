import { useState } from "react";
import { Bell, Search } from "lucide-react";
import Sidebar from "../../components/sidebar/sidebar";
import "./SubscriptionPage.css";
// import logoIcon from "../../assets/images/Logo Icon.svg";

export default function Subscription() {
  const pricingTiers = [
    {
      name: "Basic",
      price: "$14.99",
      features: [
        { name: "Customizable Dashboards", included: true },
        { name: "Advanced Analytics & Reporting", included: true },
        { name: "24/7 Customer Support", included: true },
        { name: "Unlimited Storage", included: false },
        { name: "Team Collaboration Tools", included: false },
        { name: "Priority Security Updates", included: false },
        { name: "API Access & Integrations", included: false },
      ],
      buttonClass: "button-outline",
    },
    {
      name: "Standard",
      price: "$49.99",
      features: [
        { name: "Customizable Dashboards", included: true },
        { name: "Advanced Analytics & Reporting", included: true },
        { name: "24/7 Customer Support", included: true },
        { name: "Unlimited Storage", included: true },
        { name: "Team Collaboration Tools", included: true },
        { name: "Priority Security Updates", included: false },
        { name: "API Access & Integrations", included: false },
      ],
      buttonClass: "button-outline",
    },
    {
      name: "Premium",
      price: "$89.99",
      features: [
        { name: "Customizable Dashboards", included: true },
        { name: "Advanced Analytics & Reporting", included: true },
        { name: "24/7 Customer Support", included: true },
        { name: "Unlimited Storage", included: true },
        { name: "Team Collaboration Tools", included: true },
        { name: "Priority Security Updates", included: true },
        { name: "API Access & Integrations", included: true },
      ],
      buttonClass: "button-filled",
    },
  ];

  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`app-container ${isDarkMode ? "dark-mode" : ""}`}>
      <Sidebar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        activePage="subscription"
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
        <main className="content">
          <div className="pricing-table">
            {pricingTiers.map((tier, index) => (
              <div key={index} className="pricing-card">
                <h3 className="tier-name">{tier.name}</h3>
                <p className="monthly-charge">Monthly Charge</p>
                <p className="price">{tier.price}</p>
                <hr />
                <ul className="features">
                  {tier.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className={feature.included ? "included" : "not-included"}
                    >
                      {feature.name}
                    </li>
                  ))}
                </ul>
                <hr />
                <button className={tier.buttonClass}>Get Started</button>
                <p className="trial-text">Start Your 30 Day Free Trial</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
