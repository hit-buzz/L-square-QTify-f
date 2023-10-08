import React from 'react';
import HeroImage from '../../assets/vibrating-headphone 1.png';

const HeroSection = () => {
  return (
    <div className="hero">
      <img src={HeroImage} alt="Logo" />
      <h1>100 Thousand Songs, ad-free</h1>
      <p>Over thousands of podcast episodes</p>
    </div>
  );
};

export default HeroSection;
