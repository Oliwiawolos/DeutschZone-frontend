import React, { useState } from 'react';
import '../../A1/testsA1/testsA1.css';
import Footer from '../../../../Footer'
function Superlativtest() {
  const sentences = [
    { text: 'Wer ist der ___ Schüler in der Klasse?', verb: 'fleißig', correctAnswer: 'fleißigste' },
    { text: 'Eddy lernt von uns allen am ___.', verb: 'gut', correctAnswer: 'besten' },
    { text: 'Antje schreibt die ___ Aufsätze.', verb: 'interessant', correctAnswer: 'interessantesten' },
    { text: 'Monika zeichnet am ___.', verb: 'schön', correctAnswer: 'schönsten' },
    { text: 'Die Mathematikaufgaben macht aber Otto am ___.', verb: 'schnell', correctAnswer: 'schnellsten' },
    { text: 'Der Deutschunterricht ist für alle Schüler am ___.', verb: 'wichtig', correctAnswer: 'wichtigsten' },
    { text: 'Leider sind die Kursbücher am ___.', verb: 'teuer', correctAnswer: 'teuersten' },
    { text: 'Die Deutschlehrerin ist die ___ von allen Lehrern.', verb: 'nett', correctAnswer: 'netteste' },
    { text: 'Der Physiklehrer ist dagegen am ___.', verb: 'streng', correctAnswer: 'stengsten' },
    { text: 'Er gibt den Schülern die ___ Aufgaben.', verb: 'schwierig', correctAnswer: 'schwierigsten' },
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
      <h2>Fülle die Lücke aus</h2>
      <p>Fill in the bank</p>      
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
                    style={{ width: '35%' }}
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

export default Superlativtest;
