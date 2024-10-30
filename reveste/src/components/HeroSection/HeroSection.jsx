import React, { useState } from 'react';
import './HeroSection.module.css';  
import reveste from '../../assets/reveste.png';
import { useNavigate } from 'react-router-dom';


function HeroSection() {

  const [placeholder, setPlaceholder] = useState('Digite seu e-mail aqui!');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const botaoIniciar = (e) => { 
    e.preventDefault();
    navigate('/forms', { state: { email } });
  };

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
      <img src={reveste} alt="Hero" className="hero-image" />
        <h1>Transformando Brechós em<br></br> Experiências Digitais</h1>
        <p>
          Expanda suas vendas online com a ReVeste, trazendo o garimpo autêntico para a tela do cliente.
        </p>
        <form onSubmit={botaoIniciar}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            onFocus={() => setPlaceholder('')}
            onBlur={() => setPlaceholder('Digite seu e-mail aqui!')}
          />
          <button type="submit">Iniciar</button>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;