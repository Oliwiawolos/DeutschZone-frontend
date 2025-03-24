import React from 'react'
import './VerbConjugation.css'
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Footer from '../../../Footer'
import {Link} from 'react-router-dom';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
function Seperable() {
  return (
    <>
    <div className="conjugation-container">
      <h1>(In)seperable</h1>
      <h3><LooksOneIcon />Seperable Verbs</h3>
      <p>Separable verbs are verbs that have a prefix that separates when conjugated. This prefix moves to the end of the sentence or clause. Prefixes: <span className="red">ab-</span>, <span className="red">an-</span>, <span className="red">auf-</span>, <span className="red">aus-</span>, <span className="red">mit-</span>, <span className="red">nach-</span>, <span className="red">vor-</span> and <span className="red">zu-</span></p>
      <div className="verb-table">
        <table>
        <thead>
          <tr>
            <th colspan="2">Infinitive</th>
            <th>auf|stehen</th>
          </tr>
          <tr>
            <td colspan="2">Translation</td>
            <td>to wake up</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="bold" rowspan="3">Singular</td> 
            <td>1st person (ich)</td>
            <td><span className="red">auf </span>stehe</td>
          </tr>
          <tr>
            <td>2nd person (du)</td>
            <td><span className="red">auf </span>stehst</td>
          </tr>
          <tr>
            <td>3rd person (er/sie/es)</td>
            <td><span className="red">auf </span>steht</td>
          </tr>
          <tr>
            <td className="bold" rowspan="3">Plural</td> 
            <td>1st person (wir)</td>
            <td><span className="red">auf </span>stehen</td>
          </tr>
          <tr>
            <td>2nd person (ihr)</td>
            <td><span className="red">auf </span>steht</td>
          </tr>
          <tr>
            <td>3rd person (sie/Sie)</td>
            <td><span className="red">auf </span>stehen</td>
          </tr>
        </tbody>
        </table>
        </div>
        
      <h3><LooksTwoIcon />Inseperable Verbs</h3>
      <p>Inseparable verbs are verbs with a prefix that does not separate when conjugated. This prefix always stays attached to the verb and does not move to the end of the sentence. Prefixes: <span className='red'>be-</span>, <span className='red'>emp-</span>, <span className='red'>ent-</span>, <span className='red'>er-</span>, <span className='red'>ge-</span>, <span className='red'>miss-</span>, <span className='red'>ver-</span>, and <span className='red'>zer-</span></p>
      <div className="verb-table">
        <table>
        <thead>
          <tr>
            <th colspan="2">Infinitive</th>
            <th>er|zählen</th>
          </tr>
          <tr>
            <td colspan="2">Translation</td>
            <td>to talk</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="bold" rowspan="3">Singular</td> 
            <td>1st person (ich)</td>
            <td><span className="red">er</span>zähle</td>
          </tr>
          <tr>
            <td>2nd person (du)</td>
            <td><span className="red">er</span>zählst</td>
          </tr>
          <tr>
            <td>3rd person (er/sie/es)</td>
            <td><span className="red">er</span>zählt</td>
          </tr>
          <tr>
            <td className="bold" rowspan="3">Plural</td> 
            <td>1st person (wir)</td>
            <td><span className="red">er</span>zählen</td>
          </tr>
          <tr>
            <td>2nd person (ihr)</td>
            <td><span className="red">er</span>zählt</td>
          </tr>
          <tr>
            <td>3rd person (sie/Sie)</td>
            <td><span className="red">er</span>zählen</td>
          </tr>
        </tbody>
        </table>
      </div>
    <div className="tests-verb-container">
    <p><DriveFileRenameOutlineIcon style={{ fontSize: '2.7rem' }} /> Put your knowledge to the test!</p>
    </div>
    <div className="tests-verb-container2">
    <Link to='./seperable-test'>
    <p>Seperable Verbs</p>
    </Link>
    </div>
    <div className="tests-verb-container3">
    <Link to='./inseperable-test'>
    <p>Inseperable Verbs</p>
    </Link>
    </div>
      </div>
      <Footer />
    </>
  )
}

export default Seperable;
