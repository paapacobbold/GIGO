import { useState } from "react";
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
      "We deliver sustainable and eco-friendly waste management solutions, helping communities reduce pollution and maintain a cleaner, healthier environment for future generations. Our commitment to responsible waste disposal ensures a greener planet.",
  },
  {
    image: liHaoImage,
    alt: "Garbage Collection",
    description:
      "Our reliable garbage collection services keep your surroundings clean and waste-free. We ensure timely pickups, proper disposal, and adherence to environmental regulations, promoting a hygienic and healthier living and working environment for all.",
  },
  {
    image: towfiquImage,
    alt: "Recycling Services",
    description:
      "Recycling is at the heart of what we do. We transform waste into valuable resources, reducing landfill waste and conserving natural materials. Join us in making sustainable choices that contribute to a circular economy and a cleaner future.",
  },
  {
    image: zibikImage,
    alt: "Additional Services",
    description:
      "Beyond waste management, we offer specialized services, including hazardous waste disposal, composting solutions, and bulk waste removal. Our goal is to provide innovative solutions tailored to your specific needs while ensuring environmental responsibility.",
  },
];

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav>
        <div className="logo">
          <div className="logo-circle">
            <img
              src={logoIcon || "/placeholder.svg"}
              alt="logo"
              width="40"
              height="40"
            />
          </div>
          <span>GIGO</span>
        </div>

        <div className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
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
        <img src={plantImage || "/placeholder.svg"} alt="A plant image" />
      </div>

      {/* Working Process Section */}
      <div className="working-process">
        <h1>Our Working Process</h1>
        <div className="process-steps">
          {processSteps.map((step, index) => (
            <div key={index} className="process-step">
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
                src={service.image || "/placeholder.svg"}
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
          <img src={aboutImage || "/placeholder.svg"} alt="About Us" />
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
          <a href="/our-story" className="Our-storybtn">
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
      <a href="#" className="social-link" aria-label="Facebook">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
      <a href="#" className="social-link" aria-label="Twitter">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.9572 14.8821 3.28445C14.0247 3.61171 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
      <a href="#" className="social-link" aria-label="Instagram">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61991 14.1902 8.22773 13.4229 8.09406 12.5922C7.9604 11.7615 8.09206 10.9099 8.47032 10.1584C8.84858 9.40685 9.45418 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2648 8.52146 14.8717 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.5 6.5H17.51"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
      <a href="#" className="social-link" aria-label="LinkedIn">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 9H2V21H6V9Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
      <a href="#" className="social-link" aria-label="YouTube">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M22.54 6.42C22.4212 5.94541 22.1793 5.51057 21.8387 5.15941C21.498 4.80824 21.0708 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12 4 3.4 4.46C2.92922 4.59318 2.50197 4.84824 2.16134 5.19941C1.82071 5.55057 1.57878 5.98541 1.46 6.46C1.14521 8.20556 0.991235 9.97631 1 11.75C0.988687 13.537 1.14266 15.3213 1.46 17.08C1.57959 17.5398 1.82069 17.9581 2.15846 18.3016C2.49623 18.6451 2.91872 18.897 3.38 19.02C5.1 19.46 12 19.46 12 19.46C12 19.46 18.88 19.46 20.6 19.02C21.0708 18.8868 21.498 18.6318 21.8387 18.2806C22.1793 17.9294 22.4212 17.4946 22.54 17.02C22.8524 15.2756 23.0063 13.5059 23 11.73C23.0113 9.94303 22.8573 8.15877 22.54 6.4V6.42Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.75 15.02L15.5 11.75L9.75 8.48001V15.02Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
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

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setSubscribed(true);
      setEmail("");
      // Here you would typically send the email to your backend
      setTimeout(() => {
        setSubscribed(false);
      }, 3000);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
              <img
                src={logoIcon || "/placeholder.svg"}
                alt="Garbage In Garbage Out Logo"
                width="40"
                height="40"
              />
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 17L12 22L22 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <span className="logo-text">Garbage In Garbage Out</span>
            </div>
            <p className="brand-description">
              Providing innovative solutions for a sustainable future. We're
              committed to making a positive impact on our planet.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.9572 14.8821 3.28445C14.0247 3.61171 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61991 14.1902 8.22773 13.4229 8.09406 12.5922C7.9604 11.7615 8.09206 10.9099 8.47032 10.1584C8.84858 9.40685 9.45418 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2648 8.52146 14.8717 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.5 6.5H17.51"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 9H2V21H6V9Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="YouTube">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.54 6.42C22.4212 5.94541 22.1793 5.51057 21.8387 5.15941C21.498 4.80824 21.0708 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12 4 3.4 4.46C2.92922 4.59318 2.50197 4.84824 2.16134 5.19941C1.82071 5.55057 1.57878 5.98541 1.46 6.46C1.14521 8.20556 0.991235 9.97631 1 11.75C0.988687 13.537 1.14266 15.3213 1.46 17.08C1.57959 17.5398 1.82069 17.9581 2.15846 18.3016C2.49623 18.6451 2.91872 18.897 3.38 19.02C5.1 19.46 12 19.46 12 19.46C12 19.46 18.88 19.46 20.6 19.02C21.0708 18.8868 21.498 18.6318 21.8387 18.2806C22.1793 17.9294 22.4212 17.4946 22.54 17.02C22.8524 15.2756 23.0063 13.5059 23 11.73C23.0113 9.94303 22.8573 8.15877 22.54 6.4V6.42Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.75 15.02L15.5 11.75L9.75 8.48001V15.02Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-links-column">
              <h3>Company</h3>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Our Team</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">News</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="#">Consulting</a>
                </li>
                <li>
                  <a href="#">Implementation</a>
                </li>
                <li>
                  <a href="#">Training</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
                <li>
                  <a href="#">Maintenance</a>
                </li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h3>Resources</h3>
              <ul>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Guides</a>
                </li>
                <li>
                  <a href="#">Case Studies</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Documentation</a>
                </li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h3>Legal</h3>
              <ul>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
                <li>
                  <a href="#">Cookie Policy</a>
                </li>
                <li>
                  <a href="#">GDPR</a>
                </li>
                <li>
                  <a href="#">Accessibility</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-newsletter">
          <h3>Subscribe to our newsletter</h3>
          <p>Stay updated with our latest news and offers.</p>

          <form onSubmit={handleSubmit} className="newsletter-form">
            <div className="form-group">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe</button>
            </div>
            {subscribed && (
              <div className="success-message">Thank you for subscribing!</div>
            )}
          </form>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            &copy; {currentYear} GIGO. All rights reserved.
          </div>
          <div className="footer-bottom-links">
            <a href="#">Sitemap</a>
            <a href="#">Accessibility</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default LandingPage;
