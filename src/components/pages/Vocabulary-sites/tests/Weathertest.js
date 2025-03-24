import React, { useState } from 'react';
import { Card, CardContent, Box, Typography, Grid,Button } from '@mui/material';
import './styletests.css';
import Footer from '../../../Footer';
import weather from '../../../images/Weather.png';

const correctOrder = [
    'die Sonne',
    'die Bewölkung',
    'der Regen',
    'die Schneeflocke',
    'kalt',
    'heiß',
    'die Wolke',
    'der Wind',
    'das Gewitter',
    'der Sturmwind',
    'der Regenbogen',
    'der Schnee',
    'der Nebel',
    'der Blitz'
  ];
  
const Weathertest = () => {
    const [items, setItems] = useState([
        { id: '1', content: 'der Sturmwind' },
        { id: '2', content: 'die Bewölkung' },
        { id: '3', content: 'die Schneeflocke' },
        { id: '4', content: 'der Nebel' },
        { id: '5', content: 'kalt' },
        { id: '6', content: 'die Wolke' },
        { id: '7', content: 'heiß' },
        { id: '8', content: 'der Blitz' },
        { id: '9', content: 'der Regenbogen' },
        { id: '10', content: 'die Sonne' },
        { id: '11', content: 'das Gewitter' },
        { id: '12', content: 'der Regen' },
        { id: '13', content: 'der Schnee' },
        { id: '14', content: 'der Wind' }
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
                <img src={weather} alt="Weather" />
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

export default Weathertest;
