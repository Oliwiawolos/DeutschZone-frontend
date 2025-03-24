import React from 'react'
import './Listening.css'
import '../../App.css'
import {Link} from 'react-router-dom';
import Footer from '../Footer'

  const levelsListening={
    A1:[{
      text: "Im Hotel", path:'./audio1'},
  ],
  A2:[
    {text: "Auf dem Bahnhof", path:'./audio2'},
    {text: "Die Halloween-Party", path:'./audio3'},
  ],
  B1: [
    {text:'Der Geburtstag meiner Cousine', path:'./audio4'},
    {text:'Am Flughafen', path:'./audio5'},
    {text:'Ein Regentag im Herbst', path:'./audio6'},
  ],
  B2:[
    {text:'Olympische Winterspiele', path:'./audio7'},
    {text:'Die fünfte Jahreszeit', path:'./audio8'},
  ],
  };
  function Listening(){
      const Levelsection=(level, items)=>(
        <div className="A1-align">
          <h3>{`Level ${level}`}</h3>
          <ul className="listening-A1">
            {items.map((item,index)=>(
              <li key={`${level}-${index}`} className={`A1-li${level}`}>
                <Link to={item.path}>
                <p>{item.text}</p>
                </Link>
                </li>
            ))}
          </ul>
        </div>
      );

  return (
    <>
    <div className='listening'>
    </div>
    <div className="listening-container">
        <h2>Enhance Your German Listening Skills</h2>
        <p>
        Looking to improve your German listening comprehension? You're in the right place! We offer you a diverse range of engaging audio texts featuring practical words and phrases from our carefully curated themed vocabulary. 
        </p>
        <p>
        Challenge yourself with comprehension questions, then listen again with the transcript to make the most of these excellent resources. Dive into the audio materials and enhance your understanding of the German language!
        </p>
        </div>
    {Object.entries(levelsListening).map(([level,items])=>Levelsection(level,items))}

    <Footer />
    </>
  )
}

export default Listening
