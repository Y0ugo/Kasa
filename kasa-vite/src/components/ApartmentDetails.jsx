import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Collapse from './Collapse';
import Slider from './Slider';
import Error404 from './Error404';
import '../styles/ApartmentDetails.scss';
import '../styles/Slider.scss';

function ApartmentDetails() {
  const { id } = useParams();
  const [apartment, setApartment] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch('/src/data/Appartements.json')
      .then((res) => res.json())
      .then((data) => {
        const found = Array.isArray(data) ? data.find((apt) => apt.id === id) : null;
        if (found) {
          setApartment(found);
          setNotFound(false);
        } else {
          setApartment(null);
          setNotFound(true);
        }
      })
      .catch(() => {
        setApartment(null);
        setNotFound(true);
      });
  }, [id]);

  if (notFound) return <Error404 />;
  if (!apartment) return <div>Chargement...</div>;

  return (
    <div className="apartment-details-container">
      <div className="apartment-details-gallery">
        <Slider pictures={apartment.pictures} alt={apartment.title} />
      </div>
      <div className="apartment-details-main-row">
        <div className="apartment-details-main">
          <h1 className="apartment-details-title">{apartment.title}</h1>
          <span className="apartment-location">{apartment.location}</span>
          <div className="apartment-tags">
            {apartment.tags && apartment.tags.map((tag, idx) => (
              <span className="apartment-tag" key={idx}>{tag}</span>
            ))}
          </div>
        </div>
        <div className="apartment-details-host-rating">
          <div className="apartment-host">
            <span className="apartment-host-name">{apartment.host.name}</span>
            <img className="apartment-host-picture" src={apartment.host.picture} alt={apartment.host.name} />
          </div>
          <div className="apartment-rating">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className={i < parseInt(apartment.rating) ? 'star filled' : 'star'}>★</span>
            ))}
          </div>
        </div>
      </div>
      <div className="apartment-details-collapses">
        <Collapse title="Description" content={<span>{apartment.description}</span>} />
        <Collapse title="Équipements" content={<ul>{apartment.equipments.map((eq, idx) => (<li key={idx}>{eq}</li>))}</ul>} />
      </div>
    </div>
  );
}

export default ApartmentDetails;
