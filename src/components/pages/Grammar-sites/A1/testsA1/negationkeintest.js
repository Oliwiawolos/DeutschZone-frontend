import React, { useState } from 'react';
import './testsA1.css';
import Footer from '../../../../Footer'
function Verbtest() {
  const sentences = [
    { text: 'Ich habe ___ Lust.', verb: '', correctAnswer: 'keine' },
    { text: 'Wir brauchen ___ Ratschläge.', verb: '', correctAnswer: 'keine' },
    { text: 'Er hat ___ Geld.', verb: '', correctAnswer: 'kein' },
    { text: 'Sie besitzen ___ Häuser.', verb: '', correctAnswer: 'keine' },
    { text: 'Du hast ___ Bücher.', verb: '', correctAnswer: 'keine' },
    { text: 'Das ist ___ Auto.', verb: '', correctAnswer: 'kein' },
    { text: 'Meine Mutter hat ___ Blumen.', verb: '', correctAnswer: 'keine' },
    { text: 'Ihr mögt ___ Fisch.', verb: '', correctAnswer: 'keinen' },
    { text: 'Sie trägt ___ Hut.', verb: '', correctAnswer: 'keinen' },
    { text: 'Es gibt ___ Sonne heute.', verb: '', correctAnswer: 'keine' },
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
      <h2>Trage kein in der richtigen Form ein.</h2>
      <p>Enter kein in the correct form.</p>      
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
