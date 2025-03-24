import React from 'react'
import './Navbar'
import {Link} from 'react-router-dom';
import Logo from './images/logo2.png'
import './Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
function Footer() {
  return (
    <div className="footer-container2">
      <div className="footer-links2">
      <Link to='/' className="navbar-logo2" >
            <img src={Logo} alt="logo" />
            <span className="title">DeutschZone</span>
            </Link>

      </div>
      <div className="footer-link-wrapper">
        <div className="footer-link-items1">
            <h2>Contact us</h2>
            <p>If you encounter any challenges with learning German, we are here to support you every step of the way.
            Let us help make your German learning experience smoother and more enjoyable! 
            </p>
            </div>
        
      </div>
      <div className="social-icons-column">
      <h2>Contact</h2>
      <div className="social-icon">
          <LocalPostOfficeIcon />
          <Link to='/'>Postbox</Link>
        </div>
        <div className="social-icon">
          <InstagramIcon />
          <Link to='/'>Instagram</Link>
        </div>
        <div className="social-icon">
          <FacebookIcon />
          <Link to='/'>Facebook</Link>
        </div>
        <div className="social-icon">
          <LinkedInIcon />
          <Link to='/'>LinekdIn</Link>
        </div>
    </div>
    </div>
  )
}

export default Footer
