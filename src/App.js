import React from 'react';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import Grammar from './components/pages/Grammar';
import GrammarA1 from './components/pages/GrammarA1';
import GrammarA2 from './components/pages/GrammarA2';
import GrammarB1 from './components/pages/GrammarB1';
import GrammarB2 from './components/pages/GrammarB2';
import Vocabulary from './components/pages/Vocabulary';
import Listening from './components/pages/Listening';
import Texts from './components/pages/Texts';
import AudioPlayer from './components/pages/Audio-sites/AudioPlayer'; 
import AudioPlayer2 from './components/pages/Audio-sites/AudioPlayer2'; 
import AudioPlayer3 from './components/pages/Audio-sites/AudioPlayer3'; 
import AudioPlayer4 from './components/pages/Audio-sites/AudioPlayer4'; 
import AudioPlayer5 from './components/pages/Audio-sites/AudioPlayer5'; 
import AudioPlayer6 from './components/pages/Audio-sites/AudioPlayer6'; 
import AudioPlayer7 from './components/pages/Audio-sites/AudioPlayer7'; 
import AudioPlayer8 from './components/pages/Audio-sites/AudioPlayer8';
import Text1 from './components/pages/Texts/Text1' 
import Text2 from './components/pages/Texts/Text2' 
import Text3 from './components/pages/Texts/Text3' 
import Text4 from './components/pages/Texts/Text4' 
import Text5 from './components/pages/Texts/Text5' 
import Text6 from './components/pages/Texts/Text6' 
import Text7 from './components/pages/Texts/Text7' 
import Text8 from './components/pages/Texts/Text8' 
import Text9 from './components/pages/Texts/Text9' 
import Text10 from './components/pages/Texts/Text10' 
import Animals from './components/pages/Vocabulary-sites/Animals'
import Travel from './components/pages/Vocabulary-sites/Travel'
import Clothes from './components/pages/Vocabulary-sites/Clothes'
import Weather from './components/pages/Vocabulary-sites/Weather'
import HomeFamily from './components/pages/Vocabulary-sites/HomeFamily'
import Sports from './components/pages/Vocabulary-sites/Sports'
import Professions from './components/pages/Vocabulary-sites/Professions'
import Vehicles from './components/pages/Vocabulary-sites/Vehicles'
import BodyParts from './components/pages/Vocabulary-sites/BodyParts'
import MonthsDays from './components/pages/Vocabulary-sites/MonthsDays'
import Animalstest from './components/pages/Vocabulary-sites/Animalstest';
function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/grammar' element={<Grammar />} />
        <Route path='/grammar/grammar1' element={<GrammarA1 />} />
        <Route path='/grammar/grammar2' element={<GrammarA2 />} />
        <Route path='/grammar/grammar3' element={<GrammarB1 />} />
        <Route path='/grammar/grammar4' element={<GrammarB2 />} />
        <Route path='/vocabulary' element={<Vocabulary />} />
        <Route path='/vocabulary/animals' element={<Animals />} />
        <Route path='/vocabulary/travel' element={<Travel />} />
        <Route path='/vocabulary/clothes' element={<Clothes />} />
        <Route path='/vocabulary/weather' element={<Animals />} />
        <Route path='/vocabulary/home-family' element={<HomeFamily />} />
        <Route path='/vocabulary/sports' element={<Sports />} />
        <Route path='/vocabulary/professions' element={<Professions />} />
        <Route path='/vocabulary/vehicles' element={<Vehicles />} />
        <Route path='/vocabulary/body-parts' element={<BodyParts/>} />
        <Route path='/vocabulary/months-days' element={<MonthsDays />} />
        <Route path='/vocabulary/animals/animals-test' element={<Animalstest />} />
        <Route path='/listening' element={<Listening />} />
        <Route path="/listening/audio1" element={<AudioPlayer />} />
        <Route path="/listening/audio2" element={<AudioPlayer2 />} />
        <Route path="/listening/audio3" element={<AudioPlayer3 />} />
        <Route path="/listening/audio4" element={<AudioPlayer4 />} />
        <Route path="/listening/audio5" element={<AudioPlayer5 />} />
        <Route path="/listening/audio6" element={<AudioPlayer6 />} />
        <Route path="/listening/audio7" element={<AudioPlayer7 />} />
        <Route path="/listening/audio8" element={<AudioPlayer8 />} />
        <Route path='/texts' element={<Texts />} />
        <Route path='/texts/text1' element={<Text1 />} />
        <Route path='/texts/text2' element={<Text2 />} />
        <Route path='/texts/text3' element={<Text3 />} />
        <Route path='/texts/text4' element={<Text4 />} />
        <Route path='/texts/text5' element={<Text5 />} />
        <Route path='/texts/text6' element={<Text6 />} />
        <Route path='/texts/text7' element={<Text7 />} />
        <Route path='/texts/text8' element={<Text8 />} />
        <Route path='/texts/text9' element={<Text9 />} />
        <Route path='/texts/text10' element={<Text10 />} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
