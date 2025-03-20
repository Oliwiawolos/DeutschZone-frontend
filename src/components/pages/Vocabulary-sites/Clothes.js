import React from 'react'
import clothes from '../../images/Clothes-voc.png'
import './Vocabulary-sites.css'
import united from '../../images/united.png'
import german from '../../images/german.png'
import Footer from '../../Footer'
import {Link} from 'react-router-dom';
import './tests/Clothestest'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
function Clothes() {
  return (
    <>
      <div className="vocabulary-container">
        <h1>Clothes</h1>
        <p>Learn German with our clothing vocabulary! Discover essential words for clothes in German, paired with fun illustrations to make learning easy and enjoyable.</p>
        <div className='img-container'>
          <img src={clothes} alt="Clothes"  />
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
            <td>1.die Bluse</td>
            <td>blouse</td>
          </tr>
          <tr>
            <td>2.der Pullover</td>
            <td>sweater</td>
          </tr>
          <tr>
            <td>3.die Jacke</td>
            <td>jacket</td>
          </tr>
          <tr>
            <td>4.der Mantel</td>
            <td>coat</td>
          </tr>
          <tr>
            <td>5.die Shorts</td>
            <td>shorts</td>
          </tr>
          <tr>
            <td>6.die Hose</td>
            <td>trousers</td>
          </tr>
          <tr>
            <td>7.der Rock</td>
            <td>skirt</td>
          </tr>
          <tr>
            <td>8.das Kleid</td>
            <td>dress</td>
          </tr>
          <tr>
            <td>9.der Anzug</td>
            <td>suit</td>
          </tr>
          <tr>
            <td>10.der Schlafanzug</td>
            <td>pyjamas</td>
          </tr>
          <tr>
            <td>11.der Schlafrock</td>
            <td>bathrobe</td>
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
            <td>12.die Uhr</td>
            <td>watch</td>
          </tr>
          <tr>
            <td>13.der Schuh</td>
            <td>shoe</td>
          </tr>
          <tr>
            <td>14.der Badeschuh</td>
            <td>flap</td>
          </tr>
          <tr>
            <td>15.die Brille</td>
            <td>glasses</td>
          </tr>
          <tr>
            <td>16.die Krawatte</td>
            <td>tie</td>
          </tr>
          <tr>
            <td>17.die Socke</td>
            <td>sock</td>
          </tr>
          <tr>
            <td>18.die Mütze</td>
            <td>beanie</td>
          </tr>
          <tr>
            <td>19.die Tüte</td>
            <td>bag</td>
          </tr>
          <tr>
            <td>20.der Hut</td>
            <td>hat</td>
          </tr>
          <tr>
            <td>21.die Schirmmütze</td>
            <td>cap</td>
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
    <Link to='./clothes-test'>
    <p>Test</p>
    </Link>
    </div>
      </div>
      <Footer />
    </>
  );
}

export default Clothes
