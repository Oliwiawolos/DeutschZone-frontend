import React, { useState } from 'react';
import './testsA1.css';
import Footer from '../../../../Footer'
function Wordtest() {
  const sentences = [
    { text: 'im Winter/der Tag/nur/dauern/ein paar/Stunden', verb: '', correctAnswer: ['Im Winter dauert der Tag nur ein paar Stunden.','Im Winter dauert der Tag nur ein paar Stunden','Der Tag dauert im Winter nur ein paar Stunden.','Der Tag dauert im Winter nur ein paar Stunden','Nur ein paar Stunden dauert der Tag im Winter.','Nur ein paar Stunden dauert der Tag im Winter'] },
    { text: 'die Ostsee/fahren/im Juni/wir/an', verb: '', correctAnswer: ['Im Juni fahren wir an die Ostsee.','Im Juni fahren wir an die Ostsee','An die Ostsee fahren wir im Juni.','An die Ostsee fahren wir im Juni','Wir fahren im Juni an die Ostsee.','Wir fahren im Juni an die Ostsee']},
    { text: 'die Couch/hinter/liegen/eine Katze', verb: '', correctAnswer: ['Hinter der Couch liegt eine Katze.','Hinter der Couch liegt eine Katze','Eine Katze liegt hinter der Couch.','Eine Katze liegt hinter der Couch'] },
    { text: 'anrufen/dich/nächste Woche/ich', verb: '', correctAnswer: ['Ich rufe dich nächste Woche an.','Ich rufe dich nächste Woche an','Nächste Woche rufe ich dich an.','Nächste Woche rufe ich dich an','Dich rufe ich nächste Woche an.','Dich rufe ich nächste Woche an'] },
    { text: 'die Küche/vorbereiten/das Früstück/in/die Mutter', verb: '', correctAnswer: ['Die Mutter bereitet in der Küche das Frühstück vor.','Die Mutter bereitet in der Küche das Frühstück vor','In der Küche bereitet die Mutter das Frühstück vor.','In der Küche bereitet die Mutter das Frühstück vor','Das Frühstück bereitet die Mutter in der Küche vor.','Das Frühstück bereitet die Mutter in der Küche vor'] },
    { text: 'der nächste Bus/17 Uhr/abfahren/nach/Wien/um', verb: '', correctAnswer: ['Der nächste Bus nach Wien fährt um 17 Uhr ab.','Der nächste Bus nach Wien fährt um 17 Uhr ab','Um 17 Uhr fährt der nächste Bus nach Wien ab.','Um 17 Uhr fährt der nächste Bus nach Wien ab','Nach Wien fährt der nächste Bus um 17 Uhr ab.','Nach Wien fährt der nächste Bus um 17 Uhr ab'] },
    { text: 'zu Hause/wir/heute/bleiben', verb: '', correctAnswer: ['Heute bleiben wir zu Hause.','Heute bleiben wir zu Hause','Zu Hause bleiben wir heute.','Zu Hause bleiben wir heute','Wir bleiben heute zu Hause.','Wir bleiben heute zu Hause'] },
    { text: 'es gibt/viele/in/Krakau/Sehenswürdigkeiten', verb: '', correctAnswer: ['In Krakau gibt es viele Sehenswürdigkeiten.','In Krakau gibt es viele Sehenswürdigkeiten','Viele Sehenswürdigkeiten gibt es in Krakau.','Viele Sehenswürdigkeiten gibt es in Krakau'] },
    { text: 'meine/Blau/sein/Lieblingsfarbe', verb: '', correctAnswer: ['Meine Lieblingsfarbe ist Blau.','Meine Lieblingsfarbe ist Blau','Blau ist meine Lieblingsfarbe','Blau ist meine Lieblingsfarbe.'] },
    { text: 'viele Pilze/im Wald/können/finden/man/im Herbst', verb: '', correctAnswer: ['Im Herbst kann man im Wald viele Pilze finden.','Im Herbst kann man im Wald viele Pilze finden','Viele Pilze kann man im Herbst im Wald finden.','Viele Pilze kann man im Herbst im Wald finden','Man kann im Herbst im Wald viele Pilze finden.','Man kann im Herbst im Wald viele Pilze finden','Im Wald kann man im Herbst viele Pilze finden.','Im Wald kann man im Herbst viele Pilze finden'] },
  ];

  const [answers, setAnswers] = useState(Array(sentences.length).fill(''));
  const [correct, setCorrect] = useState(Array(sentences.length).fill(null));
  const [savedCorrectAnswers, setSavedCorrectAnswers] = useState(Array(sentences.length).fill('')); 
  const [isChecked, setIsChecked] = useState(false);

  const handleInputChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const checkAnswers = () => {
    if (!isChecked) {
      const result = answers.map((answer, index) => {
        const isCorrect = Array.isArray(sentences[index].correctAnswer)
          ? sentences[index].correctAnswer.some(
              (correctAnswer) => answer.toLowerCase() === correctAnswer.toLowerCase()
            )
          : answer.toLowerCase() === sentences[index].correctAnswer.toLowerCase();

        if (isCorrect) {
          savedCorrectAnswers[index] = answer;
        }
        
        return isCorrect;
      });

      setCorrect(result);
      setSavedCorrectAnswers([...savedCorrectAnswers]); 
      setIsChecked(true);
    } else {
      setAnswers([...savedCorrectAnswers]); 
      setCorrect(Array(sentences.length).fill(null));
      setIsChecked(false);
    }
  };
  return (
    <>
    <div className="exercise-container" style={{width:'70%'}}>
      <h2>Bilde Sätze aus den angegebenen Wörtern</h2>
      <p>Form sentences from the given words</p>      
      {sentences.map((sentence, index) => (
        <div key={index} className="exercise-item">
          <span className="number">{index + 1}.</span>
          {sentence.text.split('___').map((part, partIndex) => (
            <React.Fragment key={partIndex}>
              {part}
              {partIndex === 0 && (
                <>
                  <input
                    type="text"
                    className="input-field"
                    style={{ width: '55%' }}
                    value={answers[index]}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                  />
                  <span className="verb">{sentence.verb}</span>
                  </>
      )}
      </React.Fragment>
          ))}
          {correct[index] !== null && (
        <span className={`result ${correct[index] ? 'correct' : 'incorrect'}`}>
          {correct[index] ? 'Correct' : 'Incorrect'} 
        </span>
          )}
          </div>
          
      ))}
      
      <button className="verb-button" onClick={checkAnswers}>{isChecked ? 'Restart' : 'Check Answers'}</button>
    
    </div>
    <Footer />
    </>
  );
}

export default Wordtest;
