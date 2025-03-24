import React from 'react'
import '../A1/VerbConjugation.css'
import Footer from '../../../Footer'
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import {Link} from 'react-router-dom';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
function FutureTense() {
  return (
    <>
    <div className="conjugation-container">
      <h1>Future Tenses</h1>
      <h3><LooksOneIcon style={{fontSize: '1.7rem',marginBottom:'-4.5%'}}/>Futur I</h3>
      <p>The future tense Futur I is a compound tense consisting of the verb 'werden' and the infinitive of the main verb.</p>
      <p className="bold">Futur I = werden + infinitive (Infinitive I Active)</p>
        <p>We use the future tense Futur I when talking about events or actions that are going to take place in the future (actually or presumably). Futur I can also express an action that is presumably taking place in the present.</p>
        <div className="verb-table">
        <table>
        <thead>
        <tr>
            <th  style={{ textAlign: 'center' }}>In diesem Jahr werde ich meinen Urlaub in Spanien verbringen.</th>
            <td style={{ textAlign: 'center' }}>In this year I will spend my holiday in Spain.</td>
          </tr>
          <tr>
            <th  style={{ textAlign: 'center' }}>Er wird jetzt arbeiten.</th>
            <td style={{ textAlign: 'center' }}>He is probably working now.</td>
          </tr>
        </thead>
        </table>
       </div>
       <p>Very often, the future tense in German is expressed using the present tense (Präsens).</p>
        <div className="verb-table">
        <table>
        <thead>
        <tr>
            <th  style={{ textAlign: 'center' }}>Ich besuche dich.</th>
            <td style={{ textAlign: 'center' }}>I will visit you.</td>
          </tr>
          <tr>
            <th  style={{ textAlign: 'center' }}>Kaufen Sie dieses Auto?</th>
            <td style={{ textAlign: 'center' }}>Will you buy this car, sir?</td>
          </tr>
        </thead>
        </table>
       </div>
       <h3><LooksTwoIcon style={{marginBottom: '-5%'}}/>Futur II</h3>
      <p>To express the belief that a particular action will be completed in the future, the Futur II tense is used. It consists of the auxiliary verb 'werden' and the past infinitive (Infinitiv II Aktiv). The past infinitive form consists of the auxiliary verb (sein or haben) and the third form of the verb (Partizip II):</p>
      <p className="bold">Futur II = werden + past infinitive (Infinitiv II Aktiv)</p>
        <p>We use the future tense Futur I when talking about events or actions that are going to take place in the future (actually or presumably). Futur I can also express an action that is presumably taking place in the present.</p>
        <div className="verb-table">
        <table>
        <thead>
        <tr>
            <th  style={{ textAlign: 'center' }}>In diesem Jahr werde ich meinen Urlaub in Spanien verbringen.</th>
            <td style={{ textAlign: 'center' }}>In this year I will spend my holiday in Spain.</td>
          </tr>
          <tr>
            <th  style={{ textAlign: 'center' }}>Er wird jetzt arbeiten.</th>
            <td style={{ textAlign: 'center' }}>He is probably working now.</td>
          </tr>
        </thead>
        </table>
       </div>
    <div className="tests-verb-container">
    <p><DriveFileRenameOutlineIcon style={{ fontSize: '2.7rem', marginTop:'-5%' }} /> Put your knowledge to the test!</p>
    </div>
    <div className="tests-verb-container2">
    <Link to='./futur-test'>
    <p style={{ marginTop:'6%', marginBottom:'-6%' }}>Bilde Sätze aus den angegebenen Wörtern</p>
    </Link>
    </div>
      </div>
      <Footer />
    </>
  )
}

export default FutureTense;
