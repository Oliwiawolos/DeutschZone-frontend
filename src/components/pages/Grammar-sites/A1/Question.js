import React from 'react'
import './VerbConjugation.css'
import Footer from '../../../Footer'
import {Link} from 'react-router-dom';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
function Negation() {
  return (
    <>
    <div className="conjugation-container">
      <h1>Question formation</h1>
      <p>Questions are created by placing the verb at the beginning of the sentence. For example: </p>
      <div className="verb-table">
        <table>
        <thead>
        <tr>
            <th  style={{ textAlign: 'center' }}>Hörst du jetzt ein Lied?</th>
            <td style={{ textAlign: 'center' }}>Are you listening now musik?</td>
          </tr>
          <tr>
            <th  style={{ textAlign: 'center' }}>Siehst du dieses Mädchen?</th>
            <td  style={{ textAlign: 'center' }}>Are you seeing this girl?</td>
          </tr>
        </thead>
        </table>
       </div>
        <p>The most common wuestion in the German language are those that start with an interrogative pronoun. Here they are:</p>
        <div className="verb-table">
        <table>
        <thead>
        <tr>
            <th  style={{ textAlign: 'center' }}>Was?</th>
            <td style={{ textAlign: 'center' }}>What?</td>
          </tr>
          <tr>
            <th  style={{ textAlign: 'center' }}>Welcher? Welche? Welches?</th>
            <td style={{ textAlign: 'center' }}>Which?</td>
          </tr>
          <tr>
            <th  style={{ textAlign: 'center' }}>Wessen?</th>
            <td style={{ textAlign: 'center' }}>Whose?</td>
          </tr>
          <tr>
            <th  style={{ textAlign: 'center' }}>Wer?</th>
            <td  style={{ textAlign: 'center' }}>Who</td>
          </tr>
          <tr>
            <th  style={{ textAlign: 'center' }}>Wann?</th>
            <td style={{ textAlign: 'center' }}>When?</td>
          </tr>
          <tr>
            <th  style={{ textAlign: 'center' }}>Wo?</th>
            <td  style={{ textAlign: 'center' }}>Where?</td>
          </tr>
          <tr>
            <th  style={{ textAlign: 'center' }}>Wohin?</th>
            <td style={{ textAlign: 'center' }}>Where to?</td>
          </tr>
          <tr>
            <th  style={{ textAlign: 'center' }}>Wie?</th>
            <td  style={{ textAlign: 'center' }}>How?</td>
          </tr>
          <tr>
            <th  style={{ textAlign: 'center' }}>Wozu?</th>
            <td style={{ textAlign: 'center' }}>What for?</td>
          </tr>
          <tr>
            <th  style={{ textAlign: 'center' }}>Woher?</th>
            <td  style={{ textAlign: 'center' }}> Where from?</td>
          </tr>
          <tr>
            <th  style={{ textAlign: 'center' }}>Wie viel?</th>
            <td style={{ textAlign: 'center' }}>How much?</td>
          </tr>
        </thead>
        <tbody>
        </tbody>
        </table>
       </div>
       <p>For example: </p>
        <div className="verb-table">
        <table>
        <thead>
        <tr>
            <th  style={{ textAlign: 'center' }}>Was machst du?</th>
            <td style={{ textAlign: 'center' }}>What are you doing?</td>
          </tr>
          <tr>
            <th  style={{ textAlign: 'center' }}>Wer beantwortet diese Frage?</th>
            <td  style={{ textAlign: 'center' }}>Who answers this question?</td>
          </tr>
          <tr>
            <th  style={{ textAlign: 'center' }}>Wann kaufst du ein neues Fahrrad?</th>
            <td style={{ textAlign: 'center' }}>When are you buying a new bicycle?</td>
          </tr>
          <tr>
            <th  style={{ textAlign: 'center' }}>Wo liegt Uganda?</th>
            <td  style={{ textAlign: 'center' }}>Where is Uganda located?</td>
          </tr>
          <tr>
            <th  style={{ textAlign: 'center' }}>Wohin geht er?</th>
            <td style={{ textAlign: 'center' }}>Where is he going?</td>
          </tr>
          <tr>
            <th  style={{ textAlign: 'center' }}>Woher kommt Peter?</th>
            <td  style={{ textAlign: 'center' }}> Where is Peter from?</td>
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
    <Link to='./question-test'>
    <p style={{ marginTop:'5%', marginBottom:'-6%' }}>Bilde Fragen aus den angegebenen Wörtern</p>
    </Link>
    </div>
    <div className="tests-verb-container3">
    <Link to='./question2-test'>
    <p>Choose the correct interrogative pronoun</p>
    </Link>
    </div>
      </div>
      <Footer />
    </>
  )
}

export default Negation;
