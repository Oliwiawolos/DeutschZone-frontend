import React from 'react'
import professions from '../../images/Professions.png'
import './Vocabulary-sites.css'
import united from '../../images/united.png'
import german from '../../images/german.png'
import Footer from '../../Footer'
import {Link} from 'react-router-dom';
import './tests/Professionstest'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
function Professions() {
  return (
    <>
      <div className="vocabulary-container">
        <h1>Professions</h1>
        <p>Learn German with our professions vocabulary! Discover essential words for various professions in German, paired with fun illustrations to make learning easy and enjoyable.</p>
        <div className='img-container'>
          <img src={professions} alt="Professions"  />
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
            <td>1.der Landwirt</td>
            <td>farmer</td>
          </tr>
          <tr>
            <td>2.der Arzt</td>
            <td>doctor</td>
          </tr>
          <tr>
            <td>3.die Stewardess</td>
            <td>flight attendant</td>
          </tr>
          <tr>
            <td>4.der Löscher</td>
            <td>firefighter</td>
          </tr>
          <tr>
            <td>5.die Pflegerin</td>
            <td>nurse</td>
          </tr>
          <tr>
            <td>6.der Jurist</td>
            <td>lawyer</td>
          </tr>
          <tr>
            <td>7.der Fotograf</td>
            <td>photographer</td>
          </tr>
          <tr>
            <td>8.der Konditor</td>
            <td>baker</td>
          </tr>
          <tr>
            <td>9.der Soldat</td>
            <td>soldier</td>
          </tr>
          <tr>
            <td>10.der Koch</td>
            <td>cook</td>
          </tr>
          <tr>
            <td>11.der Taucher</td>
            <td>diver</td>
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
            <td>12.die Sängerin</td>
            <td>singer</td>
          </tr>
          <tr>
            <td>13.der Richter</td>
            <td>judge</td>
          </tr>
          <tr>
            <td>14.der Tierarzt</td>
            <td>vet</td>
          </tr>
          <tr>
            <td>15.der Friseur</td>
            <td>hairdresser</td>
          </tr>
          <tr>
            <td>16.der Fahrer</td>
            <td>driver</td>
          </tr>
          <tr>
            <td>17.der Maler</td>
            <td>painter</td>
          </tr>
          <tr>
            <td>18.der Musiker</td>
            <td>musician</td>
          </tr>
          <tr>
            <td>19.der Kellner</td>
            <td>waiter</td>
          </tr>
          <tr>
            <td>20.der Polizist</td>
            <td>officer</td>
          </tr>
          <tr>
            <td>21.die Putzfrau</td>
            <td>cleaner</td>
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
    <Link to='./professions-test'>
    <p>Test</p>
    </Link>
    </div>
      </div>
      <Footer />
    </>
  );
}

export default Professions
