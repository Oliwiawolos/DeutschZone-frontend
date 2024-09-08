import React, { useState } from 'react';
import { Card, CardContent, Typography, Box,Button as MuiButton, Grid } from '@mui/material';
import './Text.css'; 
import Footer from '../../Footer'
import Freund from '../../images/Freund.webp'
function Text9() {
  const questions = [
    {
      id: 1,
      question: 'Warum wird der Freund oft gehänselt und verspottet?',
      options: ['Weil er sehr klein ist', 'Weil er sehr groß ist','Weil er sehr dünn ist','Weil er dick ist'],
      correctAnswer: 'Weil er sehr groß ist',
    },
    {
        id: 2,
        question: 'In welchem Fach war er in der Schule sehr gut?',
        options: ['Sport', 'Kunst','Deutsch','Mathematik'],
        correctAnswer: 'Sport',
      },
      {
        id: 3,
        question: 'Was ist sein Lieblingssport?',
        options: [' Weitsprung', 'Hochsprung','Laufen','Basketball'],
        correctAnswer: 'Basketball',
      },
      {
        id: 4,
        question: 'Welches Hobby hatte er als Kind?',
        options: ['Mit Freunden spielen', 'Malen','Basketballtraining im Verein','Lesen'],
        correctAnswer: 'Basketballtraining im Verein',
      },
      {
        id: 5,
        question: 'Welchen Beruf hat er heute?',
        options: ['Vater', 'Student','Lehrer','Basketballtrainer'],
        correctAnswer: 'Basketballtrainer',
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
          Mein bester Freund
          </Typography>
            <Box className="text-image-container">
                  <div className="image-container"> 
                    <img
                      src={Freund}
                      alt="Freund"
                    />
                  </div>
                  <Typography variant="body1" gutterBottom className="text-content">
                  Heute möchte ich von meinem besten Freund erzählen. Zunächst zu seinem Äußeren. Er ist sehr groß und ragt mit seinen 1,94 Meter Körpergröße aus fast jeder Menschengruppe heraus. Dazu hat er sehr große Füße, was bei einer solchen Größe ja auch nicht ungewöhnlich ist. Auch seine Hände und Ohren erscheinen riesig. Seine Arme und Beine sind zwar lang, aber kräftig, da er sehr gerne Sport treibt. Mein Freund ist Basketballer. Schon als Kind war er immer größer als alle anderen Kinder in seiner Klasse. Er wurde deshalb sehr oft verspottet und gehänselt und hatte kaum Selbstbewusstsein. Er wusste nicht wohin mit seinen langen Armen und Beinen. Außer im Sportunterricht. Hier war er oftmals Klassenbester. Wo die kleineren Klassenkameraden beim Wettlauf noch schnauften und stöhnten, war er meistens schon im Ziel. Beim Hochsprung oder Weitsprung war er absolute Spitze. Aber sein Lieblingssport war schon immer Basketball. Ganz leicht und mit nur einem kleinen Sprung kann er den Korb erreichen und zielsicher fast jeden Ball einwerfen. Seine Eltern erkannten, dass ihm der Sport nicht nur Spaß machte, sondern auch die Möglichkeit gab, Selbstvertrauen aufzubauen. Im Verein mit vielen anderen sehr großen Kindern trainierte er nun viermal die Woche, ging auf eine Sportschule und studierte im Anschluss. Niemand hänselt ihn nun mehr aufgrund seines Aussehens. Mein Freund ist deswegen mein bester Freund, weil er inzwischen als Basketballtrainer sehr viele andere Kinder davon überzeugt hat, Sport im Verein zu treiben, dort Freunde zu finden und durch ihr Hobby Spaß, Freude und Selbstvertrauen zu finden. Dafür bewundere ich ihn.
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

export default Text9;
