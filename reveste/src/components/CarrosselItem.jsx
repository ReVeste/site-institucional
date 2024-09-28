// CODIGO ANTIGO
// import React, { useState } from 'react';
// import CarrosselItem from './CarrosselItem'; 

// const Carrossel = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const carrosselData = [
//     {
//       text: 'Como trabalhamos?',
//       description: 'Descrição do trabalho.',
//       image: 'tecnologias.png',
//       iconText: [
//         { icon: 'icon1.png', text: 'Ícone 1', descricao: 'Descrição do ícone 1' },
//         { icon: 'icon2.png', text: 'Ícone 2', descricao: 'Descrição do ícone 2' },
//       ],
//     },
//     {
//       text: 'Planejamento Colaborativo',
//       description: 'Descrição do planejamento.',
//       image: 'colaboracao.png',
//       iconText: [
//         { icon: 'icon3.png', text: 'Ícone 3', descricao: 'Descrição do ícone 3' },
//         { icon: 'icon4.png', text: 'Ícone 4', descricao: 'Descrição do ícone 4' },
//       ],
//     },
//     {
//       text: 'Desenvolvimento Tailor Made',
//       description: 'Descrição do desenvolvimento.',
//       image: 'desenvolvimento.png',
//       iconText: [
//         { icon: 'icon5.png', text: 'Ícone 5', descricao: 'Descrição do ícone 5' },
//         { icon: 'icon6.png', text: 'Ícone 6', descricao: 'Descrição do ícone 6' },
//       ],
//     },
//   ];

//   const handleMouseEnter = (index) => {
//     setActiveIndex(index);
//   };

//   return (
//     <div className="carrossel">
//       <div className="carrossel-item">
//         <CarrosselItem {...carrosselData[activeIndex]} />
//       </div>

//       <div className="carrossel-indicators">
//         {carrosselData.map((_, index) => (
//           <div
//             key={index}
//             className={`indicator ${index === activeIndex ? 'active' : ''}`}
//             onMouseEnter={() => handleMouseEnter(index)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carrossel;
