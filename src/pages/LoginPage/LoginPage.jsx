"use client";

import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./LoginPage.css";
import loginImage from "../../assets/images/login image.png";

const LoginPage = () => {
  const [loadingEmail, setLoadingEmail] = useState(false);
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const [loadingFacebook, setLoadingFacebook] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/overview";

  const {
    login,
    loginWithGoogle,
    loginWithFacebook,
    error: authError,
  } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoadingEmail(true);
    setError("");

    try {
      await login(formData.email, formData.password);
      navigate(from);
    } catch (error) {
      if (
        error.code === "auth/invalid-credential" ||
        error.code === "auth/wrong-password"
      ) {
        setError("Invalid email or password. Please try again.");
      } else if (error.code === "auth/user-not-found") {
        setError("No account found with this email.");
      } else {
        setError("Failed to log in. Please check your details and try again.");
      }
    } finally {
      setLoadingEmail(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoadingGoogle(false);
    setError("");

    try {
      await loginWithGoogle();
      navigate(from);
    } catch (error) {
      setError(error.message || "Failed to log in with Google");
    } finally {
      setLoadingGoogle(false);
    }
  };

  const handleFacebookLogin = async () => {
    setLoadingFacebook(false);
    setError("");

    try {
      await loginWithFacebook();
      navigate(from);
    } catch (error) {
      setError(error.message || "Failed to log in with Facebook");
    } finally {
      setLoadingFacebook(false);
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
              <strong>Error: </strong>
              {error || authError}
            </div>
          )}

          <div className="social-login">
            <button
              className="social-btn google"
              onClick={handleGoogleLogin}
              disabled={loadingGoogle}
            >
              {loadingGoogle ? (
                <div className="button-content">
                  <div className="spinner"></div> Loading...
                </div>
              ) : (
                <>
                  <img
                    src="https://www.vectorlogo.zone/logos/google/google-icon.svg"
                    alt="Google logo"
                  />
                  Continue with Google
                </>
              )}
            </button>

            <button
              className="social-btn facebook"
              onClick={handleFacebookLogin}
              disabled={loadingFacebook}
            >
              {loadingFacebook ? (
                <div className="button-content">
                  <div className="spinner"></div> Loading...
                </div>
              ) : (
                <>
                  <img
                    src="https://www.vectorlogo.zone/logos/facebook/facebook-icon.svg"
                    alt="Facebook logo"
                  />
                  Continue with Facebook
                </>
              )}
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
            </div>

            <div className="forgot-password">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>

            <button
              type="submit"
              className="login-button"
              disabled={loadingEmail}
            >
              <div className="button-content">
                {loadingEmail && <div className="spinner"></div>}
                {loadingEmail ? "Logging in..." : "Log in"}
              </div>
            </button>
          </form>
        </div>

        <div className="login-illustration">
          <img
            src={loginImage || "/placeholder.svg"}
            alt="Login illustration"
            className="login-image"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
