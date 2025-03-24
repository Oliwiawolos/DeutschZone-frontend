import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../FirebaseConfig";
import {Link} from 'react-router-dom';
import './Login.css'
import '../../App.css'
import axios from 'axios';
import video2 from '../videos/landscape.mp4'
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged, sendPasswordResetEmail } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isOnline, setIsOnline] = useState(navigator.onLine); 
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
  
    if (!email) {
      setError("Email is required");
      return;
    }
  
    if (!password) {
      setError("Password is required");
      return;
    }
  
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const rememberMe = document.getElementById('remember-me').checked;
      const user = auth.currentUser;
      if (rememberMe) {
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
      } else {
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('password', password);
      }
      await axios.post("http://localhost:5000/sync-user", {
        email: user.email,
        firebase_uid: user.uid
      });
      navigate("/login");
    } catch (err) {
      setError("Failed to log in");
    }
  };
  
  
  useEffect(() => {
    const savedEmail = localStorage.getItem('email') || sessionStorage.getItem('email');
    const savedPassword = localStorage.getItem('password') || sessionStorage.getItem('password');
    if (savedEmail && savedPassword) {
      setEmail(savedEmail);
      setPassword(savedPassword);
    }
  }, []);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user); 
      } else {
        setCurrentUser(null); 
      }
      setLoading(false);
    });
    return () => unsubscribe(); 
  }, []);
  const handleForgotPassword = async () => {
    if (!email) {
      setError("Please enter your email to reset password");
      return;
    }
  
    try {
      await sendPasswordResetEmail(auth, email);
      setError("Password reset email sent!");
    } catch (err) {
      console.error("Failed to send password reset email", err);
      setError("Failed to send password reset email: " + err.message);
    }
  };
  
  
  useEffect(() => {
    const handleOnlineStatus = () => setIsOnline(navigator.onLine);

    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOnlineStatus);

    return () => {
      window.removeEventListener('online', handleOnlineStatus);
      window.removeEventListener('offline', handleOnlineStatus);
    };
  }, []);

  if (!isOnline) {
    return <div className="error-message">Internet connection lost. Please check your connection.</div>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!currentUser) {
    return (
    <>
      <div className="video-container">
        <video src={video2} autoPlay loop muted />
        <div className="text-overlay1">
        <div className="login-container">
          <h1>Login</h1>
          {error && <p>{error}</p>}
          <form onSubmit={handleLogin} noValidate>
  <div className="input-wrapper">
    <PersonIcon className="input-icon" />
    <input
      type="text"
      className="input-box"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Username"
    />
  </div>
  <div className="input-wrapper">
    <LockIcon className="input-icon" />
    <input
      type="password"
      value={password}
      className="input-box"
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Password"
    />
  </div>
  <button type="submit">Login</button>
  <div className="remember-forgot">
    <label>
      <input type="checkbox" id="remember-me" /> Remember me
    </label>
    <a role="button" onClick={handleForgotPassword} className="forgot-password-link">
      Forgot password?
    </a>
  </div>
  <div className="register-link">
    <p>Don't have an account? <Link to="/register">Register</Link></p>
  </div>

          </form>
        </div>
      </div>
        </div>
    </>
  );
}
return (
  <>
  <div className="video-container">
    <video src={video2} autoPlay loop muted />
    <div className="text-overlay1">
    <div className="login-container2">
      <h1>Welcome Back {currentUser ? currentUser.email : "Guest"}</h1>
      <h2>We're happy to see you again. Ready to continue learning?</h2>

    </div>
    
  </div>
    </div>
</>
);
};
export default Login;
