import React, { useState } from 'react';
import { Card, CardContent, Box, Typography, Grid,Button } from '@mui/material';
import './styletests.css';
import Footer from '../../../Footer';
import professions from '../../../images/Professions.png';

const correctOrder = [
    'der Landwirt',
    'der Arzt',
    'die Stewardess',
    'der Löscher',
    'die Pflegerin',
    'der Jurist',
    'der Fotograf',
    'der Konditor',
    'der Soldat',
    'der Koch',
    'der Taucher',
    'die Sängerin',
    'der Richter',
    'der Tierarzt',
    'der Friseur',
    'der Fahrer',
    'der Maler',
    'der Musiker',
    'der Kellner',
    'der Polizist',
    'die Putzfrau'
  ];
  
const Professionstest = () => {
    const [items, setItems] = useState([
        { id: '1', content: 'die Pflegerin' },
    { id: '2', content: 'der Landwirt' },
    { id: '3', content: 'der Musiker' },
    { id: '4', content: 'der Friseur' },
    { id: '5', content: 'der Richter' },
    { id: '6', content: 'der Soldat' },
    { id: '7', content: 'die Stewardess' },
    { id: '8', content: 'die Putzfrau' },
    { id: '9', content: 'der Konditor' },
    { id: '10', content: 'der Tierarzt' },
    { id: '11', content: 'der Arzt' },
    { id: '12', content: 'der Taucher' },
    { id: '13', content: 'der Kellner' },
    { id: '14', content: 'der Polizist' },
    { id: '15', content: 'der Fahrer' },
    { id: '16', content: 'der Fotograf' },
    { id: '17', content: 'die Sängerin' },
    { id: '18', content: 'der Koch' },
    { id: '19', content: 'der Jurist' },
    { id: '20', content: 'der Maler' },
    { id: '21', content: 'der Löscher' }
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
                <img src={professions} alt="Professions" />
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

export default Professionstest;
