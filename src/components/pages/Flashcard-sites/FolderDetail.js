import React, { useState, useEffect } from 'react';
import './Folders.css';
import { useParams } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
import { db } from '../../FirebaseConfig';
import { collection, addDoc, getDocs, doc, updateDoc } from "firebase/firestore"; 
import Footer from '../../Footer';


const FolderDetail = () => {
  const { id } = useParams(); 
  const [flashcards, setFlashcards] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => { 
    const fetchFlashcards = async () => {
      try {
        const flashcardsCollection = collection(db, `folders/${id}/flashcards`);
        const flashcardsSnapshot = await getDocs(flashcardsCollection);
        const flashcardsList = flashcardsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setFlashcards(flashcardsList);
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

   const saveFlashcardsToFirebase = async () => {
    try {
      for (const flashcard of flashcards) {
        if (flashcard.id) {
          const flashcardRef = doc(db, `folders/${id}/flashcards`, flashcard.id);
          await updateDoc(flashcardRef, {
            term: flashcard.term,
            definition: flashcard.definition
          });
        } else {
          await addDoc(collection(db, `folders/${id}/flashcards`), {
            term: flashcard.term,
            definition: flashcard.definition
          });
        }
      }
      alert("Flashcards have been updated!");
      navigate('/flashcards');
    } catch (error) {
      console.error("Error updating flashcards:", error);
      alert("An error occurred while saving flashcards.");
    }
  };

  const addFlashcard = () => {
    setFlashcards([...flashcards, { id: null, term: '', definition: '' }]);
  };

  const deleteFlashcard = (index) => {
    const updatedFlashcards = flashcards.filter((_, i) => i !== index); 
    setFlashcards(updatedFlashcards);
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
              onClick={() => deleteFlashcard(index)}
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
        <button className="save-folder-btn" onClick={saveFlashcardsToFirebase}>
          Save Flashcards
        </button>
      </div>
      <Footer />
    </>
  );
};

export default FolderDetail;
