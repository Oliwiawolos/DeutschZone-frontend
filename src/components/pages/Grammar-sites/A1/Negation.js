import React from 'react'
import './VerbConjugation.css'
import Footer from '../../../Footer'
import {Link} from 'react-router-dom';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
function Negation() {
  return (
    <>
    <div className="conjugation-container">
      <h1>Negation</h1>
      <p>Negation in the German language can be achieved using three words. These are: </p>
      <div className="verb-table">
        <table>
        <thead>
        <tr>
            <th  style={{ textAlign: 'center' }}>nein</th>
            <td style={{ textAlign: 'center' }}>no</td>
          </tr>
          <tr>
            <th  style={{ textAlign: 'center' }}>nicht</th>
            <td  style={{ textAlign: 'center' }}>not</td>
          </tr>
          <tr>
            <th  style={{ textAlign: 'center' }}>kein</th>
            <td style={{ textAlign: 'center' }}>no/none</td>
          </tr>
        </thead>
        </table>
       </div>
        <p>A whole sentence is negated by <span className="highlight">nein</span>. <span className="highlight">Nein</span> can stand alone and replace an entire negative sentence or precede it. In the example above, <span className="highlight">nicht</span> negates a verb. <span className="highlight">Nicht</span> appears after the verb. <span className="highlight">Nicht</span> can also, together with <span className="highlight">nein</span> negate an entire sentence. In this case, <span className="highlight">nicht</span> always appears at the end of the sentence. If the word being negated is a noun with an indefinite article or without an article, the negating word will be <span className="highlight">kein</span>.<span className="highlight">Kein</span> is declined like an indefinite article in the singular and like a definite article in the plural, both for genders and cases. <span className="highlight">Kein</span> appears before the noun. This is illustrated in the table below:</p>
        <div className="verb-table">
        <table>
        <thead>
        <tr>
        <th colspan="2"></th>
            <th style={{ textAlign: 'center' }}>masculine gender</th>
            <th style={{ textAlign: 'center' }}>feminine gender</th>
            <th style={{ textAlign: 'center' }}>neuter gender</th>
            <th style={{ textAlign: 'center' }}>plural</th>
          </tr>
          <tr>
            <th colspan="2" style={{ textAlign: 'center' }}>Nominativ</th>
            <td  style={{ textAlign: 'center' }}>kein</td>
            <td  style={{ textAlign: 'center' }}>keine</td>
            <td  style={{ textAlign: 'center' }}>kein</td>
            <td  style={{ textAlign: 'center' }}>keine</td>
          </tr>
          <tr>
            <th colspan="2" style={{ textAlign: 'center' }}>Genitiv</th>
            <td  style={{ textAlign: 'center' }}>keines+s</td>
            <td  style={{ textAlign: 'center' }}>keiner</td>
            <td  style={{ textAlign: 'center' }}>keines+s</td>
            <td  style={{ textAlign: 'center' }}>keiner</td>
          </tr>
          <tr>
            <th colspan="2" style={{ textAlign: 'center' }}>Dativ</th>
            <td  style={{ textAlign: 'center' }}>keinem</td>
            <td  style={{ textAlign: 'center' }}>keiner</td>
            <td  style={{ textAlign: 'center' }}>keinem</td>
            <td  style={{ textAlign: 'center' }}>keinen+n</td>
          </tr>
          <tr>
            <th colspan="2" style={{ textAlign: 'center' }}>Akkusativ</th>
            <td  style={{ textAlign: 'center' }}>keinen</td>
            <td  style={{ textAlign: 'center' }}>keine</td>
            <td  style={{ textAlign: 'center' }}>kein</td>
            <td  style={{ textAlign: 'center' }}>keine</td>
          </tr>
          
        </thead>
        <tbody>
        </tbody>
        </table>
       </div>
        
    <div className="tests-verb-container">
    <p><DriveFileRenameOutlineIcon style={{ fontSize: '2.7rem' }} /> Put your knowledge to the test!</p>
    </div>
    <div className="tests-verb-container2">
    <Link to='./negation-test'>
    <p style={{ marginTop:'5%', marginBottom:'-6%' }}>Answer the questions negatively</p>
    </Link>
    </div>
    <div className="tests-verb-container3">
    <Link to='./negation-kein-test'>
    <p>Insert kein in the appropriate form</p>
    </Link>
    </div>
      </div>
      <Footer />
    </>
  )
}

export default Negation;
