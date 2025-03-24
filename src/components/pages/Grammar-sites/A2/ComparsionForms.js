import React from 'react'
import '../A1/VerbConjugation.css'
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Footer from '../../../Footer'
import {Link} from 'react-router-dom';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
function ComparsionForms() {
  return (
    <>
    <div className="conjugation-container">
      <h1>Comparsion Forms</h1>
      <h3><LooksOneIcon style={{fontSize: '1.9rem', marginBottom:'-3%'}} />Komparativ</h3>
      <p>The comparative degree of an adjective is formed by adding the suffix  <span className="highlight">-er</span> to the stem.</p>
      <div className="verb-table">
        <table>
        <thead>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">klein</td>
            <td style={{ textAlign: 'center' }}>small</td>
            <td style={{ textAlign: 'center' }} className="bold">kleiner</td>
            <td style={{ textAlign: 'center' }}>smaller</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">schnell</td>
            <td style={{ textAlign: 'center' }}>fast</td>
            <td style={{ textAlign: 'center' }} className="bold">schneller</td>
            <td style={{ textAlign: 'center' }}>faster</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">billig</td>
            <td style={{ textAlign: 'center' }}>cheap</td>
            <td style={{ textAlign: 'center' }} className="bold">billiger</td>
            <td style={{ textAlign: 'center' }}>cheaper</td>
          </tr>
        </thead>
        </table>
        </div>
     <p>One-syllable adjectives with the vowels <span className="highlight">a</span>, <span className="highlight">o</span>, <span className="highlight">u</span> receive an umlaut.</p>
     <div className="verb-table">
        <table>
        <thead>
        <tr>
            <td style={{ textAlign: 'center' }} className="bold">alt</td>
            <td style={{ textAlign: 'center' }}>old</td>
            <td style={{ textAlign: 'center' }} className="bold">älter</td>
            <td style={{ textAlign: 'center' }}>older</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">jung</td>
            <td style={{ textAlign: 'center' }}>young</td>
            <td style={{ textAlign: 'center' }} className="bold">jünger</td>
            <td style={{ textAlign: 'center' }}>younger</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">kalt</td>
            <td style={{ textAlign: 'center' }}>cold</td>
            <td style={{ textAlign: 'center' }} className="bold">kälter</td>
            <td style={{ textAlign: 'center' }}>colder</td>
          </tr>
        </thead>
        </table>
        </div>
        <p>When comparing adjectives in the comparative form, the conjunction <span className="highlight">als</span> is used. Examples:</p>
     <div className="verb-table">
        <table>
        <thead>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">Er ist jünger als sein Bruder.</td>
            <td style={{ textAlign: 'center' }}>He is younger than his brother.</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">Olga lernt besser als Marta.</td>
            <td style={{ textAlign: 'center' }}>Olga studies better than Martha.</td>
          </tr>
        </thead>
        </table>
        </div>
        <p>If the adjective is placed before a noun, in addition to the suffix -er, it also takes the same ending as in the positive degree of the adjective:</p>
     <div className="verb-table">
        <table>
        <thead>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">Hast du einen älteren Bruder?</td>
            <td style={{ textAlign: 'center' }}>Do you have an older brother?</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">Wir kaufen das teurere Ticket.</td>
            <td style={{ textAlign: 'center' }}>We are buying the more expensive tickets.</td>
          </tr>
        </thead>
        </table>
        </div>
        <p>Some adjectives are compared irregulary:</p>
     <div className="verb-table">
        <table>
        <thead>
        <tr>
            <td style={{ textAlign: 'center' }} className="bold">gut</td>
            <td style={{ textAlign: 'center' }}>good</td>
            <td style={{ textAlign: 'center' }} className="bold">besser</td>
            <td style={{ textAlign: 'center' }}>better</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">viel</td>
            <td style={{ textAlign: 'center' }}>much</td>
            <td style={{ textAlign: 'center' }} className="bold">mehr</td>
            <td style={{ textAlign: 'center' }}>more</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">hoch</td>
            <td style={{ textAlign: 'center' }}>high</td>
            <td style={{ textAlign: 'center' }} className="bold">höher</td>
            <td style={{ textAlign: 'center' }}>higher</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">nah</td>
            <td style={{ textAlign: 'center' }}>close</td>
            <td style={{ textAlign: 'center' }} className="bold">näher</td>
            <td style={{ textAlign: 'center' }}>closer</td>
          </tr>
        </thead>
        </table>
        </div>
        <h3><LooksTwoIcon style={{fontSize: '1.9rem', marginBottom:'-3%'}} />Superlativ</h3>
      <p>The superlative degree of an adjective is formed by adding the suffix <span className="highlight">-st</span> to the adjective. One-syllable adjectives with the vowels <span className="highlight">a</span>, <span className="highlight">o</span>,<span className="highlight">u</span> additionally receive an umlaut: </p>
      <div className="verb-table">
        <table>
        <thead>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">klein</td>
            <td style={{ textAlign: 'center' }}>small</td>
            <td style={{ textAlign: 'center' }} className="bold">der,die,das kleinste</td>
            <td style={{ textAlign: 'center' }} >the smallest</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">schön</td>
            <td style={{ textAlign: 'center' }}>pretty</td>
            <td style={{ textAlign: 'center' }} className="bold">der,die,das schönste</td>
            <td style={{ textAlign: 'center' }}>the prettiest</td>
          </tr>
        </thead>
        </table>
        </div>
     <p>Adjectives ending in <span className="highlight">-t</span>, <span className="highlight">-d</span>, <span className="highlight">-z</span>, <span className="highlight">-ß</span>, <span className="highlight">-ss</span> or <span className="highlight">-sch</span> receive an additional <span className="highlight">-e</span> forming the ending <span className="highlight">-es</span>, to facilitate pronunciation.</p>
     <div className="verb-table">
        <table>
        <thead>
        <tr>
            <td style={{ textAlign: 'center' }} className="bold">alt</td>
            <td style={{ textAlign: 'center' }}>old</td>
            <td style={{ textAlign: 'center' }} className="bold">der,die,das älteste</td>
            <td style={{ textAlign: 'center' }}>the oldest</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">kurz</td>
            <td style={{ textAlign: 'center' }}>short</td>
            <td style={{ textAlign: 'center' }} className="bold">der,die,das kürzeste</td>
            <td style={{ textAlign: 'center' }}>the shortest</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">kalt</td>
            <td style={{ textAlign: 'center' }}>cold</td>
            <td style={{ textAlign: 'center' }} className="bold">der,die,das kälteste</td>
            <td style={{ textAlign: 'center' }}>the coldest</td>
          </tr>
        </thead>
        </table>
        </div>
        <p>Irregularly compared adjectives are as follows:</p>
     <div className="verb-table">
        <table>
        <thead>
        <tr>
            <td style={{ textAlign: 'center' }} className="bold">gut</td>
            <td style={{ textAlign: 'center' }}>good</td>
            <td style={{ textAlign: 'center' }} className="bold">der,die,das beste</td>
            <td style={{ textAlign: 'center' }}>the best</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">viel</td>
            <td style={{ textAlign: 'center' }}>much</td>
            <td style={{ textAlign: 'center' }} className="bold">der,die,das meiste</td>
            <td style={{ textAlign: 'center' }}>the most</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">hoch</td>
            <td style={{ textAlign: 'center' }}>high</td>
            <td style={{ textAlign: 'center' }} className="bold">der,die,das höchste</td>
            <td style={{ textAlign: 'center' }}>the highest</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">nah</td>
            <td style={{ textAlign: 'center' }}>close</td>
            <td style={{ textAlign: 'center' }} className="bold">der,die,das nächste</td>
            <td style={{ textAlign: 'center' }}>the closest</td>
          </tr>
        </thead>
        </table>
        </div>
        <p>In comparisons, the connector is <span className="highlight">von</span> (of, from):</p>
     <div className="verb-table">
        <table>
        <thead>
        <tr>
            <td style={{ textAlign: 'center' }} className="bold">Er ist der begabteste von uns allen.</td>
            <td style={{ textAlign: 'center' }}>He is the most talented of all of us.</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">Sie ist die schönste von allen Frauen.</td>
            <td style={{ textAlign: 'center' }}>She is the prettiest of all the women.</td>
          </tr>
        </thead>
        </table>
        </div>
        <p>Adjectives in the superlative degree always appear with a definite article or possibly a possessive pronoun. It is important to remember that they are declined according to cases and genders. In such instances, they take the same endings as adjectives in the positive degree: </p>
     <div className="verb-table">
        <table>
        <thead>
        <tr>
            <td style={{ textAlign: 'center' }} className="bold">Wir fahren immer mit dem schnellsten Zug.</td>
            <td style={{ textAlign: 'center' }}>We always travel by the fastest train.</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">Kennst du den längsten Fluss Deutschlands?</td>
            <td style={{ textAlign: 'center' }}>Do you know the longest river in Germany?</td>
          </tr>
        </thead>
        </table>
        </div>
        <p>There are situations in which an adjective in the superlative degree does not precede a noun or functions as an adverb. In such situations, the adjective is indeclinable and may appear with a definite article or with the word <span className="highlight">am</span> and the ending <span className="highlight">-(e)sten</span>:  </p>
     <div className="verb-table">
        <table>
        <thead>
        <tr>
            <td style={{ textAlign: 'center' }} className="bold">Die Studentin ist die begabteste.</td>
            <td style={{ textAlign: 'center' }}>Die Studentin ist am begabtesten.</td>
            <td style={{ textAlign: 'center' }}>This student is the most talented.</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} className="bold">Das Auto ist das schnellste.</td>
            <td style={{ textAlign: 'center' }}>Das Auto ist am schnellsten.</td>
            <td style={{ textAlign: 'center' }}>This car is the fastest.</td>
          </tr>
        </thead>
        </table>
        </div>
    <div className="tests-verb-container">
    <p><DriveFileRenameOutlineIcon style={{ fontSize: '2.7rem' }} /> Put your knowledge to the test!</p>
    </div>
    <div className="tests-verb-container2">
    <Link to='./komperativ-test'>
    <p>Komperativ Test</p>
    </Link>
    </div>
    <div className="tests-verb-container2">
    <Link to='./superlativ-test'>
    <p>Superlativ Test</p>
    </Link>
    </div>
      </div>
      <Footer />
    </>
  )
}

export default ComparsionForms
