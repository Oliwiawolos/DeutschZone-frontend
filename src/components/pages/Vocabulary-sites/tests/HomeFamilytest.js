import React, { useState } from 'react';
import { Card, CardContent, Box, Typography, Grid,Button } from '@mui/material';
import './styletests.css';
import Footer from '../../../Footer';
import homefamily from '../../../images/HomeFamily.png';

const correctOrder = [
    'das Haus',
    'das Zimmer',
    'das Bad',
    'das Fenster',
    'die Küche',
    'die Treppe',
    'die Tür',
    'der Salon',
    'der Balkon',
    'die Mutter',
    'die Garage',
    'der Essraum',
    'das Kabinett',
    'der Vater',
    'die Familie',
    'die Schwester',
    'das Kind',
    'der Bruder',
    'der Opa',
    'der Schrank',
    'die Adoption',
    'die Tante',
    'der Onkel',
    'das Ehepaar',
    'die Beziehung',
    'der Cousin',
    'die Oma',
    'der Götti'
  ];
  

const HomeFamilytest = () => {
  const [items, setItems] = useState([
    { id: '1', content: 'der Opa' },
    { id: '2', content: 'der Balkon' },
    { id: '3', content: 'die Adoption' },
    { id: '4', content: 'die Mutter' },
    { id: '5', content: 'das Fenster' },
    { id: '6', content: 'der Vater' },
    { id: '7', content: 'die Familie' },
    { id: '8', content: 'die Garage' },
    { id: '9', content: 'die Küche' },
    { id: '10', content: 'das Bad' },
    { id: '11', content: 'der Salon' },
    { id: '12', content: 'die Beziehung' },
    { id: '13', content: 'der Schrank' },
    { id: '14', content: 'der Götti' },
    { id: '15', content: 'die Schwester' },
    { id: '16', content: 'der Essraum' },
    { id: '17', content: 'das Kind' },
    { id: '18', content: 'das Kabinett' },
    { id: '19', content: 'der Onkel' },
    { id: '20', content: 'die Oma' },
    { id: '21', content: 'das Zimmer' },
    { id: '22', content: 'das Haus' },
    { id: '23', content: 'die Treppe' },
    { id: '24', content: 'die Tante' },
    { id: '25', content: 'das Ehepaar' },
    { id: '26', content: 'der Bruder' },
    { id: '27', content: 'der Cousin' },
    { id: '28', content: 'die Tür' }
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
                <img src={homefamily} alt="HomeFamily" />
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

export default HomeFamilytest;
