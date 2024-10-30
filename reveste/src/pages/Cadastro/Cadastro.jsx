import React, { useState, useEffect } from 'react';
import styles from './Cadastro.module.css';
import logo from '../../assets/logo.png';
import reveste from '../../assets/reveste.png';
import imagemBackground from '../../assets/mulher-trabalhando-sorrindo.png';
import { useLocation, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const CadastroForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const emailInicial = location.state?.email || '';

  const [formData, setFormData] = useState({
    nome: '',
    email: emailInicial,
    telefone: '',
    empresa: '',
    cnpj: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [aceitouTermos, setAceitouTermos] = useState(false);
  const [erroTermos, setErroTermos] = useState('');

  const formatPhone = (value) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length <= 10) {
      return cleaned.replace(/^(\d{2})(\d)/g, '($1) $2').replace(/(\d{4})(\d)/, '$1-$2');
    } else {
      return cleaned.replace(/^(\d{2})(\d)/g, '($1) $2').replace(/(\d{5})(\d)/, '$1-$2');
    }
  };

  const formatCNPJ = (value) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length <= 14) {
      return cleaned.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
    }
    return value;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'telefone') {
      setFormData({ ...formData, [name]: formatPhone(value) });
    } else if (name === 'cnpj') {
      setFormData({ ...formData, [name]: formatCNPJ(value) });
    } else {
      setFormData({ ...formData, [name]: value });
      if (name === 'nome') {
        setFirstName(value.split(' ')[0]);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!aceitouTermos) {
      setErroTermos('É necessário concordar com os termos e condições.');
      return;
    }

    const serviceID = 'service_lx7aohr'; 
    const templateID = 'template_l6v390j'; 
    const publicKey = 'VMQgnW8wc7Ow7oK3C'; 

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        console.log('Email enviado com sucesso!', response.status, response.text);
        setIsSubmitted(true);
      }, (error) => {
        console.log('Erro ao enviar o email:', error);
        alert('Erro ao enviar o email. Por favor, tente novamente.');
      });
  };

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        navigate('/');
      }, 2000); 
      return () => clearTimeout(timer);
    }
  }, [isSubmitted, navigate]);
  
  if (isSubmitted) {
    return (
      <div className={styles.container}>
        <div className={styles['lado-esquerdo']}>
          <div className={styles['container-centralizador']}>
            <div className={styles['secao-texto-reveste']}>
              <img src={reveste} className={styles.reveste} alt="ReVeste Logo" />
              <span className={styles.subtitulo}>Tecnologia que valoriza cada peça</span>
            </div>
            <h1>Obrigado pelo seu cadastro, {firstName}!</h1>
            <p>Aguarde e entraremos em contatos!</p>
          </div>
        </div>
        <div className={styles['imagem-background']}>
          <img src={imagemBackground} className={styles.image} alt="Mulher sorrindo trabalhando" />
        </div>
      </div>
    );
  }
  

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
              <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange} maxLength="15" />
            </div>
            <div className={styles.agrupador}>
              <label>Nome da Empresa *</label>
              <input type="text" name="empresa" value={formData.empresa} onChange={handleChange} />
            </div>
            <div className={styles.agrupador}>
              <label>CNPJ *</label>
              <input type="text" name="cnpj" value={formData.cnpj} onChange={handleChange} maxLength="18" />
            </div>
          </div>

          <div className={styles.termos}>
            <input 
              type="checkbox" 
              id="termos" 
              checked={aceitouTermos} 
              onChange={(e) => {
                setAceitouTermos(e.target.checked);
                if (e.target.checked) setErroTermos('');
              }}
            />
            <label htmlFor="termos">
              Concordo com os{' '}
              <span 
                className={styles.termosLink}
                onClick={() => navigate('/cadastro/termos-de-servico')}
              >
                termos e condições.
              </span>
            </label>
          </div>
          {erroTermos && <p className={styles.erroTermos}>{erroTermos}</p>}

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