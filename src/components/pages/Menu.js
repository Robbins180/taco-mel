import React from 'react';
import { Link } from 'react-router-dom';
// import '../../App.css'
import './Menu.css';



function Menu() {
  return (
  <>
    <div className='Menu'>
      <h1 className='Menu-header'>MENU</h1>
      <div className='Order-curve'>
        <h2 id='HotT'>Home of the Taco</h2>
        <h4 id='pick-up'>Pick Up In-Resturant or at the Drive-Thru</h4>
      </div>

      <div className='Menu-container'>
        <div className='Menu-box'>
          <i className="far fa-star fa-3x"></i>
          <a href='/About'
            className='item-box'>
            MY FAVORITES
          </a>
        </div>
        <div className='Menu-box'>
          <i class="far fa-sparkles fa-3x"></i>
          <a href='/' className='item-box' >
            NEW
          </a>
        </div>
        <div className='Menu-box'>
          <i class="fas fa-search-dollar fa-3x"></i>
          <a href='/' className='item-box' >
            SEASONAL DEALS
          </a>
        </div>
        <div className='Menu-box'>
          <i class="fas fa-random fa-3x"></i>
          <a href='/' className='item-box' >
            COMBOS
          </a>
        </div>
        <div className='Menu-box'>
          <i class="fas fa-taco fa-3x"></i>
          <a href='/' className='item-box' >
            TACOS
          </a>
        </div>
        <div className='Menu-box'>
          <i class="far fa-burrito fa-3x"></i>
          <a href='/Menu/burritos' className='item-box' >
            BURRITOS
          </a>
        </div>
        <div className='Menu-box'>
          <i class="fas fa-candy-corn fa-3x"></i>
          <a href='/' className='item-box' >
            NACHOS
          </a>
        </div>
        <div className='Menu-box'>
          <i class="fal fa-times-circle fa-3x"></i>
          <a href='/' className='item-box' >
            QUESADILLAS
          </a>
        </div>
        <div className='Menu-box'>
          <i className="far fa-star"></i>
          <a href='/' className='item-box' >
            SPECIALTIES
          </a>
        </div>
        <div className='Menu-box'>
          <i className="far fa-star"></i>
          <Link to='/' className='item-box' >
            SIDES & SWEETS
          </Link>
        </div>
        <div className='Menu-box'>
          <i className="far fa-star"></i>
          <Link to='/' className='item-box' >
            DRINKS
          </Link>
        </div>
        <div className='Menu-box'>
          <i className="far fa-star"></i>
          <a href='/' className='item-box' >
            GROUPS
          </a>
        </div>
        <div className='Menu-box'>
          <i className="far fa-star"></i>
          <a href='/' className='item-box' >
            VALUE MENU
          </a>
        </div>
        <div className='Menu-box'>
          <i className="far fa-star"></i>
          <a href='/' className='item-box' >
            VEGGIE
          </a>
        </div>
        <div className='Menu-box'>
          <i className="far fa-star"></i>
          <a href='/' className='item-box' >
            BOWLS
          </a>
        </div>
        <div className='Menu-box'>
          <i className="far fa-star"></i>
          <a href='/' className='item-box' >
            BREAKFAST
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
   
  </>
    
  );
};


export default Menu;
