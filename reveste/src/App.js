import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Carrossel from './components/Carrossel'; 
import Valores from './components/Valores';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Carrossel />
      <Valores /> 
    </div>
  );
}

export default App;
