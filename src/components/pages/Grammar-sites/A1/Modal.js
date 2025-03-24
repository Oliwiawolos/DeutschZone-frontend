import React from 'react'
import './VerbConjugation.css'
import Footer from '../../../Footer'
import {Link} from 'react-router-dom';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
function Modal() {
  return (
    <>
    <div className="conjugation-container">
      <h1>Modal Verbs</h1>
      <p>Modal verbs are a specific group of auxiliary verbs in German that express necessity, possibility, permission, ability, or desire. These verbs are commonly used to modify the meaning of the main verb in a sentence and provide additional context about the action being described. In German, modal verbs are used frequently and play a crucial role in everyday communication. There are six main modal verbs in German, and here is their conjugation</p>
      <h3>können</h3>
      <div className="verb-table">
        <table>
        <thead>
        <tr>
            <th colspan="2" style={{ textAlign: 'center' }}>Tense</th>
            <th style={{ textAlign: 'center' }}>Present</th>
            <th style={{ textAlign: 'center' }}>Past</th>
          </tr>
          <tr>
            <th colspan="2" style={{ textAlign: 'center' }}>Infinitive</th>
            <th colspan="2" style={{ textAlign: 'center' }}>können</th>
          </tr>
          <tr>
            <td colspan="2" style={{ textAlign: 'center' }}>Translation</td>
            <td colspan="2" style={{ textAlign: 'center' }}>can</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="bold" rowspan="3">Singular</td> 
            <td>1st person (ich)</td>
            <td><span className="red">kann </span></td>
            <td><span className="red">konnte </span></td>
          </tr>
          <tr>
            <td>2nd person (du)</td>
            <td><span className="red">kannst</span></td>
            <td><span className="red">konntest</span></td>
          </tr>
          <tr>
            <td>3rd person (er/sie/es)</td>
            <td><span className="red">kann</span></td>
            <td><span className="red">konnte</span></td>
          </tr>
          <tr>
            <td className="bold" rowspan="3">Plural</td> 
            <td>1st person (wir)</td>
            <td><span className="red">können</span></td>
            <td><span className="red">konnten</span></td>
          </tr>
          <tr>
            <td>2nd person (ihr)</td>
            <td><span className="red">könnt</span></td>
            <td><span className="red">konntet</span></td>
          </tr>
          <tr>
            <td>3rd person (sie/Sie)</td>
            <td><span className="red">können</span></td>
            <td><span className="red">konnten</span></td>
          </tr>
        </tbody>
        </table>
       </div>
       <h3>dürfen</h3>
      <div className="verb-table">
        <table>
        <thead>
        <tr>
            <th colspan="2" style={{ textAlign: 'center' }}>Tense</th>
            <th style={{ textAlign: 'center' }}>Present</th>
            <th style={{ textAlign: 'center' }}>Past</th>
          </tr>
          <tr>
            <th colspan="2" style={{ textAlign: 'center' }}>Infinitive</th>
            <th colspan="2" style={{ textAlign: 'center' }}>dürfen</th>
          </tr>
          <tr>
            <td colspan="2" style={{ textAlign: 'center' }}>Translation</td>
            <td colspan="2" style={{ textAlign: 'center' }}>be allowed to</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="bold" rowspan="3">Singular</td> 
            <td>1st person (ich)</td>
            <td><span className="red">darf</span></td>
            <td><span className="red">durfte</span></td>
          </tr>
          <tr>
            <td>2nd person (du)</td>
            <td><span className="red">darfst</span></td>
            <td><span className="red">durftest</span></td>
          </tr>
          <tr>
            <td>3rd person (er/sie/es)</td>
            <td><span className="red">darf</span></td>
            <td><span className="red">durfte</span></td>
          </tr>
          <tr>
            <td className="bold" rowspan="3">Plural</td> 
            <td>1st person (wir)</td>
            <td><span className="red">dürfen</span></td>
            <td><span className="red">durften</span></td>
          </tr>
          <tr>
            <td>2nd person (ihr)</td>
            <td><span className="red">dürft</span></td>
            <td><span className="red">durftet</span></td>
          </tr>
          <tr>
            <td>3rd person (sie/Sie)</td>
            <td><span className="red">dürfen</span></td>
            <td><span className="red">durften</span></td>
          </tr>
        </tbody>
        </table>
       </div>
       <h3>mögen</h3>
      <div className="verb-table">
        <table>
        <thead>
        <tr>
            <th colspan="2" style={{ textAlign: 'center' }}>Tense</th>
            <th style={{ textAlign: 'center' }}>Present</th>
            <th style={{ textAlign: 'center' }}>Past</th>
          </tr>
          <tr>
            <th colspan="2" style={{ textAlign: 'center' }}>Infinitive</th>
            <th colspan="2" style={{ textAlign: 'center' }}>mögen</th>
          </tr>
          <tr>
            <td colspan="2" style={{ textAlign: 'center' }}>Translation</td>
            <td colspan="2" style={{ textAlign: 'center' }}>like</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="bold" rowspan="3">Singular</td> 
            <td>1st person (ich)</td>
            <td><span className="red">mag</span></td>
            <td><span className="red">mochte </span></td>
          </tr>
          <tr>
            <td>2nd person (du)</td>
            <td><span className="red">magst</span></td>
            <td><span className="red">mochtest</span></td>
          </tr>
          <tr>
            <td>3rd person (er/sie/es)</td>
            <td><span className="red">mag</span></td>
            <td><span className="red">mochte</span></td>
          </tr>
          <tr>
            <td className="bold" rowspan="3">Plural</td> 
            <td>1st person (wir)</td>
            <td><span className="red">mögen</span></td>
            <td><span className="red">mochten</span></td>
          </tr>
          <tr>
            <td>2nd person (ihr)</td>
            <td><span className="red">mögt</span></td>
            <td><span className="red">mochtet</span></td>
          </tr>
          <tr>
            <td>3rd person (sie/Sie)</td>
            <td><span className="red">mögen</span></td>
            <td><span className="red">mochten</span></td>
          </tr>
        </tbody>
        </table>
       </div>
       <h3>müssen</h3>
      <div className="verb-table">
        <table>
        <thead>
        <tr>
            <th colspan="2" style={{ textAlign: 'center' }}>Tense</th>
            <th style={{ textAlign: 'center' }}>Present</th>
            <th style={{ textAlign: 'center' }}>Past</th>
          </tr>
          <tr>
            <th colspan="2" style={{ textAlign: 'center' }}>Infinitive</th>
            <th colspan="2" style={{ textAlign: 'center' }}>müssen</th>
          </tr>
          <tr>
            <td colspan="2" style={{ textAlign: 'center' }}>Translation</td>
            <td colspan="2" style={{ textAlign: 'center' }}>must</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="bold" rowspan="3">Singular</td> 
            <td>1st person (ich)</td>
            <td><span className="red">muss</span></td>
            <td><span className="red">musste</span></td>
          </tr>
          <tr>
            <td>2nd person (du)</td>
            <td><span className="red">musst</span></td>
            <td><span className="red">musstest</span></td>
          </tr>
          <tr>
            <td>3rd person (er/sie/es)</td>
            <td><span className="red">muss</span></td>
            <td><span className="red">musste</span></td>
          </tr>
          <tr>
            <td className="bold" rowspan="3">Plural</td> 
            <td>1st person (wir)</td>
            <td><span className="red">müssen</span></td>
            <td><span className="red">mussten</span></td>
          </tr>
          <tr>
            <td>2nd person (ihr)</td>
            <td><span className="red">müsst</span></td>
            <td><span className="red">musstet</span></td>
          </tr>
          <tr>
            <td>3rd person (sie/Sie)</td>
            <td><span className="red">müssen</span></td>
            <td><span className="red">mussten</span></td>
          </tr>
        </tbody>
        </table>
       </div>
       <h3>sollen</h3>
      <div className="verb-table">
        <table>
        <thead>
        <tr>
            <th colspan="2" style={{ textAlign: 'center' }}>Tense</th>
            <th style={{ textAlign: 'center' }}>Present</th>
            <th style={{ textAlign: 'center' }}>Past</th>
          </tr>
          <tr>
            <th colspan="2" style={{ textAlign: 'center' }}>Infinitive</th>
            <th colspan="2" style={{ textAlign: 'center' }}>sollen</th>
          </tr>
          <tr>
            <td colspan="2" style={{ textAlign: 'center' }}>Translation</td>
            <td colspan="2" style={{ textAlign: 'center' }}>should</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="bold" rowspan="3">Singular</td> 
            <td>1st person (ich)</td>
            <td><span className="red">soll</span></td>
            <td><span className="red">sollte</span></td>
          </tr>
          <tr>
            <td>2nd person (du)</td>
            <td><span className="red">sollst</span></td>
            <td><span className="red">solltest</span></td>
          </tr>
          <tr>
            <td>3rd person (er/sie/es)</td>
            <td><span className="red">soll</span></td>
            <td><span className="red">sollte</span></td>
          </tr>
          <tr>
            <td className="bold" rowspan="3">Plural</td> 
            <td>1st person (wir)</td>
            <td><span className="red">sollen</span></td>
            <td><span className="red">sollten</span></td>
          </tr>
          <tr>
            <td>2nd person (ihr)</td>
            <td><span className="red">sollt</span></td>
            <td><span className="red">solltet</span></td>
          </tr>
          <tr>
            <td>3rd person (sie/Sie)</td>
            <td><span className="red">sollen</span></td>
            <td><span className="red">sollten</span></td>
          </tr>
        </tbody>
        </table>
       </div>
       <h3>wollen</h3>
      <div className="verb-table">
        <table>
        <thead>
        <tr>
            <th colspan="2" style={{ textAlign: 'center' }}>Tense</th>
            <th style={{ textAlign: 'center' }}>Present</th>
            <th style={{ textAlign: 'center' }}>Past</th>
          </tr>
          <tr>
            <th colspan="2" style={{ textAlign: 'center' }}>Infinitive</th>
            <th colspan="2" style={{ textAlign: 'center' }}>wollen</th>
          </tr>
          <tr>
            <td colspan="2" style={{ textAlign: 'center' }}>Translation</td>
            <td colspan="2" style={{ textAlign: 'center' }}>want to</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="bold" rowspan="3">Singular</td> 
            <td>1st person (ich)</td>
            <td><span className="red">will</span></td>
            <td><span className="red">wollte</span></td>
          </tr>
          <tr>
            <td>2nd person (du)</td>
            <td><span className="red">willst</span></td>
            <td><span className="red">wolltest</span></td>
          </tr>
          <tr>
            <td>3rd person (er/sie/es)</td>
            <td><span className="red">will</span></td>
            <td><span className="red">wollte</span></td>
          </tr>
          <tr>
            <td className="bold" rowspan="3">Plural</td> 
            <td>1st person (wir)</td>
            <td><span className="red">wollen</span></td>
            <td><span className="red">wollten</span></td>
          </tr>
          <tr>
            <td>2nd person (ihr)</td>
            <td><span className="red">wollt</span></td>
            <td><span className="red">wolltet</span></td>
          </tr>
          <tr>
            <td>3rd person (sie/Sie)</td>
            <td><span className="red">wollen</span></td>
            <td><span className="red">wollten</span></td>
      </tr>
        </tbody>
        </table>
       </div>
        
    <div className="tests-verb-container">
    <p><DriveFileRenameOutlineIcon style={{ fontSize: '2.7rem' }} /> Put your knowledge to the test!</p>
    </div>
    <div className="tests-verb-container2">
    <Link to='./modal-test'>
    <p>Modal Verbs</p>
    </Link>
    </div>
    <div className="tests-verb-container3">
    <Link to='./modal-past-test'>
    <p>Modal in Past Verbs</p>
    </Link>
    </div>
      </div>
      <Footer />
    </>
  )
}

export default Modal;
