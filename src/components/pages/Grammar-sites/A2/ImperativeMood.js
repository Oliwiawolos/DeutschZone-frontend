import React from 'react'
import '../A1/VerbConjugation.css'
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import Footer from '../../../Footer'
import {Link} from 'react-router-dom';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
function ImperativeMood() {
  return (
    <>
    <div className="conjugation-container">
      <h1>Der Imperativ</h1>
      <p>The imperative mood is primarily used to give commands or orders. The imperative varies by person: du, ihr und Sie.</p>
     <h3><LooksOneIcon style={{fontSize: '1.6rem', marginBottom:'-9%'}} />Du</h3>
     <p>The second person singular (du - you) forms the imperative mood by dropping the <span className="highlight">-st</span> ending, and the personal pronoun du is not added.</p>
      <div className="verb-table">
        <table>
        <thead>
          <tr>
            <td style={{ textAlign: 'center' }}>Du fragst.</td>
            <td style={{ textAlign: 'center' }} className="bold">Frag!</td>
            <td style={{ textAlign: 'center' }}>Ask!</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }}>Du gehst.</td>
            <td style={{ textAlign: 'center' }} className="bold">Geh!</td>
            <td style={{ textAlign: 'center' }}>Go!</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }}>Du sprichst.</td>
            <td style={{ textAlign: 'center' }} className="bold">Sprich!</td>
            <td style={{ textAlign: 'center' }}>Say!</td>
          </tr>
        </thead>
        </table>
        </div>
        <p>Strong verbs form the imperative for the second person singular (du - you) without an umlaut.</p>
      <div className="verb-table">
        <table>
        <thead>
          <tr>
            <td style={{ textAlign: 'center' }}>Du fährst.</td>
            <td style={{ textAlign: 'center' }} className="bold">Fahr!</td>
            <td style={{ textAlign: 'center' }}>Drive!</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }}>Du läfst.</td>
            <td style={{ textAlign: 'center' }} className="bold">Lauf!</td>
            <td style={{ textAlign: 'center' }}>Run!</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }}>Du schläfst.</td>
            <td style={{ textAlign: 'center' }} className="bold">Schläf!</td>
            <td style={{ textAlign: 'center' }}>Sleep!</td>
          </tr>
        </thead>
        </table>
        </div>
     <h3><LooksTwoIcon style={{fontSize: '1.7rem', marginBottom:'-7%'}}  />Ihr</h3>
     <p>The imperative for the second person plural (ihr - you) is the verb without the personal pronoun.</p>
     <div className="verb-table">
        <table>
        <thead>
          <tr>
            <td style={{ textAlign: 'center' }}>Ihr geht.</td>
            <td style={{ textAlign: 'center' }} className="bold">Geht!</td>
            <td style={{ textAlign: 'center' }}>Go!</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }}>Ihr wartet.</td>
            <td style={{ textAlign: 'center' }} className="bold">Wartet!</td>
            <td style={{ textAlign: 'center' }}>Wait!</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }}>Ihr fahrt.</td>
            <td style={{ textAlign: 'center' }} className="bold">Fahrt!</td>
            <td style={{ textAlign: 'center' }}>Drive!</td>
          </tr>
        </thead>
        </table>
        </div>
        <h3><Looks3Icon style={{fontSize: '2.0rem', marginBottom:'-3%', marginRight:'-2%'}}  />Sie und wir</h3>
      <p>The imperative forms for the first and third person plural (wir - we and Sie - you) are created by replacing the positions of the personal pronoun and the verb.</p>
      <div className="verb-table">
        <table>
        <thead>
          <tr>
            <td style={{ textAlign: 'center' }}>Wir gehen.</td>
            <td style={{ textAlign: 'center' }} className="bold">Gehen wir!</td>
            <td style={{ textAlign: 'center' }}>Let's go!</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }}>Wir tanzen.</td>
            <td style={{ textAlign: 'center' }} className="bold">Tanzen wir!</td>
            <td style={{ textAlign: 'center' }}>Let's dance!</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }}>Sie fragen.</td>
            <td style={{ textAlign: 'center' }} className="bold">Fragen Sie!</td>
            <td style={{ textAlign: 'center' }}>Please ask!</td>          
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }}>Sie rufen an.</td>
            <td style={{ textAlign: 'center' }} className="bold">Rufen Sie an</td>
            <td style={{ textAlign: 'center' }}>Please call!</td>
          </tr>
        </thead>
        </table>
        </div>
        <p>The auxiliary verbs: <span className="highlight">sein</span>, <span className="highlight">haben</span> and <span className="highlight">werden</span> form the imperative mood separately. It looks like this: </p>
      <div className="verb-table">
        <table>
        <thead>
          <tr>
            <td style={{ textAlign: 'center' }}></td>
            <td style={{ textAlign: 'center' }} className="bold">sein (to be)</td>
            <td style={{ textAlign: 'center' }} className="bold">haben (to have)</td>
            <td style={{ textAlign: 'center' }} className="bold">werden (to become)</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">du</td>
            <td style={{ textAlign: 'center' }}>sei</td>
            <td style={{ textAlign: 'center' }}>hab</td>
            <td style={{ textAlign: 'center' }}>werde</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">wir</td>
            <td style={{ textAlign: 'center' }}>seien wir</td>
            <td style={{ textAlign: 'center' }}>haben wir</td>  
            <td style={{ textAlign: 'center' }}>werden wir</td>          
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">ihr</td>
            <td style={{ textAlign: 'center' }}>seid</td>
            <td style={{ textAlign: 'center' }}>habt</td>
            <td style={{ textAlign: 'center' }}>werdet</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">Sie</td>
            <td style={{ textAlign: 'center' }}>seien Sie</td>
            <td style={{ textAlign: 'center' }}>haben Sie</td>
            <td style={{ textAlign: 'center' }}>werden Sie</td>
          </tr>
        </thead>
        </table>
        </div>
    <div className="tests-verb-container">
    <p style={{marginBottom:'-2%'}}><DriveFileRenameOutlineIcon style={{ fontSize: '2.7rem', marginBottom:'-2%' }} /> Put your knowledge to the test!</p>
    </div>
    <div className="tests-verb-container2">
    <Link to='./imperative-test'>
    <p>Imperativ Mood Test</p>
    </Link>
    </div>
      </div>
      <Footer />
    </>
  )
}

export default ImperativeMood
