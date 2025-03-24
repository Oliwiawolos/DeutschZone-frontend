import React, { useState } from 'react';
import './testsA1.css';
import Footer from '../../../../Footer';

function Inseperabletest() {
  const sentences = [
    { text: 'Ich ___ deine Hinweise ___.', verb: 'verstehen', correctAnswer: 'verstehe'  },
    { text: 'Um 20 Uhr ___ wir das Konzert ___ .', verb: 'beginnen', correctAnswer: 'beginnen' },
    { text: 'Vielleicht ___ ich morgen das Problem ___ .', verb: 'erklären', correctAnswer: 'erkläre' },
    { text: 'Lukas ___ ihre Pläne für die Zukunft ___ .', verb: 'besprechen', correctAnswer: 'besprecht' },
    { text: 'Wir ___ das Paket rechtzeitig ___ . ', verb: 'empfangen', correctAnswer: 'empfangen' },
    { text: 'Die Mitarbeiter ___ das neue Projekt ___ .', verb: 'unterstützen', correctAnswer: 'unterstützen' },
    { text: 'Die Kinder ___ ihre Hausaufgaben jeden Tag ___.', verb: 'erledigen', correctAnswer: 'erledigen' },
    { text: 'Ich ___ die Situation genau ___ .', verb: 'überlegen', correctAnswer: 'überlege' },
    { text: 'Er ___ das neue Konzept seinen Kollegen ___ .', verb: 'erläutern', correctAnswer: 'erläutert' },
    { text: 'Ich ___ die Information ___ , weil sie wichtig ist.', verb: 'erhalten', correctAnswer: 'erhalte' },
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


export default Inseperabletest;
