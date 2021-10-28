import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
import './Serving.css'

function Serving() {
  return (
   <>
    <div className='serving-container'>
        <div className='serving-item'>
            <img 
            src='./images/mexican-pizza2.jpeg' 
            alt='Mexican Pizza'
            className='background-img'>            
            </img>
           <div className='serving-items'>
                <h3>All New</h3>
                <h2>Mexican Pizza</h2>
                <h6>Crisp pizza shells, refried beans, and a layer of seasoned beef all packed in a cruchy bite</h6>
           </div>    
            <div className='serving-btn'>
                 <button className='btns' >
                 <Link to='/Menu'
                 className='link'>
                Order Now
              </Link>
                 </button>
            </div>
        </div>
    </div>
   </>
  )
}

export default Serving;
