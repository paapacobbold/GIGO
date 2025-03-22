import React from 'react';
import { Link } from 'react-router-dom';
import './SignupPage.css';
import { useState } from 'react';
// Import images
import googleIcon from '../../assets/images/Vector.png';
import facebookIcon from '../../assets/images/Group 1215.png';
import signupImage from '../../assets/images/pana.png';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth,googleProvider } from '../../../firebase';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User:', userCredential.user);
      navigate('/login');  // Redirect to login page
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };


    const LoginWithGoogle = async () => {
      try {
        const result = await signInWithPopup(auth, googleProvider);
        const user = result.user;
        // console.log('User Info:', user);
       
        navigate("/"); // Redirect to homepage upon successful Google login
      } catch (error) {
        console.error('Login Failed:', error);
        alert('Login Failed. Please try again.');
      }
    }

  return (
    <div className="container">
      <div className="form-section">
        <h1>Create An Account</h1>
        <p className="sub-text">
          Already have an account?{' '}
          <Link to="/login" className="transition-link">
            Sign In
          </Link>
        </p>

        <form onSubmit={handleSignUp}>
        {error && <div className="text-red-500">{error}</div>}
          <input type="email" id="email" placeholder='Email' required value={email}
            onChange={(e) => setEmail(e.target.value)} />

          <input type="password" id="password" placeholder='Password' required value={password}
            onChange={(e) => setPassword(e.target.value)} />

          <div className="terms">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">
              By creating an account, I agree to our{' '}
              <Link to="/terms">Terms of use</Link> and{' '}
              <Link to="/privacy">Privacy Policy</Link>
            </label>
          </div>

          <button
            type="submit"
            className="signup-btn"
            onSubmit={handleSignUp}
            disabled={loading}
          >
            {loading ? (
              <div className="loader"></div>
            ) : (
              "Sign Up"
            )}
          </button>
        </form>

        <div className="divider">--------------- OR ---------------</div>

        <button className="social-btn google" onClick={LoginWithGoogle}>
          <img src={googleIcon} alt="google icon" />
          Sign up with Google
        </button>
        <button className="social-btn facebook">
          <img src={facebookIcon} alt="facebook icon" />
          Sign up with Facebook
        </button>
      </div>
      <div className="image-section">
        <img src={signupImage} alt="sign up image" className='signin-image' />
      </div>
    </div>
  );
};

export default SignupPage;