import React from 'react'
import '../A1/VerbConjugation.css'
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import Looks4Icon from '@mui/icons-material/Looks4';
import Footer from '../../../Footer'
import {Link} from 'react-router-dom';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
function Conjunctions() {
  return (
    <>
    <div className="conjugation-container">
      <h1>Conjunctions</h1>
      <h3><LooksOneIcon style={{fontSize: '2.5rem', marginBottom:'-1%', marginRight:'-2%'}} />Coordinating Conjunctions</h3>
      <p>In a clause that is introduced by a conjunction, the sentence structure is exactly the same as in a normal main clause (conjunction + subject + finite verb + …). This is called standard word order. Examples: </p>
      <p className="bold">Kerstin ist glücklich, denn sie hat Urlaub.</p>
      <h3><LooksTwoIcon style={{fontSize: '2.0rem', marginBottom:'-3%'}}  />Subjunctions</h3>
      <p>In a clause that is introduced by a subjunction, the finite verb is placed at the end of the sentence (subjunction + subject + … + finite verb). This is called final word order. Examples: </p>
      <p className="bold">Sie macht Urlaub an der Nordsee, weil sie das Meer liebt.</p>
      <h3><Looks3Icon style={{fontSize: '2.3rem', marginBottom:'-2%', marginRight:'-2%'}} />Conjunctive Adverbs</h3>
      <p>In a clause that is introduced by a conjunctive adverb, the finite verb comes before the subject (conjunctive adverb + finite verb + subject + …). This is called inverted word order. Examples: </p>
      <p className="bold">Sie macht Urlaub an der Nordsee, weil sie das Meer liebt.</p>
      
      <h3><Looks4Icon style={{fontSize: '2.3rem', marginBottom:'-1.5%', marginRight:'-2%'}} />Table of Conjunctions</h3>
      <p>The table below provides an overview of the most common German conjunctions, subjunctions and conjunctive adverbs together with the correct word order.</p>
      <div className="verb-table">
        <table>
        <thead>
          <tr>
            <th></th>
            <th style={{ textAlign: 'center' }}>Conjunctions</th>
            <th style={{ textAlign: 'center' }}>Subjunctions</th>
            <th style={{ textAlign: 'center' }}>Conjunctive Adverbs</th>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">Word Order</td>
            <td style={{ textAlign: 'center' }}>conjunction + subject + conjugated verb + …</td>
            <td style={{ textAlign: 'center' }}>subjunction + subject + … + conjugated verb</td>
            <td style={{ textAlign: 'center' }}>conjunctive adverb + conjugated verb + subject + …</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="bold" rowspan="22">List</td> 
            <td>aber</td>
            <td>als</td>
            <td>allerdings</td>
          </tr>
          <tr>
            <td>denn</td>
            <td>bevor</td>
            <td>also</td>
          </tr>
          <tr>
            <td>doch</td>
            <td>bis</td>
            <td>andererseits</td>
          </tr>
          <tr>
            <td>oder</td>
            <td>da</td>
            <td>anschließend</td>
          </tr>
          <tr>
            <td>sondern</td>
            <td>damit</td>
            <td>außerdem</td>
          </tr>
          <tr>
            <td>und</td>
            <td>dass</td>
            <td>dabei</td>
          </tr>
          <tr>
            <td rowspan="16"></td>
            <td>falls</td>
            <td>dadurch</td>
          </tr>
          <tr>
            <td>indem</td>
            <td>dafür</td>
          </tr>
          <tr>
            <td>nachdem</td>
            <td>damit</td>
          </tr>
          <tr>
            <td>obwohl</td>
            <td>dann</td>
          </tr>
          <tr>
            <td>seit</td>
            <td>deshalb</td>
          </tr>
          <tr>
            <td>seitdem</td>
            <td>einerseits</td>
          </tr>
          <tr>
            <td>sodass</td>
            <td>folgich</td>
          </tr>
          <tr>
            <td>solange</td>
            <td>genauso</td>
          </tr>
          <tr>
            <td>sooft</td>
            <td>jedoch</td>
          </tr>
          <tr>
            <td>während</td>
            <td>schließlich</td>
          </tr>
          <tr>
            <td>weil</td>
            <td>seitdem</td>
          </tr>
          <tr>
            <td rowspan="5"></td>
            <td>später</td>
          </tr>
          <tr>
            <td>trotzdem</td>
          </tr>
          <tr>
            <td>vorher</td>
          </tr>
          <tr>
            <td>weder ... noch</td>
          </tr>
          <tr>
            <td>zwar</td>
          </tr>
        </tbody>
        </table>
        </div>
    <div className="tests-verb-container">
    <p><DriveFileRenameOutlineIcon style={{ fontSize: '2.7rem' }} /> Put your knowledge to the test!</p>
    </div>
    <div className="tests-verb-container2">
    <Link to='./conjunctions-test'>
    <p>Conjunctions test</p>
    </Link>
    </div>
      </div>
      <Footer />
    </>
  )
}

export default Conjunctions
