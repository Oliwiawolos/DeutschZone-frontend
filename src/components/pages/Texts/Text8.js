import React, { useState } from 'react';
import { Card, CardContent, Typography, Box,Button as MuiButton, Grid } from '@mui/material';
import './Text.css'; 
import Footer from '../../Footer'
import Lagerfeuer from '../../images/lagerfeuer.jpg'
function Text8() {
  const questions = [
    {
      id: 1,
      question: 'Das Lagerfeuer ...',
      options: ['machten die Freunde auf einer öffentlichen Grünfläche', 'fand bei Kristina und Markus im Garten statt','war eine Überraschung für Pauls kleinen Bruder'],
      correctAnswer: 'machten die Freunde auf einer öffentlichen Grünfläche',
    },
    {
        id: 2,
        question: 'Maria brachte ...',
        options: ['alle Getränke mit', 'ihren Freund Paul mit','etwas zum Grillen mit'],
        correctAnswer: 'etwas zum Grillen mit',
      },
      {
        id: 3,
        question: 'Zu essen gab es ...',
        options: ['Nudelsalat und Pilze', 'Fischstäbchen und Gemüsesuppe','Knoblauchbrot'],
        correctAnswer: 'Nudelsalat und Pilze',
      },
      {
        id: 4,
        question: 'Die Waschbären ...',
        options: ['fraßen den Nudelsalat', 'ignorierten den Nudelsalat','raubten den Nudelsalat'],
        correctAnswer: 'ignorierten den Nudelsalat',
      },
      {
        id: 5,
        question: 'Die Freunde ...',
        options: ['jagten die Waschbären weg', 'waren völlig erstaunt','fütterten die Waschbären mit Fisch'],
        correctAnswer: 'waren völlig erstaunt',
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
          Am Lagerfeuer
          </Typography>
            <Box className="text-image-container">
                  <div className="image-container"> 
                    <img
                      src={Lagerfeuer}
                      alt="Lagerfeuer"
                    />
                  </div>
                  <Typography variant="body1" gutterBottom className="text-content">
                  Letztes Wochenende war ich mit ein paar Freunden im Park, wo wir ein Lagerfeuer machen und grillen wollten. Alle hatten ziemlich viel zu essen und zu trinken dabei. Kristina und Markus brachten mehrere Flaschen Limonade, Bier und Wein mit. Paul erschien am Lagerfeuer mit seinem kleinen Bruder, mit dem er vorher angeln war. Sie hatten tatsächlich etwas gefangen: zwei recht große Fische, die wir über dem Feuer grillen konnten. Das Fleisch und die Würste, die Maria mitgebracht hatte, hielten wir an Stöcken in die Flammen. Ich als Vegetarier war für das Gemüse zuständig: Kartoffeln, Avocados und Pilze. Und Nudelsalat – der darf natürlich bei keinem Picknick fehlen! Leider hatte ich das Knoblauchbrot zu Hause vergessen. Da passierte etwas Unglaubliches: Als es schon dunkel war, raschelte es plötzlich im Gebüsch. Zum Vorschein kamen zwei Waschbären. Sie sahen uns an und kamen näher. Innerhalb von Sekunden veranstalteten sie ein ordentliches Chaos auf unserer Picknickdecke. Sie schmissen Wein- und Bierflaschen um und machten sich über das Fleisch her. Die Nudeln blieben aber unberührt – die mochten sie wohl nicht! Einen Augenblick später waren die Tiere schon wieder verschwunden. Wir waren völlig perplex. Erst danach stellten wir fest, dass sie uns sogar einen gegrillten Fisch geraubt hatten!
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

export default Text8;
