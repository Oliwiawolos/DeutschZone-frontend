import React from 'react'
import '../A1/VerbConjugation.css'
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import Looks4Icon from '@mui/icons-material/Looks4';
import Looks5Icon from '@mui/icons-material/Looks5';
import Footer from '../../../Footer'
import {Link} from 'react-router-dom';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
function ReflexiveVerbs() {
  return (
    <>
    <div className="conjugation-container">
      <h1>Reflexive Verbs</h1>
      <p>Reflexive verbs in German are verbs that are used with reflexive pronouns, indicating that the subject performs the action on itself. The concept is similar to reflexive verbs in English like "to enjoy oneself" or "to wash oneself".</p>
     <h3><LooksOneIcon style={{fontSize: '2.4rem', marginBottom:'-2.5%', marginRight:'-2%'}} />Reflexive Pronouns</h3>
     <p>Reflexive pronouns in German change depending on the subject (person) and case (accusative or dative). Here are the reflexive pronouns:</p>
      <div className="verb-table">
        <table>
        <thead>
            <tr>
            <td style={{ textAlign: 'center' }} className="bold">Person</td>
            <td style={{ textAlign: 'center' }} className="bold">Reflexive Pronoun (Accusative)</td>
            <td style={{ textAlign: 'center' }} className="bold">Reflexive Pronoun (Dative)</td>
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
            <td style={{ textAlign: 'center' }}>sich</td>
            <td style={{ textAlign: 'center' }}>sich</td>
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
            <td style={{ textAlign: 'center' }}>sich</td>
            <td style={{ textAlign: 'center' }}>sich</td>
          </tr>
        </thead>
        </table>
        </div>
     <h3><LooksTwoIcon style={{fontSize: '2.6em', marginRight:'-2%', marginBottom:"-2%"}}  />Position of Reflexive Pronouns</h3>
     <p>Reflexive pronouns generally come directly after the conjugated verb in the sentence.</p>
     <div className="verb-table">
        <table>
        <thead>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">Ich wasche mich.</td>
            <td style={{ textAlign: 'center' }}>I'm washing myself.</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">Ich ziehe mir eine Jacke an.</td>
            <td style={{ textAlign: 'center' }}>I'm putting on a jacket.</td>
          </tr>
        </thead>
        </table>
        </div>
        <h3><Looks3Icon style={{fontSize: '3.4rem', marginBottom:'-1.5%', marginRight:'-2%'}}  />Accusative vs. Dative Reflexive Pronouns</h3>
      <p>Most reflexive verbs use the accusative case, but some use the dative case when there is an additional direct object. The reflexive pronoun will take the accusative case when it is the direct object, and the dative case when it is the indirect object.</p>
      <div className="verb-table">
        <table>
        <thead>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">Ich wasche mich.</td>
            <td style={{ textAlign: 'center' }}>I'm washing myself.</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">Ich wasche mir die Hände.</td>
            <td style={{ textAlign: 'center' }}>I'm washing my hands.</td>
          </tr>
        </thead>
        </table>
        </div>
        <h3><Looks4Icon style={{fontSize: '3.0rem', marginBottom:'-1.5%', marginRight:'-2%'}}  />Reflexive Verbs in Perfect Tense</h3>
      <p>Reflexive verbs form the perfect tense using the auxiliary verb haben (to have), followed by the past participle and the reflexive pronoun.</p>
      <div className="verb-table">
        <table>
        <thead>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">Ich habe mich geduscht.</td>
            <td style={{ textAlign: 'center' }}>I have showered.</td>
          </tr>
        </thead>
        </table>
        </div>

        <h3><Looks5Icon style={{fontSize: '2.8rem', marginBottom:'-2%', marginRight:'-2%'}}  />Common Reflexive Verbs</h3>
      <p>Reflexive verbs often involve personal care or daily routines. Here are some common reflexive verbs:</p>
      <div className="verb-table">
        <table>
        <thead>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">sich anziehen</td>
            <td style={{ textAlign: 'center' }}>to get dressed</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">sich ausruhen</td>
            <td style={{ textAlign: 'center' }}>to rest</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">sich beeilen</td>
            <td style={{ textAlign: 'center' }}>to hurry</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">sich duschen</td>
            <td style={{ textAlign: 'center' }}>to shower</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">sich freuen</td>
            <td style={{ textAlign: 'center' }}>to be happy</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">sich interessieren</td>
            <td style={{ textAlign: 'center' }}>to be interested</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">sich konzentrieren</td>
            <td style={{ textAlign: 'center' }}>to concentrate</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">sich langweilen</td>
            <td style={{ textAlign: 'center' }}>to be bored</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">sich waschen</td>
            <td style={{ textAlign: 'center' }}>to wash oneself</td>
          </tr>
        </thead>
        </table>
        </div>       
    <div className="tests-verb-container">
    <p><DriveFileRenameOutlineIcon style={{ fontSize: '2.7rem', marginTop:'-5%' }} /> Put your knowledge to the test!</p>
    </div>
    <div className="tests-verb-container2">
    <Link to='./reflexive-test'>
    <p style={{ marginTop:'10%', marginBottom:'-4%' }}>Reflexive Verbs Test</p>
    </Link>
    </div>
      </div>
      <Footer />
    </>
  )
}

export default ReflexiveVerbs
