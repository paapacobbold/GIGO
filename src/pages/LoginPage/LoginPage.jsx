import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./LoginPage.css";
import loginImage from "../../assets/images/login image.png";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login, error: authError } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await login(formData.email, formData.password);
      navigate("/overview");
    } catch (error) {
      setError(error.message || "Failed to log in");
    } finally {
      setLoading(false);
    }
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

          <form onSubmit={handleLogin}>
            <div className="input-container">
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>

            <div className="input-container password-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                onFocus={() => setShowPassword(false)}
                onBlur={() => setShowPassword(false)}
                required
              />
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
