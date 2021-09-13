import React from 'react';
import '../../App.css';
import Hero from '../Hero';
import { SliderData } from '../SliderData';
import Footer from '../Footer';

function Home() {
  return (
    <>
     {/*  <Hero slides={SliderData} />; */} 
      <Hero />
      <Footer />

    </>
  )
};

export default Home;
