import React from 'react'
import './GrammarA1.css'
import {Link} from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Gate from '../../../images/gate2.jpg'
import Footer from '../../../Footer'
function GrammarA1() {
  return (
    <>
    <div className='gate-container'>
    <img src={Gate} alt="Gate" />
    </div>
    <div className="GrammarA1-container">
      <p>In the A1 level, you will dive into essential grammar topics that will lay the foundation for your German learning journey. This level focuses on the basics that every beginner needs to grasp in order to build a strong understanding of the language. You will start with simple structures and gradually move toward more varied sentence forms, gaining confidence as you go.
      </p>
      <div className="grid-container">
      <div className="a1-item">
        <Link to='./verb-conjugation'>
        <h3>
        Verb Conjugation<ArrowForwardIosIcon className="small-icon" />
        </h3>
        </Link>
        <p>You’ll learn how to conjugate both regular and irregular verbs in the present tense, allowing you to express basic actions and ideas.</p>
      </div>
      <div className="a1-item">
        <Link to='./seperable-verbs'>
        <h3>
        (In)separable Verbs<ArrowForwardIosIcon className="small-icon" />
        </h3>
        </Link>
        <p>Grasp the concept of verbs that split into two parts, a common feature in German that you’ll encounter often in everyday speech.</p>
      </div>
      <div className="a1-item">
        <Link to='./modal-verbs'>
        <h3>
          Modal Verbs<ArrowForwardIosIcon className="small-icon"/>
        </h3>
        </Link>
        <p>Modal verbs like "müssen," "können," and "wollen" will help you express necessity, ability, and desires in simple contexts.</p>
      </div>
      <div className="a1-item">
        <Link to='./negation-verbs'>
        <h3>
          Negation<ArrowForwardIosIcon className="small-icon"/>
        </h3>
        </Link>
        <p>Learn how to correctly use “nicht” and “kein” to form negative statements, which is essential for clear communication.</p>
      </div>
      <div className="a1-item">
        <Link to='./question-verbs'>
        <h3>
        Question Formation<ArrowForwardIosIcon className="small-icon"/>
          </h3>
        </Link>
        <p>Understanding how to ask both open-ended and yes/no questions will be crucial in everyday conversations.</p>
      </div>
      <div className="a1-item">
        <Link to='./word-order-verbs'>
        <h3>
          Word Order<ArrowForwardIosIcon className="small-icon"/>
        </h3>
        </Link>
        <p>Get comfortable with the basic German sentence structure, focusing on where to place verbs, subjects, and objects in simple sentences.</p>
      </div>
      </div>
      </div>
      <Footer/>
      </>
  )
}

export default GrammarA1
