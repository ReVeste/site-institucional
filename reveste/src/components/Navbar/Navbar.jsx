import React from 'react';
import styles from './Navbar.module.css';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';

function Navbar() {

  const navigate = useNavigate();

  return (
    <nav className={styles["navbar"]}>
      <div className={styles["logo"]}>
        <img src={logo} alt="Logo" onClick={() => navigate("/")} /> 
      </div>
      <ul className={styles["navbar-links"]}>
        <li onClick={() => navigate("/forms")}>Contato</li>
      </ul>
    </nav>
  );
};

export default Navbar;