import React from 'react'
import '../A1/GrammarA1.css'
import {Link} from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Gate from '../../../images/castle2.jpg'
import Footer from '../../../Footer'
function GrammarA2() {
  return (
    <>
    <div className='gate-container'>
    <img src={Gate} alt="Gate" />
    </div>
    <div className="GrammarA1-container">
      <p>In the A2 level, you’ll build on your foundational knowledge and start to handle more complex grammar structures. At this level, you’ll delve deeper into sentence structure, verb usage, and expressing a wider range of ideas. With the new skills you acquire, you’ll be able to communicate more effectively in everyday situations and beyond. 
      </p>
      <div className="grid-container">
      <div className="a1-item">
        <Link to='./conjunctions'>
        <h3>
        Conjunctions<ArrowForwardIosIcon className="small-icon" />
        </h3>
        </Link>
        <p>Learn how to connect sentences and ideas more fluently using conjunctions.Mastering conjunctions allows you to create more complex and nuanced sentences in your communication.</p>
      </div>
      <div className="a1-item">
        <Link to='./imperative-mood'>
        <h3>
        Imperative Mood<ArrowForwardIosIcon className="small-icon" />
        </h3>
        </Link>
        <p>Discover how to give instructions, make requests, and give advice using the imperative form.</p>
      </div>
      <div className="a1-item">
        <Link to='./personal-pronouns'>
        <h3>
        Personal Pronouns<ArrowForwardIosIcon className="small-icon"/>
        </h3>
        </Link>
        <p>Improve your grasp of using personal pronouns (e.g., ich, du, er/sie/es) in more varied contexts.</p>
      </div>
      <div className="a1-item">
        <Link to='./adverbial-clauses'>
        <h3>
        Adverbial clauses<ArrowForwardIosIcon className="small-icon"/>
        </h3>
        </Link>
        <p>Learn how to express time, cause, purpose, condition, and more using subordinate clauses.</p>
      </div>
      <div className="a1-item">
        <Link to='./comparsion-forms'>
        <h3>
        Comparsion Forms <ArrowForwardIosIcon className="small-icon"/>
          </h3>
        </Link>
        <p>Express comparisons and superlative degrees to describe people, objects, and situations in greater detail.</p>
      </div>
      <div className="a1-item">
        <Link to='./reflexive-verbs'>
        <h3>
        Reflexive Verbs<ArrowForwardIosIcon className="small-icon"/>
        </h3>
        </Link>
        <p>Explore reflexive verbs and how to use them to express actions that one does to oneself, such as "sich freuen" and "sich ärgern."</p>
      </div>
      <div className="a1-item">
        <Link to='./future-tense'>
        <h3>
        Future Tenses <ArrowForwardIosIcon className="small-icon"/>
        </h3>
        </Link>
        <p> Discuss plans and future actions confidently by mastering the future tense.This tense is particularly useful when you want to emphasize that something will happen in the future rather than right now.</p>
      </div>
      <div className="a1-item">
        <Link to='./lassen'>
        <h3>
        "Lassen" <ArrowForwardIosIcon className="small-icon"/>
        </h3>
        </Link>
        <p> Learn how to use the versatile verb "lassen," which is key to expressing actions done by someone else or giving permission.</p>
      </div>
      <div className="a1-item">
        <Link to='./possessive-pronouns'>
        <h3>
        Possessive Pronouns  <ArrowForwardIosIcon className="small-icon"/>
        </h3>
        </Link>
        <p> Understand how to show ownership and relationships in sentences by using pronouns.</p>
      </div>
      <div className="a1-item">
        <Link to='./perfekt'>
        <h3>
        Past Tense: Perfekt <ArrowForwardIosIcon className="small-icon"/>
        </h3>
        </Link>
        <p> Learn how to talk about past events using the present perfect tense, an essential tool for everyday conversation. </p>
      </div>
      </div>
      </div>
      <Footer/>
      </>
  )
}

export default GrammarA2
