import React, { useState } from 'react';
import '../App.css';
import faqImage from '../assets/imageRoupa.png';

const FaqSection = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const questions = [
    {
      question: "Como posso começar a usar ReVeste para o meu brechó?",
      answer: "Para começar a usar o ReVeste no seu brechó, você precisará se inscrever no formulário de cadastro.",
    },
    {
      question: "Como é feita a gestão? É feito pela ReVeste ou pelo brechó?",
      answer: "A gestão é feita pelo proprietário do brechó, através das ferramentas fornecidas pela plataforma. Isso inclui a gestão de estoque, precificação e pedidos.",
    },
    {
      question: "Como funciona o contato com a ReVeste?",
      answer: "O contato com a ReVeste pode ser feito através do e-mail. Esse canal permite que você obtenha assistência e tire dúvidas.",
    },
  ];

  return (
    <div className="faq-section">
      <div className="faq-content">
        <div className="faq-questions">
          <h2>Perguntas Frequentes</h2>
          <ul>
            {questions.map((item, index) => (
              <li
                key={index}
                className="question-item"
                onMouseEnter={() => setActiveQuestion(index)}
                onMouseLeave={() => setActiveQuestion(null)}
              >
                <span className="number">{index + 1}</span>
                <p>
                  {activeQuestion === index ? item.answer : item.question}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="faq-image">
          <img src={faqImage} alt="Pessoa segurando roupa" />
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
