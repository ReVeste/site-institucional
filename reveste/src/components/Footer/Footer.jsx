import React from 'react';
import './Footer.module.css';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Logo ReVeste" className="logo" />
        </div>
        <div className="footer-links">
          <div className="footer-section">
            <h4>Institucional</h4>
            <a href="/">Sobre</a>
          </div>
          <div className="footer-section">
            <h4>Termos de uso</h4>
            <a href="/">Políticas de uso</a>
            <a href="/">Privacidade</a>
          </div>
          <div className="footer-section">
            <h4>Ajuda</h4>
            <a href="/">Dúvidas frequentes</a>
          </div>
        </div>
        <div className="footer-subscribe">
          <form>
            <input type="email" placeholder="Digite seu e-mail aqui" />
            <button type="button">Continuar</button>
          </form>
          <a href="mailto:reveste@reveste.com">reveste@reveste.com</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>ReVeste © 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
