import React, { useState } from 'react';
import '../App.css';
import './Hero.css';
import { SliderData } from './SliderData';




const Hero = () => {
const [current, setCurrent] = useState(0);

  return (
    <div className='hero-container'>


        {SliderData.map((slide, index) => {
          return (
            <img src={slide.image} className='hero-img' alt='nothing' />
          )
        })};


      {/*
        <img className='hero-img' src='/images/TB-cups.jpeg' autoPlay loop muted />
      */}

      <h1>¡Yo quiero Taco Bell!</h1>
      <p>Now Serving the Mexican Pizza</p>
      <div className='hero-btns'>

        <a href='/Menu'>
          <button className='btns'>
        GET STARTED
          </button>
        </a>
        <a href='#'>
          <button
            className='btns'
            onClick={console.log('hey')}>
            BEGIN NOSTALGIA <i className='far fa-play-circle' />
          </button>
        </a>
      </div>
    </div>
  )
};

export default Hero;
