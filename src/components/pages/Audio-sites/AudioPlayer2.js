import React, { useState } from 'react';
import {Card, CardContent, Typography, Button as MuiButton, Grid} from '@mui/material';
import Bahnhof from '../../videos/AufDemBahnhof.ogg'
import './AudioPlayer.css'
import Footer from '../../Footer'
function AudioPlayer2() {
    const questions=[
        {
            id: 1,
            question:'Was machte die Familie auf dem Bahnhof als Erstes?',
            options: ['Sie kaufte die Fahrkarten','Sie erkundigte sich am Schalter nach dem Zug', 'Sie schaute nach, von wo ihr Zug abfahren würde'],
            correctAnswer:'Sie schaute nach, von wo ihr Zug abfahren würde',
        },
        {
            id:2,
            question:'Die Familie hatte noch Zeit bis zur Abfahrt. Was machte sie?',
            options:['Sie ging langsam über den Bahnhof','Sie schaute sich einen Güterzug an','Sie beobachtete, wie ein Güterzug abfuhr.'],
            correctAnswer:'Sie ging langsam über den Bahnhof',
        },
        {
            id:3,
            question:'Was geschah, als die Familie auf Gleis 8 ankam?',
            options:['Es waren noch zwei Minuten Zeit bis zur Abfahrt','Der Zug fuhr gerade ab','Der Zug wartete noch auf sie'],
            correctAnswer:'Der Zug wartete noch auf sie'
        },
        {
            id:4,
            question:'Warum lief die Familie mit dem Gepäck durch den Zug?',
            options:['In den anderen Wagen waren nicht genügend Sitzplätze frei','Die Familie hatte Sitzplätze in einem anderen Wagen reserviert','Die Familie wollte im Speisewagen etwas essen'],
            correctAnswer: 'Die Familie hatte Sitzplätze in einem anderen Wagen reserviert'
        },
    ];
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [showResults, setShowResults]= useState(false);
    const [correctCount, setCorrectCount]=useState(0);

    const handleAnswerChange=(questionId, option) => {
        setSelectedAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionId]: option,
        }));
    };
    const handleSubmit =()=>{
        let count=0;
        questions.forEach((question)=> {
            if(selectedAnswers[question.id]===question.correctAnswer){
                count++;
            }
        })
    setCorrectCount(count);
    setShowResults(true);
    };

    return (
    <>
    <div className="AudioPlayer-container">
    <Grid container justifyContent="center" className="audio-grid-container">
        <Grid item xs={12} md={8}>
            <Card className="audio-cards">
                <CardContent>
                    <Typography variant="h4" textAlign="center" gutterBottom>
                        Auf dem Bahnhof 
                    </Typography>
                    <audio controls className="audio-player">
                        <source src={Bahnhof} type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                    <Typography variant="body1" className="body1" gutterBottom>
                        Listen to the audio and answet the questions
                    </Typography>
                    {questions.map((question)=>(
                        <div key={question.id} className="questions">
                            <Typography variant="h6">
                                {question.question}
                            </Typography>
                            {question.options.map((option)=>(
                                <div key={option} className="answer-option">
                                    <label
                                    className={
                                        showResults && option=== question.correctAnswer
                                        ? 'correct-answer'
                                        : showResults &&
                                        selectedAnswers[question.id]===option &&
                                        option !== question.correctAnswer
                                        ? 'incorrect-answer'
                                        : ''
                                    }
                                    >
                                        <input 
                                        type="radio"
                                        name={`question-${question.id}`}
                                        value={option}
                                        checked={selectedAnswers[question.id]===option}
                                        onChange={() => handleAnswerChange(question.id, option)}
                                        disabled={showResults}
                                        />
                                        {option}
                                    </label>
                        </div>
                        ))}
                        </div>
                    )
                    )}
                    {showResults && (
                        <Typography variant="h6" className="results-text">
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
  )
}

export default AudioPlayer2
