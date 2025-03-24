import React, { useState } from 'react';
import './testsA1.css';
import Footer from '../../../../Footer';

function Question2test() {
  const sentences = [
    {
      id: 1,
      question: ' ____ wohnt in Warschau?',
      options: ['Wer', 'Wann', 'Wo'],
      correctAnswer: 'Wer',
    },
    {
      id: 2,
      question: ' ____ läuft im Kino?',
      options: ['Wann', 'Was', 'Wer'],
      correctAnswer: 'Was',
    },
    {
      id: 3,
      question: ' ____ war gestern im Theater?',
      options: ['Wer', 'Wann', 'Woher'],
      correctAnswer: 'Wer',
    },
    {
      id: 4,
      question: ' ____ kommt der neue Schüler?',
      options: ['Wo','Wann','Wer',
      ],
      correctAnswer: 'Woher',
    },
    {
      id: 5,
      question: ' ____ weißt du, dass er krank ist?',
      options: ['Wohin', 'Woher', 'Wo'],
      correctAnswer: 'Woher',
    },
    {
        id: 6,
        question: ' ____ trägt im Winter eine Mütze?',
        options: ['Wann', 'Wer', 'Was'],
        correctAnswer: 'Wer',
      },
      {
        id: 7,
        question: ' ____ hat Andrea Geburtstag?',
        options: ['Wann', 'Was', 'Woher'],
        correctAnswer: 'Wann',
      },
      {
        id: 8,
        question: ' ____ fahrt ihr in den Urlaub?',
        options: ['Woher', 'Wo', 'Wohin'],
        correctAnswer: 'Wohin',
      },
      {
        id: 9,
        question: ' ____ hat der Mann so viel Geld?',
        options: ['Wohin', 'Wo', 'Woher'],
        correctAnswer: 'Woher',
      },
      {
        id: 10,
        question: ' ____ kann gut Klavier spielen?',
        options: ['Wann', 'Wer', 'Wohin'],
        correctAnswer: 'Wer',
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

export default Question2test;
