import React from 'react';
import {FiLogIn} from 'react-icons/fi';
import {Link} from 'react-router-dom';

import './styles.css';
import logoImg from '../../assets/logo.svg'
import seumedicoImg from '../../assets/seumedicoaqui.png'

export default function Logon(){
  return(
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Seu Médico Aqui"/>
        <form action="">
          <h1>Faça seu logon</h1>
          <input placeholder="Email"/>
          <input placeholder="CPF"/>
          <button className="button" type="submit">ENTRAR</button>
          <Link to="/select" className="back-link">
            <FiLogIn size={16} color="#06728A"/>
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={seumedicoImg} alt="Médicos"/>
    </div>
  );
}