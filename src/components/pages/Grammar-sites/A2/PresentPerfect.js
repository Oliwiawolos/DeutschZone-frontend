import React from 'react'
import '../A1/VerbConjugation.css'
import Footer from '../../../Footer'
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import plik from '../../../files/czasowniki.pdf'
import {Link} from 'react-router-dom';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
function PresentPerfect() {
  return (
    <>
    <div className="conjugation-container">
      <h1>Past Tense: Perfekt</h1>
      <p>The past tense 'Perfekt' is generally used to describe completed actions whose effects are still visible in the present. It is also used in dialogues and direct conversations. The 'Perfekt' tense consists of the auxiliary verb 'sein' or 'haben' and the third form of the verb (Partizip II).</p>
      <p className="bold">sein/haben + Partizip II = Perfekt</p>
        <p>The auxiliary verb 'sein' or 'haben' is conjugated by person in the present tense. The verb in the third form (Partizip II) is invariable and is placed at the end of the sentence.</p>
        <div className="verb-table">
        <table>
        <thead>
        <tr>
            <th  style={{ textAlign: 'center' }}>Ich habe heute lange gearbeitet.</th>
            <td style={{ textAlign: 'center' }}>Today I worked long.</td>
          </tr>
          <tr>
            <th  style={{ textAlign: 'center' }}>Ute hat neue Schuhe gekauft.</th>
            <td style={{ textAlign: 'center' }}>Ute  bought new shoes.</td>
          </tr>
        </thead>
        </table>
       </div>
       <p>Here you can find more verbs: <a href={plik} target="_blank" style={{color:"black"}} rel="noopener noreferrer">Verbs</a></p>
       <p>The time has come to explain which verbs form the past tense 'Perfekt' with the auxiliary verb 'haben' and which with 'sein'.</p>
       <h3><LooksOneIcon style={{fontSize: '1.9rem', marginBottom:'-6%'}} />Haben</h3>
       <p>The past tense 'Perfekt' with the auxiliary verb 'haben' is formed by most verbs. These are primarily:</p> 
       <p>Verbs that require an object in the accusative case (so-called transitive verbs): </p>
        <div className="verb-table">
        <table>
        <thead>
        <tr>
            <th  style={{ textAlign: 'center' }}>Der Lehrer hat einen Schüler gefragt.</th>
            <td style={{ textAlign: 'center' }}>Teacher asked a student.</td>
          </tr>
          <tr>
            <th  style={{ textAlign: 'center' }}>Ich habe deinen Bruder gesehen.</th>
            <td style={{ textAlign: 'center' }}>I saw your brother.</td>
          </tr>
        </thead>
        </table>
       </div>
       <p>Reflexive Verbs:</p>
        <div className="verb-table">
        <table>
        <thead>
        <tr>
            <th  style={{ textAlign: 'center' }}>Er hat sich gewaschen.</th>
            <td style={{ textAlign: 'center' }}>He washed himself.</td>
          </tr>
          <tr>
            <th  style={{ textAlign: 'center' }}>Wir haben uns nicht verspätet.</th>
            <td style={{ textAlign: 'center' }}>We weren't late.</td>
          </tr>
        </thead>
        </table>
       </div>
       <p>Modal Verbs:</p>
        <div className="verb-table">
        <table>
        <thead>
        <tr>
            <th  style={{ textAlign: 'center' }}>Das habe ich immer sehr gemocht.</th>
            <td style={{ textAlign: 'center' }}>I have always liked that very much.</td>
          </tr>
          <tr>
            <th  style={{ textAlign: 'center' }}>Wir haben es nicht gekonnt.</th>
            <td style={{ textAlign: 'center' }}>We were not able to do it.</td>
          </tr>
        </thead>
        </table>
       </div>
       <p>Verbs that express a certain state or the continuation of an action, but do not express movement:</p>
        <div className="verb-table">
        <table>
        <thead>
        <tr>
            <th  style={{ textAlign: 'center' }}>Er hat auf den Bus gewartet.</th>
            <td style={{ textAlign: 'center' }}>He was waiting fot the bus.</td>
          </tr>
          <tr>
            <th  style={{ textAlign: 'center' }}>Habt ihr lange gearbeitet?</th>
            <td style={{ textAlign: 'center' }}>Did you work for a long time?</td>
          </tr>
        </thead>
        </table>
       </div>
       <h3><LooksTwoIcon style={{fontSize: '1.9rem', marginBottom:'-8%'}} />Sein</h3>
       <p>Intransitive verbs (not requiring a direct object in the accusative), expressing movement:</p>
        <div className="verb-table">
        <table>
        <thead>
        <tr>
            <th  style={{ textAlign: 'center' }}>Wir sind in die Stadt gefahren.</th>
            <td style={{ textAlign: 'center' }}>We drove to the city.</td>
          </tr>
          <tr>
            <th  style={{ textAlign: 'center' }}>Er ist schnell nach Hause gelaufen.</th>
            <td style={{ textAlign: 'center' }}>He quickly ran home.</td>
          </tr>
        </thead>
        </table>
       </div>
       <p>Verbs expressing a change of state:</p>
        <div className="verb-table">
        <table>
        <thead>
        <tr>
            <th  style={{ textAlign: 'center' }}>Mein Opa ist vor zwei Jahren gestorben</th>
            <td style={{ textAlign: 'center' }}>My grandfather died two years ago</td>
          </tr>
          <tr>
            <th  style={{ textAlign: 'center' }}>Um wie viel Uhr bist du eingeschlafen?</th>
            <td style={{ textAlign: 'center' }}>At what time did you fall asleep?</td>
          </tr>
        </thead>
        </table>
       </div>
       <p>The verbs sein (to be), werden (to become), bleiben (to remain):</p>
        <div className="verb-table">
        <table>
        <thead>
        <tr>
            <th  style={{ textAlign: 'center' }}>Ich bin krank gewesen.</th>
            <td style={{ textAlign: 'center' }}>I have been sick.</td>
          </tr>
          <tr>
            <th  style={{ textAlign: 'center' }}>Sie ist Ärztin geworden.</th>
            <td style={{ textAlign: 'center' }}>She has become a doctor.</td>
          </tr>
        </thead>
        </table>
       </div>
    <div className="tests-verb-container">
    <p><DriveFileRenameOutlineIcon style={{ fontSize: '2.7rem', marginTop:'-5%' }} /> Put your knowledge to the test!</p>
    </div>
    <div className="tests-verb-container2">
    <Link to='./perfekt-test'>
    <p style={{ marginTop:'20%'}}>Perfekt Test</p>
    </Link>
    </div>
      </div>
      <Footer />
    </>
  )
}

export default PresentPerfect;
