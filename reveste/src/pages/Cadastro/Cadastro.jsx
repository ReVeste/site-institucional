import React from 'react';
import './Cadastro.module.css';

function FormPage() {
  return (
    <div className="container">
      {}
      <div className="form-container">
        <a href="/" className="back-button">
          <i className="fas fa-arrow-left"></i> Voltar
        </a>
        <h1>REVESTE</h1>
        <p>Tecnologia que valoriza cada peça</p>
        <p>Vamos conversar!</p>
        
        {}
        <div className="form-group">
          <label htmlFor="name">Nome *</label>
          <input type="text" id="name" name="name" required />
        </div>
        
        {}
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input type="email" id="email" name="email" required />
        </div>
        
        {}
        <div className="form-group">
          <label htmlFor="phone">Telefone *</label>
          <input type="tel" id="phone" name="phone" required />
        </div>
        
        {}
        <div className="form-group">
          <label htmlFor="company">Nome da Empresa *</label>
          <input type="text" id="company" name="company" required />
        </div>
        
        {}
        <div className="form-group">
          <label htmlFor="cnpj">CNPJ *</label>
          <input type="text" id="cnpj" name="cnpj" required />
        </div>
        
        {}
        <div className="checkbox-group">
          <input type="checkbox" id="terms" required />
          <label htmlFor="terms">
            Concordo com os <a href="#">termos e condições</a>.
          </label>
        </div>
        
        {}
        <button className="btn-submit" type="submit">Enviar</button>
      </div>

      {}
      <div className="image-container">
        <img src="../../assets/mulher-trabalhando-sorrindo.jpg"/>
      </div>
    </div>
  );
}

export default FormPage;
