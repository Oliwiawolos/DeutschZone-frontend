import React, { useState } from 'react';
import { Card, CardContent, Typography, Box,Button as MuiButton, Grid } from '@mui/material';
import './Text.css'; 
import Footer from '../../Footer'
import Vorstellung from '../../images/vorstellung.webp'
function Text1() {
  const questions = [
    {
      id: 1,
      question: 'Wie alt ist Annas Schwester?',
      options: ['fünfzehn Jahre', 'dreizehn Jahre','vierzehn Jahre','zwölf Jahre'],
      correctAnswer: 'dreizehn Jahre',
    },
    {
      id: 2,
      question: 'Wo arbeitet Annas Vater?',
      options: ['in einer Bank', 'in Österreich','in der Schule','im Kino'],
      correctAnswer: 'in einer Bank',
    },
    {
      id: 3,
      question: 'Was ist Annas Lieblingsfach in der Schule?',
      options: ['Mathematik', 'Chemie', 'Kochen','Physik'],
      correctAnswer: 'Mathematik',
    },
    {
      id: 4,
      question: 'Was macht Anna nach der Schule?',
      options: ['Sie kocht das Mittagessen', 'Sie geht mit ihren Freundinnen spazieren', 'Sie schläft lange','Sie geht ins Kino'],
      correctAnswer: 'Sie geht mit ihren Freundinnen spazieren',
    },
    {
      id: 5,
      question: 'Wo geht die Familie am Sonntag mit dem Hund spazieren?',
      options: ['im Haus', 'im Park', 'im Garten','am See'],
      correctAnswer: 'am See',
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
            Vorstellung
          </Typography>
            <Box className="text-image-container">
                  <div className="image-container"> 
                    <img
                      src={Vorstellung}
                      alt="Image"
                    />
                  </div>
                  <Typography variant="body1" gutterBottom className="text-content">
                    Mein Name ist Anna. Ich komme aus Österreich und lebe seit drei Jahren in Deutschland. Ich bin 15 Jahre alt und habe zwei Geschwister: Meine Schwester heißt Klara und ist 13 Jahre alt, mein Bruder Michael ist 18 Jahre alt. Wir wohnen mit unseren Eltern in einem Haus in der Nähe von München. Meine Mutter ist Köchin, mein Vater arbeitet in einer Bank. Ich lese gerne und mag Tiere: Wir haben einen Hund, zwei Katzen und im Garten einen Teich mit Goldfischen. Ich gehe auch gerne in die Schule, mein Lieblingsfach ist Mathematik. Physik und Chemie mag ich nicht so gerne. Nach der Schule gehe ich oft mit meinen Freundinnen im Park spazieren, manchmal essen wir ein Eis. Am Samstag gehen wir oft ins Kino. Am Sonntag schlafe ich lange, dann koche ich mit meiner Mutter das Mittagessen. Nach dem Essen gehen wir mit dem Hund am See spazieren. Sonntag ist mein Lieblingstag!
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

export default Text1;
