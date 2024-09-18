import React from 'react'
import '../A1/VerbConjugation.css'
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import Looks4Icon from '@mui/icons-material/Looks4';
import Footer from '../../../Footer'
import {Link} from 'react-router-dom';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
function AdverbialClauses() {
  return (
    <>
    <div className="conjugation-container">
      <h1>Adverbial Clauses</h1>
      <p>An adverb (das Adverb) is an invariable part of speech that modifies a verb, an adjective, or another adverb. An adverb answers the questions:</p>
      <div className="verb-table">
        <table>
        <thead>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">Wie?</td>
            <td style={{ textAlign: 'center' }}>How?</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">Wo?</td>
            <td style={{ textAlign: 'center' }}>Where?</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">Wohin?</td>
            <td style={{ textAlign: 'center' }} >Where to?</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">Wann?</td>
            <td style={{ textAlign: 'center' }}>When?</td>
          </tr>
        </thead>
        </table>
        </div>
     <h3><LooksOneIcon style={{fontSize: '1.7rem', marginBottom:'-8%'}} />Wie</h3>
     <p>To the question <span className="highlight">wie?</span> answer, among others:</p>
      <div className="verb-table">
        <table>
        <thead>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">schnell</td>
            <td style={{ textAlign: 'center' }}>fast</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">schön</td>
            <td style={{ textAlign: 'center' }}>pretty</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">richtig</td>
            <td style={{ textAlign: 'center' }}>rightly</td>
          </tr>
        </thead>
        </table>
        </div>
        <h3><LooksTwoIcon style={{fontSize: '1.7rem', marginBottom:'-8%'}} />Wo</h3>
     <p>To the question <span className="highlight">wo?</span> answer adverbs specifying place: </p>
      <div className="verb-table">
        <table>
        <thead>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">hinten</td>
            <td style={{ textAlign: 'center' }}>behind</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">links</td>
            <td style={{ textAlign: 'center' }}>on the left</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">rechts</td>
            <td style={{ textAlign: 'center' }}>on the right</td>
          </tr>
        </thead>
        </table>
        </div>
        <h3><Looks3Icon style={{fontSize: '1.8rem', marginBottom:'-4%'}} />Wohin</h3>
     <p>To the question <span className="highlight">wohin?</span> answer adverbs specifying direction and related to movement:</p>
      <div className="verb-table">
        <table>
        <thead>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">nach oben</td>
            <td style={{ textAlign: 'center' }}>up</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">nach unten</td>
            <td style={{ textAlign: 'center' }}>down</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">nach links</td>
            <td style={{ textAlign: 'center' }}>to the left</td>
          </tr>
        </thead>
        </table>
        </div>
        <p> It should be remembered that the above prepositions are used only when movement is expressed in the sentence (when something is moving).</p>
        <h3><Looks4Icon style={{fontSize: '1.7rem', marginBottom:'-5%'}} />Wann</h3>
     <p>To the question <span className="highlight">wann</span> answer adverbs specifying time and period. They can be precise or generally indicate when something takes place.</p>
      <div className="verb-table">
        <table>
        <thead>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">manchmal</td>
            <td style={{ textAlign: 'center' }}>sometimes</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">bald</td>
            <td style={{ textAlign: 'center' }}>soon</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">vor kurzem</td>
            <td style={{ textAlign: 'center' }}>recently</td>
          </tr>
        </thead>
        </table>
        </div>
    <div className="tests-verb-container">
    <p><DriveFileRenameOutlineIcon style={{ fontSize: '2.7rem', marginTop:'-5%' }} /> Put your knowledge to the test!</p>
    </div>
    <div className="tests-verb-container2">
    <Link to='./adverbial-test'>
    <p style={{ marginTop:'10%', marginBottom:'-6%' }}>Adverbial Test</p>
    </Link>
    </div>
      </div>
      <Footer />
    </>
  )
}

export default AdverbialClauses
