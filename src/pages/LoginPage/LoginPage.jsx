import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./LoginPage.css";
import loginImage from "../../assets/images/login image.png";

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/overview";
  
  const { login, loginWithGoogle, loginWithFacebook, error: authError } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await login(formData.email, formData.password);
      navigate(from);
    } catch (error) {
      setError(error.message || "Failed to log in");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError("");
    try {
      await loginWithGoogle();
      navigate(from);
    } catch (error) {
      setError(error.message || "Failed to log in with Google");
    } finally {
      setLoading(false);
    }
  };

  const handleFacebookLogin = async () => {
    setLoading(true);
    setError("");
    try {
      await loginWithFacebook();
      navigate(from);
    } catch (error) {
      setError(error.message || "Failed to log in with Facebook");
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
          
          {(error || authError) && (
            <div className="error-message">
              {error || authError}
            </div>
          )}

          <div className="social-login">
            <button 
              className="social-btn google" 
              onClick={handleGoogleLogin}
              disabled={loading}
            >
              <img
                src="https://www.vectorlogo.zone/logos/google/google-icon.svg"
                alt="Google logo"
              />
              Continue with Google
            </button>

            <button 
              className="social-btn facebook"
              onClick={handleFacebookLogin}
              disabled={loading}
            >
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
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-container password-container">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button 
                type="button" 
                className="toggle-password" 
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <div className="forgot-password">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>

            <button 
              type="submit" 
              className="login-button"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Log in"}
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