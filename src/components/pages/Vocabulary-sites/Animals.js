import React from 'react'
import animals from '../../images/monkey.png'
import './Vocabulary-sites.css'
import united from '../../images/united.png'
import german from '../../images/german.png'
import Footer from '../../Footer'
import {Link} from 'react-router-dom';
import './tests/Animalstest'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
function Animals() {
  return (
    <>
      <div className="vocabulary-container">
        <h1>Animals</h1>
        <p>Discover a fun way to learn German with our animal vocabulary! Find the names of various animals in German, accompanied by colorful illustrations to make learning enjoyable and easy.</p>
        <div className='img-container'>
          <img src={animals} alt="Animals"  />
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
            <td>1.die Katze</td>
            <td>cat</td>
          </tr>
          <tr>
            <td>2.der Hund</td>
            <td>dog</td>
          </tr>
          <tr>
            <td>3.das Kaninchen</td>
            <td>rabbit</td>
          </tr>
          <tr>
            <td>4.der Tiger</td>
            <td>tiger</td>
          </tr>
          <tr>
            <td>5.der Delfin</td>
            <td>dolphin</td>
          </tr>
          <tr>
            <td>6.der Affe</td>
            <td>monkey</td>
          </tr>
          <tr>
            <td>7.der Pinguin</td>
            <td>penguin</td>
          </tr>
          <tr>
            <td>8.die Schlange</td>
            <td>snake</td>
          </tr>
          <tr>
            <td>9.der Vogel</td>
            <td>bird</td>
          </tr>
          <tr>
            <td>10.die Giraffe</td>
            <td>giraffe</td>
          </tr>
          <tr>
            <td>11.die Ratte</td>
            <td>rat</td>
          </tr>
          <tr>
            <td>12.die Kuh</td>
            <td>cow</td>
          </tr>
          <tr>
            <td>13.der Bär</td>
            <td>bear</td>
          </tr>
          <tr>
            <td>14.die Qualle</td>
            <td>jellyfish</td>
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
            <td>15.der Elefant</td>
            <td>elephant</td>
          </tr>
          <tr>
            <td>16.die Schildkröte</td>
            <td>turtle</td>
          </tr>
          <tr>
            <td>17.der Frosch</td>
            <td>frog</td>
          </tr>
          <tr>
            <td>18.der Igel</td>
            <td>hedgehog</td>
          </tr>
          <tr>
            <td>19.das Kamel</td>
            <td>camel</td>
          </tr>
          <tr>
            <td>20.der Fisch</td>
            <td>fish</td>
          </tr>
          <tr>
            <td>21.der Wal</td>
            <td>whale</td>
          </tr>
          <tr>
            <td>22.der Widder</td>
            <td>ram</td>
          </tr>
          <tr>
            <td>23.der Wolf</td>
            <td>wolf</td>
          </tr>
          <tr>
            <td>24.der Hai</td>
            <td>shark</td>
          </tr>
          <tr>
            <td>25.der Löwe</td>
            <td>lion</td>
          </tr>
          <tr>
            <td>26.das Pferd</td>
            <td>horse</td>
          </tr>
          <tr>
            <td>27.der Krebs</td>
            <td>crayfish</td>
          </tr>
          <tr>
            <td>28.die Spinne</td>
            <td>spider</td>
          </tr>
        </tbody>
      </table>
    
    </div>
    <div className="tests-container">
    <p><DriveFileRenameOutlineIcon/> Put your knowledge to the test!</p>
    </div>
    <div className="tests-container2">
    <Link to='./animals-test'>
    <p>Test</p>
    </Link>
    </div>
      </div>
      <Footer />
    </>
  );
}

export default Animals
