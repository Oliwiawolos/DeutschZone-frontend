import React, { useState } from 'react';
import './testsA1.css';
import Footer from '../../../../Footer'
function Verbtest() {
  const sentences = [
    { text: 'Ich ___ gestern nach Hause gehen.', verb: 'müssen', correctAnswer: 'musste' },
    { text: 'Du ___ das Auto reparieren.', verb: 'sollen', correctAnswer: 'solltest' },
    { text: 'Er ___ gestern nicht kommen.', verb: 'können', correctAnswer: 'konnte' },
    { text: 'Wir ___ das Buch für den Unterricht lesen.', verb: 'müsssen', correctAnswer: 'mussten' },
    { text: 'Ihr ___ früher aufstehen.', verb: 'wollen', correctAnswer: 'wolltet' },
    { text: 'Sie ___ das Projekt bis Freitag beenden.', verb: 'sollen', correctAnswer: 'sollten' },
    { text: 'Ich ___ das Haus nicht verlassen.', verb: 'dürfen', correctAnswer: 'durfte' },
    { text: 'Wir ___ früher anrufen.', verb: 'müssen', correctAnswer: 'mussten' },
    { text: 'Du ___ mir die Wahrheit sagen.', verb: 'wollen', correctAnswer: 'wolltest' },
    { text: 'Sie ___ die Aufgabe alleine machen.', verb: 'können', correctAnswer: 'konnte' },
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
      <h2>Fülle die Lücken mit den richtigen Formen der Modalverben im Präteritum</h2>
      <p>Fill in the blanks with the correct forms of the modal verbs in the past tense (Präteritum)</p>      
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
