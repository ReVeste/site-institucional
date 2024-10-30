import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.module.css';  
import reveste from '../../assets/reveste.png';

function HeroSection() {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('Digite seu e-mail aqui!');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setErrorMessage('Você precisa inserir seu e-mail!');
      return;
    }
    navigate('/cadastro', { state: { email } });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (errorMessage === 'Você precisa inserir seu e-mail') {
      setErrorMessage('Digite seu e-mail aqui!'); 
    }
  };

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <img src={reveste} alt="Hero" className="hero-image" />
        <h1>Transformando Brechós em<br /> Experiências Digitais</h1>
        <p>
          Expanda suas vendas online com a ReVeste, trazendo o garimpo autêntico para a tela do cliente.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            placeholder={errorMessage}
            onFocus={() => setErrorMessage('')}
            onChange={handleEmailChange}
          />
          <button type="submit">Iniciar</button>
        </form>
      </div>
    </section>
  );
}

export default HeroSection;
