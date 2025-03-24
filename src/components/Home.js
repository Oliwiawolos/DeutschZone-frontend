import React from 'react'
import './Home.css'
import '../App.css'
import Footer from './Footer'
import video1 from './videos/video-1.mp4';
import Zdj1 from './images/zdjecie1.webp'
import Words from './Words';
function Home() {
  return (
        <>
        <div className='video-container'>
          <video src={video1} autoPlay loop muted />
          <div className='text-overlay'>
        <h1>YOUR JOURNEY TO FLUENT GERMAN STARTS HERE!</h1>
      </div>
        </div>
        <div className='home-container'>
            <span className='firstparagraph'>
            Boost your German skills with our extensive collection of free content. Explore grammar topics, learn essential vocabulary, and develop your listening and reading abilities – all in one place!
            </span>
            <span className='secondparagraph'>
            Our easy-to-follow explanations, combined with interactive exercises, help you master even the trickiest concepts. Whether you’re reading, listening, or practicing grammar, our tools are designed to make your learning journey enjoyable and effective. Let’s get started!
            </span>
            <div className='img-container'>
            <img src={Zdj1} alt="Zdj1" />
            </div>
            <span className="test">
            You’re not sure about your level? No problem! Our quick test will point you in the right direction!
            </span>
            <a className="text1" 
            href="https://tally.so/r/woov9M" 
            target="_blank" 
            rel="noopener noreferrer"
          >Test A1
            </a>
            <a className="text1" 
            href="https://tally.so/r/w4LOlo" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Test A2
            </a>
            <a className="text1" 
            href="https://tally.so/r/mJLB1R" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Test B1
            </a>
            <a className="text1" 
            href="https://tally.so/r/3ELarX" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Test B2
          </a> 
        <Words />
        </div>
        <Footer />
        </>
      
  )
}

export default Home
