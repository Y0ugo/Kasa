import React, { useState } from 'react';
import '../styles/Slider.scss';

function Slider({ pictures, alt = '' }) {
  const [current, setCurrent] = useState(0);
  const total = pictures.length;

  const goToPrev = () => {
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  if (!pictures || pictures.length === 0) return null;

  return (
    <div className="slider-container">
      {total > 1 && (
        <button className="slider-arrow left" onClick={goToPrev} aria-label="Image précédente">&#10094;</button>
      )}
      <img className="slider-image" src={pictures[current]} alt={alt + ' ' + (current + 1)} />
      {total > 1 && (
        <button className="slider-arrow right" onClick={goToNext} aria-label="Image suivante">&#10095;</button>
      )}
      <div className="slider-counter">
        {current + 1} / {total}
      </div>
    </div>
  );
}

export default Slider;
