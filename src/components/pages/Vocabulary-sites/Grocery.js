import React from 'react'
import grocery from '../../images/Grocery.png'
import './Vocabulary-sites.css'
import united from '../../images/united.png'
import german from '../../images/german.png'
import Footer from '../../Footer'
import {Link} from 'react-router-dom';
import './tests/Grocerytest'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
function Grocery() {
  return (
    <>
      <div className="vocabulary-container">
        <h1>Grocery</h1>
        <p>Learn German with our grocery vocabulary! Discover essential words for grocery shopping in German, paired with fun illustrations to make learning easy and enjoyable.</p>
        <div className='img-container'>
          <img src={grocery} alt="Grocery"  />
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
            <td>1.das Brot</td>
            <td>bread</td>
          </tr>
          <tr>
            <td>2.die Butter</td>
            <td>butter</td>
          </tr>
          <tr>
            <td>3.das Brötchen</td>
            <td>bun</td>
          </tr>
          <tr>
            <td>4.der Joghurt</td>
            <td>tiger</td>
          </tr>
          <tr>
            <td>5.der Käse</td>
            <td>cheese</td>
          </tr>
          <tr>
            <td>6.die Milch</td>
            <td>milk</td>
          </tr>
          <tr>
            <td>7.das Ei</td>
            <td>egg</td>
          </tr>
          <tr>
            <td>8.der Pfeffer</td>
            <td>pepper</td>
          </tr>
          <tr>
            <td>9.das Fleisch</td>
            <td>meat</td>
          </tr>
          <tr>
            <td>10.das Mehl</td>
            <td>flour</td>
          </tr>
          <tr>
            <td>11.der Zucker</td>
            <td>sugar</td>
          </tr>
          <tr>
            <td>12.das Salz</td>
            <td>salt</td>
          </tr>
          <tr>
            <td>13.die Nudeln</td>
            <td>pasta</td>
          </tr>
          <tr>
            <td>14.die Tomate</td>
            <td>tomato</td>
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
            <td>15.der Fisch</td>
            <td>fish</td>
          </tr>
          <tr>
            <td>16.die Gurke</td>
            <td>cucumber</td>
          </tr>
          <tr>
            <td>17.die Kartoffel</td>
            <td>potato</td>
          </tr>
          <tr>
            <td>18.der Reis</td>
            <td>rice</td>
          </tr>
          <tr>
            <td>19.die Karotte</td>
            <td>carrot</td>
          </tr>
          <tr>
            <td>20.der Paprika</td>
            <td>pepper</td>
          </tr>
          <tr>
            <td>21.der Apfel</td>
            <td>apple</td>
          </tr>
          <tr>
            <td>22.die Nuss</td>
            <td>nut</td>
          </tr>
          <tr>
            <td>23.die Traube</td>
            <td>grape</td>
          </tr>
          <tr>
            <td>24.die Zitrone</td>
            <td>lemon</td>
          </tr>
          <tr>
            <td>25.der Salat</td>
            <td>salad</td>
          </tr>
          <tr>
            <td>26.der Saft</td>
            <td>juice</td>
          </tr>
          <tr>
            <td>27.das Eis</td>
            <td>ice cream</td>
          </tr>
          <tr>
            <td>28.das Wasser</td>
            <td>water</td>
          </tr>
        </tbody>
      </table>
    
    </div>
    <div className="tests-container">
    <p><DriveFileRenameOutlineIcon/> Put your knowledge to the test!</p>
    </div>
    <div className="tests-container2">
    <Link to='./grocery-test'>
    <p>Test</p>
    </Link>
    </div>
      </div>
      <Footer />
    </>
  );
}

export default Grocery
