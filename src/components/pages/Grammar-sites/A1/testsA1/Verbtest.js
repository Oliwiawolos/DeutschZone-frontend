import React, { useState } from 'react';
import './testsA1.css';
import Footer from '../../../../Footer'
function Verbtest() {
  const sentences = [
    { text: 'Ich ___ gerne.', verb: 'angeln', correctAnswer: ['angle', 'angele'] },
    { text: 'Der Tisch ___ an dem Fenster.', verb: 'stehen', correctAnswer: 'steht' },
    { text: 'Tina und Karl ___ Herrn Blume.', verb: 'begrüßen', correctAnswer: 'begrüßen' },
    { text: 'Ihr ___ Hausaufgaben.', verb: 'machen', correctAnswer: 'macht' },
    { text: 'Der Wecker ___ um sechs Uhr.', verb: 'klingeln', correctAnswer: 'klingelt' },
    { text: 'Die Kinder ___  eine Sandburg.', verb: 'bauen', correctAnswer: 'bauen' },
    { text: 'Herr Meller, ___ Sie meine Hilfe?', verb: 'brauchen', correctAnswer: 'brauchen' },
    { text: 'Eva und Tom, ___ ihr in Deutschland?', verb: 'leben', correctAnswer: 'lebt' },
    { text: 'Was ___ du hier?', verb: 'suchen', correctAnswer: 'suchst' },
    { text: '___ du als Verkäuferin?', verb: 'arbeiten', correctAnswer: 'arbeitest' },
  ];

  const [answers, setAnswers] = useState(Array(sentences.length).fill(''));
  const [correct, setCorrect] = useState(Array(sentences.length).fill(null));
  const [savedCorrectAnswers, setSavedCorrectAnswers] = useState(Array(sentences.length).fill('')); 
  const [isChecked, setIsChecked] = useState(false);

  const handleInputChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const checkAnswers = () => {
    if (!isChecked) {
      const result = answers.map((answer, index) => {
        const isCorrect = Array.isArray(sentences[index].correctAnswer)
          ? sentences[index].correctAnswer.some(
              (correctAnswer) => answer.toLowerCase() === correctAnswer.toLowerCase()
            )
          : answer.toLowerCase() === sentences[index].correctAnswer.toLowerCase();

        if (isCorrect) {
          savedCorrectAnswers[index] = answer;
        }
        
        return isCorrect;
      });

      setCorrect(result);
      setSavedCorrectAnswers([...savedCorrectAnswers]); 
      setIsChecked(true);
    } else {
      setAnswers([...savedCorrectAnswers]); 
      setCorrect(Array(sentences.length).fill(null));
      setIsChecked(false);
    }
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
              {partIndex === 0 && (
                <>
                  <input
                    type="text"
                    className="input-field"
                    value={answers[index]}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                  />
                  <span className="verb">{sentence.verb}</span>
                  </>
      )}
      </React.Fragment>
          ))}
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

export default Verbtest;
