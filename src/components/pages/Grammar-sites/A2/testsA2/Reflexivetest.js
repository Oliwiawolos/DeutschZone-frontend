import React, { useState } from 'react';
import '../../A1/testsA1/testsA1.css';
import Footer from '../../../../Footer'
function Reflexivetest() {
  const sentences = [
    { text: 'Herr Müller ___ auf den Stuhl.', verb: 'sich setzen', correctAnswer: 'setzt sich' },
    { text: 'Du ___ nicht gut', verb: 'sich fühlen', correctAnswer: 'fühlst dich' },
    { text: 'Ihr ___ über das Wetter', verb: 'sich unterhalten', correctAnswer: 'unterhaltet euch' },
    { text: 'Wir ___ nur selten', verb: 'sich verspäten', correctAnswer: 'verspäten uns' },
    { text: 'Das ___ überhaupt nicht', verb: 'sich lohnen', correctAnswer: 'lohnt sich' },
    { text: 'Ich ___ für Musik', verb: 'sich interessieren', correctAnswer: 'interessiere mich' },
    { text: 'Wir ___ jeden Tag', verb: 'sich waschen', correctAnswer: 'waschen uns' },
    { text: 'Die Weichsel ___ in Polen', verb: 'sich befinden', correctAnswer: 'befindet sich' },
    { text: 'Ich ___ die Haare', verb: 'sich kämmen', correctAnswer: 'kämme mir' },
    { text: 'Er ___ bei seinen Eltern', verb: 'sich entschuldigen', correctAnswer: 'entschuldigt sich' },
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

export default Reflexivetest;
