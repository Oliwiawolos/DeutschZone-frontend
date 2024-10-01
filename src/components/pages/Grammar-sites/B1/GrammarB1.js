import React from 'react'
import '../A1/GrammarA1.css'
import {Link} from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Gate from '../../../images/tower.jpg'
import Footer from '../../../Footer'
function GrammarB1() {
  return (
    <>
    <div className='gate-container'>
    <img src={Gate} alt="Gate" />
    </div>
    <div className="GrammarA1-container">
      <p>At the B1 level, learners delve into more complex grammar topics that allow for more sophisticated communication and deeper understanding of the language. This level focuses on enhancing your ability to construct nuanced sentences, express detailed thoughts, and engage in conversations on a wider range of topics. By mastering B1 grammar, you’ll gain the confidence to discuss past, present, and future events, navigate formal and informal contexts, and express yourself more accurately.
      </p>
      <div className="grid-container">
      <div className="a1-item">
        <Link to='/'>
        <h3>
        Adjective Declension <ArrowForwardIosIcon className="small-icon" />
        </h3>
        </Link>
        <p>Master the rules of adjective endings, which change depending on gender, case, and the presence of articles. This is crucial for forming grammatically correct and natural-sounding sentences.</p>
      </div>
      <div className="a1-item">
        <Link to='/'>
        <h3>
        Relative Pronouns<ArrowForwardIosIcon className="small-icon" />
        </h3>
        </Link>
        <p>Learn to use relative pronouns like der, die, das and welcher to connect sentences and add descriptive information.Relative clauses help you provide additional details in a concise way.</p>
      </div>
      <div className="a1-item">
        <Link to='/'>
        <h3>
        Prepositions<ArrowForwardIosIcon className="small-icon"/>
        </h3>
        </Link>
        <p>Deepen your understanding of prepositions that require either the dative or accusative case. Learn when to use which case depending on context, especially with two-way prepositions.</p>
      </div>
      <div className="a1-item">
        <Link to='/'>
        <h3>
        Verb Valency <ArrowForwardIosIcon className="small-icon"/>
        </h3>
        </Link>
        <p>Learn which prepositions go with which verbs. Verb valency is crucial for constructing sentences that sound natural and grammatically correct in German.</p>
      </div>
      <div className="a1-item">
        <Link to='/'>
        <h3>
        Past Tense: Präteritum<ArrowForwardIosIcon className="small-icon"/>
          </h3>
        </Link>
        <p>Focus on the simple past tense (Präteritum) for narrating events and actions, particularly in written language and storytelling.</p>
      </div>
      <div className="a1-item">
        <Link>
        <h3>
        Passive Voice <ArrowForwardIosIcon className="small-icon"/>
        </h3>
        </Link>
        <p>Discover how to form the passive voice to emphasize actions or processes rather than the doer.</p>
      </div>
      <div className="a1-item">
        <Link>
        <h3>
        Two-part Conjunctions<ArrowForwardIosIcon className="small-icon"/>
        </h3>
        </Link>
        <p>Explore conjunctions like sowohl ... als auch and nicht nur ... sondern auch to connect and emphasize ideas in a more complex way.</p>
      </div>
      <div className="a1-item">
        <Link>
        <h3>
         Pronouns with Genitive<ArrowForwardIosIcon className="small-icon"/>
        </h3>
        </Link>
        <p>In this section, you’ll learn how to use pronouns in the genitive case to express possession, origin, or relationships.</p>
      </div>
      <div className="a1-item">
        <Link>
        <h3>
        Infinitive Clauses <ArrowForwardIosIcon className="small-icon"/>
        </h3>
        </Link>
        <p>Develop your skills in using infinitive clauses with zu to express purposes, intentions, or plans in a more complex manner. This structure is commonly used in both formal and informal contexts.</p>
      </div>
      <div className="a1-item">
        <Link>
        <h3>
        Indirect Questions<ArrowForwardIosIcon className="small-icon"/>
        </h3>
        </Link>
        <p>Practice forming indirect questions, which are often used in formal or polite speech. Indirect questions are a key part of advanced communication.</p>
      </div>
      </div>
      </div>
      <Footer/>
      </>
  )
}

export default GrammarB1
