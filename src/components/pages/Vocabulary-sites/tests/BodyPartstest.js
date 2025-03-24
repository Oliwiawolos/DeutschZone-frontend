import React, { useState } from 'react';
import { Card, CardContent, Box, Typography, Grid,Button } from '@mui/material';
import './styletests.css';
import Footer from '../../../Footer';
import bodyparts from '../../../images/BodyParts.png';

const correctOrder = [
    'das Gesicht',
    'die Augen',
    'das Ohr',
    'der Bart',
    'der Zahn',
    'die Nase',
    'der Finger',
    'die Zunge',
    'der Mund',
    'das Haar',
    'der Rücken',
    'die Beine',
    'die Wange',
    'die Hand',
    'der Ellbogen',
    'der Fuß',
    'der Arm',
    'das Knie',
    'das Gehirn',
    'der Knochen',
    'der Nagel'
  ];
  
  
const BodyParts = () => {
    const [items, setItems] = useState([
    { id: '1', content: 'die Nase' },
    { id: '2', content: 'das Knie' },
    { id: '3', content: 'die Wange' },
    { id: '4', content: 'der Bart' },
    { id: '5', content: 'der Zahn' },
    { id: '6', content: 'das Haar' },
    { id: '7', content: 'der Rücken' },
    { id: '8', content: 'das Gesicht' },
    { id: '9', content: 'die Augen' },
    { id: '10', content: 'die Beine' },
    { id: '11', content: 'der Ellbogen' },
    { id: '12', content: 'der Finger' },
    { id: '13', content: 'die Zunge' },
    { id: '14', content: 'das Ohr' },
    { id: '15', content: 'der Arm' },
    { id: '16', content: 'das Gehirn' },
    { id: '17', content: 'der Fuß' },
    { id: '18', content: 'der Mund' },
    { id: '19', content: 'die Hand' },
    { id: '20', content: 'der Nagel' },
    { id: '21', content: 'der Knochen' }
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
                <img src={bodyparts} alt="BodyParts" />
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

export default BodyParts;
