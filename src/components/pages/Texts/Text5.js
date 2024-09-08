import React, { useState } from 'react';
import { Card, CardContent, Typography, Box,Button as MuiButton, Grid } from '@mui/material';
import './Text.css'; 
import Footer from '../../Footer'
import Verkehrsmittel from '../../images/Verkehrsmittel.png'
function Text5() {
  const questions = [
    {
      id: 1,
      question: 'Wohin fuhr Matthias?',
      options: ['in die Südsee', 'ans Mittelmeer','an die Nordsee','an die Ostsee'],
      correctAnswer: 'an die Nordsee',
    },
    {
      id: 2,
      question: 'Wo leben die Eltern von Matthias?',
      options: ['im Hotel', 'in einer Großstadt','auf einer Insel','in den Bergen'],
      correctAnswer: 'auf einer Insel',
    },
    {
      id: 3,
      question: 'Aus welchem Land stammt der Student Bernd?',
      options: ['aus der Schweiz', 'aus Österreich', 'aus Frankreich','aus Deutschland'],
      correctAnswer: 'aus der Schweiz',
    },
    {
      id: 4,
      question: 'Mit welchem Fahrzeug besichtigte Bernd die Stadt Paris?',
      options: ['mit der U-Bahn', 'mit dem Auto', 'mit dem Bus','mit dem Fahrrad'],
      correctAnswer: 'mit der U-Bahn',
    },
    {
      id: 5,
      question: 'Was mag der Österreicher Thomas?',
      options: ['große Städte', 'die Berge und die Natur', 'überfüllte Autobahnen','den Wind und das Meer'],
      correctAnswer: 'die Berge und die Natur',
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
          Verkehrsmittel
          </Typography>
            <Box className="text-image-container">
                  <div className="image-container"> 
                    <img
                      src={Verkehrsmittel}
                      alt="Verkehrsmittel"
                    />
                  </div>
                  <Typography variant="body1" gutterBottom className="text-content">
                  In München treffen sich drei Studenten. Sie kennen sich von der Universität. Der Deutsche Matthias erzählt von seinem Urlaub in Norddeutschland. "Ich fuhr mit dem Bus zum Bahnhof und stieg in einen Zug, der an die Nordsee fuhr. Meine Eltern leben auf einer Insel, die man nur mit einer Fähre erreichen kann. Auf der Insel fährt kein Auto und keine Bahn. Man nimmt das Fahrrad oder geht zu Fuß. Ich liebe die Nordsee, denn ich kann die Schiffe in der Ferne betrachten. Manchmal miete ich ein Boot und fahre auf eine andere Insel. Der zweite Student beginnt zu erzählen. Sein Name ist Bernd. "Wir Schweizer reisen gerne in andere Städte. In Barcelona habe ich ein Auto gemietet und mir die Stadt angesehen. Außerdem fuhr ich mit der Tram. Das ist eine Straßenbahn. Anschließend bin ich mit einem Taxi zum Flughafen gefahren. Ich flog nach Paris. Dort habe ich mir kein Auto gemietet. Es herrschte viel Verkehr auf den Straßen. Da war mir die U-Bahn lieber. Der dritte Student ist Österreicher. Er heißt Thomas. "Ich liebe die Berge und die Natur und fuhr mit dem Motorrad herum. Leider waren auf den Autobahnen viele Lastwagen und Autos unterwegs. Das mag ich nicht."
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

export default Text5;
