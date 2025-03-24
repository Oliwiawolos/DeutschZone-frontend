import React, { useState } from 'react';
import {Card, CardContent, Typography, Button as MuiButton, Grid} from '@mui/material';
import Olympische from '../../videos/Olympische.ogg'
import './AudioPlayer.css'
import Footer from '../../Footer'
function AudioPlayer7() {
    const questions=[
        {
            id: 1,
            question:'China, USA und Russland gewinnen oft Medaillen ...?',
            options: ['beim Eishockey','beim Eiskunstlaufen','beim Skispringen'],
            correctAnswer:'beim Eiskunstlaufen',
        },
        {
            id:2,
            question:'Katarina Witt und Sven Hannawald sind zwei deutsche Sportler, ...',
            options:['die dieses Jahr bei den Olympischen Spielen um eine Medaille kämpfen','die früher sehr erfolgreich waren','die immer mit viel Eleganz an den Wettbewerben teilnehmen'],
            correctAnswer:'die früher sehr erfolgreich waren',
        },
        {
            id:3,
            question:'Das wichtigste bei Olympia ist ...',
            options:['gewinnen','viel Erfolg haben','teilnehmen'],
            correctAnswer:'teilnehmen'
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
                        Olympische Winterspiele
                    </Typography>
                    <audio controls className="audio-player">
                        <source src={Olympische} type="audio/mpeg" />
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

export default AudioPlayer7
