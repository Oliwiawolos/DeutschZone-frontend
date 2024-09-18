import React from 'react'
import '../A1/VerbConjugation.css'
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import Looks4Icon from '@mui/icons-material/Looks4';
import Looks5Icon from '@mui/icons-material/Looks5';
import Footer from '../../../Footer'
import {Link} from 'react-router-dom';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
function Lassen() {
  return (
    <>
    <div className="conjugation-container">
      <h1>Lassen</h1>
      <p>The verb "lassen" is a versatile and frequently used verb in German, with meanings ranging from "to let" or "to allow" to "to have something done" or "to leave." Depending on the context and the sentence construction, it can serve various purposes.</p>
     <h3><LooksOneIcon style={{fontSize: '2.6rem', marginBottom:'-2%', marginRight:'-2%'}} />Conjugation by person</h3>
    <p>Present Tense</p>
      <div className="verb-table">
        <table>
        <thead>
            <tr>
            <th style={{ textAlign: 'center' }} className="bold">Person</th>
            <th style={{ textAlign: 'center' }} className="bold">Conjugation</th>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">ich</td>
            <td style={{ textAlign: 'center' }}>lasse</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">du</td>
            <td style={{ textAlign: 'center' }}>lässt</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">er/sie/es</td>
            <td style={{ textAlign: 'center' }}>lässt</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">wir</td>
            <td style={{ textAlign: 'center' }}>lassen</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">ihr</td>
            <td style={{ textAlign: 'center' }}>lasst</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">Sie/sie</td>
            <td style={{ textAlign: 'center' }}>lassen</td>
          </tr>
        </thead>
        </table>
        </div>
        <p>Imperfect/Präteritum</p>
      <div className="verb-table">
        <table>
        <thead>
            <tr>
            <th style={{ textAlign: 'center' }} className="bold">Person</th>
            <th style={{ textAlign: 'center' }} className="bold">Conjugation</th>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">ich</td>
            <td style={{ textAlign: 'center' }}>ließ</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">du</td>
            <td style={{ textAlign: 'center' }}>ließest</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">er/sie/es</td>
            <td style={{ textAlign: 'center' }}>ließ</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">wir</td>
            <td style={{ textAlign: 'center' }}>ließen</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">ihr</td>
            <td style={{ textAlign: 'center' }}>ließt</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">Sie/sie</td>
            <td style={{ textAlign: 'center' }}>ließen</td>
          </tr>
        </thead>
        </table>
        </div>
        <p>Perfect Tense</p>
      <div className="verb-table">
        <table>
        <thead>
            <tr>
            <th style={{ textAlign: 'center' }} className="bold">Person</th>
            <th style={{ textAlign: 'center' }} className="bold">Conjugation</th>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">ich</td>
            <td style={{ textAlign: 'center' }}>habe gelassen</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">du</td>
            <td style={{ textAlign: 'center' }}>hast gelassen</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">er/sie/es</td>
            <td style={{ textAlign: 'center' }}>hat gelassen</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">wir</td>
            <td style={{ textAlign: 'center' }}>haben gelassen</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">ihr</td>
            <td style={{ textAlign: 'center' }}>habt gelassen</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">Sie/sie</td>
            <td style={{ textAlign: 'center' }}>haben gelassen</td>
          </tr>
        </thead>
        </table>
        </div>
        <h3><LooksTwoIcon style={{fontSize: '2.5rem', marginBottom:'-3%', marginRight:'-1%'}} />'to let' or 'to allow'</h3>
     <p>One of the most common meanings of "lassen" is "to let" or "to allow" someone to do something. It expresses permission or allowing something to happen.</p>
     <div className="verb-table">
        <table>
        <thead>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">Ich lasse ihn gehen.</td>
            <td style={{ textAlign: 'center' }}>I let him go.</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">Lass mich in Ruhe!</td>
            <td style={{ textAlign: 'center' }}>Leave me alone!</td>
          </tr>
        </thead>
        </table>
        </div>
        <h3><Looks3Icon style={{fontSize: '2.8rem', marginBottom:'-2.5%', marginRight:'-2%'}}  />"to have something done"</h3>
      <p>"Lassen" can also be used in a causative construction, which means to arrange for something to be done by someone else. In English, this often translates as "to have" or "to get" something done.</p>
      <div className="verb-table">
        <table>
        <thead>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">Ich lasse mein Auto reparieren.</td>
            <td style={{ textAlign: 'center' }}>I’m having my car repaired (by someone).</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">Sie lässt sich die Haare schneiden.</td>
            <td style={{ textAlign: 'center' }}>She is having her hair cut.</td>
          </tr>
        </thead>
        </table>
        </div>
        <h3><Looks4Icon style={{fontSize: '2.1rem', marginBottom:'-4%', marginRight:'-2%'}}  />"to leave"</h3>
      <p>Another use of "lassen" is "to leave" something or someone in a particular place or state.</p>
      <div className="verb-table">
        <table>
        <thead>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">Ich lasse die Tür offen.</td>
            <td style={{ textAlign: 'center' }}>I leave the door open.</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">Lass das!</td>
            <td style={{ textAlign: 'center' }}>Leave that (alone)!</td>
          </tr>
        </thead>
        </table>
        </div>

        <h3><Looks5Icon style={{fontSize: '2.8rem', marginBottom:'-2.5%', marginRight:'-2%'}}  />Common Reflexive Verbs</h3>
      <p>Reflexive verbs often involve personal care or daily routines. Here are some common reflexive verbs:</p>
      <div className="verb-table">
        <table>
        <thead>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">sich anziehen</td>
            <td style={{ textAlign: 'center' }}>to get dressed</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">sich ausruhen</td>
            <td style={{ textAlign: 'center' }}>to rest</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">sich beeilen</td>
            <td style={{ textAlign: 'center' }}>to hurry</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">sich duschen</td>
            <td style={{ textAlign: 'center' }}>to shower</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">sich freuen</td>
            <td style={{ textAlign: 'center' }}>to be happy</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">sich interessieren</td>
            <td style={{ textAlign: 'center' }}>to be interested</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">sich konzentrieren</td>
            <td style={{ textAlign: 'center' }}>to concentrate</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">sich langweilen</td>
            <td style={{ textAlign: 'center' }}>to be bored</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">sich waschen</td>
            <td style={{ textAlign: 'center' }}>to wash oneself</td>
          </tr>
        </thead>
        </table>
        </div>       
    <div className="tests-verb-container">
    <p><DriveFileRenameOutlineIcon style={{ fontSize: '2.7rem', marginTop:'-5%' }} /> Put your knowledge to the test!</p>
    </div>
    <div className="tests-verb-container2">
    <Link to='./lassen-test'>
    <p style={{ marginTop:'14%', marginBottom:'-4%' }}>Lassen Test</p>
    </Link>
    </div>
      </div>
      <Footer />
    </>
  )
}

export default Lassen
