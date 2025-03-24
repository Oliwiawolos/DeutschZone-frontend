import React, { useState } from 'react';
import { Card, CardContent, Box, Typography, Grid,Button } from '@mui/material';
import './styletests.css';
import Footer from '../../../Footer';
import clothes from '../../../images/Clothes-voc.png';

const correctOrder = [
    'die Bluse',
    'der Pullover',
    'die Jacke',
    'der Mantel',
    'die Shorts',
    'die Hose',
    'der Rock',
    'das Kleid',
    'der Anzug',
    'der Schlafanzug',
    'der Schlafrock',
    'die Uhr',
    'der Schuh',
    'der Badeschuh',
    'die Brille',
    'die Schirmmütze',
    'die Socke',
    'die Mütze',
    'die Tüte',
    'der Hut',
    'die Krawatte'
  ];
  
  

const Clothestest = () => {
    const [items, setItems] = useState([
        { id: '1', content: 'die Mütze' },
    { id: '2', content: 'der Schuh' },
    { id: '3', content: 'der Mantel' },
    { id: '4', content: 'die Schirmmütze' },
    { id: '5', content: 'der Anzug' },
    { id: '6', content: 'die Socke' },
    { id: '7', content: 'der Badeschuh' },
    { id: '8', content: 'die Krawatte' },
    { id: '9', content: 'die Uhr' },
    { id: '10', content: 'die Hose' },
    { id: '11', content: 'die Shorts' },
    { id: '12', content: 'die Tüte' },
    { id: '13', content: 'der Pullover' },
    { id: '14', content: 'der Hut' },
    { id: '15', content: 'die Bluse' },
    { id: '16', content: 'der Schlafanzug' },
    { id: '17', content: 'die Jacke' },
    { id: '18', content: 'der Rock' },
    { id: '19', content: 'das Kleid' },
    { id: '20', content: 'die Brille' },
    { id: '21', content: 'der Schlafrock' }
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
                <img src={clothes} alt="Clothes" />
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

export default Clothestest;
