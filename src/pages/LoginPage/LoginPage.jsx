import React, { useState } from "react";
import { Link } from "react-router-dom"; // Add this import
import "./LoginPage.css";

import loginImage from "../../assets/images/login image.png";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempted", { email, password });
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-form">
          <h1>Log In</h1>

          <p className="signup-text">
            Don't have an account?{" "}
            <Link to="/signup" className="signup-link">
              Sign Up
            </Link>
          </p>

          <div className="social-login">
            <button className="social-btn google">
              <img
                src="https://www.vectorlogo.zone/logos/google/google-icon.svg"
                alt="Google logo"
              />
              Continue with Google
            </button>

            <button className="social-btn facebook">
              <img
                src="https://www.vectorlogo.zone/logos/facebook/facebook-icon.svg"
                alt="Facebook logo"
              />
              Continue with Facebook
            </button>

            <div className="divider">
              <span>OR</span>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-container password-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>

            <div className="forgot-password">
              <span>Forgot Password?</span>
            </div>

            <button type="submit" className="login-button">
              Log in
            </button>
          </form>
        </div>

        <div className="login-illustration">
          <img
            src={loginImage}
            alt="Login illustration"
            className="login-image"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
