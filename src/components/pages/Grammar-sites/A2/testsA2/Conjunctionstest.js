import React, { useState } from 'react';
import '../../A1/testsA1/testsA1.css';
import Footer from '../../../../Footer';

function Conjunctionstest() {
  const sentences = [
    {
      id: 1,
      question: 'Ich war schon oft in München, ___ Heiner war noch nie dort.',
      options: ['aber', 'trotzdem', 'weil'],
      correctAnswer: 'aber',
    },
    {
      id: 2,
      question: 'Sie bekam eine Auszeichnung, ___ sie die beste Schülerin ist.',
      options: ['aber', 'schließlich', 'weil'],
      correctAnswer: 'weil',
    },
    {
      id: 3,
      question: 'Das Wetter war sehr schön, ____ blieben wir zu Hause.',
      options: ['obwohl', 'trotzdem', 'denn'],
      correctAnswer: 'trotzdem',
    },
    {
      id: 4,
      question: 'Es muss kalt sein, ____ haben wir jetzt Winter.',
      options: ['schließlich','denn','obowhl'],
      correctAnswer: 'schließlich',
    },
    {
      id: 5,
      question: 'Ich habe großen Hunger, ____ ich habe heute noch nichts gegessen.',
      options: ['trotzdem', 'aber', 'denn'],
      correctAnswer: 'denn',
    },
    {
        id: 6,
        question: 'Ich wollte das Buch lesen, ____ ich keine Zeit hatte.',
        options: ['obwohl', 'aber', 'weil'],
        correctAnswer: 'aber',
      },
      {
        id: 7,
        question: 'Wir gehen spazieren, ____ es regnet nicht mehr.',
        options: ['obwohl', 'denn', 'weil'],
        correctAnswer: 'denn',
      },
      {
        id: 8,
        question: 'Er kommt zu spät, ____ der Bus Verspätung hatte.',
        options: ['trotzdem', 'jedoch', 'weil'],
        correctAnswer: 'weil',
      },
      {
        id: 9,
        question: 'Sie bleibt zu Hause, ____ sie krank ist.',
        options: ['dennoch', 'weil', 'aber'],
        correctAnswer: 'weil',
      },
      {
        id: 10,
        question: 'Ich möchte ans Meer fahren, ____ ich mag das Wasser nicht.',
        options: ['weil', 'obwohl', 'trotzdem'],
        correctAnswer: 'obwohl',
      },
  ];

  const [answers, setAnswers] = useState(Array(sentences.length).fill(''));
  const [correct, setCorrect] = useState(Array(sentences.length).fill(null));
  const [savedCorrectAnswers, setSavedCorrectAnswers] = useState(Array(sentences.length).fill('')); 
  const [isChecked, setIsChecked] = useState(false);

  const handleOptionChange = (index, value) => {
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
      <div className="exercise-container" style={{width:'70%'}}>
        <h2>Wähle die Antwort</h2>
        <p>Choose the answers</p>
        {sentences.map((sentence, index) => (
          <div key={index} className="exercise-item">
          <div style={{ display: 'block', width: '100%' }}>
            <span className="number">{index + 1}.</span>
            <span>{sentence.question}</span>
          </div>
          <div style={{ display: 'block' }}>
            {sentence.options.map((option, optionIndex) => (
              <label key={optionIndex} style={{ display: 'inline-block', marginBottom: '5px',marginLeft: '15px' }}>
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  checked={answers[index] === option}
                  onChange={() => handleOptionChange(index, option)}
                />
                
                {option}
              </label>
            ))}
          </div>
          {correct[index] !== null && (
            <span className={`result ${correct[index] ? 'correct' : 'incorrect'}`}>
              {correct[index] ? 'Correct' : 'Incorrect'}
            </span>
          )}
        </div>
      ))}
        <button className="verb-button" onClick={checkAnswers}>
          {isChecked ? 'Restart' : 'Check Answers'}
        </button>
      </div>
      <Footer />
    </>
  );
}

export default Conjunctionstest;
