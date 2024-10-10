import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import Carrossel from './components/Carrossel/Carrossel'; 
import Valores from './components/Valores/Valores';
import './App.css';
import FaqSection from './components/FaqSection/FaqSection';
import Footer from './components/Footer/Footer';
import Rotas from './Routes';

function App() {
  return (
    <div className="App">
      <Rotas/>
    </div>
  );
}

export default App;
