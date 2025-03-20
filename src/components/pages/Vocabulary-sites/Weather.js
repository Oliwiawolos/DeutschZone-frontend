import React from 'react'
import weather from '../../images/Weather.png'
import './Vocabulary-sites.css'
import united from '../../images/united.png'
import german from '../../images/german.png'
import Footer from '../../Footer'
import {Link} from 'react-router-dom';
import './tests/Weathertest'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
function Weather() {
  return (
    <>
      <div className="vocabulary-container">
        <h1>Weather</h1>
        <p>Learn German with our weather vocabulary! Discover essential weather-related words in German, paired with fun illustrations to make learning easy and enjoyable.</p>
        <div className='img-container'>
          <img src={weather} alt="Weather"  />
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
            <td>1.die Sonne</td>
            <td>sun</td>
          </tr>
          <tr>
            <td>2.die Bewölkung</td>
            <td>cloudy</td>
          </tr>
          <tr>
            <td>3.der Regen</td>
            <td>rain</td>
          </tr>
          <tr>
            <td>4.die Schneeflocke</td>
            <td>snowflake</td>
          </tr>
          <tr>
            <td>5.kalt</td>
            <td>cold</td>
          </tr>
          <tr>
            <td>6.heiß</td>
            <td>hot</td>
          </tr>
          <tr>
            <td>7.die Wolke</td>
            <td>cloud</td>
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
            <td>8.der Wind</td>
            <td>wind</td>
          </tr>
          <tr>
            <td>9.das Gewitter</td>
            <td>storm</td>
          </tr>
          <tr>
            <td>10.der Sturmwind</td>
            <td>gale</td>
          </tr>
          <tr>
            <td>11.der Regenbogen</td>
            <td>rainbow</td>
          </tr>
        <tr>
            <td>12.der Schnee</td>
            <td>weathercast</td>
          </tr>
          <tr>
            <td>13.der Nebel</td>
            <td>fog</td>
          </tr>
          <tr>
            <td>14.der Blitz</td>
            <td>lightning</td>
          </tr>

        </tbody>
      </table>
    
    </div>
    <div className="tests-container">
    <p><DriveFileRenameOutlineIcon/> Put your knowledge to the test!</p>
    </div>
    <div className="tests-container2">
    <Link to='./weather-test'>
    <p>Test</p>
    </Link>
    </div>
      </div>
      <Footer />
    </>
  );
}

export default Weather
