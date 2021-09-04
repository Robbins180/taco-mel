
import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const LogOut = () => {

  const { logout, isAuthenticated } = useAuth0();

  if (window.innerWidth <= 960)

  return (

    isAuthenticated && (
      <Link
        to='/sign-up'
        className='nav-links-mobile'
        onClick={() => logout()}>
        Log Out
      </Link>
      )
    )

    else
    return (
      isAuthenticated && (
        <button
        
          onClick={() => logout()}
          id='BtnLogin'>
            Log Out
        </button>
    )
  )
}

export default LogOut;
