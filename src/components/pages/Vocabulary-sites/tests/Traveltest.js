import React, { useState } from 'react';
import { Card, CardContent, Box, Typography, Grid,Button } from '@mui/material';
import './styletests.css';
import Footer from '../../../Footer';
import travel from '../../../images/Travel.png';

const correctOrder = [
    'das Flugzeug',
    'der Rucksack',
    'das Schloss',
    'der Pass',
    'der Pilot',
    'der Koffer',
    'die Rezeption',
    'der Schlüssel',
    'das Zimmer',
    'das Zeichen',
    'der Reiseführer',
    'die Karte',
    'das Denkmal',
    'das Camp',
    'das Ticket',
    'der Flughafen',
    'die Währung',
    'das Taxi',
    'die Apotheke',
    'die Insel',
    'das Gebirge'
  ];
  

const Traveltest = () => {
    const [items, setItems] = useState([
        { id: '1', content: 'die Karte' },
        { id: '2', content: 'der Reiseführer' },
        { id: '3', content: 'das Gebirge' },
        { id: '4', content: 'der Pass' },
        { id: '5', content: 'das Camp' },
        { id: '6', content: 'die Insel' },
        { id: '7', content: 'die Apotheke' },
        { id: '8', content: 'die Rezeption' },
        { id: '9', content: 'das Ticket' },
        { id: '10', content: 'das Flugzeug' },
        { id: '11', content: 'das Zeichen' },
        { id: '12', content: 'das Zimmer' },
        { id: '13', content: 'der Flughafen' },
        { id: '14', content: 'das Denkmal' },
        { id: '15', content: 'der Schlüssel' },
        { id: '16', content: 'die Währung' },
        { id: '17', content: 'der Koffer' },
        { id: '18', content: 'das Schloss' },
        { id: '19', content: 'das Taxi' },
        { id: '20', content: 'der Pilot' },
        { id: '21', content: 'der Rucksack' }
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
                <img src={travel} alt="Travel" />
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

export default Traveltest;
