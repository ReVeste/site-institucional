import React, { useState } from 'react';
import './HeroSection.module.css';  
import reveste from '../../assets/reveste.png';


function HeroSection() {
  const [placeholder, setPlaceholder] = useState('Digite seu e-mail aqui!');

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
      <img src={reveste} alt="Hero" className="hero-image" />
        <h1>Transformando Brechós em<br></br> Experiências Digitais</h1>
        <p>
          Expanda suas vendas online com a ReVeste, trazendo o garimpo autêntico para a tela do cliente.
        </p>
        <form>
          <input
            type="email"
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