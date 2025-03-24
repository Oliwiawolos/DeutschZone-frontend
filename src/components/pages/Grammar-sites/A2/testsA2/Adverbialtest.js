import React, { useState } from 'react';
import '../../A1/testsA1/testsA1.css';
import Footer from '../../../../Footer';

function Adverbialtest() {
  const sentences = [
    {
      id: 1,
      question: 'Gehen Sie bitte  ____, dort finden Sie die Toilette.',
      options: ['rechts', 'nach rechts'],
      correctAnswer: 'nach rechts',
    },
    {
      id: 2,
      question: 'Das Büro des Chefs befindet sich da ____.',
      options: ['oben', 'nach oben'],
      correctAnswer: 'oben',
    },
    {
      id: 3,
      question: 'Das Kind macht zwei Schritte ____.',
      options: ['vorne', 'nach vorne'],
      correctAnswer: 'nach vorne',
    },
    {
      id: 4,
      question: 'Danach macht das Kind einen Schritt ____.',
      options: ['hinten','nach hinten'
      ],
      correctAnswer: 'nach hinten',
    },
    {
      id: 5,
      question: 'Komm zu mir ____ und hilf mir hier im Keller.',
      options: ['unten', 'nach unten'],
      correctAnswer: 'nach unten',
    },
    {
        id: 6,
        question: 'Wo ist der Gärtner? Er arbeitet da ____ im Garten.',
        options: ['hinten', 'nach hinten',],
        correctAnswer: 'hinten',
      },
      {
        id: 7,
        question: 'Wessen Hund bellt da ____ ?',
        options: ['hinten', 'nach hinten'],
        correctAnswer: 'hinten',
      },
      {
        id: 8,
        question: 'Warum steht der Tisch immer ____ , an dem Fenster?',
        options: ['links', 'nach links'],
        correctAnswer: 'links',
      },
      {
        id: 9,
        question: 'Du sollst ____ gehen und da steht mein Wagen.',
        options: ['links', 'nach links'],
        correctAnswer: 'nach links',
      },
      {
        id: 10,
        question: 'Hier müssen alle Fahrer ____ abbiegen.',
        options: ['rechts', 'nach rechts'],
        correctAnswer: 'nach rechts',
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
      <div className="exercise-container">
        <h2>Choose the correct interrogative pronoun</h2>
        <p>Form questions from the given words</p>
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

export default Adverbialtest;
