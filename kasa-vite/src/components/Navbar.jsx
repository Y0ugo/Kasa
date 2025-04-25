import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/LOGO.png';
import '../styles/Navbar.scss';

function Navbar() {
  const location = useLocation();
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img src={logo} alt="Kasa logo" className="navbar-logo-img" />
        </Link>
      </div>
      <div className="navbar__links">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Accueil</Link>
        <Link to="/a-propos" className={location.pathname === '/a-propos' ? 'active' : ''}>A Propos</Link>
      </div>
    </nav>
  );
}

export default Navbar;
