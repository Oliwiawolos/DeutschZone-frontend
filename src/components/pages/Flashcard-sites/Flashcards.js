import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../AuthContext"; 
import {Button} from '../../Button'
import login from '../../images/login.png';
import './Flashcards.css';
import { db } from '../../FirebaseConfig'; 
import { collection, getDocs } from "firebase/firestore"; 
import { deleteDoc, doc } from "firebase/firestore"; 
import Footer from '../../Footer'


const Flashcards = () => {
  const { currentUser } = useAuth();
  const [folders, setFolders] = useState([]); 
  const handleDeleteFolder = async (folderId) => {
    try {
      const folderDocRef = doc(db, 'folders', folderId);
      await deleteDoc(folderDocRef);
      setFolders(folders.filter((folder) => folder.id !== folderId));
    } catch (error) {
      console.error("Error deleting folder:", error);
    }
  };
  
  useEffect(() => {
    if (currentUser) {
      const fetchFolders = async () => {
        try {
          const folderCollection = collection(db, 'folders');
          const folderSnapshot = await getDocs(folderCollection);
      
          const folderList = await Promise.all(
            folderSnapshot.docs.map(async (doc) => {
              const flashcardsCollection = collection(db, `folders/${doc.id}/flashcards`);
              const flashcardsSnapshot = await getDocs(flashcardsCollection);
              const flashcardsCount = flashcardsSnapshot.size;
              const data = doc.data();
              
              console.log('Folder:', data.name, 'Created at:', data.createdAt); 
      
              return {
                id: doc.id,
                ...data,
                flashcardsCount: flashcardsCount,
                createdAt: data.createdAt 
              };
            })
          );
      
          const sortedFolders = folderList.sort((a, b) => {
            return b.createdAt?.seconds - a.createdAt?.seconds;
          });
      
          setFolders(sortedFolders);
        } catch (error) {
          console.error("Error fetching folders:", error);
        }
      };
  
      fetchFolders();
    }
  }, [currentUser]);
  
  
  
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
    <>
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
            <Link to={`/edit-folder/${folder.id}`}>
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
    <Footer />
    </>
  );
};

export default Flashcards;
