import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


  function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    {/* Mobile Menu sizing less than 960px goes to a hamburger menu otherwise stays normal */}
    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };

    useEffect(() => {
      showButton();
    }, []);

      window.addEventListener('resize', showButton);

    return (
      <>
        <nav className='navbar'>

          <div className='navbar-container'>
            <a href='/' to='/' className='navbar-logo'>
            <img src='https://i.pinimg.com/originals/c3/0f/94/c30f94597b2c94ba91256413a1259266.jpg' alt='logo' width='80px' height='80px' />
            </a>
            <h2 className='Mel'>Taco Mel</h2>

            {/* This is for the Mobile Drop down Menu */}
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            {/* Drop Down ends */}

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
              </li>
              <li className='nav-item'>
                <Link to='/Menu' className='nav-links'
                  onClick={closeMobileMenu}>
                  Menu
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/Nutrition' className='nav-links'
                  onClick={closeMobileMenu}>
                  Nutrition
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/About' className='nav-links'
                  onClick={closeMobileMenu}>
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }

export default Navbar;
