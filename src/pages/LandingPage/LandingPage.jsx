import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
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
    title: "Smart Pickup",
    description:
      "We revolutionize waste collection with our smart bin technology and on-demand pickup services. Our eco-friendly containers are designed for optimal waste separation, making recycling effortless for you.",
  },
  {
    icon: group5,
    title: "Efficient Collection",
    description:
      "Our AI-optimized routes ensure timely waste collection while minimizing carbon emissions. Our professional team uses state-of-the-art equipment to safely handle all types of waste with minimal environmental impact.",
  },
  {
    icon: group6,
    title: "Advanced Recycling",
    description:
      "Transform waste into valuable resources through our cutting-edge recycling processes. We recover up to 90% of materials, significantly reducing landfill waste and creating a circular economy that benefits our planet.",
  },
  {
    icon: group7,
    title: "Environmental Restoration",
    description:
      "Beyond waste management, we actively participate in community cleanup initiatives and habitat restoration projects. Our comprehensive approach ensures a cleaner environment and healthier ecosystems for future generations.",
  },
];

const serviceData = [
  {
    image: jasminImage,
    alt: "Environmental Services",
    title: "Sustainable Environmental Solutions",
    description:
      "Our comprehensive environmental services combine innovation with sustainability to create measurable positive impact. We implement cutting-edge technologies that reduce pollution, conserve resources, and protect biodiversity.",
  },
  {
    image: liHaoImage,
    alt: "Garbage Collection",
    title: "Smart Waste Collection",
    description:
      "Experience waste management reimagined with our IoT-enabled collection system. Real-time monitoring, predictive analytics, and route optimization ensure timely service while reducing our carbon footprint by up to 30%.",
  },
  {
    image: towfiquImage,
    alt: "Recycling Services",
    title: "Advanced Recycling Programs",
    description:
      "Our state-of-the-art recycling facilities process multiple waste streams with 90% recovery rates. We transform waste into valuable resources through mechanical and chemical recycling processes, supporting a truly circular economy.",
  },
  {
    image: zibikImage,
    alt: "Additional Services",
    title: "Specialized Waste Solutions",
    description:
      "From hazardous materials to electronic waste, our specialized services ensure safe handling and environmentally responsible disposal. We provide tailored solutions for residential, commercial, and industrial clients.",
  },
];

// Testimonials data
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Residential Customer",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    text: "GIGO has completely transformed how our family handles waste. Their app makes scheduling pickups so easy, and their recycling program has helped us reduce our landfill waste by over 70%!",
  },
  {
    name: "Michael Chen",
    role: "Business Owner",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    text: "As a restaurant owner, proper waste management is crucial. GIGO's commercial services have not only improved our sustainability practices but also saved us money. Their team is professional and reliable.",
  },
  {
    name: "Emily Rodriguez",
    role: "Community Organizer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Working with GIGO on our neighborhood cleanup initiative was incredible. Their expertise and resources helped us remove over 2 tons of waste and establish ongoing recycling programs.",
  },
];

