import React from 'react'
import '../A1/GrammarA1.css'
import {Link} from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Gate from '../../../images/building.jpg'
import Footer from '../../../Footer'
function GrammarB2() {
  return (
    <>
    <div className='gate-container'>
    <img src={Gate} alt="Gate" />
    </div>
    <div className="GrammarA1-container">
      <p>At the B2 level, learners focus on refining their understanding of advanced grammar concepts that allow them to express more complex ideas with precision and nuance. This level emphasizes mastering structures that are essential for formal communication, argumentation, and expressing hypothetical situations. By building on what was learned in previous levels, B2 grammar gives you the tools to engage in sophisticated conversations, understand advanced texts, and navigate both professional and academic contexts in German.
      </p>
      <div className="grid-container">
      <div className="a1-item">
        <Link to='/'>
        <h3>
        Past Perfect Tense<ArrowForwardIosIcon className="small-icon" />
        </h3>
        </Link>
        <p>The past perfect tense (Plusquamperfekt) is used to describe actions that occurred before another action in the past. Mastering this tense helps you narrate events more clearly when discussing sequences of past actions.</p>
      </div>
      <div className="a1-item">
        <Link to='/'>
        <h3>
        Noun Declension<ArrowForwardIosIcon className="small-icon" />
        </h3>
        </Link>
        <p>Nouns are categorized into strong and weak declension patterns based on their morphological characteristics. Mastering these declensions is essential for correct sentence structure, especially in more formal and advanced language use.</p>
      </div>
      <div className="a1-item">
        <Link to='/'>
        <h3>
        Subjunctive Mood <ArrowForwardIosIcon className="small-icon"/>
        </h3>
        </Link>
        <p>The subjunctive mood (Konjunktiv II) is essential for expressing wishes, hypothetical situations, and polite requests. Understanding this structure allows you to talk about unreal conditions and give advice or express regrets more naturally.</p>
      </div>
      <div className="a1-item">
        <Link to='/'>
        <h3>
        Reported Speech<ArrowForwardIosIcon className="small-icon"/>
        </h3>
        </Link>
        <p>Reported speech is used to relay what someone else has said without quoting them directly. This structure often involves changes in tense and word order, making it an important tool for both formal and informal communication.</p>
      </div>
      
      </div>
      </div>
      <Footer/>
      </>
  )
}

export default GrammarB2
