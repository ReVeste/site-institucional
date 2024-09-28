import React from 'react';
import '../App.css';

const valoresData = [
  {
    id: 1,
    title: 'Empatia',
    description: 'Acreditamos que a empatia é a chave para entender as necessidades dos nossos clientes.',
    icon: require('../assets/iconEmpatia.png')
  },
  {
    id: 2,
    title: 'Inovação',
    description: 'Transformamos desafios em oportunidades, inovando para modernizar brechós.',
    icon: require('../assets/iconInovacao.png')
  },
  {
    id: 3,
    title: 'Compromisso',
    description: 'Oferecemos mais que um sistema, somos parceiros no crescimento digital dos brechós.',
    icon: require('../assets/iconCompromisso.png')
  },
  {
    id: 4,
    title: 'Transparência',
    description: 'Acreditamos que a confiança mútua é a base para parceiros duradouros.',
    icon: require('../assets/iconTransparencia.png')
  }
];

const Valores = () => {
  return (
    <div className="valores">
      <h2>VALORES</h2>
      <h3>Nossa força</h3>
      <div className="valores-container">
        {valoresData.map((valor, index) => (
          <div 
            key={valor.id} 
            className={`valor-card ${index % 2 === 0 ? 'card-blue' : 'card-silver'}`}
          >
            <img src={valor.icon} alt={valor.title} className="valor-icon" />
            <h4>{valor.title}</h4>
            <p>{valor.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Valores;