// Stats data
const statsData = [
  { value: "10M+", label: "Tons of Waste Recycled" },
  { value: "30%", label: "Carbon Footprint Reduction" },
  { value: "500+", label: "Communities Served" },
  { value: "95%", label: "Customer Satisfaction" },
];

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const processRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const statsRef = useRef(null);

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
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
      servicesRef.current,
      aboutRef.current,
      statsRef.current,
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

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <div className="logo-circle">
            <img
              src={logoIcon || "/placeholder.svg"}
              alt="logo"
              width="40"
              height="40"
              className="logo-spin"
            />
          </div>
          <span className="logo-text">GIGO</span>
        </div>

        <div
          className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <a href="#" className="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="nav-link">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
            <li>
              <Link to="/login" className="btn-primary login-btn">
                Log In
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="text-gradient">Sustainable Solutions</span> for a
            Cleaner Tomorrow
          </h1>
          <p className="hero-subtitle">
            Revolutionizing waste management with innovative technology and
            eco-friendly practices
          </p>
          <div className="hero-buttons">
            <Link to="/services" className="btn-primary">
              Explore Services
            </Link>
            <a href="#contact" className="btn-secondary">
              Get Started
            </a>
          </div>
        </div>
        <div className="hero-image-container">
          <img
            src={plantImage || "/placeholder.svg"}
            alt="Sustainable future"
            className="hero-image"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div
        id="stats-section"
        ref={statsRef}
        className={`stats-section ${
          isVisible["stats-section"] ? "animate-in" : ""
        }`}
      >
        <div className="stats-container">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="stat-item"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Working Process Section */}
      <div
        id="process-section"
        ref={processRef}
        className={`working-process ${
          isVisible["process-section"] ? "animate-in" : ""
        }`}
      >
        <h2 className="section-title">Our Innovative Process</h2>
        <p className="section-subtitle">
          Transforming waste management through technology and sustainability
        </p>

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

      {/* Video Section with Caption */}
      <div className="video-section">
        <div className="video-content">
          <h2 className="video-title">See Our Impact in Action</h2>
          <p className="video-description">
            Discover how our innovative approach to waste management is creating
            a cleaner, more sustainable future for communities worldwide.
          </p>
        </div>
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
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="testimonials-container">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-card ${
                index === activeTestimonial ? "active" : ""
              }`}
              style={{
                transform: `translateX(${(index - activeTestimonial) * 100}%)`,
              }}
            >
              <div className="testimonial-content">
                <div className="quote-icon">❝</div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="author-image"
                  />
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-role">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === activeTestimonial ? "active" : ""}`}
              onClick={() => setActiveTestimonial(index)}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div
        id="services"
        ref={servicesRef}
        className={`our-services ${isVisible["services"] ? "animate-in" : ""}`}
      >
        <h2 className="section-title">Our Premium Services</h2>
        <p className="section-subtitle">
          Comprehensive waste management solutions for a sustainable future
        </p>

        <div className="services-grid">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className="service-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="service-image-container">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.alt}
                  className="service-image"
                />
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <a href="#" className="service-link">
                  Learn more <span className="arrow">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About Us Section */}
      <div
        id="about"
        ref={aboutRef}
        className={`about-us ${isVisible["about"] ? "animate-in" : ""}`}
      >
        <div className="aboutus-image">
          <img
            src={aboutImage || "/placeholder.svg"}
            alt="About Us"
            className="about-image"
          />
        </div>
        <div className="about-us-texts">
          <span className="section-tag">Our Story</span>
          <h2 className="section-title">About Us</h2>
          <div className="underline1"></div>
          <p className="about-tagline">
            Pioneering Sustainable Waste Management & Environmental Innovation
          </p>
          <div className="underline2"></div>
          <p className="about-description">
            Founded with a vision to revolutionize waste management, GIGO has
            grown from a small local initiative to a leading environmental
            solutions provider. Our journey began with a simple mission: to
            create a cleaner world through innovative waste management.
            <br />
            <br />
            Today, we combine cutting-edge technology with sustainable practices
            to offer comprehensive waste solutions that benefit both communities
            and the planet. Our team of environmental experts, engineers, and
            sustainability advocates work tirelessly to develop new approaches
            that maximize resource recovery and minimize environmental impact.
            <br />
            <br />
            We believe that proper waste management is not just about
            disposal—it's about creating a circular economy where materials are
            reused, recycled, and repurposed. Join us in our mission to
            transform waste challenges into opportunities for environmental
            stewardship.
          </p>
          <a href="/our-story" className="btn-primary about-btn">
            Discover Our Journey
          </a>
        </div>
      </div>

      {/* Contact Form Section */}
      <div id="contact" className="contact-section">
        <div className="contact-container">
          <ContactDetails />
          <ContactForm />
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </>
  );
};

