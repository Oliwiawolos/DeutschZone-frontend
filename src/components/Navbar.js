import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Logo from './images/logo.png'
import { auth } from "./FirebaseConfig"; 
import './Navbar.css'
import {Button} from './Button'
import DensityLargeIcon from '@mui/icons-material/DensityLarge';
import CloseIcon from '@mui/icons-material/Close';
import { onAuthStateChanged, signOut } from "firebase/auth";
function Navbar() {
  const [click, setClick]=useState(false);
  const [button, setButton]=useState(true);
  const [currentUser, setCurrentUser] = useState(null); 
  const navigate = useNavigate();
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
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user); 
      } else {
        setCurrentUser(null);
      }
    });

    return () => unsubscribe();
  }, []);
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setCurrentUser(null);
      closeMobileMenu(); 
      navigate('/login'); 
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
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
  {currentUser ? (
    <Button buttonStyle='btn--outline' style= {{marginTop: '16%', marginLeft: '5%'}} onClick={handleLogout}>
      Logout
    </Button>
  ) : (
    <Link to='/login' className='nav-links signup-link' onClick={closeMobileMenu}>
      <Button buttonStyle='btn--outline' to='/login'>Login</Button> 
    </Link>
  )}
</li>


            </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
