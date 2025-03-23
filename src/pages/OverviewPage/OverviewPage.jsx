"use client";

import { useState, useEffect, useRef } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import "./OverviewPage.css";
// import logoIcon from "../../assets/images/Logo Icon.svg";
import plantImage from "../../assets/images/picture.png";
import beach from "../../assets/images/beach.jpg";
import group4 from "../../assets/images/Group 4.png";
import group5 from "../../assets/images/Group 5.png";
import group6 from "../../assets/images/Group 6.png";
import group7 from "../../assets/images/Group 7.png";
import TopBar from "../../components/TopBar/TopBar";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Banner carousel images - add more images as needed
const carouselImages = [
  {
    src: plantImage,
    alt: "Hands holding plant with soil",
    title: "Growing a Sustainable Future",
    subtitle: "Join us in our mission to create a cleaner, greener planet",
  },
  {
    src: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b",
    alt: "Recycling bins",
    title: "Recycle Today for a Better Tomorrow",
    subtitle: "Small actions lead to big environmental impacts",
  },
  {
    src: beach,
    alt: "Clean beach",
    title: "Preserving Our Natural Resources",
    subtitle:
      "Working together to protect our environment for future generations",
  },
];

// Eco facts for the rotating facts component
const ecoFacts = [
  "Recycling one aluminum can saves enough energy to run a TV for three hours.",
  "The average person generates over 4 pounds of trash every day.",
  "About 80% of what Americans throw away is recyclable, yet our recycling rate is only 28%.",
  "Glass bottles take 4,000 years to decompose in a landfill.",
  "Americans throw away enough plastic bottles each year to circle the Earth four times.",
  "Every ton of paper recycled saves 17 trees, 7,000 gallons of water, and 380 gallons of oil.",
  "Did you know? Recycling plastic bottles can help reduce ocean pollution and protect marine life.",
  "Recycling one ton of cardboard saves over 9 cubic yards of landfill space.",
  "Placing recyclables in the correct bin prevents contamination and makes the recycling process more efficient.",
  "Food waste in landfills generates methane, a greenhouse gas more potent than CO2.",
  "Electronic waste (e-waste) is the fastest-growing waste stream in the world. Always recycle old electronics properly!",
  "Composting food scraps can reduce household waste by up to 30%.",
  "It takes 500 years for a plastic bag to degrade in a landfill. Choose reusable bags instead!",
  "Switching to reusable water bottles can save 167 plastic bottles per person per year.",
  "Recycling a single glass bottle saves enough energy to power a light bulb for four hours.",
  "More than 50% of recyclable materials end up in landfills due to improper disposal.",
  "Each year, over 1 trillion plastic bags are used worldwide. Reduce plastic waste by using cloth bags!",
];

export default function Overview() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentFact, setCurrentFact] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const processRef = useRef(null);
  const impactRef = useRef(null);
  const missionRef = useRef(null);
  const ctaRef = useRef(null);

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

  // Carousel auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === carouselImages.length - 1 ? 0 : prev + 1
      );
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Eco facts rotation
  useEffect(() => {
    const factInterval = setInterval(() => {
      setCurrentFact((prev) => (prev === ecoFacts.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(factInterval);
  }, []);

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = [
      processRef.current,
      impactRef.current,
      missionRef.current,
      ctaRef.current,
    ];

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // Handle carousel navigation
  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === carouselImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );
  };

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
          {/* Banner Carousel */}
          <div className="banner-container">
            <div className="carousel">
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className={`carousel-slide ${
                    index === currentSlide ? "active" : ""
                  }`}
                  style={{
                    transform: `translateX(${(index - currentSlide) * 100}%)`,
                  }}
                >
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="banner-image"
                  />
                  <div className="carousel-caption">
                    <h2 className="slide-title">{image.title}</h2>
                    <p className="slide-subtitle">{image.subtitle}</p>
                  </div>
                </div>
              ))}

              <button
                className="carousel-control prev"
                onClick={prevSlide}
                aria-label="Previous slide"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                className="carousel-control next"
                onClick={nextSlide}
                aria-label="Next slide"
              >
                <ChevronRight size={24} />
              </button>

              <div className="carousel-indicators">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${
                      index === currentSlide ? "active" : ""
                    }`}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Eco Facts Ticker */}
          <div className="eco-facts-ticker">
            <div className="eco-fact-icon">
              <div className="eco-icon-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2v8"></path>
                  <path d="M12 18v4"></path>
                  <path d="M4.93 10.93l1.41 1.41"></path>
                  <path d="M17.66 17.66l1.41 1.41"></path>
                  <path d="M2 12h4"></path>
                  <path d="M18 12h4"></path>
                  <path d="M6.34 17.66l-1.41 1.41"></path>
                  <path d="M19.07 10.93l-1.41 1.41"></path>
                </svg>
              </div>
            </div>
            <div className="eco-fact-content">
              <div className="eco-fact-label">Did You Know?</div>
              <div className="eco-fact-text">
                {ecoFacts.map((fact, index) => (
                  <div
                    key={index}
                    className={`eco-fact ${
                      index === currentFact ? "active" : ""
                    }`}
                  >
                    {fact}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Working Process Section */}
          <div
            id="process-section"
            ref={processRef}
            className={`process-section ${
              isVisible["process-section"] ? "animate-in" : ""
            }`}
          >
            <h2 className="section-title">Our working process</h2>

            <div className="process-steps">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="process-step"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="icon-circle">
                    <img
                      src={step.icon || "/placeholder.svg"}
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
          <div
            id="impact-section"
            ref={impactRef}
            className={`impact-container ${
              isVisible["impact-section"] ? "animate-in" : ""
            }`}
          >
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
          <div
            id="mission-section"
            ref={missionRef}
            className={`mission-container ${
              isVisible["mission-section"] ? "animate-in" : ""
            }`}
          >
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
                  <span className="stat-number count-up">10K+</span>
                  <span className="stat-label">Tons of Waste Recycled</span>
                </div>

                <div className="stat-item">
                  <span className="stat-number count-up">500+</span>
                  <span className="stat-label">Communities Served</span>
                </div>

                <div className="stat-item">
                  <span className="stat-number count-up">85%</span>
                  <span className="stat-label">
                    Waste Diverted from Landfills
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* cta banner */}
          <div
            id="cta-section"
            ref={ctaRef}
            className={`cta-container ${
              isVisible["cta-section"] ? "animate-in" : ""
            }`}
          >
            <div className="cta-content">
              <h2 className="cta-title">Join Us in Making a Difference</h2>
              <p className="cta-text">
                Every sustainable choice matters. Partner with us to create a
                cleaner, greener future for generations to come.
              </p>
              {/* <div className="cta-buttons">
                <a href="#contact" className="cta-button primary">
                  Get Started
                </a>
                <a href="#learn-more" className="cta-button secondary">
                  Learn More
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
