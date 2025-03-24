import React from 'react'
import bodyparts from '../../images/BodyParts.png'
import './Vocabulary-sites.css'
import united from '../../images/united.png'
import german from '../../images/german.png'
import Footer from '../../Footer'
import {Link} from 'react-router-dom';
import './tests/BodyPartstest'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
function BodyParts() {
  return (
    <>
      <div className="vocabulary-container">
        <h1>Body Parts</h1>
        <p>Learn German with our body parts vocabulary! Discover essential words for body parts in German, paired with fun illustrations to make learning easy and enjoyable.</p>
        <div className='img-container'>
          <img src={bodyparts} alt="BodyParts"  />
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
            <td>1.das Gesicht</td>
            <td>face</td>
          </tr>
          <tr>
            <td>2.die Augen</td>
            <td>eyes</td>
          </tr>
          <tr>
            <td>3.das Ohr</td>
            <td>ear</td>
          </tr>
          <tr>
            <td>4.der Bart</td>
            <td>beard</td>
          </tr>
          <tr>
            <td>5.der Zahn</td>
            <td>tooth</td>
          </tr>
          <tr>
            <td>6.die Nase</td>
            <td>nose</td>
          </tr>
          <tr>
            <td>7.der Finger</td>
            <td>finger</td>
          </tr>
          <tr>
            <td>8.die Zunge</td>
            <td>tongue</td>
          </tr>
          <tr>
            <td>9.der Mund</td>
            <td>mouth</td>
          </tr>
          <tr>
            <td>10.das Haar</td>
            <td>hair</td>
          </tr>
          <tr>
            <td>11.der Rücken</td>
            <td>back</td>
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
            <td>12.die Beine</td>
            <td>legs</td>
          </tr>
          <tr>
            <td>13.die Wange</td>
            <td>cheek</td>
          </tr>
          <tr>
            <td>14.die Hand</td>
            <td>hand</td>
          </tr>
          <tr>
            <td>15.der Ellbogen</td>
            <td>elbow</td>
          </tr>
          <tr>
            <td>16.der Fuß</td>
            <td>foot</td>
          </tr>
          <tr>
            <td>17.der Arm</td>
            <td>shoulder</td>
          </tr>
          <tr>
            <td>18.das Knie</td>
            <td>knee</td>
          </tr>
          <tr>
            <td>19.das Gehirn</td>
            <td>brain</td>
          </tr>
          <tr>
            <td>20.der Knochen</td>
            <td>bone</td>
          </tr>
          <tr>
            <td>21.der Nagel</td>
            <td>nail</td>
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
    <Link to='./body-parts-test'>
    <p>Test</p>
    </Link>
    </div>
      </div>
      <Footer />
    </>
  );
}

export default BodyParts
