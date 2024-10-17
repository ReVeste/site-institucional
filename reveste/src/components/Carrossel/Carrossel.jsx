// ATUALIZADO
import React, { useState, useEffect } from 'react';
import './Carrossel.module.css';

import image1 from '../../assets/tecnologias.png';
import image2 from '../../assets/colaboracao.png';
import image3 from '../../assets/desenvolvimento.png';

import icon1_1 from '../../assets/iconeInovacao.png';
import icon1_2 from '../../assets/iconeQualidade.png';
import icon1_3 from '../../assets/iconeAgilidade.png';

import icon2_1 from '../../assets/iconeParceria.png';
import icon2_2 from '../../assets/iconeEstrategia.png';
import icon2_3 from '../../assets/iconeFoco.png';

import icon3_1 from '../../assets/iconeSuporte.png';

const carrosselData = [
  {
    id: 1,
    text: 'Como trabalhamos?',
    description: 'Na REVESTE combinamos tecnologia, inovação e experiência de mercado para entregar soluções personalizadas e eficazes.',
    image: image1,
    iconText: [
      { icon: icon1_1, text: 'Inovação', descricao: 'Soluções tecnológicas únicas.' },
      { icon: icon1_2, text: 'Qualidade', descricao: 'Alto padrão em cada detalhe.' },
      { icon: icon1_3, text: 'Agilidade', descricao: 'Entregas rápidas e eficientes.' }
    ]
  },
  {
    id: 2,
    text: 'Planejamento Colaborativo',
    description: 'Desde o primeiro contato, colaboramos com você em todas as etapas do planejamento.',
    image: image2,
    iconText: [
      { icon: icon2_1, text: 'Parceria', descricao: 'Lado a lado em todas as fases.' },
      { icon: icon2_2, text: 'Estratégia', descricao: 'Plano alinhado com seu negócio.' },
      { icon: icon2_3, text: 'Foco', descricao: 'Soluções direcionadas para o sucesso.' }
    ]
  },
  {
    id: 3,
    text: 'Desenvolvimento Tailor Made',
    description: 'Nossa equipe desenvolve o projeto com base no planejamento.',
    image: image3,
    iconText: [
      { icon: icon3_1, text: 'Suporte', descricao: 'Atendimento próximo e constante.' }
    ]
  }
];

const Carrossel = () => {
  const [current, setCurrent] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === carrosselData.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <div className="carrossel">
      <div className="carrossel-indicators">
        {carrosselData.map((_, index) => (
          <div
            key={index}
            className={`indicator ${current === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      <div className="carrossel-item">
        <div className="carrossel-text">
          <h2>{carrosselData[current].text}</h2>
          <p>{carrosselData[current].description}</p>
          <div className="icons-container">
            {carrosselData[current].iconText.map((item, index) => (
              <div key={index} className="icon-text-pair">
                <img src={item.icon} alt={item.text} className="carrossel-icon" />
                <div className="icon-description">
                  <span>{item.text}</span>
                  <div className="icon-text-pair">
                    <span>{item.descricao}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="carrossel-image">
          <img src={carrosselData[current].image} alt={carrosselData[current].text} loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default Carrossel;


// // CODIGO ANTIGO
// import React, { useState } from 'react';
// import CarrosselItem from './CarrosselItem';
// import '../App.css';

// import image1 from '../assets/tecnologias.png';
// import image2 from '../assets/colaboracao.png';
// import image3 from '../assets/desenvolvimento.png';

// import icon1_1 from '../assets/iconeInovacao.png';
// import icon1_2 from '../assets/iconeQualidade.png';
// import icon1_3 from '../assets/iconeAgilidade.png';

// import icon2_1 from '../assets/iconeParceria.png';
// import icon2_2 from '../assets/iconeEstrategia.png';
// import icon2_3 from '../assets/iconeFoco.png';

// import icon3_1 from '../assets/iconeSuporte.png';

// const carrosselData = [
//   {
//     id: 1,
//     text: 'Como trabalhamos?',
//     description: 'Na REVESTE combinamos tecnologia, inovação e experiência de mercado para entregar soluções personalizadas e eficazes. Trabalhamos com foco em criar plataformas que atendam às necessidades específicas de cada cliente, sempre priorizando a experiência do usuário.',
//     image: image1,
//     iconText: [
//       { icon: icon1_1, text: 'Inovação', descricao: 'Soluções tecnológicas únicas.' },
//       { icon: icon1_2, text: 'Qualidade', descricao: 'Alto padrão em cada detalhe.' },
//       { icon: icon1_3, text: 'Agilidade', descricao: 'Entregas rápidas e eficientes.' }
//     ]
//   },
//   {
//     id: 2,
//     text: 'Planejamento Colaborativo',
//     description: 'Desde o primeiro contato, colaboramos com você em todas as etapas do planejamento. Alinhamos suas expectativas com nossas ideias para garantir que o projeto atenda às suas necessidades e ao seu público-alvo.',
//     image: image2,
//     iconText: [
//       { icon: icon2_1, text: 'Parceria', descricao: 'Lado a lado em todas as fases.' },
//       { icon: icon2_2, text: 'Estratégia', descricao: 'Plano alinhado com seu negócio.' },
//       { icon: icon2_3, text: 'Foco', descricao: 'Soluções direcionadas para o sucesso.' }
//     ]
//   },
//   {
//     id: 3,
//     text: 'Desenvolvimento Tailor Made',
//     description: 'Nossa equipe desenvolve o projeto com base no planejamento, sempre com flexibilidade para ajustes conforme necessário. Utilizamos as melhores tecnologias para criar plataformas robustas, intuitivas e que refletem a essência do seu brechó.',
//     image: image3,
//     iconText: [
//       { icon: icon3_1, text: 'Suporte', descricao: 'Atendimento próximo e constante.' }
//     ]
//   }
// ];


// function Carrossel() {
//   const [current, setCurrent] = useState(0);

//   const goToSlide = (index) => {
//     setCurrent(index);
//   };

//   return (
//     <div className="carrossel">
//       {}
//       <div className="carrossel-indicators">
//         {carrosselData.map((_, index) => (
//           <div
//             key={index}
//             className={`indicator ${current === index ? 'active' : ''}`}
//             onClick={() => goToSlide(index)}
//           />
//         ))}
//       </div>

//       {}
//       <CarrosselItem 
//         text={carrosselData[current].text} 
//         description={carrosselData[current].description}
//         iconText={carrosselData[current].iconText} 
//         image={carrosselData[current].image} 
//       />
//     </div>
//   );
// }
// export default Carrossel;
