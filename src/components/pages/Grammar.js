import React from 'react'
import '../../App.css'
import {Link} from 'react-router-dom';
import Zdjgrammar1 from '../images/grammar2.png'
import Zdjgrammar2 from '../images/grammar3.png'
import Zdjgrammar3 from '../images/grammar4.png'
import Zdjgrammar4 from '../images/grammar5.png'
import './Grammar.css'
import Footer from '../Footer'
function Grammar() {
  return (
    <>
    <div className='grammar'>
    </div>
    <div className='grammar-container'>
    <p>No matter if you're a beginner or an advanced learner, our site offers grammar exercises customized for your level. From basic A1 topics to advanced B2 challenges, you can easily find the exercises that match your needs. Take control of your learning, choose your level, and start improving your German grammar skills today!</p>
    <div className='leftSite'>
    <div className='img-container1'>
    <Link to='./A1'>
      <img src={Zdjgrammar1} alt="Zdjgrammar1" />
    </Link>
    </div>
    <div className='img-container2'>
    <Link to='./A2'>
      <img src={Zdjgrammar3} alt="Zdjgrammar3" />
    </Link>
    </div>
    <div className='rightSite'>
    <div className='img-container3'>
    <Link to='./B1'>
      <img src={Zdjgrammar2} alt="Zdjgrammar2" />
    </Link>
    </div>
    <div className='img-container4'>
    <Link to='./B2'>
      <img src={Zdjgrammar4} alt="Zdjgrammar4" />
    </Link>
    </div>
    </div>
    </div>
    </div>
    <Footer />
    </>
  )
}

export default Grammar
