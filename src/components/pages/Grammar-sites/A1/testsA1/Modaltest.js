import React, { useState } from 'react';
import './testsA1.css';
import Footer from '../../../../Footer'
function Verbtest() {
  const sentences = [
    { text: 'Du ___ deine Hausaufgaben machen.', verb: 'sollen', correctAnswer: 'sollst' },
    { text: 'Ich ___ morgen früher aufstehen.', verb: 'müssen', correctAnswer: 'muss' },
    { text: 'Sie ___ Deutsch sprechen. ', verb: 'können', correctAnswer: ['können','kann'] },
    { text: 'Wir ___ heute Abend ins Kino gehen.', verb: 'wollen', correctAnswer: 'wollen' },
    { text: 'Ihr ___ nicht so laut sein.', verb: 'dürfen', correctAnswer: 'dürft' },
    { text: 'Er ___ heute nicht zur Arbeit kommen.', verb: 'können', correctAnswer: 'kann' },
    { text: 'Was ___ du trinken?', verb: 'wollen', correctAnswer: 'willst' },
    { text: 'Wir ___ das Meeting verschieben. ', verb: 'müssen', correctAnswer: 'müssen' },
    { text: 'Sie ___ mehr Sport machen.', verb: 'sollen', correctAnswer: 'soll' },
    { text: 'Ich ___ diese Musik wirklich nicht hören.', verb: 'mögen', correctAnswer: 'mag' },
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
      <h2>Fülle die Lücken mit den richtigen Formen der Modalverben im Präsens</h2>
      <p>Fill in the blanks with the correct forms of the modal verbs in the present tense (Präsens).</p>      
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
