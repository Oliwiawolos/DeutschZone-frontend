import React, { useState } from 'react';
import { Card, CardContent, Typography, Box,Button as MuiButton, Grid } from '@mui/material';
import './Text.css'; 
import Footer from '../../Footer'
import Urlaub from '../../images/Urlaub.jpg'
function Text6() {
  const questions = [
    {
      id: 1,
      question: 'Die Familie reist gerne in Länder, wo ...',
      options: ['viele Deutsche ihren Urlaub verbringen', 'es warm ist','man keinen Sonnenbrand bekommt'],
      correctAnswer: 'es warm ist',
    },
    {
      id: 2,
      question: 'Der Bruder ...',
      options: ['cremt sich nie ein', 'cremt sich sorgfältig ein','cremt sich zu sehr ein'],
      correctAnswer: 'cremt sich zu sehr ein',
    },
    {
      id: 3,
      question: 'Während der Vater schlief ...',
      options: ['holte die Mutter Eis', 'machte die kleine Schwester Blödsinn', 'lag der Bruder im Liegestuhl'],
      correctAnswer: 'holte die Mutter Eis',
    },
    {
      id: 4,
      question: 'Die Familie ...',
      options: ['musste hungrig nach Hause gehen', 'konnte das Picknick noch essen', 'musste auf das Eis verzichten'],
      correctAnswer: 'konnte das Picknick noch essen',
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
          Sommer Urlaub am Meer
          </Typography>
            <Box className="text-image-container">
                  <div className="image-container"> 
                    <img
                      src={Urlaub}
                      alt="Sommerurlaub am Meer"
                    />
                  </div>
                  <Typography variant="body1" gutterBottom className="text-content">
                  Viele deutsche Familien verbringen ihren Urlaub gern in warmen Ländern. Meine Familie fährt meistens nach Spanien, Italien oder in die Türkei, wo die Sonne immer scheint. Dort verbringen wir oft den ganzen Tag am Strand. Wir spielen mit dem Wasserball und bauen Sandburgen. Ich passe auch ein bisschen auf meine kleine Schwester auf. Sie kann noch nicht schwimmen und muss deshalb einen Schwimmring tragen. Nach dem Baden cremen wir uns mit Sonnencreme ein, damit wir keinen Sonnenbrand bekommen. Mein Bruder übertreibt es allerdings immer ein bisschen! Einmal hatten meine Eltern etwas ganz Besonderes geplant - ein Picknick am Strand. Am Nachmittag holte Mutti den Picknick-Korb heraus. Dann setzte sie ihre Sonnenbrille auf und ging Eis kaufen. In der Zwischenzeit legte ich mich in den Liegestuhl. Vati schlief zwischen zwei Palmen in der Hängematte, meine Schwester spielte am Strand, und mein Bruder machte wieder irgendwelchen Blödsinn. Keiner von uns bemerkte, dass sich ein Hund an unser Essen schlich. Zum Glück kam Mutti gerade rechtzeitig zurück und sah den Hund. Um unser Picknick zu schützen, rannte sie schimpfend auf den Hund zu. Dummerweise stolperte sie dabei über einen Eimer und ein Eis rutschte ihr aus der Hand. Es schoss in hohem Bogen durch die Luft und landete direkt auf meinem Kopf. Das war vielleicht eine Sauerei! Nun ja, auf mein Eis musste ich verzichten, aber wenigstens haben wir so das Picknick gerettet.
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

export default Text6;
