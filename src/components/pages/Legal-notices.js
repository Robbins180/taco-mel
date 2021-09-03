import React from 'react';
import '../../App.css';

// import Footer from '../Footer';

function Legal() {
  return (
      <div className='legal-continer'>
        <div className='Image-notice'>
            <img src='#'   className='logo'
              alt='logo'
              width='80px'
              height='80px'>
            </img>
        </div>
        <div className='legal-content'>
          <h3>ABOUT OUR ADS</h3>
          <br />
          <p>We collect personal information about users over time and across different websites when you use this website or service. We also have third parties that collect personal information this way. Read More</p>
          <br />
          <h3>SUPPLIER CODE OF CONDUCT</h3>
          <br />
          <p>YUM! Brands, Inc. ("Yum"), is committed to conducting its business in an ethical, legal and socially responsible manner. To encourage compliance with all legal requirements and ethical business practices, Yum has established this Supplier Code of Conduct (the "Code") for Yum's U.S. suppliers ("Suppliers"). Read More</p>
          <br />
          <h3>TERMS OF USE</h3>
          <br />
          <p>Your use of the web sites and apps on which these terms reside (collectively, the "Platform"), and the features at this Platform are subject to these Terms of Use (this "Agreement"), which sets forth a legally binding agreement between you and Taco Bell Corp. Read More</p>
          <h3>PRIVACY POLICY</h3>
          <p>Our policy describes how we treat personal information on the websites where it is located. Read More</p>

        </div>
      </div>
  );
};

export default Legal;
