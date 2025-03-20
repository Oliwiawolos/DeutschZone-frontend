import React from 'react';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import Grammar from './components/pages/Grammar';
import GrammarA1 from './components/pages/Grammar-sites/A1/GrammarA1';
import VerbConjugation from './components/pages/Grammar-sites/A1/VerbConjugation';
import Verbtest from './components/pages/Grammar-sites/A1/testsA1/Verbtest';
import Verbtest2 from './components/pages/Grammar-sites/A1/testsA1/Verbtest2';
import Seperable from './components/pages/Grammar-sites/A1/Seperable';
import Seperabletest from './components/pages/Grammar-sites/A1/testsA1/Seperabletest';
import Inseperabletest from './components/pages/Grammar-sites/A1/testsA1/Inseperabletest';
import Modal from './components/pages/Grammar-sites/A1/Modal';
import Modalpasttest from './components/pages/Grammar-sites/A1/testsA1/Modalpasttest';
import Modaltest from './components/pages/Grammar-sites/A1/testsA1/Modaltest';
import Negation from './components/pages/Grammar-sites/A1/Negation';
import Negationtest from './components/pages/Grammar-sites/A1/testsA1/Negationtest';
import Negationkeintest from './components/pages/Grammar-sites/A1/testsA1/negationkeintest';
import Question from './components/pages/Grammar-sites/A1/Question';
import Questiontest from './components/pages/Grammar-sites/A1/testsA1/Questiontest';
import Question2test from './components/pages/Grammar-sites/A1/testsA1/Question2test';
import WordOrder from './components/pages/Grammar-sites/A1/WordOrder';
import Wordtest from './components/pages/Grammar-sites/A1/testsA1/Wordtest';
import GrammarA2 from './components/pages/Grammar-sites/A2/GrammarA2';
import Conjunctions from './components/pages/Grammar-sites/A2/Conjunctions';
import Conjunctionstest from './components/pages/Grammar-sites/A2/testsA2/Conjunctionstest';
import ImperativeMood from './components/pages/Grammar-sites/A2/ImperativeMood';
import Imperativetest from './components/pages/Grammar-sites/A2/testsA2/Imperativetest';
import PersonalPronouns from './components/pages/Grammar-sites/A2/PersonalPronouns';
import Personaltest from './components/pages/Grammar-sites/A2/testsA2/Personaltest';
import AdverbialClauses from './components/pages/Grammar-sites/A2/AdverbialClauses';
import Adverbialtest from './components/pages/Grammar-sites/A2/testsA2/Adverbialtest';
import ComparsionForms from './components/pages/Grammar-sites/A2/ComparsionForms';
import Komperativtest from './components/pages/Grammar-sites/A2/testsA2/Komperativtest';
import Superlativtest from './components/pages/Grammar-sites/A2/testsA2/Superlativtest';
import ReflexiveVerbs from './components/pages/Grammar-sites/A2/ReflexiveVerbs';
import Reflexivetest from './components/pages/Grammar-sites/A2/testsA2/Reflexivetest';
import FuturTense from './components/pages/Grammar-sites/A2/FuturTense';
import Futurtest from './components/pages/Grammar-sites/A2/testsA2/Futurtest';
import PossessivePronouns from './components/pages/Grammar-sites/A2/PossessivePronouns';
import Possessivetest from './components/pages/Grammar-sites/A2/testsA2/Possessivetest';
import PresentPerfect from './components/pages/Grammar-sites/A2/PresentPerfect';
import Presenttest from './components/pages/Grammar-sites/A2/testsA2/Presenttest';
import Lassen from './components/pages/Grammar-sites/A2/Lassen';
import Lassentest from './components/pages/Grammar-sites/A2/testsA2/Lassentest';
import GrammarB1 from './components/pages/Grammar-sites/B1/GrammarB1';
import AdjectiveDeclension from './components/pages/Grammar-sites/B1/AdjectiveDeclension';
import ADeclensiontest from './components/pages/Grammar-sites/B1/testsB1/ADeclensiontest';
import IndirectQuestions from './components/pages/Grammar-sites/B1/IndirectQuestions';
import Indirecttest from './components/pages/Grammar-sites/B1/testsB1/Indirecttest';
import InfinitiveClauses from './components/pages/Grammar-sites/B1/InfinitiveClauses';
import Infinitivetest from './components/pages/Grammar-sites/B1/testsB1/Infinitivetest';
import PassiveVoice from './components/pages/Grammar-sites/B1/PassiveVoice';
import Passivetest from './components/pages/Grammar-sites/B1/testsB1/Passivetest';
import Präteritum from './components/pages/Grammar-sites/B1/Präteritum';
import Präteritumtest from './components/pages/Grammar-sites/B1/testsB1/Präteritumtest';
import Prepositions from './components/pages/Grammar-sites/B1/Prepositions';
import Prepositionstest from './components/pages/Grammar-sites/B1/testsB1/Prepositionstest';
import Genitiv from './components/pages/Grammar-sites/B1/Genitiv';
import Genitivtest from './components/pages/Grammar-sites/B1/testsB1/Genitivtest';
import RelativePronouns from './components/pages/Grammar-sites/B1/RelativePronouns';
import RelativePronounstest from './components/pages/Grammar-sites/B1/testsB1/RelativePronounstest';
import TwoConjunctions from './components/pages/Grammar-sites/B1/TwopartConjunctions';
import TwoConjunctionstest from './components/pages/Grammar-sites/B1/testsB1/TwoConjunctionstest';
import VerbValency from './components/pages/Grammar-sites/B1/VerbValency';
import VerbValencytest from './components/pages/Grammar-sites/B1/testsB1/VerbValencytest';
import GrammarB2 from './components/pages/Grammar-sites/B2/GrammarB2';
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
import MonthsDays from './components/pages/Vocabulary-sites/Grocery'
import Animalstest from './components/pages/Vocabulary-sites/tests/Animalstest';
import Traveltest from './components/pages/Vocabulary-sites/tests/Traveltest';
import Clothestest from './components/pages/Vocabulary-sites/tests/Clothestest';
import Weathertest from './components/pages/Vocabulary-sites/tests/Weathertest';
import HomeFamilytest from './components/pages/Vocabulary-sites/tests/HomeFamilytest';
import Sportstest from './components/pages/Vocabulary-sites/tests/Sportstest';
import Professionstest from './components/pages/Vocabulary-sites/tests/Professionstest';
import Vehiclestest from './components/pages/Vocabulary-sites/tests/Vehiclestest';
import BodyPartstest from './components/pages/Vocabulary-sites/tests/BodyPartstest';
import Grocerytest from './components/pages/Vocabulary-sites/tests/Grocerytest';
import Flashcards from './components/pages/Flashcard-sites/Flashcards';
import { AuthProvider } from './components/AuthContext';
import Login from './components/pages/Login';
import Registration from './components/pages/Registration';
import Folder from './components/pages/Flashcard-sites/Folders';
import FolderDetail from './components/pages/Flashcard-sites/FolderDetail';
import FlashcardView from './components/pages/Flashcard-sites/FlashcardView'
function App() {
  return (
    <>
    <Router>
      <AuthProvider>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path='/grammar' element={<Grammar />} />
        <Route path='/grammar/A1' element={<GrammarA1 />} />
        <Route path='/grammar/A1/verb-conjugation' element={<VerbConjugation />} />
        <Route path='/grammar/A1/verb-conjugation/verb-test' element={<Verbtest />} />
        <Route path='/grammar/A1/verb-conjugation/verb-test2' element={<Verbtest2 />} />
        <Route path='/grammar/A1/seperable-verbs' element={<Seperable />} />
        <Route path='/grammar/A1/seperable-verbs/seperable-test' element={<Seperabletest />} />
        <Route path='/grammar/A1/seperable-verbs/inseperable-test' element={<Inseperabletest />} />
        <Route path='/grammar/A1/modal-verbs' element={<Modal />} />
        <Route path='/grammar/A1/modal-verbs/modal-test' element={<Modaltest />} />
        <Route path='/grammar/A1/modal-verbs/modal-past-test' element={<Modalpasttest />} />
        <Route path='/grammar/A1/negation-verbs' element={<Negation />} />
        <Route path='/grammar/A1/negation-verbs/negation-test' element={<Negationtest />} />
        <Route path='/grammar/A1/negation-verbs/negation-kein-test' element={<Negationkeintest />} />
        <Route path='/grammar/A1/question-verbs' element={<Question />} />
        <Route path='/grammar/A1/question-verbs/question-test' element={<Questiontest />} />
        <Route path='/grammar/A1/question-verbs/question2-test' element={<Question2test />} />
        <Route path='/grammar/A1/word-order-verbs' element={<WordOrder />} />
        <Route path='/grammar/A1/word-order-verbs/word-test' element={<Wordtest />} />
        <Route path='/grammar/A2' element={<GrammarA2 />} />
        <Route path='/grammar/A2/conjunctions' element={<Conjunctions />} />
        <Route path='/grammar/A2/conjunctions/conjunctions-test' element={<Conjunctionstest />} />
        <Route path='/grammar/A2/imperative-mood' element={<ImperativeMood />} />
        <Route path='/grammar/A2/imperative-mood/imperative-test' element={<Imperativetest />} />
        <Route path='/grammar/A2/personal-pronouns' element={<PersonalPronouns />} />
        <Route path='/grammar/A2/personal-pronouns/personal-test' element={<Personaltest />} />
        <Route path='/grammar/A2/adverbial-clauses' element={<AdverbialClauses />} />
        <Route path='/grammar/A2/adverbial-clauses/adverbial-test' element={<Adverbialtest />} />
        <Route path='/grammar/A2/comparsion-forms' element={<ComparsionForms />} />
        <Route path='/grammar/A2/comparsion-forms/komperativ-test' element={<Komperativtest />} />
        <Route path='/grammar/A2/comparsion-forms/superlativ-test' element={<Superlativtest />} />
        <Route path='/grammar/A2/reflexive-verbs' element={<ReflexiveVerbs />} />
        <Route path='/grammar/A2/reflexive-verbs/reflexive-test' element={<Reflexivetest />} />
        <Route path='/grammar/A2/future-tense' element={<FuturTense />} />
        <Route path='/grammar/A2/future-tense/futur-test' element={<Futurtest />} />
        <Route path='/grammar/A2/lassen' element={<Lassen />} />
        <Route path='/grammar/A2/lassen/lassen-test' element={<Lassentest />} />
        <Route path='/grammar/A2/possessive-pronouns' element={<PossessivePronouns />} />
        <Route path='/grammar/A2/possessive-pronouns/possessive-test' element={<Possessivetest />} />
        <Route path='/grammar/A2/perfekt' element={<PresentPerfect />} />
        <Route path='/grammar/A2/perfekt/perfekt-test' element={<Presenttest />} />
        <Route path='/grammar/B1' element={<GrammarB1 />} />
        <Route path='/grammar/B1/adjective-declension' element={<AdjectiveDeclension />} />
        <Route path='/grammar/B1/adjective-declension/adjective-declension-test' element={<ADeclensiontest />} />
        <Route path='/grammar/B1/genitiv' element={<Genitiv/>} />
        <Route path='/grammar/B1/genitiv/genitiv-test' element={<Genitivtest />} />
        <Route path='/grammar/B1/indirect-questions' element={<IndirectQuestions />} />
        <Route path='/grammar/B1/indirect-questions/indirect-questions-test' element={<Indirecttest />} />
        <Route path='/grammar/B1/infinitive' element={<InfinitiveClauses />} />
        <Route path='/grammar/B1/infinitive/infinitive-test' element={<Infinitivetest />} />
        <Route path='/grammar/B1/passive' element={<PassiveVoice/>} />
        <Route path='/grammar/B1/passive/passive-test' element={<Passivetest />} />
        <Route path='/grammar/B1/präteritum' element={<Präteritum/>} />
        <Route path='/grammar/B1/präteritum/präteritum-test' element={<Präteritumtest />} />
        <Route path='/grammar/B1/prepositions' element={<Prepositions/>} />
        <Route path='/grammar/B1/prepositions/prepositions-test' element={<Prepositionstest />} />
        <Route path='/grammar/B1/relative-pronouns' element={<RelativePronouns/>} />
        <Route path='/grammar/B1/relative-pronouns/relative-pronouns-test' element={<RelativePronounstest />} />
        <Route path='/grammar/B1/two-conjunctions' element={<TwoConjunctions />} />
        <Route path='/grammar/B1/two-conjunctions/two-conjunctions-test' element={<TwoConjunctionstest />} />
        <Route path='/grammar/B1/verb-valency' element={<VerbValency/>} />
        <Route path='/grammar/B1/verb-valency/verb-valency-test' element={<VerbValencytest />} />
        <Route path='/grammar/B2' element={<GrammarB2 />} />
        <Route path='/vocabulary' element={<Vocabulary />} />
        <Route path='/vocabulary/animals' element={<Animals />} />
        <Route path='/vocabulary/travel' element={<Travel />} />
        <Route path='/vocabulary/clothes' element={<Clothes />} />
        <Route path='/vocabulary/weather' element={<Weather />} />
        <Route path='/vocabulary/home-family' element={<HomeFamily />} />
        <Route path='/vocabulary/sports' element={<Sports />} />
        <Route path='/vocabulary/professions' element={<Professions />} />
        <Route path='/vocabulary/vehicles' element={<Vehicles />} />
        <Route path='/vocabulary/body-parts' element={<BodyParts/>} />
        <Route path='/vocabulary/grocery' element={<MonthsDays />} />
        <Route path='/vocabulary/animals/animals-test' element={<Animalstest />} />
        <Route path='/vocabulary/travel/travel-test' element={<Traveltest />} />
        <Route path='/vocabulary/clothes/clothes-test' element={<Clothestest />} />
        <Route path='/vocabulary/weather/weather-test' element={<Weathertest />} />
        <Route path='/vocabulary/home-family/home-family-test' element={<HomeFamilytest />} />
        <Route path='/vocabulary/sports/sports-test' element={<Sportstest />} />
        <Route path='/vocabulary/professions/professions-test' element={<Professionstest />} />
        <Route path='/vocabulary/vehicles/vehicles-test' element={<Vehiclestest />} />
        <Route path='/vocabulary/body-parts/body-parts-test' element={<BodyPartstest />} />
        <Route path='/vocabulary/grocery/grocery-test' element={<Grocerytest />} />
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
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Registration />} />
        <Route path='/flashcards' element={<Flashcards />} />
        <Route path='/folders' element={<Folder />} />
        <Route path="/FolderDetail/:id" element={<FolderDetail />} />
        <Route path="/view-folder/:id" element={<FlashcardView />} />
      </Routes>
      </AuthProvider>  
      </Router>
    </>
  );
}

export default App;
