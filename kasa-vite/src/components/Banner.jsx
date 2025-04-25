import React from 'react';
import banner from '../assets/banner.png';
import '../styles/Banner.scss';

function Banner() {
  return (
    <div className="banner">
      <h1 className="banner-title">Chez vous, partout et ailleurs</h1>
      <img src={banner} alt="Bannière Kasa" className="banner-img" />
    </div>
  );
}

export default Banner;
