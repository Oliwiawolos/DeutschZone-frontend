import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth"; 
import './Login.css';
import axios from "axios";
import video2 from '../videos/landscape.mp4'
import PersonIcon from '@mui/icons-material/Person';
import '../../App.css';
import LockIcon from '@mui/icons-material/Lock';

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    
    if (!email || !password || !confirmPassword) {
      setError("Please fill out all fields");
      return;
    }
  
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
  
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;

      await axios.post("http://localhost:5000/sync-user", {
      email: user.email,
      firebase_uid: user.uid
});

      navigate("/login");
    } catch (err) {
      setError("Failed to create an account: " + err.message);
    }
  };
  

  return (
    <div className="video-container">
      <video src={video2} autoPlay loop muted />
      <div className="text-overlay1">
        <div className="login-container">
          <h1>Register</h1>
          {error && <p>{error}</p>}
          <form onSubmit={handleRegister} noValidate>
            <div className="input-wrapper">
              <PersonIcon className="input-icon" />
              <input
                type="text"
                className="input-box"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Username"
                required
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
                required
              />
            </div>
            <div className="input-wrapper">
              <LockIcon className="input-icon" />
              <input
                type="password"
                value={confirmPassword}
                className="input-box"
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                required
              />
            </div>
            <button type="submit">Register</button>
            <div className="register-link">
              <p>Already have an account? <a href="/login">Login</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
