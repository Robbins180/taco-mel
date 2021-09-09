import React from 'react';
import { Link } from 'react-router-dom';
// import '../../App.css'
import './burritos.css';
// import cardItem from '../../cardItem'




function burritos() {
  return (
    <div className='product'>
      <div className='burritos-container'>

          {/* BEAN BURRITO */}
        <div className='product-card'
              id='bean-burrito'>

          <div className='img-box'>
              <i className='icons' />
              <img src="/images/Bean-burrito.jpeg" className='product-img' alt="product-img" />
          </div>

          <div className='product-details'>
              <p className='item-name'>Bean Burrito</p>
              <i className='dollar-symbol' />
              <p className='price'>.89</p>
              <p className='calories'>350 Cal</p>
              <img className='warning' />
          </div>

          <div className='btn-container'>
            <button className='addToOrder'>
              <i className='#' />
              <p>Add To Order</p>
            </button>
            <button className='customize'>
              <i className='#' />
              <p>Customize</p>
            </button>
          </div>
        </div>
            {/* Beefy 5-Layer Burrito */}
        <div className='product-card'
              id='beefy-5-layer-burrito'>
          <div className='img-box'>
              <i className='icons' />
              <img src="/images/Bean-burrito.jpeg" className='product-img' alt="product-img" width="50" height="50" />
          </div>
          <div className='product-details'>
              <p className='item-name'>Beefy 5-Layer Burrito</p>
              <i className='dollar-symbol' />
              <p className='price'>1.79</p>
              <p className='calories'>490 Cal</p>
              <img className='warning' />
          </div>

          <div className='btn-container'>
            <button className='addToOrder'>
              <i className='#' />
              <p>Add To Order</p>
            </button>
            <button className='customize'>
              <i className='#' />
              <p>Customize</p>
            </button>
          </div>
        </div>
        {/* Quesarito*/}
        <div className='product-card'
              id='quesarito'>
          <div className='img-box'>
              <i className='icons' />
              <img src="/images/Bean-burrito.jpeg" className='product-img' alt="product-img" width="50" height="50" />
          </div>
          <div className='product-details'>
              <p className='item-name'>Quesarito</p>
              <i className='dollar-symbol' />
              <p className='price'>2.19</p>
              <p className='calories'>650 Cal</p>
              <img className='warning' />
          </div>

          <div className='btn-container'>
            <button className='addToOrder'>
              <i className='#' />
              <p>Add To Order</p>
            </button>
            <button className='customize'>
              <i className='#' />
              <p>Customize</p>
            </button>
          </div>
        </div>
          {/* Burrito Supreme */}
        <div className='product-card'
              id='burrito-Supreme'>
          <div className='img-box'>
              <i className='icons' />
              <img src="/images/Bean-burrito.jpeg" className='product-img' alt="product-img" width="50" height="50" />
          </div>
          <div className='product-details'>
              <p className='item-name'>Burrito Supreme</p>
              <i className='dollar-symbol' />
              <p className='price'>2.49</p>
              <p className='calories'>390 Cal</p>
              <img className='warning' />
          </div>

          <div className='btn-container'>
            <button className='addToOrder'>
              <i className='#' />
              <p>Add To Order</p>
            </button>
            <button className='customize'>
              <i className='#' />
              <p>Customize</p>
            </button>
          </div>
        </div>
          {/* Crunchwrap Supreme */}
        <div className='product-card'
              id='crunchwrap-Supreme'>
          <div className='img-box'>
              <i className='icons' />
              <img src="/images/Bean-burrito.jpeg" className='product-img' alt="product-img" width="50" height="50" />
          </div>
          <div className='product-details'>
              <p className='item-name'>Crunchwrap Supreme</p>
              <i className='dollar-symbol' />
              <p className='price'>1.79</p>
              <p className='calories'>490 Cal</p>
              <img className='warning' />
          </div>

          <div className='btn-container'>
            <button className='addToOrder'>
              <i className='#' />
              <p>Add To Order</p>
            </button>
            <button className='customize'>
              <i className='#' />
              <p>Customize</p>
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}


export default burritos;