// Separate components for better organization
const ContactDetails = () => (
  <div className="contact-details">
    <span className="section-tag">Get In Touch</span>
    <h2 className="contact-title">Contact Us</h2>
    <p className="contact-subtitle">
      Ready to transform your waste management approach? Reach out today and
      take the first step toward a more sustainable future.
    </p>

    <div className="contact-info">
      <div className="contact-item">
        <div className="contact-icon">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>
          <h4>Call Us</h4>
          <p>(99) 999 998 777</p>
        </div>
      </div>

      <div className="contact-item">
        <div className="contact-icon">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 6l-10 7L2 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>
          <h4>Email Us</h4>
          <p>info@gigo.com</p>
        </div>
      </div>

      <div className="contact-item">
        <div className="contact-icon">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="12"
              cy="10"
              r="3"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>
          <h4>Visit Us</h4>
          <p>7864 2ND ST NJ, ANYWHERE</p>
        </div>
      </div>
    </div>

    <div className="social-links">
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
    </div>
  </div>
);

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    submitted: false,
    loading: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState((prev) => ({ ...prev, loading: true }));

    // Simulate form submission
    setTimeout(() => {
      setFormState((prev) => ({
        ...prev,
        submitted: true,
        loading: false,
        name: "",
        email: "",
        message: "",
      }));

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormState((prev) => ({ ...prev, submitted: false }));
      }, 5000);
    }, 1500);
  };

  return (
    <div className="form-section">
      <h2 className="form-title">Send Us a Message</h2>
      {formState.submitted ? (
        <div className="success-message">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="success-icon"
          >
            <path
              d="M22 11.08V12a10 10 0 11-5.93-9.14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 4L12 14.01l-3-3"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h3>Message Sent Successfully!</h3>
          <p>Thank you for reaching out. We'll get back to you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              rows="6"
              placeholder="How can we help you?"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className={`send-button ${formState.loading ? "loading" : ""}`}
            disabled={formState.loading}
          >
            {formState.loading ? (
              <>
                <span className="spinner"></span>
                <span>Sending...</span>
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      )}
    </div>
  );
};

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setLoading(true);

      // Simulate API call
      setTimeout(() => {
        setSubscribed(true);
        setEmail("");
        setLoading(false);

        // Reset after 5 seconds
        setTimeout(() => {
          setSubscribed(false);
        }, 5000);
      }, 1500);
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
                className="footer-logo-img"
              />
              <span className="logo-text-Gigo">Garbage In Garbage Out</span>
            </div>
            <p className="brand-description">
              Leading the way in sustainable waste management solutions. Our
              innovative approach combines technology and environmental
              responsibility to create a cleaner, greener future.
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
                  <a href="#">Residential Pickup</a>
                </li>
                <li>
                  <a href="#">Commercial Solutions</a>
                </li>
                <li>
                  <a href="#">Recycling Programs</a>
                </li>
                <li>
                  <a href="#">Waste Audits</a>
                </li>
                <li>
                  <a href="#">Special Disposal</a>
                </li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h3>Resources</h3>
              <ul>
                <li>
                  <a href="#">Sustainability Blog</a>
                </li>
                <li>
                  <a href="#">Recycling Guide</a>
                </li>
                <li>
                  <a href="#">Case Studies</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Educational Materials</a>
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
                  <a href="#">Environmental Compliance</a>
                </li>
                <li>
                  <a href="#">Accessibility</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-newsletter">
          <h3>Join Our Sustainability Movement</h3>
          <p>
            Subscribe to receive eco-friendly tips, industry updates, and
            exclusive offers.
          </p>

          <form onSubmit={handleSubmit} className="newsletter-form">
            <div className="form-group">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className={loading ? "loading" : ""}
                disabled={loading}
              >
                {loading ? <span className="spinner"></span> : "Subscribe"}
              </button>
            </div>
            {subscribed && (
              <div className="success-message">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="success-icon"
                >
                  <path
                    d="M22 11.08V12a10 10 0 11-5.93-9.14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 4L12 14.01l-3-3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Thank you for subscribing to our newsletter!</span>
              </div>
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
