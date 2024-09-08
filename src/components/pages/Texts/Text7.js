import React, { useState } from 'react';
import { Card, CardContent, Typography, Box,Button as MuiButton, Grid } from '@mui/material';
import './Text.css'; 
import Footer from '../../Footer'
import Karnaval2 from '../../images/Karaval2.webp'
function Text7() {
  const questions = [
    {
      id: 1,
      question: 'Der Karneval wird im Süden Deutschlands meist Fasching genannt.',
      options: ['richtig', 'falsch','steht nich im Text'],
      correctAnswer: 'richtig',
    },
    {
        id: 2,
        question: 'Mit Masken und gruseligen Kostümen macht man sich über christliche Traditionen lustig.',
        options: ['richtig', 'falsch','steht nich im Text'],
        correctAnswer: 'falsch',
      },
      {
        id: 3,
        question: 'Der Frühling wird auf den Straßen mit lustiger Musik und fröhlichem Gesang begrüßt.',
        options: ['richtig', 'falsch','steht nich im Text'],
        correctAnswer: 'falsch',
      },
      {
        id: 4,
        question: 'Der „Schmutzige Donnerstag“ bezieht sich auf die dreckigen Straßen nach den Umzügen.',
        options: ['richtig', 'falsch','steht nich im Text'],
        correctAnswer: 'falsch',
      },
      {
        id: 5,
        question: 'Die Küchlein, die in Fett gebacken werden, bestehen aus einem klebrigen Hefeteig.',
        options: ['richtig', 'falsch','steht nich im Text'],
        correctAnswer: 'steht nicht im Text',
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
    <div className="text-container1">
    <Grid container justifyContent="center" className="audio-grid-container">
      <Grid item xs={12} md={8}>
        <Card className="audio-card">
          <CardContent>
          <Typography variant="h4" textAlign="center" color="#ad3030" gutterBottom>
          So feiert man Karneval im Süden
          </Typography>
            <Box className="text-image-container">
                  <div className="image-container"> 
                    <img
                      src={Karnaval2}
                      alt="Karnaval2"
                    />
                  </div>
                  <Typography variant="body1" gutterBottom className="text-content">
                  In südlichen Regionen Deutschlands sowie in Österreich und der Schweiz wird der Karneval „Fasching“ genannt. Die Bräuche unterscheiden sich deutlich von denen im Rheinland, denn hier will man mit den Umzügen den Winter vertreiben. Mit angsteinflößenden Holzmasken oder als Hexen und Teufel verkleidet ziehen die Menschen durch die Straßen und hoffen, dass sie dadurch die bösen Geister verjagen. Der Lärm, den sie dabei mit Glocken, Peitschen und Besen machen, soll zudem die guten Geister wecken, die den Frühling und neue Fruchtbarkeit für das Land bringen. Die schaurige Szene wird meist durch Fackeln und verschiedene Musikkapellen unterstützt. Die einzelnen Bezeichnungen, fantasievollen Kostüme und Bräuche können jedoch je nach Region stark variieren. Zum Beispiel feiert man in Teilen Süddeutschlands den „Schmutzigen Donnerstag“. Es handelt sich hierbei um den Donnerstag vor der Fastenzeit. Die Namensgebung beruht auf der Tradition, an diesem Tag kleine Küchlein „schmotzig“, das heißt in Fett, zu backen. Eine ähnliche Tradition findet sich in der Bezeichnung „Schmalziger Samstag“. In Österreich werden an diesem letzten Samstag vor der Fastenzeit traditionell Schmalzküchlein gebacken.
                  </Typography>
                </Box>
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
                        color='#ad3030'
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
              <Typography variant="h6" textAlign="center">
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

export default Text7;
