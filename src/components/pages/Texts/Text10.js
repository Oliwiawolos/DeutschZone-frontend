import React, { useState } from 'react';
import { Card, CardContent, Typography, Box,Button as MuiButton, Grid } from '@mui/material';
import './Text.css'; 
import Footer from '../../Footer'
import Bad from '../../images/Bad.jpg'
function Text10() {
  const questions = [
    {
      id: 1,
      question: 'Womit beschäftigt sich Luisa beruflich?',
      options: ['mit Pflanzen', 'mit Tieren','mit Sanitäranlagen'],
      correctAnswer: 'mit Pflanzen',
    },
    {
        id: 2,
        question: 'Was mag Luisa lieber – baden oder duschen?',
        options: ['baden', 'duschen'],
        correctAnswer: 'baden',
      },
      {
        id: 3,
        question: 'Was macht die Katze Rolly?',
        options: ['Sie wartet ab', 'Sie spielt mit dem Toilettenpapier','Sie rollt sich durchs Bad'],
        correctAnswer: 'Sie spielt mit dem Toilettenpapier',
      },
      {
        id: 4,
        question: 'Als Luisa die Augen öffnet, ist sie ...',
        options: ['entspannt', 'traurig','schockiert'],
        correctAnswer: 'schockiert',
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
          Ein entspannendes Bad
          </Typography>
            <Box className="text-image-container">
                  <div className="image-container"> 
                    <img
                      src={Bad}
                      alt="Bad"
                    />
                  </div>
                  <Typography variant="body1" gutterBottom className="text-content">
                  Luisa ist Gärtnerin und verbringt den ganzen Tag bei ihren Pflanzen. Wenn sie abends zufrieden aber müde und schmutzig von ihrer Arbeit nach Hause kommt, wünscht sie sich nichts mehr als ein entspannendes Bad. Sie geht nur selten unter die Dusche, sondern dreht lieber den Wasserhahn auf. Sie lässt warmes Wasser in die Badewanne laufen und setzt sich hinein. Dabei hört sie gerne Musik und vergisst alles um sich herum. Smiley und Rolly, ihre beiden Katzen, warten auch immer auf diesen Moment des Tages. Ganz leise schleichen sie dann ins Bad. Smiley schaut sich gerne im Spiegel an und kämmt sich die Schnurrhaare mit Luisas Zahnbürste - er ist eben ein gepflegter Kater! Am meisten liebt er es jedoch auf der Zahnpasta herumzuspringen und das Waschbecken vollzuschmieren. Rolly hingegen kann es immer kaum erwarten, sich eine Rolle Toilettenpapier zu nehmen, um damit zu spielen. Sobald Luisa jedoch die Augen öffnet und nach dem Handtuch greift, ist der Zauber eines entspannten Bades gleich vorbei: „Was für ein Durcheinander!“ Die beiden Katzen rennen blitzschnell davon und hinterlassen als einzigen Verdächtigen das Quietscheentchen in der Toilette. Luisa denkt nur: Wie gut, dass nur das Entchen ins Bad gekommen ist; wie würde es hier wohl aussehen, wenn auch die beiden Katzen hereingekommen wären!
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

export default Text10;
