import React, { useState } from 'react';
import '../../A1/testsA1/testsA1.css';
import Footer from '../../../../Footer'
function Personaltest() {
  const sentences = [
    { text: 'Wo ist der Schlüssel? Ich habe ___ verloren.', verb: '', correctAnswer: 'ihn' },
    { text: 'Der Lehrer erklärt die Aufgabe. Er erklärt ___ sehr gut.', verb: '', correctAnswer: 'sie' },
    { text: 'Ich gebe meinem Freund das Buch. Ich gebe ___ morgen.', verb: '', correctAnswer: 'ihm' },
    { text: 'Wir helfen unseren Großeltern. Wir helfen ___ am Wochenende.', verb: '', correctAnswer: 'ihnen' },
    { text: 'Ich habe meinem Vater geholfen. Ich habe ___ mit der Arbeit geholfen.', verb: '', correctAnswer: 'ihm' },
    { text: 'Die Kinder geben ihrer Lehrerin Blumen. Sie geben ___ die Blumen jeden Montag.', verb: '', correctAnswer: 'ihr' },
    { text: 'Wir gehen ins Kino. ___ beginnt um 20 Uhr.', verb: '', correctAnswer: ['Es','es'] },
    { text: 'Das Kind spielt draußen. Ich sehe ___ im Garten.', verb: '', correctAnswer: 'es' },
    { text: 'Wir laden dich herzlich ein! Wann kannst du ___ besuchen?', verb: '', correctAnswer: 'uns' },
    { text: 'Peter möchte mit seiner Mutter sprechen. Er ruft ___ an.', verb: '', correctAnswer: 'sie' },
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

export default Personaltest;
