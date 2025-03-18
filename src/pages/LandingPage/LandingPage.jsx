import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
// Import all images
import logoIcon from "../../assets/images/Logo Icon.svg";
import plantImage from "../../assets/images/picture.png";
import group4 from "../../assets/images/Group 4.png";
import group5 from "../../assets/images/Group 5.png";
import group6 from "../../assets/images/Group 6.png";
import group7 from "../../assets/images/Group 7.png";
import aboutImage from "../../assets/images/Frame_1618872167-removebg-preview.png";
import jasminImage from "../../assets/images/jas-min-DR2jtLy8Fe4-unsplash.jpg";
import liHaoImage from "../../assets/images/li-hao-b25tsR8dBh0-unsplash.jpg";
import towfiquImage from "../../assets/images/towfiqu-barbhuiya-ho-p7qLBewk-unsplash.jpg";
import zibikImage from "../../assets/images/zibik-iR4mClggzEU-unsplash.jpg";

// Service data with imported images
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
const serviceData = [
  {
    image: jasminImage,
    alt: "Environmental Services",
    description:
      "We are committed to providing environmentally friendly waste management solutions...",
  },
  {
    image: liHaoImage,
    alt: "Garbage Collection",
    description: "Keeping your space clean and waste-free is our priority!...",
  },
  {
    image: towfiquImage,
    alt: "Recycling Services",
    description: "Recycling is at the heart of what we do...",
  },
  {
    image: zibikImage,
    alt: "Additional Services",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit...",
  },
];
const LandingPage = () => {
  return (
    <>
      {/* Navigation Bar */}
      <nav>
        <div className="logo">
          <div className="logo-circle">
            <img src={logoIcon} alt="logo" width="40" height="40" />
          </div>
          <span>GIGO</span>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <Link
                to="/login"
                className="btn-primary"
                style={{ color: "white" }}
              >
                Log In
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Home Image Section */}
      <div className="home-image">
        <img src={plantImage} alt="A plant image" />
      </div>

      {/* Working Process Section */}
      <div className="working-process">
        <h1>Our Working Process</h1>
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

      {/* Video Section */}
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/3JZ_D3ELwOQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Services Section */}
      <div className="our-services">
        <h1>Our Services</h1>
        <div className="os-col">
          {serviceData.map((service, index) => (
            <div className="os-row" key={index}>
              <img
                src={service.image}
                alt={service.alt}
                width="500"
                height="300"
              />
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* About Us Section */}
      <div className="about-us">
        <div className="aboutus-image">
          <img src={aboutImage} alt="About Us" />
        </div>
        <div className="about-us-texts">
          <h1 className="heading">About Us</h1>
          <div className="underline1" />
          <p className="sub">
            Trusted Experts in Waste <br /> Management & <br /> Recycling
          </p>
          <div className="underline2" />
          <p className="main">
            We are a team of dedicated professionals committed to providing
            sustainable waste management solutions for a cleaner and greener
            future. Our mission is to promote responsible waste disposal
            practices that protect the environment and preserve natural
            resources. With years of experience in the industry, we offer
            reliable and efficient services to meet the needs of households,
            businesses, and industrial facilities. Partner with us to make a
            positive impact on the planet and create a healthier community for
            generations to come.
          </p>
          <a href="/our-story" className="btn-primary">
            Our Story
          </a>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="contact-form">
        <ContactDetails />
        <ContactForm />
      </div>

      {/* Footer Section */}
      <Footer />
    </>
  );
};

// Separate components for better organization
const ContactDetails = () => (
  <div className="contact-details">
    <h2>Contact Us</h2>
    <p className="sub-contact-detail" style={{ marginBottom: "40px" }}>
      Take a step towards less waste today!
    </p>
    <p>TEL: (99) 999 998 777</p>
    <p>EMAIL: info@gigo.com</p>
    <p>ADDRESS: 7864 2ND ST NJ, ANYWHERE</p>
    <div className="icons">
      <a href="#">
        <i className="fa-brands fa-facebook-f"></i>
      </a>
      <a href="#">
        <i className="fa-brands fa-twitter"></i>
      </a>
      <a href="#">
        <i className="fa-brands fa-google"></i>
      </a>
      <a href="#">
        <i className="fa-brands fa-instagram"></i>
      </a>
    </div>
  </div>
);

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <div className="form-section">
      <h2>GET IN TOUCH</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Your Name" required />
        <input type="email" placeholder="Enter Your Email" required />
        <textarea rows="8" placeholder="Message" required />
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
    </div>
  );
};

const Footer = () => (
  <div className="footer">
    <div className="first-footer">
      <img src={logoIcon} alt="Company Logo" width="50" height="50" />
      <div className="email-box">
        <i className="fa-solid fa-envelope"></i>
        <input
          type="email"
          placeholder=" Enter your email to get the latest news..."
        />
        <button>Subscribe</button>
      </div>
      <hr />
    </div>
    <div className="second-footer">
      {/* Footer content */}
      {/* Add footer columns here */}
    </div>
    <div className="third-footer">
      <p>CompanyName @ {new Date().getFullYear()}. All rights reserved</p>
    </div>
  </div>
);

export default LandingPage;
