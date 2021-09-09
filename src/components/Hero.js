import React, { useState } from 'react';
import '../App.css';
import './Hero.css';
{/*  import { SliderData } from './SliderData';
import { BiChevronLeft , BiChevronRight } from 'react-icons/bi'; */}




const Hero = () => {

 {/*
  const [current, setCurrent] = useState(0);
  const length = slides.length;


    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1)
     };


     const previousSlide = () => {
     setCurrent(current === 0 ? length - 1 : current - 1)
    };


    if (!Array.isArray(slides) || slides.length <= 0) {
      return null;
     }

   */ }

  return (
      <div className='hero-container'>

        <img src='./images/TB-interior.jpeg' className='hero-img' alt='nothing' />
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
