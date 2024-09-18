import React, { useState } from 'react';
import '../../A1/testsA1/testsA1.css';
import Footer from '../../../../Footer'
function Wordtest() {
  const sentences = [
    { text: 'Du bekommst von mir einen Kuss.', verb: '', correctAnswer: ['Du wirst von mir einen Kuss bekommen.','Du wirst von mir einen Kuss bekommen'] },
    { text: 'Du isst zu Mittag um 14 Uhr.', verb: '', correctAnswer: ['Du wirst zu Mittag um 14 Uhr essen.','Du wirst zu Mittag um 14 Uhr essen']},
    { text: 'Ihr bleibt im Krankenhaus drei Tage.', verb: '', correctAnswer: ['Ihr werdet im Krankenhaus drei Tage bleiben.','Ihr werdet im Krankenhaus drei Tage bleiben'] },
    { text: 'Wir stellen den Tisch an das Fenster.', verb: '', correctAnswer: ['Wir werden den Tisch an das Fenster stellen.','Wir werden den Tisch an das Fenster stellen'] },
    { text: 'Heute geht ihr früh schlafen.', verb: '', correctAnswer: ['Heute werdet ihr früh schlafen gehen.','Heute werdet ihr früh schlafen gehen'] },
    { text: 'Die Frau rasiert sich die Beine.', verb: '', correctAnswer: ['Die Frau wird sich die Beine rasieren.','Die Frau wird sich die Beine rasieren'] },
    { text: 'Ich mache das Buch nicht auf.', verb: '', correctAnswer: ['Ich werde das Buch nicht aufmachen.','Ich werde das Buch nicht aufmachen'] },
    { text: 'Ich vergesse dich nicht!', verb: '', correctAnswer: ['Ich werde dich nicht vergessen!','Ich werde dich nicht vergessen'] },
    { text: 'Er ruft dich nicht an.', verb: '', correctAnswer: ['Er wird dich nicht anrufen.','Er wird dich nicht anrufen'] },
    { text: 'Ihr freut euch über die Geschenke.', verb: '', correctAnswer: ['Ihr werdet euch über die Geschenke freuen.','Ihr werdet euch über die Geschenke freuen'] },
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
    <div className="exercise-container" style={{width:'70%'}}>
      <h2>Bilde Sätze aus den angegebenen Wörtern</h2>
      <p>Form sentences from the given words</p>      
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
                    style={{ width: '55%' }}
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

export default Wordtest;
