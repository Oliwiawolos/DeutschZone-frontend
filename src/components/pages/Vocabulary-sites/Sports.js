import React from 'react'
import sports from '../../images/Sports.png'
import './Vocabulary-sites.css'
import united from '../../images/united.png'
import german from '../../images/german.png'
import Footer from '../../Footer'
import {Link} from 'react-router-dom';
import './tests/Sportstest'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
function Sports() {
  return (
    <>
      <div className="vocabulary-container">
        <h1>Sports</h1>
        <p>Learn German with our sports vocabulary! Discover essential sports-related words in German, paired with fun illustrations to make learning easy and enjoyable.</p>
        <div className='img-container'>
          <img src={sports} alt="Sports"  />
        </div>
        <div className="tables-container">
      <table className="table">
      <thead>
  <tr>
    <th>
      <div className="th-content">
      <img src={german} alt="German"/>
        word
      </div>
    </th>
    <th>
      <div className="th-content">
      <img src={united} alt="Flag" />
        translation
      </div>
    </th>
  </tr>
</thead>
        <tbody>
          <tr>
            <td>1.der Kraftraum</td>
            <td>gym</td>
          </tr>
          <tr>
            <td>2.der Basketball</td>
            <td>basketball</td>
          </tr>
          <tr>
            <td>3.das Tennis</td>
            <td>tennis</td>
          </tr>
          <tr>
            <td>4.das Schwimmen</td>
            <td>swimming</td>
          </tr>
          <tr>
            <td>5.das Laufen</td>
            <td>running</td>
          </tr>
          <tr>
            <td>6.der Fußball</td>
            <td>football</td>
          </tr>
          <tr>
            <td>7.der Sieg</td>
            <td>victory</td>
          </tr>
          <tr>
            <td>8.der Volleyball</td>
            <td>volleyball</td>
          </tr>
          <tr>
            <td>9.der Ball</td>
            <td>ball</td>
          </tr>
          <tr>
            <td>10.das Golf</td>
            <td>golf</td>
          </tr>
          <tr>
            <td>11.das Radfahren</td>
            <td>cycling</td>
          </tr>
        </tbody>
      </table>

      <table className="table">
      <thead>
  <tr>
    <th>
      <div className="th-content">
      <img src={german} alt="German"/>
        word
      </div>
    </th>
    <th>
      <div className="th-content">
      <img src={united} alt="Flag" />
        translation
      </div>
    </th>
  </tr>
</thead>
        <tbody>
        <tr>
            <td>12.das Tanzen</td>
            <td>dancing</td>
          </tr>
          <tr>
            <td>13.das Querruder</td>
            <td>birdie</td>
          </tr>
          <tr>
            <td>14.die Kletterei</td>
            <td>flap</td>
          </tr>
          <tr>
            <td>15.das Bogenschießen </td>
            <td>archery</td>
          </tr>
          <tr>
            <td>16.das Skifahren</td>
            <td>skiing</td>
          </tr>
          <tr>
            <td>17.der Handball</td>
            <td>handball</td>
          </tr>
          <tr>
            <td>18.der Kanusport</td>
            <td>canoeing</td>
          </tr>
          <tr>
            <td>19.der Reitsport</td>
            <td>horse riding</td>
          </tr>
          <tr>
            <td>20.das Ringen</td>
            <td>wrestling</td>
          </tr>
          <tr>
            <td>21.das Turnen</td>
            <td>gymnastics</td>
          </tr>
          <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>

        </tbody>
      </table>
    
    </div>
    <div className="tests-container">
    <p><DriveFileRenameOutlineIcon/> Put your knowledge to the test!</p>
    </div>
    <div className="tests-container2">
    <Link to='./sports-test'>
    <p>Test</p>
    </Link>
    </div>
      </div>
      <Footer />
    </>
  );
}

export default Sports
