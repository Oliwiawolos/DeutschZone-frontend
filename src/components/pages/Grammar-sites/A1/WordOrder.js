import React from 'react'
import './VerbConjugation.css'
import Footer from '../../../Footer'
import {Link} from 'react-router-dom';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
function WordOrder() {
  return (
    <>
    <div className="conjugation-container">
      <h1>Word Order</h1>
      <p>To construct a declarative sentence, you need at least two words: </p>
      <p className="bold" style={{ marginTop:'5%', marginBottom:'-6%' }}>a noun (subject) + a verb (predicate) in the 2nd position</p>
      <div className="verb-table">
       </div>
        <p style={{ marginTop:'5%' }}>Now enrich the sentence with additional words:</p>
        <div className="verb-table">
        <table>
        <thead>
        <tr>
            <th  style={{ textAlign: 'center' }}>Er kommt aus der Schule um 16 Uhr.</th>
            <td style={{ textAlign: 'center' }}>What?</td>
          </tr>
        </thead>
        </table>
       </div>
       <div className="verb-table">
       </div>
        <p style={{ marginTop:'-5%' }}>If, however, we want to transform any of the sentences, the order of the words will change. In German, the predicate (i.e., the verb in its conjugated form) always appears in the second position in a declarative sentence. It does not matter which part of the sentence precedes it. Such word order is called inverted word order.</p>
        <div className="verb-table">
        <table>
        <thead>
        <tr>
            <th  style={{ textAlign: 'center' }}>Aus der Schule kommt er um 16 Uhr.</th>
            <td style={{ textAlign: 'center' }}>What?</td>
          </tr>
        </thead>
        </table>
       </div>
       
    <div className="tests-verb-container">
    <p><DriveFileRenameOutlineIcon style={{ fontSize: '2.7rem', marginTop:'-5%' }} /> Put your knowledge to the test!</p>
    </div>
    <div className="tests-verb-container2">
    <Link to='./word-test'>
    <p style={{ marginTop:'5%', marginBottom:'-6%' }}>Bilde Sätze aus den angegebenen Wörtern</p>
    </Link>
    </div>
      </div>
      <Footer />
    </>
  )
}

export default WordOrder;
