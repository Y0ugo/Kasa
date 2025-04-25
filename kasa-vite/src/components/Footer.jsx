import React from 'react';
import '../styles/Footer.scss';
import logoBlanc from '../assets/LOGO_BLANC.png';

function Footer() {
  return (
    <footer className="footer">
      <img src={logoBlanc} alt="Logo Kasa" className="footer__logo-img"  />
      <div className="footer__text">© 2020 Kasa. All rights reserved</div>
    </footer>
  );
}

export default Footer;
