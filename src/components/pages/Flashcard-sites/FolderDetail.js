import React, { useState, useEffect } from 'react';
import './Folders.css';
import { useParams } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
import Footer from '../../Footer';


const FolderDetail = () => {
  const { id } = useParams(); 
<<<<<<< HEAD
  const [folderName, setFolderName] = useState(""); 
  const [flashcards, setFlashcards] = useState([]);
  const navigate = useNavigate(); 
  const [errorMsg, setErrorMsg] = useState('');
=======
  const [flashcards, setFlashcards] = useState([]);
  const navigate = useNavigate(); 
>>>>>>> 203d890dcfd549f64057364d33aa0b612056bed9

  useEffect(() => { 
    const fetchFlashcards = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/flashcards/${id}`);
        const data = await response.json();
        setFlashcards(data);
<<<<<<< HEAD
        const folderResponse = await fetch(`http://127.0.0.1:5000/folder/${id}`);
        const folderData = await folderResponse.json();
        setFolderName(folderData.name);
=======
>>>>>>> 203d890dcfd549f64057364d33aa0b612056bed9
      } catch (error) {
        console.error("Error fetching flashcards:", error);
      }
    };

    fetchFlashcards();
  }, [id]);


  const handleInputChange = (index, field, value) => {
    const newFlashcards = [...flashcards];
    newFlashcards[index][field] = value;
    setFlashcards(newFlashcards);
  };

  useEffect(() => { 
    const fetchFlashcards = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/flashcards/${id}`);
        const data = await response.json();
        setFlashcards(data);
      } catch (error) {
        console.error("Error fetching flashcards:", error);
      }
    };

    fetchFlashcards();
  }, [id]);
  const saveFlashcardsToFlask = async () => {
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
  
=======
>>>>>>> 203d890dcfd549f64057364d33aa0b612056bed9
    try {
      for (const flashcard of flashcards) {
        if (flashcard.id) {
          await fetch(`http://127.0.0.1:5000/flashcards/${flashcard.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              term: flashcard.term,
              definition: flashcard.definition,
            }),
          });
<<<<<<< HEAD
        } else {
=======
        } 
        else {
>>>>>>> 203d890dcfd549f64057364d33aa0b612056bed9
          await fetch('http://127.0.0.1:5000/flashcards', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              term: flashcard.term,
              definition: flashcard.definition,
              folder_id: id,
            }),
          });
        }
      }
<<<<<<< HEAD
      await fetch(`http://127.0.0.1:5000/folder/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: folderName }),
      });
      setErrorMsg(""); 
=======
  
>>>>>>> 203d890dcfd549f64057364d33aa0b612056bed9
      alert('Flashcards saved!');
      navigate('/flashcards');
    } catch (error) {
      console.error('Error saving flashcards:', error);
<<<<<<< HEAD
      setErrorMsg("An error occurred while saving flashcards.");
=======
      alert('An error occurred while saving flashcards.');
>>>>>>> 203d890dcfd549f64057364d33aa0b612056bed9
    }
  };
  
  
<<<<<<< HEAD
  
=======
>>>>>>> 203d890dcfd549f64057364d33aa0b612056bed9
  const addFlashcard = () => {
    setFlashcards([...flashcards, { id: null, term: '', definition: '' }]);
  };

  const deleteFlashcard = async (flashcardId, index) => {
    try {
<<<<<<< HEAD
      if (flashcardId) {
        await fetch(`http://127.0.0.1:5000/flashcards/${flashcardId}`, {
          method: 'DELETE',
        });
      }
  
=======
      await fetch(`http://127.0.0.1:5000/flashcards/${flashcardId}`, {
        method: 'DELETE',
      });
>>>>>>> 203d890dcfd549f64057364d33aa0b612056bed9
      setFlashcards((prev) => prev.filter((_, i) => i !== index));
    } catch (error) {
      console.error("Error deleting flashcard:", error);
    }
  };
  
<<<<<<< HEAD
  return (
    <div className="page-wrapper">
  <div className="page-content">
      <div className="folder-container">
        <h1 >Folder Edit</h1>
        {errorMsg && <p className="error-message">{errorMsg}</p>}
        <input 
        type="text" 
        value={folderName} 
        onChange={(e) => setFolderName(e.target.value)}
        className="folder-input2"
        />

=======
  



  return (
    <>
      <div className="folder-container">
        <h1 style={{marginBottom: '-3%'}}>Folder Edit</h1>
        
>>>>>>> 203d890dcfd549f64057364d33aa0b612056bed9
        {flashcards.length > 0 ? (
          <div className="inputs-container">
            {flashcards.map((flashcard, index) => (
              <div className="inputs" key={flashcard.id}>
                <div className="inputs-number">{index + 1}.</div>
                <input
                  type="text"
                  value={flashcard.term}
                  onChange={(e) => handleInputChange(index, 'term', e.target.value)} 
                  className="text-input"
                />
                <input
                  type="text"
                  value={flashcard.definition}
                  onChange={(e) => handleInputChange(index, 'definition', e.target.value)}
                  className="text-def-input"
                />
                

                <button 
  className="delete-flashcard-btn" 
  onClick={() => deleteFlashcard(flashcard.id, index)}
> 
                 -
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p>No flashcards found for this folder.</p>
        )}
<<<<<<< HEAD
        
         <button className="add-flashcard-btn" onClick={addFlashcard}>+ Add Flashcard</button>
        <button className="save-folder-btn" onClick={saveFlashcardsToFlask}>

          Save Flashcards
        </button>
         </div>
  </div>
      <Footer />
      </div>
=======
         <button className="add-flashcard-btn" onClick={addFlashcard}>+ Add Flashcard</button>
        <button className="save-folder-btn" onClick={saveFlashcardsToFlask}>
          Save Flashcards
        </button>
      </div>
      <Footer />
    </>
>>>>>>> 203d890dcfd549f64057364d33aa0b612056bed9
  );
};

export default FolderDetail;
