import React from 'react'
import travelVoc from '../../images/Travel.png'
import './Vocabulary-sites.css'
import united from '../../images/united.png'
import german from '../../images/german.png'
import Footer from '../../Footer'
import {Link} from 'react-router-dom';
import './tests/Traveltest'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
function Travel() {
  return (
    <>
      <div className="vocabulary-container">
        <h1>Travel</h1>
        <p>Learn German with our travel vocabulary! Discover essential travel words in German, paired with fun illustrations to make learning easy and enjoyable.</p>
        <div className='img-container'>
          <img src={travelVoc} alt="Animals"  />
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
            <td>1.das Flugzeug</td>
            <td>airplane</td>
          </tr>
          <tr>
            <td>2.der Rucksack</td>
            <td>backpack</td>
          </tr>
          <tr>
            <td>3.das Schloss</td>
            <td>castle</td>
          </tr>
          <tr>
            <td>4.der Pass</td>
            <td>passport</td>
          </tr>
          <tr>
            <td>5.der Pilot</td>
            <td>pilot</td>
          </tr>
          <tr>
            <td>6.der Koffer</td>
            <td>suitcase</td>
          </tr>
          <tr>
            <td>7.die Rezeption</td>
            <td>reception</td>
          </tr>
          <tr>
            <td>8.der Schlüssel</td>
            <td>key</td>
          </tr>
          <tr>
            <td>9.das Zimmer</td>
            <td>double room</td>
          </tr>
          <tr>
            <td>10.das Zaichen</td>
            <td>sign</td>
          </tr>
          <tr>
            <td>11.der Reiseführer</td>
            <td>guide</td>
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
            <td>12.die Karte</td>
            <td>map</td>
          </tr>
          <tr>
            <td>13.das Denkmal</td>
            <td>monument</td>
          </tr>
          <tr>
            <td>14.das Camp</td>
            <td>campsite</td>
          </tr>
          <tr>
            <td>15.das Ticket</td>
            <td>ticket</td>
          </tr>
          <tr>
            <td>16.der Flughafen</td>
            <td>airport</td>
          </tr>
          <tr>
            <td>17.die Währung</td>
            <td>currency</td>
          </tr>
          <tr>
            <td>18.das Taxi</td>
            <td>taxi</td>
          </tr>
          <tr>
            <td>19.die Apotheke</td>
            <td>pharmacy</td>
          </tr>
          <tr>
            <td>20.die Insel</td>
            <td>island</td>
          </tr>
          <tr>
            <td>21.das Gebirge</td>
            <td>mountain</td>
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
    <Link to='./travel-test'>
    <p>Test</p>
    </Link>
    </div>
      </div>
      <Footer />
    </>
  );
}

export default Travel
