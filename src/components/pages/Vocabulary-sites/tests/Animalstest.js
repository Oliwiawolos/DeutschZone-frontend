import React, { useState } from 'react';
import { Card, CardContent, Box, Typography, Grid,Button } from '@mui/material';
import './styletests.css';
import Footer from '../../../Footer';
import animals from '../../../images/monkey.png';

const correctOrder = [
    'die Katze',
'der Hund',
'das Kaninchen',
'der Tiger',
'der Delfin',
'der Affe',
'der Pinguin',
'die Schlange',
'der Vogel',
'die Giraffe',
'die Ratte',
'die Kuh',
'das Eichhörnchen',
'die Qualle',
'der Elefant',
'die Schildkröte',
'der Frosch',
'der Schmetterling',
'das Kamel',
'der Fisch',
'der Wal',
'der Widder',
'der Wolf',
'der Hai',
'der Löwe',
'das Pferd',
'der Krebs',
'die Spinne'
  ];

const Animalstest = () => {
  const [items, setItems] = useState([
    { id: '1', content: 'die Spinne' },
    { id: '2', content: 'das Kamel' },
    { id: '3', content: 'die Ratte' },
    { id: '4', content: 'der Fisch' },
    { id: '5', content: 'die Qualle' },
    { id: '6', content: 'der Löwe' },
    { id: '7', content: 'der Wal' },
    { id: '8', content: 'die Schildkröte' },
    { id: '9', content: 'der Krebs' },
    { id: '10', content: 'der Wolf' },
    { id: '11', content: 'die Kuh' },
    { id: '12', content: 'das Pferd' },
    { id: '13', content: 'der Widder' },
    { id: '14', content: 'der Frosch' },
    { id: '15', content: 'der Schmetterling' },
    { id: '16', content: 'der Hai' },
    { id: '17', content: 'das Eichhörnchen' },
    { id: '18', content: 'der Elefant' },
    { id: '19', content: 'der Tiger' },
    { id: '20', content: 'die Giraffe' },
    { id: '21', content: 'die Katze' },
    { id: '22', content: 'der Pinguin' },
    { id: '23', content: 'der Affe' },
    { id: '24', content: 'die Schlange' },
    { id: '25', content: 'der Delfin' },
    { id: '26', content: 'das Kaninchen' },
    { id: '27', content: 'der Hund' },
    { id: '28', content: 'der Vogel' }
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
                <img src={animals} alt="Animals" />
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

export default Animalstest;
