import React, { useState } from 'react';
import { Card, CardContent, Box, Typography, Grid,Button } from '@mui/material';
import './styletests.css';
import Footer from '../../../Footer';
import vehicles from '../../../images/Vehicles.png';

const correctOrder = [
    'das Auto',
    'der Bus',
    'das Segelboot',
    'der Traktor',
    'das Schiff',
    'der Truck',
    'der Roller',
    'das Fahrrad',
    'das Motorrad',
    'die U-bahn',
    'die Tram',
    'das Taxi',
    'das Flugzeug',
    'die Ambulanz'
  ];
  
  
const Vehiclestest = () => {
    const [items, setItems] = useState([
        { id: '1', content: 'die U-bahn' },
        { id: '2', content: 'das Schiff' },
        { id: '3', content: 'das Auto' },
        { id: '4', content: 'der Roller' },
        { id: '5', content: 'das Fahrrad' },
        { id: '6', content: 'der Traktor' },
        { id: '7', content: 'die Tram' },
        { id: '8', content: 'die Ambulanz' },
        { id: '9', content: 'das Motorrad' },
        { id: '10', content: 'das Segelboot' },
        { id: '11', content: 'das Flugzeug' },
        { id: '12', content: 'der Bus' },
        { id: '13', content: 'der Truck' },
        { id: '14', content: 'das Taxi' }
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
                <img src={vehicles} alt="Vehicles" />
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

export default Vehiclestest;
