import React, { useState } from 'react';
import { Card, CardContent, Box, Typography, Grid,Button } from '@mui/material';
import './styletests.css';
import Footer from '../../../Footer';
import grocery from '../../../images/Grocery.png';

const correctOrder = [
    'das Brot',
    'die Butter',
    'das Brötchen',
    'der Joghurt',
    'der Käse',
    'die Milch',
    'das Ei',
    'der Pfeffer',
    'das Fleisch',
    'das Mehl',
    'der Zucker',
    'das Salz',
    'die Nudeln',
    'die Tomate',
    'der Fisch',
    'die Gurke',
    'die Kartoffel',
    'der Reis',
    'die Karotte',
    'der Paprika',
    'der Apfel',
    'die Nuss',
    'die Traube',
    'die Zitrone',
    'der Salat',
    'der Saft',
    'das Eis',
    'das Wasser'
  ];
  
const Grocerytest = () => {
  const [items, setItems] = useState([
    { id: '1', content: 'die Karotte' },
    { id: '2', content: 'der Zucker' },
    { id: '3', content: 'die Butter' },
    { id: '4', content: 'der Joghurt' },
    { id: '5', content: 'das Brötchen' },
    { id: '6', content: 'der Salat' },
    { id: '7', content: 'die Gurke' },
    { id: '8', content: 'die Traube' },
    { id: '9', content: 'das Eis' },
    { id: '10', content: 'die Zitrone' },
    { id: '11', content: 'die Nuss' },
    { id: '12', content: 'der Reis' },
    { id: '13', content: 'das Ei' },
    { id: '14', content: 'die Tomate' },
    { id: '15', content: 'der Apfel' },
    { id: '16', content: 'das Mehl' },
    { id: '17', content: 'das Brot' },
    { id: '18', content: 'das Salz' },
    { id: '19', content: 'der Fisch' },
    { id: '20', content: 'die Milch' },
    { id: '21', content: 'der Pfeffer' },
    { id: '22', content: 'das Wasser' },
    { id: '23', content: 'der Paprika' },
    { id: '24', content: 'das Fleisch' },
    { id: '25', content: 'die Nudeln' },
    { id: '26', content: 'die Kartoffel' },
    { id: '27', content: 'der Saft' },
    { id: '28', content: 'der Käse' }
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
                <img src={grocery} alt="Grocery" />
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

export default Grocerytest;
