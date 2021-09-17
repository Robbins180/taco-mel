import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

function Footer() {
  return (
    <>
      <div className='footer'>
        <div className='footer-container'>
          <div className='first-half-box'>
              <p>Deals</p>
              <p>About Us</p>
              <p>Legal</p>
              <p>FAQ</p>           
              <p>Careers</p>
              <p>Conact Us</p>
          </div>
          <br />
          <div className='second-half-box'>
            <p>At participating locations. Prices and items may vary. Tax extra. 2,000 calories a day used for general nutrition advice, but calorie needs vary. Additional nutrition information available upon request.</p>
            <img src='#'></img>
            <p>2021 Taco Mel by Drew Robbins</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;
