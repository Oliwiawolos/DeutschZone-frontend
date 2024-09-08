import React, { useState } from 'react';
import {Card, CardContent, Typography, Button as MuiButton, Grid} from '@mui/material';
import Karnaval from '../../videos/Karnaval.mp3'
import './AudioPlayer.css'
import Footer from '../../Footer'
function AudioPlayer8() {
    const questions=[
        {
            id: 1,
            question:'Was folgt im Kalender direkt auf die Karnevalszeit?',
            options: ['Adventszeit','Herbst','Fastenzeit'],
            correctAnswer:'Fastenzeit',
        },
        {
            id:2,
            question:'Die Narren nutzen den Karneval, um ...',
            options:['zur Ruhe zu kommen','sich über Politik lustig zu machen','christliche Traditionen zu feiern'],
            correctAnswer:'sich über Politik lustig zu machen',
        },
        {
            id:3,
            question:'An Weiberfastnacht ...',
            options:['werden den Männern die Haare geschnitten','tanzen die wilden Weiber auf dem Marktplatz','übernehmen die Frauen die Kontrolle über die Stadt'],
            correctAnswer:'übernehmen die Frauen die Kontrolle über die Stadt'
        },
        {
            id:4,
            question:'Der Rosenmontag ist ...',
            options:['ein besonderer Tag für verliebte Narren','der wichtigste Tag im Karneval','der Tag, an dem Rosen geworfen werden'],
            correctAnswer: 'der wichtigste Tag im Karneval'
        },
        {
            id:5,
            question:'Wofür steht nach einer Theorie die blaue Farbe im Namen Veilchendienstag?',
            options:['die kalten Temperaturen','die Trauer um das Ende des Karnevals','den Alkoholkonsum der Karnevalisten'],
            correctAnswer: 'den Alkoholkonsum der Karnevalisten'
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
                        Die fünfte Jahreszeit
                    </Typography>
                    <audio controls className="audio-player">
                        <source src={Karnaval} type="audio/mpeg" />
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

export default AudioPlayer8
