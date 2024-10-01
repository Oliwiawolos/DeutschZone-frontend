import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext"; 
import login from '../images/login.png';
import './Flashcards.css'

const Flashcards = () => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return (
      <div className="flashcards-container">

        <ul className="cards_items">
          <li>
          <h2>First you must log in</h2>
            <Link to="/login">
              <img src={login} alt="login" />
            </Link>
            <p>Click the image to log in</p>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div>
      <h2>Flashcards</h2>
      <p>Here are your flashcards...</p>
    </div>
  );
};

export default Flashcards;
