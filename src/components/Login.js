import React from 'react';
import { Link } from 'react-router-dom';


const LogIn = () => {

  const {loginWithRedirect, isAuthenticated } = useAuth0();

    if (window.innerWidth <= 960)

    return (

      !isAuthenticated && (
        <Link
        to='/'
        className='nav-links-mobile'
        onClick={() => loginWithRedirect()}>
        </Link>
      )
    ) else

    return (
      !isAuthenticated && (
        <button
        className='nav-links'
        buttonStlye='btn--outline'
        onClick={() => loginWithRedirect()}
        id='BtnLogin'>Log In
        </button>
      )
    )
}

export default LogIn;
