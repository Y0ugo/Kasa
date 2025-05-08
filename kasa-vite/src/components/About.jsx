import React from 'react';
import '../styles/About.scss';
import Collapse from './Collapse';
import banner2 from '../assets/banner2.png';

const aboutItems = [
  {
    title: 'Fiabilité',
    content: `Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.`
  },
  {
    title: 'Respect',
    content: `La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.`
  },
  {
    title: 'Service',
    content: `Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.`
  },
  {
    title: 'Sécurité',
    content: `La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés.`
  },
];

function About() {
  return (
    <div className="about-container">
      <div className="about-banner">
        <img src={banner2} alt="Bannière À propos" />
      </div>
      <div className="about-collapses">
        {aboutItems.map((item, idx) => (
          <Collapse key={idx} title={item.title} content={item.content} />
        ))}
      </div>
    </div>
  );
}

export default About;
