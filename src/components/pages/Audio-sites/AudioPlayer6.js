import React, { useState } from 'react';
import {Card, CardContent, Typography, Button as MuiButton, Grid} from '@mui/material';
import Herbst from '../../videos/Herbst.ogg'
import './AudioPlayer.css'
import Footer from '../../Footer'
function AudioPlayer6() {
    const questions=[
        {
            id: 1,
            question:'Wie ist das Wetter an diesem Tag?',
            options: ['Es weht ein starker Wind','Die Sonne scheint','Es regnet viel'],
            correctAnswer:'Es regnet viel.',
        },
        {
            id:2,
            question:'Die Familie der Erzählerin geht zum Drachensteigen ...',
            options:['in den Garten','auf die Felder','auf die Bäume'],
            correctAnswer:'in den Garten',
        },
        {
            id:3,
            question:'Der Vater ging hinaus, um ...',
            options:['im Garten zu arbeiten','in der Pfütze zu spielen','Früchte zu sammeln'],
            correctAnswer:'im Garten zu arbeiten'
        },
        {
            id:4,
            question:'Als der Vater in die Pfütze sprang, ...',
            options:['schützte sich der Igel mit einem Regenschirm','lief ein Igel durch die Pfütze','wurde der Igel nass'],
            correctAnswer: 'wurde der Igel nass'
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
                        Ein Regentag im Herbst
                    </Typography>
                    <audio controls className="audio-player">
                        <source src={Herbst} type="audio/mpeg" />
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
    <Footer />
    </>
  )
}

export default AudioPlayer6
