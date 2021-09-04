import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';


const LogIn = () => {

  const { loginWithRedirect, isAuthenticated } = useAuth0();

      if (window.innerWidth <= 960)

      return (

      !isAuthenticated && (
        <Link
          to='/sign-up'
          className='nav-links-mobile'
          onClick={() => loginWithRedirect()}>
          Log In
        </Link>
        )
      )

      else
      return (
        !isAuthenticated && (
          <button
            
            onClick={() => loginWithRedirect()}
            id='BtnLogin'>Log In
          </button>
        )
      )
  };


  export default LogIn;
