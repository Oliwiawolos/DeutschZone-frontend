import React from 'react';
import VocabularyItems from './VocabularyItems';
import './Vocabulary.css';
import animalsImage from '../images/animals.webp';
import bodyParts from '../images/bodyparts.jpg';
import clothes from '../images/clothes.png';
import home from '../images/home.jpg';
import sports from '../images/sports.avif';
import travel from '../images/travel.jpeg';
import vehicles from '../images/vehicles.jpg';
import weather from '../images/weather.jpg';
import grocery from '../images/grocery.jpg';
import professions from '../images/professions.jpg';
import Footer from '../Footer';

function Vocabulary() {
  const items = [
    { src: animalsImage, text: 'Animals', path: './animals' },
    { src: travel, text: 'Travel', path: './travel' },
    { src: clothes, text: 'Clothes', path: './clothes' },
    { src: weather, text: 'Weather', path: './weather' },
    { src: home, text: 'Home & Family', path: './home-family' },
    { src: sports, text: 'Sports', path: './sports' },
    { src: professions, text: 'Professions', path: './professions' },
    { src: vehicles, text: 'Vehicles', path: './vehicles' },
    { src: bodyParts, text: 'Body Parts', path: './body-parts' },
    { src: grocery, text: 'Grocery', path: './grocery' }
  ];

  return (
    <>
      <div className="card1">
        <div className="cards">
          <div className="cards_wrapper">
            {items.map((item, index) => (
              <ul className="cards_items" key={index}>
                <VocabularyItems src={item.src} text={item.text} path={item.path} />
              </ul>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Vocabulary;
