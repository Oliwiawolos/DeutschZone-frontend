import React, { useState } from 'react';
import './Folders.css';
import {useNavigate} from 'react-router-dom'
import Footer from '../../Footer'
<<<<<<< HEAD
import { useAuth } from "../../AuthContext";
=======
>>>>>>> 203d890dcfd549f64057364d33aa0b612056bed9

const Folders = () => {
  const [flashcards, setFlashcards] = useState([
    { id: 1, term: '', definition: '' },
    { id: 2, term: '', definition: '' }
  ]);
  const [folderName, setFolderName] = useState(""); 
  const navigate = useNavigate(); 
<<<<<<< HEAD
  const [errorMsg, setErrorMsg] = useState('');
  const { currentUser } = useAuth();
=======
>>>>>>> 203d890dcfd549f64057364d33aa0b612056bed9

  const addFlashcard = () => {
    setFlashcards([...flashcards, { id: flashcards.length + 1, term: '', definition: '' }]);
  };

  const deleteFlashcard = (index) => {
    const updatedFlashcards = flashcards.filter((_, i) => i !== index); 
    const renumberedFlashcards = updatedFlashcards.map((flashcard, i) => ({
      ...flashcard,
      id: i + 1
    }));
    setFlashcards(renumberedFlashcards);
  };

  const handleInputChange = (index, field, value) => {
    const newFlashcards = [...flashcards];
    newFlashcards[index][field] = value;
    setFlashcards(newFlashcards);
  };

  const saveFolderToFlask = async () => {
<<<<<<< HEAD
    const validFlashcards = flashcards.filter(fc => fc.term && fc.definition);
    const hasEmpty = flashcards.some(fc => !fc.term.trim() || !fc.definition.trim());

    if (hasEmpty) {
      setErrorMsg("You can’t save empty flashcards. Please fill in all terms and definitions.");
      return;
    }
    if (validFlashcards.length < 2) {
      setErrorMsg("You must have at least 2 flashcards to save this folder.");
      return;
    }

    if (!folderName) {
      setErrorMsg("Folder name cannot be empty.");
=======
    if (!folderName) {
      alert("Please enter a folder name.");
>>>>>>> 203d890dcfd549f64057364d33aa0b612056bed9
      return;
    }

    try {
<<<<<<< HEAD
      const response = await fetch('http://127.0.0.1:5000/folders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: folderName,
          user_id: currentUser?.id || 1, 
          flashcards: validFlashcards
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        setErrorMsg(data.error || "Failed to create folder.");
        return;
      }

      setErrorMsg('');
      alert('Folder and flashcards saved!');
      navigate('/flashcards');
    } catch (error) {
      console.error("Error saving folder:", error);
      setErrorMsg("An error occurred while saving the folder.");
    }
  };
  return (
    <div className="page-wrapper">
  <div className="page-content">
    
    <div className="folder-container">
      <h1>Create a New Folder</h1>
      {errorMsg && <p className="error-message2">{errorMsg}</p>}
=======
      const response = await fetch("http://127.0.0.1:5000/folders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: folderName,
          user_id: 1, 
        }),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to create folder");
      }
  
      const folderId = result.folder_id;
  
      for (const flashcard of flashcards) {
        if (flashcard.term && flashcard.definition) {
          await fetch("http://127.0.0.1:5000/flashcards", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              term: flashcard.term,
              definition: flashcard.definition,
              folder_id: folderId
            }),
          });
        }
      }
  
      alert("Folder and flashcards saved!");
      navigate('/flashcards');
  
    } catch (error) {
      console.error("Error saving folder or flashcards:", error);
    }
  };
  return (
    <>
    <div className="folder-container">
      <h1>Create a New Folder</h1>
>>>>>>> 203d890dcfd549f64057364d33aa0b612056bed9
      <input 
        type="text" 
        placeholder="Name of folder" 
        value={folderName} 
        onChange={(e) => setFolderName(e.target.value)}
        className="folder-input"
      />
      
      <div className="inputs-container">
        {flashcards.map((flashcard, index) => (
          <div className="inputs" key={flashcard.id}>
            <div className="inputs-number">{flashcard.id}.</div>
            <input
              type="text"
              value={flashcard.term}
              placeholder="Term"
              onChange={(e) => handleInputChange(index, 'term', e.target.value)}
              className="text-input"
            />
            <input
              type="text"
              value={flashcard.definition}
              placeholder="Definition"
              onChange={(e) => handleInputChange(index, 'definition', e.target.value)}
              className="text-def-input"
            />
            <button 
              className="delete-flashcard-btn" 
              onClick={() => deleteFlashcard(index)}
            >
              -
            </button>
          </div>
        ))}
      </div>
      
      <button className="add-flashcard-btn" onClick={addFlashcard}>+ Add Flashcard</button>
      <button className="save-folder-btn" onClick={saveFolderToFlask}>Save a Folder</button>

    </div>
<<<<<<< HEAD
    </div>
    <Footer />
    </div>
=======
    <Footer />
    </>
>>>>>>> 203d890dcfd549f64057364d33aa0b612056bed9
  );
};

export default Folders;
