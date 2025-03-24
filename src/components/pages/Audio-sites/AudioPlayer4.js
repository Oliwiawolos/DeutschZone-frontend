import React, { useState } from 'react';
import {Card, CardContent, Typography, Button as MuiButton, Grid} from '@mui/material';
import Geburtstag from '../../videos/Geburtstag.ogg'
import './AudioPlayer.css'
import Footer from '../../Footer'
function AudioPlayer4() {
    const questions=[
        {
            id: 1,
            question:'Meine Cousine ist gestern … Jahre alt geworden',
            options: ['13','30','33'],
            correctAnswer:'30',
        },
        {
            id:2,
            question:'Jeder Gast bewunderte ...',
            options:['ihr jugendliches Aussehen','ihre große Wohnung','das leckere Essen'],
            correctAnswer:'ihr jugendliches Aussehen',
        },
        {
            id:3,
            question:'Die Gäste ...',
            options:['hatten nicht genug Platz in der Wohnung','mussten etwas zusammenrücken','aßen kaum von den Kuchen und Torten'],
            correctAnswer:'mussten etwas zusammenrücken'
        },
        {
            id:4,
            question:'Kartoffelsalat und Würstchen ...',
            options:['schmecken der Erzählerin nicht','gab es auf der Party nicht','gab es zum Abendessen'],
            correctAnswer: 'gab es zum Abendessen'
        },
        {
            id:5,
            question:'Was machten die Katzen?',
            options:['Sie hatten ein Geschenk geöffnet','Sie fraßen am Buffet','Sie tranken Wasser'],
            correctAnswer: 'Sie hatten ein Geschenk geöffnet'
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
                        Der Geburtstag meiner Cousine
                    </Typography>
                    <audio controls className="audio-player">
                        <source src={Geburtstag} type="audio/mpeg" />
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

export default AudioPlayer4
