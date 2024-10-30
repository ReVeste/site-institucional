import React, { useState, useEffect } from 'react';
import styles from './Cadastro.module.css';
import logo from '../../assets/logo.png';
import reveste from '../../assets/reveste.png';
import imagemBackground from '../../assets/mulher-trabalhando-sorrindo.png';
import { useLocation, useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';

const CadastroForm = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    cnpj: ''
  });

  useEffect(() => {
    const email = location.state?.email; 
    if (email) {
      setFormData((prevFormData) => ({ ...prevFormData, email }));
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Substitua com os IDs corretos do EmailJS
    const serviceID = 'service_lx7aohr';
    const templateID = 'template_l6v390j';
    const publicKey = 'VMQgnW8wc7Ow7oK3C';

    // Envia o email usando o emailJS
    emailjs.send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        console.log('Email enviado com sucesso!', response.status, response.text);
        alert('Email enviado com sucesso!');
      }, (error) => {
        console.log('Erro ao enviar o email:', error);
        alert('Erro ao enviar o email. Por favor, tente novamente.');
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles['lado-esquerdo']}>
        <div className={styles['container-centralizador']}>
          <div className={styles['secao-botao-voltar']}>
            <button onClick={() => navigate('../')} className={styles['botao-voltar']}>
              <img src={logo} className={styles.logo} alt="Voltar" />
              Voltar
            </button>
          </div>

          <div className={styles['secao-texto-reveste']}>
            <img src={reveste} className={styles.reveste} alt="ReVeste Logo" />
            <span className={styles.subtitulo}>Tecnologia que valoriza cada peça</span>
            <span className={styles.conversa}>Vamos conversar!</span>
          </div>

          <div className={styles['forms-secao']}>
            <div className={styles.agrupador}>
              <label>Nome *</label>
              <input type="text" name="nome" value={formData.nome} onChange={handleChange} />
            </div>
            <div className={styles.agrupador}>
              <label>Email *</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div className={styles.agrupador}>
              <label>Telefone *</label>
              <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange} />
            </div>
            <div className={styles.agrupador}>
              <label>Nome da Empresa *</label>
              <input type="text" name="empresa" value={formData.empresa} onChange={handleChange} />
            </div>
            <div className={styles.agrupador}>
              <label>CNPJ *</label>
              <input type="text" name="cnpj" value={formData.cnpj} onChange={handleChange} />
            </div>
          </div>

          <div className={styles.termos}>
            <input type="checkbox" id="termos" />
            <label htmlFor="termos">Concordo com os <span className={styles.termosLink}>termos e condições.</span></label>
          </div>

          <button onClick={handleSubmit} className={styles.enviar}>Enviar</button>
        </div>
      </div>

      <div className={styles['imagem-background']}>
        <img src={imagemBackground} className={styles.image} alt="Mulher sorrindo trabalhando" />
      </div>
    </div>
  );
};

export default CadastroForm;
