import React, { useState, useEffect } from 'react';
import ApartmentCard from './ApartmentCard';
import '../styles/ApartmentGrid.scss';

function ApartmentGrid() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    fetch('/src/data/Appartements.json')
      .then((res) => res.json())
      .then((data) => setApartments(data));
  }, []);

  const handleCardClick = (apartment) => {
    window.location.href = `/apartment/${apartment.id}`;
  };

  return (
    <section className="apartment-section">
      <div className="apartment-grid-container">
        <div className="apartment-grid">
          {apartments.map((apt) => (
            <ApartmentCard key={apt.id} apartment={apt} onClick={() => handleCardClick(apt)} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ApartmentGrid;
