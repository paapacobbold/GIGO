"use client";
import TopBar from "../../components/TopBar/TopBar";
import Sidebar from "../../components/sidebar/sidebar";
import { useState } from "react";
import "./RecyclingPage.css";

const Recycling = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeCategory, setActiveCategory] = useState("general");

  const categories = [
    { id: "general", name: "General Tips", icon: "recycle" },
    { id: "plastic", name: "Plastic", icon: "bottle" },
    { id: "paper", name: "Paper", icon: "paper" },
    { id: "glass", name: "Glass", icon: "glass" },
    { id: "metal", name: "Metal", icon: "can" },
    { id: "electronic", name: "Electronics", icon: "device" },
  ];

  const tips = {
    general: [
      {
        title: "Rinse Containers",
        description:
          "Always rinse food containers before recycling to prevent contamination of other recyclables.",
        impact: "Reduces rejection rates at recycling facilities by up to 25%.",
      },
      {
        title: "Check Local Guidelines",
        description:
          "Recycling rules vary by location. Check your local recycling program's guidelines to ensure you're recycling correctly.",
        impact: "Improves recycling efficiency and reduces processing costs.",
      },
      {
        title: "Flatten Cardboard Boxes",
        description:
          "Break down and flatten cardboard boxes to save space in recycling bins and trucks.",
        impact:
          "Allows for more efficient transportation, reducing carbon emissions.",
      },
      {
        title: "Remove Plastic Film",
        description:
          "Remove plastic film and wrapping from paper products before recycling.",
        impact: "Prevents contamination in paper recycling streams.",
      },
    ],
    plastic: [
      {
        title: "Check the Number",
        description:
          "Look for the recycling number (1-7) inside the triangle symbol on plastic items. Not all numbers are accepted everywhere.",
        impact:
          "Plastics #1 (PET) and #2 (HDPE) are the most widely accepted and have the highest recycling rates.",
      },
      {
        title: "Remove Caps",
        description:
          "Remove caps from plastic bottles unless your local program specifically accepts attached caps.",
        impact:
          "Different plastics melt at different temperatures, so separation improves recycling quality.",
      },
      {
        title: "No Plastic Bags",
        description:
          "Don't put plastic bags in regular recycling. Return them to grocery stores with plastic bag recycling programs.",
        impact:
          "Plastic bags can jam sorting machinery, causing costly delays and repairs.",
      },
      {
        title: "Avoid Black Plastic",
        description:
          "Black plastic is difficult to recycle because sorting machines can't detect it easily.",
        impact:
          "Choosing clear or light-colored plastics increases the chance of successful recycling.",
      },
    ],
    paper: [
      {
        title: "Keep Paper Dry",
        description:
          "Wet paper can't be recycled effectively and can contaminate other recyclables.",
        impact:
          "Paper can be recycled 5-7 times before fibers become too short for reuse.",
      },
      {
        title: "Shredded Paper",
        description:
          "Place shredded paper in a paper bag before recycling to prevent it from scattering.",
        impact:
          "Shredded paper has shorter fibers but can still be recycled into products like toilet paper.",
      },
      {
        title: "Remove Tape and Staples",
        description:
          "When possible, remove tape, staples, and other non-paper materials from paper products.",
        impact:
          "Reduces contamination and improves the quality of recycled paper products.",
      },
      {
        title: "No Greasy Paper",
        description:
          "Pizza boxes and other paper items soiled with food or grease cannot be recycled.",
        impact:
          "Food residue can contaminate entire batches of recycled paper.",
      },
    ],
    glass: [
      {
        title: "Sort by Color",
        description:
          "If required in your area, sort glass by color (clear, green, brown) for more efficient recycling.",
        impact:
          "Glass can be recycled indefinitely without loss of quality or purity.",
      },
      {
        title: "Remove Lids and Corks",
        description:
          "Remove metal lids, plastic caps, and corks from glass containers before recycling.",
        impact:
          "Improves the purity of recycled glass and prevents contamination.",
      },
      {
        title: "No Drinking Glasses",
        description:
          "Drinking glasses, window glass, and mirrors typically can't go in regular recycling.",
        impact:
          "These items have different melting points and chemical compositions than container glass.",
      },
      {
        title: "No Broken Glass",
        description:
          "Don't put broken glass in recycling bins as it can be dangerous for workers.",
        impact: "Worker safety is a priority at recycling facilities.",
      },
    ],
    metal: [
      {
        title: "Crush Aluminum Cans",
        description:
          "Crush aluminum cans to save space in recycling bins, but don't flatten steel cans.",
        impact:
          "Recycling aluminum uses 95% less energy than producing new aluminum.",
      },
      {
        title: "Empty Aerosol Cans",
        description:
          "Make sure aerosol cans are completely empty before recycling.",
        impact:
          "Partially full aerosol cans can be hazardous during the recycling process.",
      },
      {
        title: "Clean Metal Containers",
        description:
          "Rinse food residue from metal cans and containers before recycling.",
        impact:
          "Clean metal has higher value and is more likely to be successfully recycled.",
      },
      {
        title: "Remove Paper Labels",
        description:
          "When possible, remove paper labels from metal cans before recycling.",
        impact:
          "Improves the purity of recycled metal and reduces processing steps.",
      },
    ],
    electronic: [
      {
        title: "Find E-Waste Centers",
        description:
          "Take electronics to designated e-waste recycling centers rather than putting them in regular recycling.",
        impact:
          "Prevents toxic materials from entering landfills and allows recovery of valuable metals.",
      },
      {
        title: "Wipe Personal Data",
        description:
          "Before recycling computers and phones, wipe all personal data from devices.",
        impact:
          "Protects your personal information while allowing valuable materials to be recycled.",
      },
      {
        title: "Keep Batteries Separate",
        description:
          "Remove batteries from electronics before recycling, as they need special handling.",
        impact:
          "Prevents fires at recycling facilities and allows for proper battery recycling.",
      },
      {
        title: "Check Manufacturer Programs",
        description:
          "Many electronics manufacturers offer take-back or recycling programs for their products.",
        impact:
          "Manufacturer programs often have higher standards for responsible recycling.",
      },
    ],
  };

  const renderIcon = (iconName) => {
    switch (iconName) {
      case "recycle":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 19L12 14M17 19L12 14M12 14V9M21 10C21 10 19.5 6 16 6C12.5 6 11 10 11 10M3 10C3 10 4.5 6 8 6C11.5 6 13 10 13 10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "bottle":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 2H16M9 2V4C9 4.94 9.5 6 11 7C12.5 8 13 9.06 13 10V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V10C11 9.06 11.5 8 13 7C14.5 6 15 4.94 15 4V2"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "paper":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 7H17M7 12H17M7 17H13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "glass":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 2L16 2M8.5 11H15.5M6 22H18M7 2V11.5C7 14.5 5 16 5 19C5 20.1046 5.89543 21 7 21M17 2V11.5C17 14.5 19 16 19 19C19 20.1046 18.1046 21 17 21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "can":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 20.01V4C6 2.89543 6.89543 2 8 2H16C17.1046 2 18 2.89543 18 4V20.01M6 8H18M6 12H18M6 16H18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "device":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 15.5V17.5M14 15.5V17.5M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V16C21 17.1046 20.1046 18 19 18H5C3.89543 18 3 17.1046 3 16V5Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 21H17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`app-container ${isDarkMode ? "dark-mode" : ""}`}>
      <Sidebar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        activePage="recycling-tips"
      />
      <TopBar />
      <div className="recycling-container">
        <div className="content2">
          <div className="recycling-header">
            <h1>Recycling Tips</h1>
            <p>
              Small changes in your recycling habits can make a big difference
              for our planet.
            </p>
          </div>

          <div className="category-tabs">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-tab ${
                  activeCategory === category.id ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="category-icon">
                  {renderIcon(category.icon)}
                </span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          <div className="tips-container">
            <div className="tips-grid">
              {tips[activeCategory].map((tip, index) => (
                <div className="tip-card" key={index}>
                  <h3>{tip.title}</h3>
                  <p>{tip.description}</p>
                  <div className="tip-impact">
                    <span className="impact-label">Impact:</span> {tip.impact}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="recycling-facts">
            <h2>Did You Know?</h2>
            <div className="facts-grid">
              <div className="fact-card">
                <div className="fact-icon plastic-icon">
                  {renderIcon("bottle")}
                </div>
                <div className="fact-content">
                  <h3>Plastic</h3>
                  <p>
                    It takes up to 500 years for plastic to decompose in
                    landfills.
                  </p>
                </div>
              </div>
              <div className="fact-card">
                <div className="fact-icon paper-icon">
                  {renderIcon("paper")}
                </div>
                <div className="fact-content">
                  <h3>Paper</h3>
                  <p>
                    Recycling one ton of paper saves 17 trees and 7,000 gallons
                    of water.
                  </p>
                </div>
              </div>
              <div className="fact-card">
                <div className="fact-icon metal-icon">{renderIcon("can")}</div>
                <div className="fact-content">
                  <h3>Aluminum</h3>
                  <p>
                    Recycling aluminum uses 95% less energy than producing new
                    aluminum.
                  </p>
                </div>
              </div>
              <div className="fact-card">
                <div className="fact-icon glass-icon">
                  {renderIcon("glass")}
                </div>
                <div className="fact-content">
                  <h3>Glass</h3>
                  <p>
                    Glass can be recycled endlessly without any loss in quality
                    or purity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recycling;
