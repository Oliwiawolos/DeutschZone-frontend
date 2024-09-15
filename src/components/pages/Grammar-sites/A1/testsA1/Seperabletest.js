import React, { useState } from 'react';
import './testsA1.css';
import Footer from '../../../../Footer';

function Seperabletest() {
  const sentences = [
    { text: 'Ich ___ den Brief ___ , weil er wichtig ist.', verb: 'abschicken', correctAnswer: ['schicke', 'ab']  },
    { text: 'Um 18 Uhr ___ wir das Restaurant ___. ', verb: 'zumachen', correctAnswer: ['machen', 'zu'] },
    { text: 'Vielleicht ___ ich später noch den Kuchen ___.', verb: 'anschneiden', correctAnswer: ['schneide', 'an'] },
    { text: 'Maria ___ sich auf die Reise ___.', verb: 'vorbereiten', correctAnswer: ['bereitet', 'vor'] },
    { text: 'Wir ___ die Musik ___, damit die Nachbarn nicht gestört werden.', verb: 'ausschalten', correctAnswer: ['schalten', 'aus'] },
    { text: 'Ich ___ mich schnell ___, bevor das Meeting beginnt. ', verb: 'umziehen', correctAnswer: ['ziehe', 'um'] },
    { text: 'Die Kinder ___ ihre Spielsachen ___, bevor sie schlafen gehen.', verb: 'aufheben', correctAnswer: ['heben', 'auf'] },
    { text: 'Ich ___ das Licht ___, weil es dunkel wird. ', verb: 'anmachen', correctAnswer: ['mache', 'an'] },
    { text: 'Er ___ morgen früh von Frankfurt ___.', verb: 'abfahren', correctAnswer: ['fährt', 'ab'] },
    { text: 'Die Lehrerin ___ das neue Projekt ___.', verb: 'vorstellen', correctAnswer: ['stellt', 'vor'] },
  ];

  const [answers, setAnswers] = useState(sentences.map(() => ['', ''])); 
  const [correct, setCorrect] = useState(Array(sentences.length).fill(null));
  const [savedCorrectAnswers, setSavedCorrectAnswers] = useState(Array(sentences.length).fill('')); 
  const [isChecked, setIsChecked] = useState(false);

  const handleInputChange = (index, position, value) => {
    const newAnswers = [...answers];
    newAnswers[index][position] = value; 
    setAnswers(newAnswers);
  };
  

  const checkAnswers = () => {
    if (!isChecked) {
      const newSavedCorrectAnswers = [...savedCorrectAnswers]; 
  
      const result = answers.map((answerPair, index) => {
        const correctAnswer = sentences[index].correctAnswer;
  
        const isCorrect = Array.isArray(correctAnswer)
          ? correctAnswer.every((correctAnswerPart, i) =>
              answerPair[i] && typeof answerPair[i] === 'string' && answerPair[i].trim().toLowerCase() === correctAnswerPart.trim().toLowerCase()
            )
          : typeof answerPair[0] === 'string' && answerPair[0].trim().toLowerCase() === correctAnswer.trim().toLowerCase();
  
        if (isCorrect) {
          newSavedCorrectAnswers[index] = answerPair; 
        }
  
        return isCorrect;
      });
  
      setCorrect(result);
      setSavedCorrectAnswers(newSavedCorrectAnswers); 
      setIsChecked(true);
    } else {
      handleRestart();
    }
  };
  const handleRestart = () => {
    const newAnswers = answers.map((answerPair, index) =>
      correct[index] ? savedCorrectAnswers[index] : ['', ''] 
    );
    setAnswers(newAnswers); 
    setCorrect(Array(sentences.length).fill(null));
    setIsChecked(false);
  };
  
  return (
    <>
    <div className="exercise-container">
      <h2>Konjugiere die genannten Verben passend</h2>
      <p>Conjugate the above verbs appropriately</p>      
      {sentences.map((sentence, index) => (
        <div key={index} className="exercise-item">
          <span className="number">{index + 1}.</span>
          {sentence.text.split('___').map((part, partIndex) => (
  <React.Fragment key={partIndex}>
    {part}
    {partIndex < 2 && (
      <input
        type="text"
        className="input-field"
        value={answers[index][partIndex]}
        onChange={(e) => handleInputChange(index, partIndex, e.target.value)}
      />
    )}
  </React.Fragment>
))}
<span className="verb">{sentence.verb}</span>
          {correct[index] !== null && (
        <span className={`result ${correct[index] ? 'correct' : 'incorrect'}`}>
          {correct[index] ? 'Correct' : 'Incorrect'} 
        </span>
          )}
          </div>
          
      ))}
      
      <button className="verb-button" onClick={checkAnswers}>{isChecked ? 'Restart' : 'Check Answers'}</button>
    
    </div>
    <Footer />
    </>
  );
}


export default Seperabletest;
