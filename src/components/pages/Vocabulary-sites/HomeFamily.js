import React from 'react'
import home from '../../images/HomeFamily.png'
import './Vocabulary-sites.css'
import united from '../../images/united.png'
import german from '../../images/german.png'
import Footer from '../../Footer'
import {Link} from 'react-router-dom';
import './tests/HomeFamilytest'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
function HomeFamily() {
  return (
    <>
      <div className="vocabulary-container">
        <h1>Home & Family</h1>
        <p>Learn German with our home and family vocabulary! Discover essential words for home and family in German, paired with fun illustrations to make learning easy and enjoyable.</p>
        <div className='img-container'>
          <img src={home} alt="Home"  />
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
            <td>1.das Haus</td>
            <td>house</td>
          </tr>
          <tr>
            <td>2.das Zimmer</td>
            <td>room</td>
          </tr>
          <tr>
            <td>3.das Bad</td>
            <td>bathroom</td>
          </tr>
          <tr>
            <td>4.das Fenster</td>
            <td>window</td>
          </tr>
          <tr>
            <td>5.die Küche</td>
            <td>kitchen</td>
          </tr>
          <tr>
            <td>6.die Treppe</td>
            <td>stairs</td>
          </tr>
          <tr>
            <td>7.die Tür</td>
            <td>door</td>
          </tr>
          <tr>
            <td>8.der Salon</td>
            <td>living room</td>
          </tr>
          <tr>
            <td>9.der Balkon</td>
            <td>balcony</td>
          </tr>
          <tr>
            <td>10.die Mutter</td>
            <td>mother</td>
          </tr>
          <tr>
            <td>11.die Garage</td>
            <td>garage</td>
          </tr>
          <tr>
            <td>12.der Essraum</td>
            <td>dining room</td>
          </tr>
          <tr>
            <td>13.das Kabinett</td>
            <td>study</td>
          </tr>
          <tr>
            <td>14.der Vater</td>
            <td>father</td>
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
            <td>15.die Familie</td>
            <td>family</td>
          </tr>
          <tr>
            <td>16.die Schwester</td>
            <td>sister</td>
          </tr>
          <tr>
            <td>17.das Kind</td>
            <td>children</td>
          </tr>
          <tr>
            <td>18.der Bruder</td>
            <td>brother</td>
          </tr>
          <tr>
            <td>19.der Opa</td>
            <td>grandpa</td>
          </tr>
          <tr>
            <td>20.der Schrank</td>
            <td>wardrobe</td>
          </tr>
          <tr>
            <td>21.die Adoption</td>
            <td>adoption</td>
          </tr>
          <tr>
            <td>22.die Tante</td>
            <td>aunt</td>
          </tr>
          <tr>
            <td>23.der Onkel</td>
            <td>uncle</td>
          </tr>
          <tr>
            <td>24.das Ehepaar</td>
            <td>marriage</td>
          </tr>
          <tr>
            <td>25.die Beziehung</td>
            <td>couple</td>
          </tr>
          <tr>
            <td>26.der Cousin</td>
            <td>cousine</td>
          </tr>
          <tr>
            <td>27.die Oma</td>
            <td>grandma</td>
          </tr>
          <tr>
            <td>28. der Götti</td>
            <td>godmother</td>
          </tr>
        </tbody>
      </table>
    
    </div>
    <div className="tests-container">
    <p><DriveFileRenameOutlineIcon/> Put your knowledge to the test!</p>
    </div>
    <div className="tests-container2">
    <Link to='./home-family-test'>
    <p>Test</p>
    </Link>
    </div>
      </div>
      <Footer />
    </>
  );
}

export default HomeFamily
