import React from 'react'
import '../A1/VerbConjugation.css'
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import Footer from '../../../Footer'
import {Link} from 'react-router-dom';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
function AdjectiveDeclension() {
  return (
    <>
    <div className="conjugation-container">
      <h1>Adjective Declension</h1>
      <p>How we decline adjectives depends on several factors: the case, the gender of the noun, whether the noun is singular or plural and the type of word that introduces the adjective. There are three types of adjective declension:</p>
      <h3><LooksOneIcon style={{fontSize: '1.7rem', marginBottom:'-4%'}} />Type 1</h3>
      <p className="bold">definite article + adjective + noun</p>
      <div className="verb-table">
        <table>
        <thead>
          <tr>
            <th style={{ textAlign: 'center' }} colspan="2">Singular</th>
            <th style={{ textAlign: 'center' }} colspan="2">Plural</th>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">ich</td>
            <td style={{ textAlign: 'center' }}>I</td>
            <td style={{ textAlign: 'center' }} className="bold">wir</td>
            <td style={{ textAlign: 'center' }}>we</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">du</td>
            <td style={{ textAlign: 'center' }}>you</td>
            <td style={{ textAlign: 'center' }} className="bold">ihr</td>
            <td style={{ textAlign: 'center' }}>you</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">er/sie/es</td>
            <td style={{ textAlign: 'center' }}>he/she/it</td>
            <td style={{ textAlign: 'center' }} className="bold">Sie/sie</td>
            <td style={{ textAlign: 'center' }}>they</td>
          </tr>
        </thead>
        </table>
        </div>
     <h3><LooksTwoIcon style={{fontSize: '2.6rem', marginBottom:'-1.5%', marginRight:'-2%'}}  />Personal pronoun with case</h3>
     <p>Personal pronoun is inflected not only by person but also by case.</p>
     <div className="verb-table">
        <table>
        <thead>
          <tr>
            <th style={{ textAlign: 'center' }}></th>
            <th style={{ textAlign: 'center' }}>Akkusativ</th>
            <th style={{ textAlign: 'center' }} >Dativ</th>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }}></td>
            <td style={{ textAlign: 'center' }}>Whom? What?</td>
            <td style={{ textAlign: 'center' }}>To whom? To what?</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">ich</td>
            <td style={{ textAlign: 'center' }}>mich</td>
            <td style={{ textAlign: 'center' }}>mir</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">du</td>
            <td style={{ textAlign: 'center' }}>dich</td>
            <td style={{ textAlign: 'center' }}>dir</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">er/sie/es</td>
            <td style={{ textAlign: 'center' }}>ihn/sie/es</td>
            <td style={{ textAlign: 'center' }}>ihm/ihr/ihm</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">wir</td>
            <td style={{ textAlign: 'center' }}>uns</td>
            <td style={{ textAlign: 'center' }}>uns</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">ihr</td>
            <td style={{ textAlign: 'center' }}>euch</td>
            <td style={{ textAlign: 'center' }}>euch</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">Sie/sie</td>
            <td style={{ textAlign: 'center' }}>Sie/sie</td>
            <td style={{ textAlign: 'center' }}>Ihnen/ihnen</td>
          </tr>
        </thead>
        </table>
        </div>

      <p className="bold">Examples:</p>
      <div className="verb-table">
        <table>
        <thead>
          <tr>
            <td style={{ textAlign: 'center' }}>Der Mann ist krank.</td>
            <td style={{ textAlign: 'center' }} className="bold">Er ist nicht gesund.</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }}>Peter hilft einer Frau.</td>
            <td style={{ textAlign: 'center' }} className="bold">Peter hilft ihr oft.</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }}>Hans besucht eine Freundin.</td>
            <td style={{ textAlign: 'center' }} className="bold">Er besucht sie gerne.</td>
          </tr>
        </thead>
        </table>
        </div>
        <h3><Looks3Icon style={{fontSize: '2.5rem', marginBottom:'-1.5%', marginRight:'-2%'}}  />Sentence with two nouns</h3>
      <p>If there are two nouns in a sentence: one in the accusative and the other in the dative case, and both are replaced by pronouns, the pronoun in the accusative case will come before the pronoun in the dative case.</p>
      <div className="verb-table">
        <table>
        <thead>
          <tr>
            <td style={{ textAlign: 'center' }}>Er gibt seiner Freundin ein Geschenk.</td>
            <td style={{ textAlign: 'center' }} className="bold">Er gibt es ihr.</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }}>Ich antworte dem Lehrer auf eine Frage.</td>
            <td style={{ textAlign: 'center' }} className="bold">Ich antworte auf sie ihm.</td>
          </tr>
        </thead>
        </table>
        </div>
    <div className="tests-verb-container">
    <p><DriveFileRenameOutlineIcon style={{ fontSize: '2.7rem' }} /> Put your knowledge to the test!</p>
    </div>
    <div className="tests-verb-container2">
    <Link to='./personal-test'>
    <p style={{marginTop:'10%'}}>Personal Pronoun Test</p>
    </Link>
    </div>
      </div>
      <Footer />
    </>
  )
}

export default AdjectiveDeclension
