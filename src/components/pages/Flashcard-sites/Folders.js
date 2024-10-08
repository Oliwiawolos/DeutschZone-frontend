import React, { useState } from 'react';
import './Folders.css';
import {useNavigate} from 'react-router-dom'
import { db } from '../../FirebaseConfig';
import { collection, addDoc } from "firebase/firestore";
import Footer from '../../Footer'
import { serverTimestamp } from "firebase/firestore";

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

  const saveFolderToFirebase = () => {
    if (!folderName) {
      alert("Podaj nazwę folderu");
      return;
    }
  
    addDoc(collection(db, 'folders'), {
      name: folderName,
      createdAt: serverTimestamp()
    })
    .then((folderRef) => {
      console.log('Folder saved, ID:', folderRef.id);
  
      const flashcardPromises = flashcards.map(flashcard => 
        addDoc(collection(db, `folders/${folderRef.id}/flashcards`), {
          term: flashcard.term,
          definition: flashcard.definition
        })
      );
  
      return Promise.all(flashcardPromises);
    })
    .then(() => {
      console.log('All flashcards saved');
      alert("Folder i fiszki zostały zapisane!");
      navigate('/flashcards');
    })
    .catch((error) => {
      console.error("Błąd podczas zapisywania fiszek:", error);
    });
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
      <button className="save-folder-btn" onClick={saveFolderToFirebase}>Save a Folder</button>

    </div>
    <Footer />
    </>
  );
};

export default Folders;
