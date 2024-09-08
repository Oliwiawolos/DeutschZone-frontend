import React, { useState } from 'react';
import { Card, CardContent, Typography, Box,Button as MuiButton, Grid } from '@mui/material';
import './Text.css'; 
import Footer from '../../Footer'
import Tagesablauf from '../../images/tagesablauf.jpg'
function Text3() {
  const questions = [
    {
      id: 1,
      question: 'Wann steht Anna am Samstag auf?',
      options: ['um 8 Uhr morgens', 'um 10 Uhr abends','um 12 Uhr mittags','um 10 Uhr morgens'],
      correctAnswer: 'um 8 Uhr morgens',
    },
    {
      id: 2,
      question: 'Was kauft Anna ein?',
      options: ['Tomaten, Kartoffeln, Bananen, Milch, Orangensaft', 'Paprika, Nudeln, Bananen, Milch, Apfelsaft','Nudeln, Reis, Äpfel, Milch, Tomatensaft','Tomaten, Nudeln, Bananen, Milch, Orangensaft'],
      correctAnswer: 'Tomaten, Nudeln, Bananen, Milch, Orangensaft',
    },
    {
      id: 3,
      question: 'Was macht Anna um 10.00 Uhr?',
      options: ['Sie geht einkaufen', 'Sie liest ein Buch', 'Sie kocht das Mittagessen','Sie geht mit dem Hund spazieren'],
      correctAnswer: 'Sie geht mit dem Hund spazieren',
    },
    {
      id: 4,
      question: 'Wo geht Anna mit ihren Freundinnen spazieren?',
      options: ['Im Park', 'In der Stadt', 'Zu Hause','Im Café'],
      correctAnswer: 'In der Stadt',
    },
    {
      id: 5,
      question: 'Um wie viel Uhr ist Anna müde?',
      options: ['21.00', '21.30', '22.00','22.15'],
      correctAnswer: '22.00',
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
            Tagesablauf
          </Typography>
            <Box className="text-image-container">
                  <div className="image-container"> 
                    <img
                      src={Tagesablauf}
                      alt="Tagesablauf"
                    />
                  </div>
                  <Typography variant="body1" gutterBottom className="text-content">
                  Anna steht am Samstag um 8.00 Uhr auf. Sie duscht sich und putzt ihre Zähne. Zum Frühstück isst sie ein Butterbrot und trinkt Kaffee. Dann geht Anna einkaufen. Sie kauft Tomaten, Nudeln, Bananen, Milch und Orangensaft. Um 10.00 Uhr geht Anna mit ihrem Hund im Park spazieren. Mittags kocht Anna Nudeln mit Tomatensoße. Zum Mittagessen trinkt sie Orangensaft. Nachmittags trifft sich Anna mit ihren Freundinnen Maria und Monika. Sie gehen in der Stadt spazieren und trinken Tee in einem Café. Dann geht Anna nach Hause und liest ein Buch. Am Abend isst sie ein Käsebrot und trinkt ein Glas Milch. Sie sieht sich im Fernsehen einen Film an. Um 22.00 Uhr ist Anna müde. Sie geht ins Bett und schläft sofort ein.
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

export default Text3;
