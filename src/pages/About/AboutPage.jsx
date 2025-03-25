// "use client";

// import { useState } from "react";
// import TopBar from "../../components/TopBar/TopBar";
// import Sidebar from "../../components/sidebar/sidebar";
// import "./AboutPage.css";
// import About1 from "../../assets/images/About1.png";
// import About2 from "../../assets/images/About2.png";
// import About3 from "../../assets/images/About3.png";
// import Team1 from "../../assets/images/team1.png";
// import Team2 from "../../assets/images/team2.png";
// import Team3 from "../../assets/images/team3.png";

// export default function About() {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   return (
//     <div className={`app-container ${isDarkMode ? "dark-mode" : ""}`}>
//       <Sidebar
//         isDarkMode={isDarkMode}
//         setIsDarkMode={setIsDarkMode}
//         activePage="about"
//       />
//       <TopBar />

//       <div className="about-container">
//         {/* Hero Section */}
//         <div className="hero-section">
//           <div className="hero-text">
//             <div className="content-with-line">
//               <span className="gradient-line"></span>
//               <div className="text-wrapper">
//                 <h3 className="subtitle">Our Story</h3>
//                 <h6 className="main-title">
//                   EFFICIENT WASTE MANAGEMENT FOR A CLEANER TOMORROW
//                 </h6>
//                 <h2 className="brand-name">GIGO</h2>
//               </div>
//             </div>
//           </div>
//           <div className="hero-images">
//             <img
//               src={About1 || "/placeholder.svg"}
//               alt="Waste management workers sorting materials"
//               className="hero-image"
//             />
//             <img
//               src={About2 || "/placeholder.svg"}
//               alt="Field workers in high visibility vests"
//               className="hero-image"
//             />
//           </div>
//         </div>

//         <div className="bottom-container">
//           <div className="info-columns">
//             <div className="info-column">
//               {/* Vision Section */}
//               <div className="info-card">
//                 <div className="info-header">
//                   <h3 className="info-title">OUR VISION</h3>
//                 </div>
//                 <p className="info-content">
//                   A world where technology enables sustainable waste management
//                   practices, promoting a cleaner, healthier environment for all.
//                   We envision a future where communities thrive in harmony with
//                   the environment, and where waste is minimized, reused, and
//                   recycled.
//                 </p>
//               </div>

//               {/* Mission Section */}
//               <div className="info-card">
//                 <div className="info-header">
//                   <h3 className="info-title">OUR MISSION</h3>
//                 </div>
//                 <p className="info-content">
//                   To develop innovative, tech-driven waste management solutions
//                   that empower communities, reduce waste, promote
//                   sustainability, and support the well-being of both people and
//                   the planet. We strive to make a positive impact on the
//                   environment, while also educating and engaging communities in
//                   sustainable waste management practices.
//                 </p>
//               </div>

//               {/* History Section */}
//               <div className="info-card">
//                 <div className="info-header">
//                   <h3 className="info-title">OUR HISTORY</h3>
//                 </div>
//                 <p className="info-content">
//                   GIGO's journey began in 2025 when passionate computer science
//                   students united to address waste management challenges, driven
//                   by a shared vision of utilizing technology to drive
//                   sustainable solutions and create a cleaner, healthier
//                   environment for all.
//                 </p>
//               </div>
//             </div>

//             {/* CTA Section */}
//             <div className="cta-section">
//               <div className="cta-content"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import TopBar from "../../components/TopBar/TopBar";
import Sidebar from "../../components/sidebar/sidebar";
import "./AboutPage.css";
import About1 from "../../assets/images/About1.png";
import About2 from "../../assets/images/About2.png";
import About3 from "../../assets/images/About3.png";
import Team1 from "../../assets/images/team1.png";
import Team2 from "../../assets/images/team2.png";
import Team3 from "../../assets/images/team3.png";

