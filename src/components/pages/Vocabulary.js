import React from 'react'
import '../../App.css'
import VocabularyItems from './VocabularyItems'
import './Vocabulary.css'
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
import Footer from '../Footer'
function Vocabulary() {
  return (
    <>
    <div className="card1">
    <div className="cards">
        <div className="cards_wrapper">
            <ul className="cards_items">
                <VocabularyItems
                src={animalsImage}
                text="Animals"
                path='./animals'
                />
                <VocabularyItems
                src={travel}
                text="Travel"
                path='./travel'
                />
            </ul>
            <ul className="cards_items">
                <VocabularyItems
                src={clothes}
                text="Clothes"
                path='./clothes'
                />
                <VocabularyItems
                src={weather}
                text="Weather"
                path='./weather'
                />
            </ul>
            <ul className="cards_items">
                <VocabularyItems
                src={home}
                text="Home & Family"
                path='./home-family'
                />
                <VocabularyItems
                src={sports}
                text="Sports"
                path='./sports'
                />
            </ul>
            <ul className="cards_items">
                <VocabularyItems
                src={professions}
                text="Professions"
                path='./professions'
                />
                <VocabularyItems
                src={vehicles}
                text="Vehicles"
                path='./vehicles'
                />
            </ul>
            <ul className="cards_items">
                <VocabularyItems
                src={bodyParts}
                text="Body Parts"
                path='./body-parts'
                />
                <VocabularyItems
                src={grocery}
                text="Grocery"
                path='./grocery'
                />
            </ul>
        </div>
        </div>
    </div>
    <Footer />
    </>
    
  )
}

export default Vocabulary
