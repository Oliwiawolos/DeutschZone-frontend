import React, { useState } from 'react';
import './testsA1.css';
import Footer from '../../../../Footer'
function Questiontest() {
  const sentences = [
    { text: 'neue/kommt/der/der/Lehrer/in/Woher/Schule/?', verb: '', correctAnswer: 'Woher kommt der neue Lehrer in der Schule?' },
    { text: 'dieses/Wozu/dient/im/Gerät/Labor/?', verb: '', correctAnswer: 'Wozu dient dieses Gerät im Labor?' },
    { text: 'gute/Wo/eine/Pizzeria/kann/finden/ich/?', verb: '', correctAnswer: 'Wo kann ich eine gute Pizzeria finden?' },
    { text: 'Auto/Parkplatz/auf/Wessen/dem/steht/?', verb: '', correctAnswer: 'Wessen Auto steht auf dem Parkplatz?' },
    { text: 'neue/Suppe/schmeckt/die/in/Wie/Restaurant/diesem/?', verb: '', correctAnswer: 'Wie schmeckt die neue Suppe in diesem Restaurant?' },
    { text: 'in/Warum/ihr/wollt/umziehen/diese/Stadt/?', verb: '', correctAnswer: 'Warum wollt ihr in diese Stadt umziehen?' },
    { text: 'nächste/Wo/ich//U-Bahn-Station/finde/die/?', verb: '', correctAnswer: 'Wo finde ich die nächste U-Bahn-Station?' },
    { text: 'Geld/Warum/du/brauchst/das/?', verb: '', correctAnswer: 'Warum brauchst du das Geld?' },
    { text: 'dem/Schlüssel/liegen/auf/Wessen/Tisch/?', verb: '', correctAnswer: 'Wessen Schlüssel liegen auf dem Tisch?' },
    { text: 'läuft/Film/Abend/am/im/Welcher/Kino/?', verb: '', correctAnswer: 'Welcher Film läuft am Abend im Kino?' },
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
        const isCorrect = answer === sentences[index].correctAnswer;
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
      <h2>Bilde Fragen aus den angegebenen Wörtern</h2>
      <p>Form questions from the given words</p>      
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
                    style={{ width: '45%' }}
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

export default Questiontest;
