import React from 'react'
import '../A1/VerbConjugation.css'
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Footer from '../../../Footer'
import {Link} from 'react-router-dom';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
function PossessivePronouns() {
  return (
    <>
    <div className="conjugation-container">
      <h1>Possessive Pronouns</h1>
      <p>The role of a possessive pronoun is to indicate to whom something belongs. It takes the place of the article in a sentence, and they never appear together (meaning, before a noun, there is either a possessive pronoun or an article). The possessive pronoun has different forms for different persons. The pattern of declension is as follows:</p>
      <h3><LooksOneIcon style={{fontSize: '1.8rem', marginBottom:'-4%'}} />Persons</h3>
      <div className="verb-table">
        <table>
        <thead>
          <tr>
            <th style={{ textAlign: 'center' }} colspan="2">Singular</th>
            <th style={{ textAlign: 'center' }} colspan="2">Plural</th>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">ich</td>
            <td style={{ textAlign: 'center' }}>mein</td>
            <td style={{ textAlign: 'center' }} className="bold">wir</td>
            <td style={{ textAlign: 'center' }}>unser</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">du</td>
            <td style={{ textAlign: 'center' }}>dein</td>
            <td style={{ textAlign: 'center' }} className="bold">ihr</td>
            <td style={{ textAlign: 'center' }}>euer</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">er/sie/es</td>
            <td style={{ textAlign: 'center' }}>sein/ihr/sein</td>
            <td style={{ textAlign: 'center' }} className="bold">Sie/sie</td>
            <td style={{ textAlign: 'center' }}>Ihr/ihr</td>
          </tr>
        </thead>
        </table>
        </div>
     <h3><LooksTwoIcon style={{fontSize: '2.85rem', marginBottom:'-1.5%', marginRight:'-2%'}}  />Possessive pronoun with case</h3>
     <p>In German, the possessive pronoun is declined in the same way as the indefinite article <span className="highlight">ein</span>. A significant convenience is that possessive pronouns, when declined through cases, receive the same endings as the indefinite article <span className="highlight">ein</span> and in the plural, they are declined like the definite article <span className="highlight">die</span>.</p>
     <div className="verb-table">
        <table>
        <thead>
          <tr>
            <th style={{ textAlign: 'center' }}></th>
            <th style={{ textAlign: 'center' }}>masculine gender</th>
            <th style={{ textAlign: 'center' }}>feminine gender</th>
            <th style={{ textAlign: 'center' }}>neuter gender</th>
            <th style={{ textAlign: 'center' }}>plural</th>
          </tr>
          <tr>
            <th style={{ textAlign: 'center' }} className="bold">Nominativ</th>
            <td style={{ textAlign: 'center' }}>mein</td>
            <td style={{ textAlign: 'center' }}>meine</td>
            <td style={{ textAlign: 'center' }}>mein</td>
            <td style={{ textAlign: 'center' }}>meine</td>
          </tr>
          <tr>
            <th style={{ textAlign: 'center' }}className="bold">Genitiv</th>
            <td style={{ textAlign: 'center' }}>meines+s</td>
            <td style={{ textAlign: 'center' }}>meiner</td>
            <td style={{ textAlign: 'center' }}>meines+s</td>
            <td style={{ textAlign: 'center' }}>meiner</td>
          </tr>
          <tr>
            <th style={{ textAlign: 'center' }} className="bold">Dativ</th>
            <td style={{ textAlign: 'center' }}>meinem</td>
            <td style={{ textAlign: 'center' }}>meiner</td>
            <td style={{ textAlign: 'center' }}>meinem</td>
            <td style={{ textAlign: 'center' }}>meinen+n</td>
          </tr>
          <tr>
            <th style={{ textAlign: 'center' }} className="bold">Akkusativ</th>
            <td style={{ textAlign: 'center' }}>meinen</td>
            <td style={{ textAlign: 'center' }}>meine</td>
            <td style={{ textAlign: 'center' }}>mein</td>
            <td style={{ textAlign: 'center' }}>meine</td>
          </tr>
        </thead>
        </table>
        </div>

      <p className="bold">Examples:</p>
      <div className="verb-table">
        <table>
        <thead>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">Kennst du ihren Bruder?</td>
            <td style={{ textAlign: 'center' }}>Do you know her brother?</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">Ich brauche deine Hilfe!</td>
            <td style={{ textAlign: 'center' }}>I need your help!</td>
          </tr>
        </thead>
        </table>
        </div>
         <p>In the examples above, special attention should be paid to the pronoun <span className="highlight">euer</span> which loses its middle vowel <span className="highlight">-e</span> during declension. It looks like this: </p>
         <div className="verb-table">
        <table>
        <thead>
          <tr>
            <th style={{ textAlign: 'center' }}></th>
            <th style={{ textAlign: 'center' }}>masculine gender</th>
            <th style={{ textAlign: 'center' }}>feminine gender</th>
            <th style={{ textAlign: 'center' }}>neuter gender</th>
            <th style={{ textAlign: 'center' }}>plural</th>
          </tr>
          <tr>
            <th style={{ textAlign: 'center' }} className="bold">Nominativ</th>
            <td style={{ textAlign: 'center' }}>euer</td>
            <td style={{ textAlign: 'center' }}>eure</td>
            <td style={{ textAlign: 'center' }}>euer</td>
            <td style={{ textAlign: 'center' }}>eure</td>
          </tr>
          <tr>
            <th style={{ textAlign: 'center' }}className="bold">Genitiv</th>
            <td style={{ textAlign: 'center' }}>eures</td>
            <td style={{ textAlign: 'center' }}>eurer</td>
            <td style={{ textAlign: 'center' }}>eures</td>
            <td style={{ textAlign: 'center' }}>eurer</td>
          </tr>
          <tr>
            <th style={{ textAlign: 'center' }} className="bold">Dativ</th>
            <td style={{ textAlign: 'center' }}>eurem</td>
            <td style={{ textAlign: 'center' }}>eurer</td>
            <td style={{ textAlign: 'center' }}>eurem</td>
            <td style={{ textAlign: 'center' }}>euren</td>
          </tr>
          <tr>
            <th style={{ textAlign: 'center' }} className="bold">Akkusativ</th>
            <td style={{ textAlign: 'center' }}>euren</td>
            <td style={{ textAlign: 'center' }}>eure</td>
            <td style={{ textAlign: 'center' }}>euer</td>
            <td style={{ textAlign: 'center' }}>eure</td>
          </tr>
        </thead>
        </table>
        </div>
    <div className="tests-verb-container">
    <p style={{marginBottom:'-2%'}}><DriveFileRenameOutlineIcon style={{ fontSize: '2.7rem', marginBottom:'-2%' }} /> Put your knowledge to the test!</p>
    </div>
    <div className="tests-verb-container2">
    <Link to='./possessive-test'>
    <p>Possessive Pronoun Test</p>
    </Link>
    </div>
      </div>
      <Footer />
    </>
  )
}

export default PossessivePronouns
