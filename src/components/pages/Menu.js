import React from 'react';
import { Link } from 'react-router-dom';
// import '../../App.css'
import './Menu.css';


function Menu() {
  return (

    <div className='Menu'>
      <h1 className='Menu-header'>TACO MEL MENU</h1>
      <div className='Order-curve'>
        <h2 id='HotT'>Home of the Taco</h2>
        <h4 id='pick-up'>Pick Up In-Resturant or at the Drive-Thru</h4>
      </div>


      <div className='Menu-container'>
        <div className='Menu-box'>
          <a href='#'
              to=''
              className='item-box'>
              <svg
                id=''
                width='100'
                height='100'>
                <circle />
              </svg>
              <span>MY FAVORITES</span>
          </a>
        </div>
        <div className='Menu-box'>
          <a href='#'
              to=''
              className='item-box'>
              <svg id=''></svg>
              <span>NEW</span>
          </a>
        </div>
        <div className='Menu-box'>
          <a href='#'
              to=''
              className='item-box'>
              <svg id=''></svg>
              <span>SEASONAL DEALS</span>
          </a>
        </div>
        <div className='Menu-box'>
          <a href='#'
              to=''
              className='item-box'>
              <svg id=''></svg>
              <span>COMBOS</span>
          </a>
        </div>
        <div className='Menu-box'>
          <a href='#'
              to=''
              className='item-box'>
              <svg id=''></svg>
              <span>TACOS</span>
          </a>
        </div>
        <div className='Menu-box'>
          <a href='#'
              to=''
              className='item-box'>
              <svg id=''></svg>
              <span>BURRITOS</span>
          </a>
        </div>
        <div className='Menu-box'>
          <a href='#'
              to=''
              className='item-box'>
              <svg id=''></svg>
              <span>NACHOS</span>
          </a>
        </div>
        <div className='Menu-box'>
          <a href='#'
              to=''
              className='item-box'>
              <svg id=''></svg>
              <span>QUESADILLAS</span>
          </a>
        </div>
        <div className='Menu-box'>
          <a href='#'
              to=''
              className='item-box'>
              <svg id=''></svg>
              <span>SPECIALTIES</span>
          </a>
        </div>
        <div className='Menu-box'>
          <a href='#'
              to=''
              className='item-box'>
              <svg id=''></svg>
              <span>SIDES & SWEETS</span>
          </a>
        </div>
        <div className='Menu-box'>
          <a href='#'
              to=''
              className='item-box'>
              <svg id=''></svg>
              <span>DRINKS</span>
          </a>
        </div>
        <div className='Menu-box'>
          <a href='#'
              to=''
              className='item-box'>
              <svg id=''></svg>
              <span>GROUPS</span>
          </a>
        </div>
        <div className='Menu-box'>
          <a href='#'
              to=''
              className='item-box'>
              <svg id=''></svg>
              <span>VALUE MENU</span>
          </a>
        </div>
        <div className='Menu-box'>
          <a href='#'
              to=''
              className='item-box'>
              <svg id=''></svg>
              <span>VEGGIE CRAVINGS</span>
          </a>
        </div>
        <div className='Menu-box'>
          <a href='#'
              to=''
              className='item-box'>
              <svg id=''></svg>
              <span>BOWLS</span>
          </a>
        </div>
        <div className='Menu-box'>
          <a href='#'
              to=''
              className='item-box'>
              <svg id=''></svg>
              <span>BREAKFAST</span>
          </a>
        </div>
      </div>
      <br />
      <a href='/Nutrition'>View Nutrition Info</a>
      <br />
      <p>The Taco Bell menu has all of your favorite Mexican inspired foods. From classic tacos to burritos to our epic specialties and combos, there’s something for everyone on the Taco Bell menu. Find something new on the Taco Bell menu today!</p>
      <br />
      <p>With breakfast options at select locations, to late night, the Taco Bell menu serves made-to-order and customizable tacos, burritos, quesadillas, nachos, vegetarian options, fountain drinks and desserts. Our specialties menu features all time favorites like the Chalupa Supreme, and the Crunchwrap Supreme. Only have a few dollars to spare? Check out the Cravings Value Menu and enjoy the Cheesy Roll Up, or a Cheesy Bean and Rice Burrito. With the completely customizable Taco Bell menu, you can reinvent all of your favorite menu items with a variety of sauces and add-ons.</p>
      <br />
      <p>Prices and items may vary at participating locations and with substitutions. Tax extra.</p>
    </div>
  );
};


export default Menu;
