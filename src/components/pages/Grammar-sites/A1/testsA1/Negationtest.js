import React, { useState } from 'react';
import './testsA1.css';
import Footer from '../../../../Footer'
function Verbtest() {
  const sentences = [
    { text: 'Möchtest du einen Kaffee?', verb: '', correctAnswer: ['Nein, ich trinke keinen Kaffee','Nein, ich trinke keinen Kaffee.','Nein, ich möchte keinen Kaffee.','Nein, ich möchte keinen Kaffee'] },
    { text: 'Mögen Sie Lachs?', verb: '', correctAnswer: ['Nein, ich mag keinen Lachs','Nein, ich mag keinen Lachs.','Nein, wir mögen keinen Lachs.','Nein, wir mögen keinen Lachs'] },
    { text: 'Magst du Cappuccino?', verb: '', correctAnswer: ['Nein, ich mag keinen Cappuccino.','Nein, ich mag keinen Cappuccino'] },
    { text: 'Mögt ihr Kuchen?', verb: '', correctAnswer: ['Nein, wir mögen keinen Kuchen.','Nein, wir mögen keinen Kuchen'] },
    { text: 'Mag er Brot?', verb: '', correctAnswer: ['Nein, er mag kein Brot.','Nein, er mag kein Brot'] },
    { text: 'Mögt ihr Tomaten?', verb: '', correctAnswer: ['Nein, wir mögen keine Tomaten','Nein, wir mögen keine Tomaten.'] },
    { text: 'Magst du Gurken?', verb: '', correctAnswer: ['Nein, ich mag keine Gurken.','Nein, ich mag keine Gurken'] },
    { text: 'Möchtet ihr Schokolade?', verb: '', correctAnswer: ['Nein, wir möchten keine Schokolade.','Nein, wir möchten keine Schokolade'] },
    { text: 'Möchtest du etwas Gemüse?', verb: '', correctAnswer: ['Nein, ich möchte kein Gemüse.','Nein, ich möchte kein Gemüse'] },
    { text: 'Möchten Sie etwas Milch?', verb: '', correctAnswer: ['Nein, ich möchte keine Milch.','Nein, ich möchte keine Milch','Nein, wir möchten keine Milch','Nein, wir möchten keine Milch.'] },
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
      <h2>Verneine die folgenden Fragen.</h2>
      <p>Answer the questions negatively.</p>      
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

export default Verbtest;
