import React, { useState } from 'react';
import { Card, CardContent, Typography, Button as MuiButton, Grid } from '@mui/material';
import imHotel from '../../videos/imHotel.ogg';
import './AudioPlayer.css'; 
import Footer from '../../Footer'
function AudioPlayer() {
  const questions = [
    {
      id: 1,
      question: 'Was für ein Zimmer hat Herr Meyer reserviert?',
      options: ['Einzelzimmer', 'Doppelzimmer'],
      correctAnswer: 'Doppelzimmer',
    },
    {
      id: 2,
      question: 'Muss Herr Meyer im Anmeldeformular seine Adresse angeben?',
      options: ['ja', 'nein'],
      correctAnswer: 'ja',
    },
    {
      id: 3,
      question: 'Welches Zimmer bekommt Herr Meyer?',
      options: ['402', '410', '412'],
      correctAnswer: '412',
    },
    {
      id: 4,
      question: 'Warum fragt Herr Meyer nach einem Café?',
      options: ['Er hat großen Hunger', 'Er muss seine Koffer holen', 'Sein Zimmer ist noch nicht fertig'],
      correctAnswer: 'Sein Zimmer ist noch nicht fertig',
    },
  ];

  
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);


  const handleAnswerChange = (questionId, option) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: option,
    }));
  };


  const handleSubmit = () => {
    let count = 0;


    questions.forEach((question) => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        count++;
      }
    });

    setCorrectCount(count);
    setShowResults(true);
  };

  return (
    <>
    <div className="AudioPlayer-container">
    <Grid container justifyContent="center" className="audio-grid-container">
      <Grid item xs={12} md={8}>
        <Card className="audio-card">
          <CardContent>
            <Typography variant="h4" textAlign="center" gutterBottom>
              Im Hotel
            </Typography>
            <audio controls className="audio-player">
              <source src={imHotel} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <Typography variant="body1" className="body1" gutterBottom >
              Listen to the audio and answer the questions.
            </Typography>
            {questions.map((question) => (
              <div key={question.id} className="questions">
                <Typography variant="h6">{question.question}</Typography>
                {question.options.map((option) => (
                  <div key={option} className="answer-option">
                    <label
                      className={
                        showResults && option === question.correctAnswer
                          ? 'correct-answer'
                          : showResults &&
                            selectedAnswers[question.id] === option &&
                            option !== question.correctAnswer
                          ? 'incorrect-answer'
                          : ''
                      }
                    >
                      <input
                        type="radio"
                        name={`question-${question.id}`}
                        value={option}
                        checked={selectedAnswers[question.id] === option}
                        onChange={() => handleAnswerChange(question.id, option)}
                        disabled={showResults} 
                      />
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            ))}
            {showResults && (
              <Typography variant="h6" className="results-text">
                You got {correctCount} out of {questions.length} correct!
              </Typography>
            )}
          </CardContent>
          {!showResults && (
            <MuiButton variant="contained" color="primary" className="custom-button" onClick={handleSubmit}>
            Submit Answers
          </MuiButton>
          )}
        </Card>
      </Grid>
    </Grid>
    </div>
    <Footer/>
    </>
  );
}

export default AudioPlayer;
