import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../context/firebaseConfig";
import "./SignupPage.css";

// Import images
import googleIcon from "../../assets/images/Vector.png";
import facebookIcon from "../../assets/images/Group 1215.png";
import signupImage from "../../assets/images/pana.png";

const SignupPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      await login(formData.email, formData.password);
      navigate("/overview");
    } catch (error) {
      setError(error.message || "Failed to create account");
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

        <form onSubmit={handleSubmit}>
          <input type="email" id="email" placeholder="Email" required />

          <input
            type="password"
            id="password"
            placeholder="Password"
            required
          />

          <div className="terms">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">
              By creating an account, I agree to our{" "}
              <Link to="/terms">Terms of use</Link> and{" "}
              <Link to="/privacy">Privacy Policy</Link>
            </label>
          </div>

          <button type="submit" className="signup-btn">
            Sign Up
          </button>
        </form>

        <div className="divider">--------------- OR ---------------</div>

        <button className="social-btn google">
          <img src={googleIcon} alt="google icon" />
          Sign up with Google
        </button>
        <button className="social-btn facebook">
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
