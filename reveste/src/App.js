import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Carrossel from './components/Carrossel'; 
import Valores from './components/Valores';
import './App.css';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Carrossel />
      <Valores /> 
      <FaqSection />
      <Footer />
    </div>
  );
}

export default App;
