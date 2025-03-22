import React, { useState } from 'react';
import './Folders.css';
import {useNavigate} from 'react-router-dom'
import Footer from '../../Footer'

const Folders = () => {
  const [flashcards, setFlashcards] = useState([
    { id: 1, term: '', definition: '' },
    { id: 2, term: '', definition: '' }
  ]);
  const [folderName, setFolderName] = useState(""); 
  const navigate = useNavigate(); 

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
    if (!folderName) {
      alert("Please enter a folder name.");
      return;
    }

    try {
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
    <Footer />
    </>
  );
};

export default Folders;
