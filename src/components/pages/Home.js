import React from 'react';
import '../../App.css';
import Hero from '../Hero';
import Serving from '../Serving'
import { SliderData } from '../SliderData';
import Footer from '../Footer';

function Home() {
  return (
    <>
     {/*  <Hero slides={SliderData} />; */} 
      <Hero />
      <Serving />
      <Footer />

    </>
  )
};

export default Home;