export default function About() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [animateStats, setAnimateStats] = useState(false);

  useEffect(() => {
    // Trigger stats animation when component mounts
    const timer = setTimeout(() => {
      setAnimateStats(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`app-container ${isDarkMode ? "dark-mode" : ""}`}>
      <Sidebar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        activePage="about"
      />
      <TopBar />

      <div className="about-container">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-text">
            <div className="content-with-line">
              <span className="gradient-line"></span>
              <div className="text-wrapper">
                <h3 className="subtitle">Our Story</h3>
                <h6 className="main-title">
                  EFFICIENT WASTE MANAGEMENT FOR A CLEANER TOMORROW
                </h6>
                <h2 className="brand-name">GIGO</h2>
              </div>
            </div>
          </div>
          <div className="hero-images">
            <img
              src={About1 || "/placeholder.svg"}
              alt="Waste management workers sorting materials"
              className="hero-image"
            />
            <img
              src={About2 || "/placeholder.svg"}
              alt="Field workers in high visibility vests"
              className="hero-image"
            />
          </div>
        </div>

        {/* Info Section */}
        <div className="info-section">
          <div className="info-image">
            <img
              src={About3 || "/placeholder.svg"}
              alt="Volunteer cleaning up forest area"
              className="full-width-image"
            />
          </div>
          <div className="info-content">
            <p className="info-text">
              We're a team of computer science students driven by a passion for
              using technology to drive positive change.
              <br />
              <br />
              At GIGO, we're dedicated to developing innovative waste management
              solutions that pave the way for a more sustainable tomorrow. Our
              approach combines cutting-edge technology with environmental
              consciousness to create effective waste management systems.
            </p>

            {/* Stats Section */}
            <div className={`stats-container ${animateStats ? "animate" : ""}`}>
              <div className="stat-item">
                <h3 className="stat-number">5K+</h3>
                <p className="stat-label">Satisfied customers</p>
              </div>
              <div className="stat-item">
                <h3 className="stat-number">15K</h3>
                <p className="stat-label">Completed Orders</p>
              </div>
              <div className="stat-item">
                <h3 className="stat-number">4.5</h3>
                <p className="stat-label">Customer Rating</p>
              </div>
              <div className="stat-item">
                <h3 className="stat-number">35K+</h3>
                <p className="stat-label">Working Hours</p>
              </div>
            </div>

            {/* Team Avatars */}
            <div className="team-avatars">
              <img
                src={Team1 || "/placeholder.svg"}
                alt="Team member"
                className="avatar"
              />
              <img
                src={Team2 || "/placeholder.svg"}
                alt="Team member"
                className="avatar"
              />
              <img
                src={Team3 || "/placeholder.svg"}
                alt="Team member"
                className="avatar"
              />
              <span
                style={{
                  marginLeft: "10px",
                  alignSelf: "center",
                  color: "var(--text-light)",
                  fontWeight: "500",
                }}
              >
                Our dedicated team
              </span>
            </div>
          </div>
        </div>

        <div className="bottom-container">
          <div className="info-columns">
            <div className="info-column">
              {/* Vision Section */}
              <div className="info-card">
                <div className="info-header">
                  <h3 className="info-title">OUR VISION</h3>
                </div>
                <p className="info-content">
                  A world where technology enables sustainable waste management
                  practices, promoting a cleaner, healthier environment for all.
                  We envision a future where communities thrive in harmony with
                  the environment, and where waste is minimized, reused, and
                  recycled.
                </p>
              </div>

              {/* Mission Section */}
              <div className="info-card">
                <div className="info-header">
                  <h3 className="info-title">OUR MISSION</h3>
                </div>
                <p className="info-content">
                  To develop innovative, tech-driven waste management solutions
                  that empower communities, reduce waste, promote
                  sustainability, and support the well-being of both people and
                  the planet. We strive to make a positive impact on the
                  environment, while also educating and engaging communities in
                  sustainable waste management practices.
                </p>
              </div>

              {/* History Section */}
              <div className="info-card">
                <div className="info-header">
                  <h3 className="info-title">OUR HISTORY</h3>
                </div>
                <p className="info-content">
                  GIGO's journey began in 2025 when passionate computer science
                  students united to address waste management challenges, driven
                  by a shared vision of utilizing technology to drive
                  sustainable solutions and create a cleaner, healthier
                  environment for all.
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="cta-section">
              <div className="cta-content">
                <h2 className="cta-title">
                  BE A PART OF THE SOLUTION,
                  <br />
                  NOT PART OF THE POLLUTION.
                </h2>
                <button className="cta-button">Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
