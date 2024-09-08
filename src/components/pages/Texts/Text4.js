import React, { useState } from 'react';
import { Card, CardContent, Typography, Box,Button as MuiButton, Grid } from '@mui/material';
import './Text.css'; 
import Footer from '../../Footer'
import Farben from '../../images/Farben.webp'
function Text4() {
  const questions = [
    {
      id: 1,
      question: 'Welche Dinge sind gebl?',
      options: ['Erdbeeren', 'Rosen','Mais','Tomaten'],
      correctAnswer: 'Mais',
    },
    {
      id: 2,
      question: 'Was gehört nicht zu blau?',
      options: ['türkis', 'himmelblau','dunkelblau','schwarz'],
      correctAnswer: 'schwarz',
    },
    {
      id: 3,
      question: 'Was ist weiß?',
      options: ['Tauben und Schmuck', 'Kaffee und Mais', 'Schnee und Wolken','Blätter und Gräser'],
      correctAnswer: 'Schnee und Wolken',
    },
    {
      id: 4,
      question: 'Alle Farben zusammen ergibt welche Farbe?',
      options: ['weiß', 'schwarz', 'braun','golden'],
      correctAnswer: 'schwarz',
    },
    {
      id: 5,
      question: 'Welche Farben sind edlen?',
      options: ['golden und silber', 'schwarz und blau', 'lila und rosarot','rot und gelb'],
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
            Die Farben
          </Typography>
            <Box className="text-image-container">
                  <div className="image-container"> 
                    <img
                      src={Farben}
                      alt="Farben"
                    />
                  </div>
                  <Typography variant="body1" gutterBottom className="text-content">
                  Farben machen das Leben bunt. Der Regenbogen besteht aus vielen Farben. Obst und Gemüse ist oft sehr farbig. Und unsere Kleidung kann auch schön bunt sein. Eine starke Farbe ist rot. Viele Früchte sind rot, zum Beispiel Erdbeeren oder Himbeeren. Es gibt auch rotes Gemüse: Tomaten. Viele Blumen sind rot, zum Beispiel Rosen. Gelb wie die Sonne sind auch Bananen, Zitronen oder Mais. Blau ist der Himmel bei schönem Wetter oder auch das Meer oder ein See. Es gibt viele verschiedene Arten von blau: helles blau oder dunkles, türkis oder himmelblau. Alle Farben zusammen ergeben schwarz. Schwarz ist die Nacht. Das Gegenteil von schwarz ist weiß. Es gibt weiße Blumen, die Wolken sind weiß. Oder der Schnee. Sehr viel in der Natur ist grün: Blätter, Gras und Bäume. Die Stämme der Bäume sind meistens braun. Oder auch Kaffee oder gebackenes Brot. Es gibt noch sehr viele Farben: Grau sind zum Beispiel Tauben, orange ist der Himmel bei einem Sonnenuntergang. Eine starke Farbe ist pink: sie fällt auf. In der Natur gibt es pinke Blumen oder auch Vögel. Lila ist ähnlich, viele Blumen sind lila oder rosarot. Die edlen Farben sind golden und silber: Wir finden sie bei Edelsteinen und Schmuck.
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

export default Text4;
