import React, { useState } from 'react';
import { Card, CardContent, Typography, Box,Button as MuiButton, Grid } from '@mui/material';
import './Text.css'; 
import Footer from '../../Footer'
import Sprachkurs from '../../images/sprachkurs.jpg'
function Text2() {
  const questions = [
    {
      id: 1,
      question: 'Woher kommt Juliana?',
      options: ['aus Deutschland', 'aus Freiburg','aus Paris','aus Hamburg'],
      correctAnswer: 'aus Paris',
    },
    {
      id: 2,
      question: 'Um wie viel Uhr beginnt der Unterricht?',
      options: ['9.00', '8.00','8.30','9.30'],
      correctAnswer: '9.00',
    },
    {
      id: 3,
      question: 'In welcher Stadt macht Marie einen Sprachkurs?',
      options: ['Hamburg', 'Bremen', 'Paris','Freiburg'],
      correctAnswer: 'Hamburg',
    },
    {
      id: 4,
      question: 'Warum macht Marie einen Sprachkurs?',
      options: ['Sie hat einen deutschen Freund', 'Sie mag die deutsche Sprache', 'Sie möchte in Deutschland studieren','Ihre Eltern leben in Deutschland'],
      correctAnswer: 'Sie möchte in Deutschland studieren',
    },
    {
      id: 5,
      question: 'Wie viele Wochen verbringen Juliana und Marie in Deutschland?',
      options: ['9', '6', '2','1'],
      correctAnswer: '6',
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
            Juliana in Deutschland
          </Typography>
            <Box className="text-image-container">
                  <div className="image-container"> 
                    <img
                      src={Sprachkurs}
                      alt="Sprachkurs"
                    />
                  </div>
                  <Typography variant="body1" gutterBottom className="text-content">
                  Juliana kommt aus Paris. Das ist die Hauptstadt von Frankreich. In diesem Sommer macht sie einen Sprachkurs in Freiburg. Das ist eine Universitätsstadt im Süden von Deutschland.Es gefällt ihr hier sehr gut. Morgens um neun beginnt der Unterricht, um vierzehn Uhr ist er zu Ende. In ihrer Klasse sind außer Juliana noch 14 weitere Schüler, acht Mädchen und sechs Jungen. Sie kommen alle aus Frankreich, aber nicht aus Paris. Julianas beste Freundin Marie macht auch gerade einen Sprachkurs, aber in Hamburg, das liegt ganz im Norden von Deutschland. Wenn die beiden ihre Schule beendet haben, wollen sie in Deutschland studieren. Juliana will Tierärztin werden, ihre beste Freundin auch. Aber Maries Eltern sind beide Zahnärzte, deshalb wird Marie wahrscheinlich auch Zahnärztin werden. Juliana und Marie verbringen insgesamt sechs Wochen in Deutschland. Nach dem Sprachkurs machen sie eine Prüfung.
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

export default Text2;
