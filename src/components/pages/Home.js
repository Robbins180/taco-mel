import React from 'react';
import '../../App.css';
import Hero from '../Hero';
import { SliderData } from '../SliderData';

function Home() {
  return (
    <>
      <Hero slides={SliderData} />;
      <Hero />;

    </>
  );
};

export default Home;
