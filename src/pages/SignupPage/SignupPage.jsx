import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./SignupPage.css";

// Import images
import googleIcon from "../../assets/images/Vector.png";
import facebookIcon from "../../assets/images/Group 1215.png";
import signupImage from "../../assets/images/pana.png";

const SignupPage = () => {
  const navigate = useNavigate();
  const {
    signup,
    loginWithGoogle,
    loginWithFacebook,
    error: authError,
  } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleTermsChange = (e) => {
    setTermsAccepted(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!termsAccepted) {
      setError("You must accept the terms and conditions");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await signup(formData.email, formData.password);
      navigate("/overview");
    } catch (error) {
      setError(error.message || "Failed to create account");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    if (!termsAccepted) {
      setError("You must accept the terms and conditions");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await loginWithGoogle();
      navigate("/overview");
    } catch (error) {
      setError(error.message || "Failed to sign up with Google");
    } finally {
      setLoading(false);
    }
  };

  const handleFacebookSignup = async () => {
    if (!termsAccepted) {
      setError("You must accept the terms and conditions");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await loginWithFacebook();
      navigate("/overview");
    } catch (error) {
      setError(error.message || "Failed to sign up with Facebook");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="form-section">
        <h1>Create An Account</h1>
        <p className="sub-text">
          Already have an account?{" "}
          <Link to="/login" className="transition-link">
            Sign In
          </Link>
        </p>

        {(error || authError) && (
          <div className="error-message">{error || authError}</div>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            id="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <div className="terms">
            <input
              type="checkbox"
              id="terms"
              checked={termsAccepted}
              onChange={handleTermsChange}
            />
            <label htmlFor="terms">
              By creating an account, I agree to our{" "}
              <Link to="/terms">Terms of use</Link> and{" "}
              <Link to="/privacy">Privacy Policy</Link>
            </label>
          </div>

          <button type="submit" className="signup-btn" disabled={loading}>
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <div className="divider">---------------- OR ----------------</div>

        <button
          className="social-btn google"
          onClick={handleGoogleSignup}
          disabled={loading}
        >
          <img src={googleIcon} alt="google icon" />
          Sign up with Google
        </button>

        <button
          className="social-btn facebook"
          onClick={handleFacebookSignup}
          disabled={loading}
        >
          <img src={facebookIcon} alt="facebook icon" />
          Sign up with Facebook
        </button>
      </div>
      <div className="image-section">
        <img src={signupImage} alt="sign up image" className="signin-image" />
      </div>
    </div>
  );
};

export default SignupPage;
