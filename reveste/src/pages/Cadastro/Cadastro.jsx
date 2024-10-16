import React, { useState } from 'react';
import styles from './Cadastro.module.css';
import logo from '../../assets/logo.png';
import reveste from '../../assets/reveste.png';
import imagemBackground from '../../assets/mulher-trabalhando-sorrindo.png';
import { useNavigate } from "react-router-dom";

const CadastroForm = () => {
  const navigate = useNavigate();
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
              <input type="text" />
            </div>
            <div className={styles.agrupador}>
              <label>Email *</label>
              <input type="email" />
            </div>
            <div className={styles.agrupador}>
              <label>Telefone *</label>
              <input type="tel" />
            </div>
            <div className={styles.agrupador}>
              <label>Nome da Empresa *</label>
              <input type="text" />
            </div>
            <div className={styles.agrupador}>
              <label>CNPJ *</label>
              <input type="text"/>
            </div>
          </div>

          <div className={styles.termos}>
            <input type="checkbox" id="termos"/>
            <label htmlFor="termos">Concordo com os <span className={styles.termosLink}>termos e condições.</span></label>
          </div>

          <button className={styles.enviar}>Enviar</button>
        </div>
      </div>

      <div className={styles['imagem-background']}>
        <img src={imagemBackground} className={styles.image} alt="Mulher sorrindo trabalhando" />
      </div>
    </div>
  );
};

export default CadastroForm;
