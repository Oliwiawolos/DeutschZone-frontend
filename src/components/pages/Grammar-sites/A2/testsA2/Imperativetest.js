import React, { useState } from 'react';
import '../../A1/testsA1/testsA1.css';
import Footer from '../../../../Footer'
function Imperativetest() {
  const sentences = [
    { text: 'Liebe Studenten, ___ euch bitte nicht!', verb: 'verspäten', correctAnswer: 'verspätet' },
    { text: 'Meine Damen und Herren, ___ Sie bitte einen Augenblick.', verb: 'warten', correctAnswer: 'warten' },
    { text: 'Hans, ___ dich mit mir bitte!', verb: 'treffen', correctAnswer: 'triff' },
    { text: 'Herr Bonner, ___ Sie Ihren Regenschirm nicht!', verb: 'vergessen', correctAnswer: 'vergessen' },
    { text: ' ___ wir nicht so ungeduldig!', verb: 'Sein', correctAnswer: 'Seien' },
    { text: 'Klaus und Robert, ___ doch auf meine Frage!', verb: 'antworten', correctAnswer: 'antwortet' },
    { text: 'Anke, ___ zum Arzt!', verb: 'gehen', correctAnswer: ['geh','gehe'] },
    { text: 'Jürgen, ___ ein Stück Kuchen!', verb: 'nehmen', correctAnswer: 'nimm' },
    { text: 'Kinder, ___ nicht so viele Bonbons!', verb: 'essen', correctAnswer: 'esst' },
    { text: '___ nicht so viele Bonbons!', verb: 'Beeilen', correctAnswer: 'Beeilen' },
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

export default Imperativetest;
