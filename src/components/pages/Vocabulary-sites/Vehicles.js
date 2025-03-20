import React from 'react'
import Vehicle from '../../images/Vehicles.png'
import './Vocabulary-sites.css'
import united from '../../images/united.png'
import german from '../../images/german.png'
import Footer from '../../Footer'
import {Link} from 'react-router-dom';
import './tests/Vehiclestest'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
function Vehicles() {
  return (
    <>
      <div className="vocabulary-container">
        <h1>Vehicles</h1>
        <p>Learn German with our vehicles vocabulary! Discover essential words for different vehicles in German, paired with fun illustrations to make learning easy and enjoyable</p>
        <div className='img-container'>
          <img src={Vehicle} alt="Vehicle"  />
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
            <td>1.das Auto</td>
            <td>car</td>
          </tr>
          <tr>
            <td>2.der Bus</td>
            <td>bus</td>
          </tr>
          <tr>
            <td>3.das Segelboot</td>
            <td>sailboat</td>
          </tr>
          <tr>
            <td>4.der Traktor</td>
            <td>tractor</td>
          </tr>
          <tr>
            <td>5.das Schiff</td>
            <td>ship</td>
          </tr>
          <tr>
            <td>6.der Truck</td>
            <td>truck</td>
          </tr>
          <tr>
            <td>7.der Roller</td>
            <td>scooter</td>
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
            <td>8.das Fahrrad</td>
            <td>bicycle</td>
          </tr>
          <tr>
            <td>9.das Motorrad</td>
            <td>motorcycle</td>
          </tr>
          <tr>
            <td>10.die U-bahn</td>
            <td>subway</td>
          </tr>
          <tr>
            <td>11.die Tram</td>
            <td>tram</td>
          </tr>
        <tr>
            <td>12.das Taxi</td>
            <td>taxi</td>
          </tr>
          <tr>
            <td>13.das Flugzeug</td>
            <td>airplane</td>
          </tr>
          <tr>
            <td>14.die Ambulanz</td>
            <td>ambulance</td>
          </tr>

        </tbody>
      </table>
    
    </div>
    <div className="tests-container">
    <p><DriveFileRenameOutlineIcon/> Put your knowledge to the test!</p>
    </div>
    <div className="tests-container2">
    <Link to='./vehicles-test'>
    <p>Test</p>
    </Link>
    </div>
      </div>
      <Footer />
    </>
  );
}

export default Vehicles
