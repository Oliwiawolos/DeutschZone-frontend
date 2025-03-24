import React, { useState } from 'react';
import { Card, CardContent, Box, Typography, Grid,Button } from '@mui/material';
import './styletests.css';
import Footer from '../../../Footer';
import sports from '../../../images/Sports.png';

const correctOrder = [
    'der Kraftraum',
    'der Basketball',
    'das Tennis',
    'das Schwimmen',
    'das Laufen',
    'der Fußball',
    'der Sieg',
    'der Volleyball',
    'der Ball',
    'das Golf',
    'das Radfahren',
    'das Tanzen',
    'das Querruder',
    'die Kletterei',
    'das Bogenschießen',
    'das Skifahren',
    'der Handball',
    'der Kanusport',
    'der Reitsport',
    'das Ringen',
    'das Turnen'
  ];
  
  
  

const Sportstest = () => {
    const [items, setItems] = useState([
        { id: '1', content: 'der Reitsport' },
        { id: '2', content: 'der Kraftraum' },
        { id: '3', content: 'das Laufen' },
        { id: '4', content: 'die Kletterei' },
        { id: '5', content: 'das Ringen' },
        { id: '6', content: 'der Sieg' },
        { id: '7', content: 'das Turnen' },
        { id: '8', content: 'das Querruder' },
        { id: '9', content: 'der Fußball' },
        { id: '10', content: 'der Handball' },
        { id: '11', content: 'das Tanzen' },
        { id: '12', content: 'das Skifahren' },
        { id: '13', content: 'der Volleyball' },
        { id: '14', content: 'das Bogenschießen' },
        { id: '15', content: 'das Golf' },
        { id: '16', content: 'das Radfahren' },
        { id: '17', content: 'das Tennis' },
        { id: '18', content: 'der Ball' },
        { id: '19', content: 'der Basketball' },
        { id: '20', content: 'der Kanusport' },
        { id: '21', content: 'das Schwimmen' }
  ]);
  const [feedback, setFeedback] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('itemIndex', index);
  };

  const handleDrop = (e, index) => {
    const fromIndex = e.dataTransfer.getData('itemIndex');
    const updatedItems = [...items];
    const [movedItem] = updatedItems.splice(fromIndex, 1);
    updatedItems.splice(index, 0, movedItem);
    setItems(updatedItems);
    setFeedback('');
    setIsCorrect(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const checkAnswers = () => {
    const currentOrder = items.map(item => item.content);
    if (JSON.stringify(currentOrder) === JSON.stringify(correctOrder)) {
      setFeedback('Correct! Well done!');
      setIsCorrect(true);
    } else {
      setFeedback('Incorrect. Try again.');
    }
  };
  return (
    <>
    <div className="texts-container">
      
        <Grid item xs={12} md={8}>
          <Card className="excercise-card">
            <CardContent>
              <Typography className="excercise-text" variant="h5" gutterBottom>
                Put the words in the correct order according to the picture.
              </Typography>
              <Box className="excercise-box">
                <img src={sports} alt="Sports" />
                <ul className="draggable-list">
                  {items.map((item, index) => (
                    <li
                      key={item.id}
                      draggable
                      onDragStart={(e) => handleDragStart(e, index)}
                      onDragOver={handleDragOver}
                      onDrop={(e) => handleDrop(e, index)}
                      className="list-item"
                      style={{
                        opacity: 1, 
                      }}
                    >
                      {index + 1}. {item.content}
                    </li>
                  ))}
                </ul>
                {!isCorrect && (
                  <Button variant="contained" color="primary" className="custom-button" onClick={checkAnswers}>
                    Check Answers
                  </Button>
                )}
                {feedback && (
                  <Typography variant="h6" className="right" color={feedback === 'Correct! Well done!' ? 'green' : 'red'}>
                    {feedback}
                  </Typography>
                )}
              </Box>
            </CardContent>
          </Card>
      </Grid>
      </div>
      <div className="animal-footer">
      <Footer />
      </div>
    </>
  );
};

export default Sportstest;
