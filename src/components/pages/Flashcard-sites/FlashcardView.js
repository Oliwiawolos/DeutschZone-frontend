import React, { useState, useEffect } from 'react';
import './FlashcardView.css';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from '../../FirebaseConfig';
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import Footer from '../../Footer';

const FlashcardViewer = () => {
  const { id } = useParams(); 
  const [flashcards, setFlashcards] = useState([]);
  const [folderName, setFolderName] = useState(""); 
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showTerm, setShowTerm] = useState(true);
  const navigate = useNavigate();
  const [searchTag, setSearchTag] = useState("");

  useEffect(() => {
    const fetchFolderDetails = async () => {
      try {
        const folderDoc = doc(db, 'folders', id);
        const folderSnapshot = await getDoc(folderDoc);

        if (folderSnapshot.exists()) {
          setFolderName(folderSnapshot.data().name); 

          const flashcardsCollection = collection(db, `folders/${id}/flashcards`);
          const flashcardsSnapshot = await getDocs(flashcardsCollection);
          const flashcardsList = flashcardsSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
            tags: doc.data().tags || []
          }));

          setFlashcards(flashcardsList); 
        }
      } catch (error) {
        console.error("Error fetching flashcards:", error);
      }
    };

    fetchFolderDetails();
  }, [id]);

  const flipCard = () => {
    setShowTerm(!showTerm);
  };

  const nextCard = () => {
    if (currentCardIndex === flashcards.length - 1) {
      navigate('/flashcards'); 
    } else {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1));
      setShowTerm(true); 
    }
  };

  const prevCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? flashcards.length - 1 : prevIndex - 1
    );
    setShowTerm(true); 
  };

  return (
    <>
    <div className="flashcard-viewer">
      <h1>{folderName}</h1>

      {flashcards.length > 0 ? (
        <div className="flashcard-container">
          <div className="flashcard" onClick={flipCard}>
            {showTerm ? flashcards[currentCardIndex].term : flashcards[currentCardIndex].definition}
          </div>
          <div className="card-count">
            {currentCardIndex + 1} / {flashcards.length}
          </div>
          <div className="navigation-buttons">
            <button onClick={prevCard}>←</button>
            <button onClick={nextCard}>→</button>
          </div>
        </div>
      ) : (
        <p>No flashcards found for this folder.</p>
      )}

    </div>
    <Footer />
    </>
  );
};

export default FlashcardViewer;
