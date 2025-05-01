import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Error404.scss';

function Error404() {
  return (
    <div className="error404-container">
      <h1 className="error404-title">404</h1>
      <p className="error404-message">Oups! La page que vous demandez n'existe pas.</p>
      <Link className="error404-link" to="/">Retourner sur la page d'accueil</Link>
    </div>
  );
}

export default Error404;
