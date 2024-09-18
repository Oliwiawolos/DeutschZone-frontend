import React, { useState } from 'react';
import '../../A1/testsA1/testsA1.css';
import Footer from '../../../../Footer';

function Presenttest() {
  const sentences = [
    { text: 'Unsere Großeltern ___ vor drei Jahren ___.', verb: 'sterben', correctAnswer: ['sind','gestorben']  },
    { text: 'Wegen einer Autopanne ___ wir uns ___ .', verb: 'verspäten', correctAnswer: ['haben','verspätet'] },
    { text: 'Um wie viel Uhr ___ du heute ___ ?', verb: 'aufstehen', correctAnswer: ['bist','aufgestanden'] },
    { text: 'Warum ___ er heute nicht in der Schule ___ ?', verb: 'sein', correctAnswer: ['ist','gewesen'] },
    { text: 'Ich ___ mal einen Hund ___ ?', verb: 'haben', correctAnswer: ['habe','gehabt'] },
    { text: 'Frau Sommer ___ sich das Bein ___.', verb: 'brechen', correctAnswer: ['hat','gebrochen'] },
    { text: 'Der Lehrer ___ den Schülern die Aufgabe noch einmal ___.', verb: 'erklären', correctAnswer: ['hat', 'erklärt'] },
    { text: 'Er ___ mit seinem Hund zum Tierarzt ___.', verb: 'gehen', correctAnswer: ['ist','gegangen'] },
    { text: 'Die Tomatensuppe ___ mir nicht ___.', verb: 'schmecken', correctAnswer: ['hat','geschmeckt'] },
    { text: 'Wer ___ die Tür ___.', verb: 'schließen', correctAnswer: ['hat','geschlossen'] },
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


export default Presenttest;
