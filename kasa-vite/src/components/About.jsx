import React from 'react';
import '../styles/About.scss';
import Collapse from './Collapse';

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
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80" alt="About Kasa" />
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
