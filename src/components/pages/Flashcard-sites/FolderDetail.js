import React, { useState, useEffect } from 'react';
import './Folders.css';
import { useParams } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
import Footer from '../../Footer';


const FolderDetail = () => {
  const { id } = useParams(); 
  const [flashcards, setFlashcards] = useState([]);
  const navigate = useNavigate(); 

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
        } 
        else {
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
  
      alert('Flashcards saved!');
      navigate('/flashcards');
    } catch (error) {
      console.error('Error saving flashcards:', error);
      alert('An error occurred while saving flashcards.');
    }
  };
  
  
  const addFlashcard = () => {
    setFlashcards([...flashcards, { id: null, term: '', definition: '' }]);
  };

  const deleteFlashcard = async (flashcardId, index) => {
    try {
      await fetch(`http://127.0.0.1:5000/flashcards/${flashcardId}`, {
        method: 'DELETE',
      });
      setFlashcards((prev) => prev.filter((_, i) => i !== index));
    } catch (error) {
      console.error("Error deleting flashcard:", error);
    }
  };
  
  



  return (
    <>
      <div className="folder-container">
        <h1 style={{marginBottom: '-3%'}}>Folder Edit</h1>
        
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
         <button className="add-flashcard-btn" onClick={addFlashcard}>+ Add Flashcard</button>
        <button className="save-folder-btn" onClick={saveFlashcardsToFlask}>
          Save Flashcards
        </button>
      </div>
      <Footer />
    </>
  );
};

export default FolderDetail;
