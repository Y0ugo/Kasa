import React from 'react';
import '../styles/ApartmentCard.scss';

function ApartmentCard({ apartment, onClick }) {
  return (
    <div className="apartment-card" onClick={onClick} tabIndex={0} role="button">
      <img className="apartment-cover" src={apartment.cover} alt={apartment.title} />
      <div className="apartment-title-bar">
        <span className="apartment-title">{apartment.title}</span>
      </div>
    </div>
  );
}

export default ApartmentCard;
