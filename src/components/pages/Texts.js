import React from 'react'
import './Texts.css'
import '../../App.css'
import {Link} from 'react-router-dom';
import Footer from '../Footer'

const levelsTexts={
    A1:[{
      text: "Vorstellung", path:'./text1'},
      {text: "Juliana in Deutschland", path:'./text2'},
  ],
  A2:[
    {text: "Tagesablauf", path:'./text3'},
    {text:'Die Farben', path:'./text4'},
    {text:'Verkehrsmittel', path:'./text5'},
  ],
  B1: [
    {text:'Sommer Urlaub am Meer', path:'./text6'},
    {text:'So feiert man Karneval im Süden', path:'./text7'},
    {text:'Am Lagerfeuer', path:'./text8'},
  ],
  B2:[
    {text:'Mein bester Freund', path:'./text9'},
    {text:'Ein entspannendes Bad', path:'./text10'},
  ],
  };
  function Texts(){
      const Levelsection=(level, items)=>(
        <div className="A1-align">
          <h3>{`Level ${level}`}</h3>
          <ul className="text-A1">
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
    <div className='texts'>
    </div>
    <div className="text-container">
        <h2 className>Master German Through Reading</h2>
        <p>
        Are you ready to take your German skills to the next level? Dive into our collection of captivating stories, articles, and texts designed to enrich your vocabulary and deepen your understanding of German grammar and culture. 
        </p>
        <p>
        Each piece comes with thoughtful questions that help you engage with the content, sharpen your comprehension, and build confidence in your reading abilities. Explore these materials, immerse yourself in the language, and watch your proficiency grow!
        </p>
        </div>
    {Object.entries(levelsTexts).map(([level,items])=>Levelsection(level,items))}

    <Footer />
    </>
  )
}

export default Texts
