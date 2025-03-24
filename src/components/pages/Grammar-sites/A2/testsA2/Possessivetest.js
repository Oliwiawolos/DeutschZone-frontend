import React, { useState } from 'react';
import '../../A1/testsA1/testsA1.css';
import Footer from '../../../../Footer'
function Possessivetest() {
  const sentences = [
    { text: 'Die Mutter gibt ___ Sohn ein Geschenk.', verb: '', correctAnswer: 'ihrem' },
    { text: 'Ich habe ein eigenes Zimmer. ___ Zimmer ist gemütlich und hell.', verb: '', correctAnswer: 'Mein' },
    { text: 'Ich habe einen Sohn und eine Tochter. ___ Kinder sind noch sehr klein.', verb: '', correctAnswer: 'Meine' },
    { text: 'Meine Freundin ist verheiratet. ___ Mann ist Ingenieur.', verb: '', correctAnswer: 'Ihr' },
    { text: 'Wir korrigieren ___ Fehler in den Hausaufgaben immer selbst.', verb: '', correctAnswer: 'unsere' },
    { text: 'Monika schreibt einen Brief an ___ Vater.', verb: '', correctAnswer: 'ihren' },
    { text: 'Wir gehen heute ins Theater. Elke und Tom müssen noch ___ Eltern fragen.', verb: '', correctAnswer: 'ihre' },
    { text: 'Kann uns Ute nicht sehen? Wo hat sie denn ___ Brille?', verb: '', correctAnswer: 'ihre' },
    { text: 'Das Kind von Herrn Brauner ist im Krankenhaus. Er besucht ___ Kind jeden Tag.', verb: '', correctAnswer: 'sein' },
    { text: 'Frau Bieser, wie geht es ___ Mann.', verb: '', correctAnswer: 'Ihrem' },
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

export default Possessivetest;
