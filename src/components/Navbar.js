import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Logo from './images/logo.png'
import './Navbar.css'
import {Button} from './Button'
import DensityLargeIcon from '@mui/icons-material/DensityLarge';
import CloseIcon from '@mui/icons-material/Close';
function Navbar() {
  const [click, setClick]=useState(false);
  const [button, setButton]=useState(true);
  const handleClick= () => setClick(!click);
  const closeMobileMenu=() => setClick(false);

    const showButton=() => {
    if(window.innerWidth <= 960){
      setButton(false);
    }
    else{
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
  
    return () => {
      window.removeEventListener('resize', showButton);
    };
  }, []);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
            <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
            <img src={Logo} alt="logo" />
            <span className="title">DeutschZone</span>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
            {click ? <CloseIcon className="icon close-icon" /> : <DensityLargeIcon className="icon format-icon" />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/grammar' className='nav-links' onClick={closeMobileMenu}>
                    Grammar
                    </Link>

                </li>
                <li className='nav-item'>
                    <Link to='/vocabulary' className='nav-links' onClick={closeMobileMenu}>
                    Vocabulary
                    </Link>

                </li>
                <li className='nav-item'>
                    <Link to='/listening' className='nav-links' onClick={closeMobileMenu}>
                    Listening
                    </Link>

                </li>
                <li className='nav-item'>
                    <Link to='/texts' className='nav-links' onClick={closeMobileMenu}>
                    Texts
                    </Link>

                </li>
                <li className='nav-item'>
                    <Link to='/flashcards' className='nav-links'onClick={closeMobileMenu}>
                    Flashcards
                    </Link>

                </li>
                <li className='nav-item1'>
                  <Link to='/sign-up' className='nav-links signup-link' onClick={closeMobileMenu}>
                  
                  <Button buttonStyle='btn--outline'>
                    Sign Up
                    </Button>
                  </Link>
                </li>
            </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
