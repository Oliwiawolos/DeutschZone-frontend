import React, { useState } from 'react';
import './testsA1.css';
import Footer from '../../../../Footer'
function Verbtest2() {
  const sentences = [
    { text: 'Du ___ oft zu deiner Oma.', verb: 'fahren', correctAnswer: 'fährst'},
    { text: 'Was ___ du am liebsten zum Frühstück?', verb: 'essen', correctAnswer: 'isst' },
    { text: 'Herr Wagner, ___ Sie Ihren Kollegen oft?', verb: 'helfen', correctAnswer: 'helfen' },
    { text: 'Maria ___ den Sonnenuntergang gerne.', verb: 'sehen', correctAnswer: 'sieht' },
    { text: '___ ihr dieses Buch in der Schule?', verb: 'Lesen', correctAnswer: ['Lest','lest'] },
    { text: 'Du ___ immer sehr tief.', verb: 'schlafen', correctAnswer: 'schläfst' },
    { text: 'Der Kellner ___ die Teller sehr vorsichtig.', verb: 'tragen', correctAnswer: 'trägt' },
    { text: 'Was ___ du von diesem Film?', verb: 'halten', correctAnswer: 'hältst' },
    { text: 'Was ___ du deinem Freund zum Geburtstag?', verb: 'geben', correctAnswer: 'gibst' },
    { text: 'Ich ___ gerne frisches Obst.', verb: 'essen', correctAnswer: 'esse' },
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

export default Verbtest2;
