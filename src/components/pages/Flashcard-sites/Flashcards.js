import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../AuthContext"; 
import {Button} from '../../Button'
import login from '../../images/login.png';
import './Flashcards.css';
import Footer from '../../Footer'


const Flashcards = () => {
const { currentUser } = useAuth();
const [folders, setFolders] = useState([]); 
  
const fetchFolders = async () => {
  try {
    const response = await fetch(`http://127.0.0.1:5000/folders/1`);
    const data = await response.json();
    setFolders(data);
  } catch (error) {
    console.error("Error fetching folders:", error);
  }
};

useEffect(() => {
  if (currentUser) {
    fetchFolders();
  }
}, [currentUser]);
  
const handleDeleteFolder = async (folderId) => {
  try {
    const response = await fetch(`http://127.0.0.1:5000/folders/${folderId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete folder");
    }

    setFolders(folders.filter((folder) => folder.id !== folderId));
    console.log("Folder deleted successfully");
  } catch (error) {
    console.error("Error deleting folder:", error);
  }
};
  if (!currentUser) {
    return (
      <div className="flashcards-container">
        <ul className="cards_items">
          <li>
            <h1>First you must log in</h1>
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
    <div className="page-wrapper">
  <div className="page-content">
    <div className="flashcards-container2"> 
      <h1>Flashcards</h1>
      <p>Learning German is a journey, and what better way to tailor it than by creating your own flashcards? On our platform, you are in full control of what you learn.</p>
      
      <Link to='/folders' className='nav-links signup-link'>
        <Button  buttonSize="btn--large" className="button" to='/folders'>Create New Folder</Button> 
      </Link>

      <div className="folders-container">
    <p>Here is a list of folders you have created:</p>
    {folders.length > 0 ? (
      folders.map((folder) => (
        <div className="folder-item" key={folder.id}>
          <h3>{folder.name}</h3>
          <p>Number of flashcards: {folder.flashcardsCount}</p>
          <div className="folder-actions">
            <Link to={`/FolderDetail/${folder.id}`}>
              <button>Open</button>
            </Link>
            <Link to={`/FolderDetail/${folder.id}`}>
              <button>Edit</button>
            </Link>

            <button onClick={() => handleDeleteFolder(folder.id)}>Delete</button>
          </div>
        </div>
      ))
    ) : (
      <p>You don't have any folders yet.</p>
    )}
    </div>
    </div>
    </div>
    <Footer />
    </div>
  );
};

export default Flashcards;
