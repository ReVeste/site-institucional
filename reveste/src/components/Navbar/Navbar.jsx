import React from 'react';
import './Navbar.module.css';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => navigate("/")}>
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li onClick={() => navigate("/cadastro")} className="navbar-link">
          Contato
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;