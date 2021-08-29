import React, { useState, useEffect } from 'react';
import './Navbar.css';


  function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
      <>
        <nav className='navbar'>

          <div className='navbar-container'>
            <a href='/' to='/' className='navbar-logo'>
            <img src='https://i.pinimg.com/originals/c3/0f/94/c30f94597b2c94ba91256413a1259266.jpg' alt='logo' width='80px' height='80px' />
            </a>
            <h2 className='Mel'>Taco Mel</h2>

            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>

          </div>
        </nav>
      </>
    )
  }

export default Navbar;
