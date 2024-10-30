import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.module.css';
import logo from '../../assets/logo.png';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('Digite seu e-mail aqui!');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (errorMessage === 'Você precisa inserir seu e-mail!') {
      setErrorMessage('Digite seu e-mail aqui!'); 
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setErrorMessage('Você precisa inserir seu e-mail!');
      return;
    }
    navigate('/cadastro', { state: { email } });
  };

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
            <h4>Política</h4>
            <a href="/termos-de-servico">Termos de Serviço</a>
          </div>
        </div>
        <div className="footer-subscribe">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder={errorMessage}
              value={email}
              onFocus={() => setErrorMessage('')}
              onChange={handleEmailChange}
            />
            <button type="submit">Continuar</button>
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