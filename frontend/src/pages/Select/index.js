import React from 'react';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import './styles.css';
import logoImg from '../../assets/logo.svg';
import paciImg from '../../assets/hospitalizacao.png';
import medicoImg from '../../assets/medico.png';

export default function Select(){
  return(
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Seu Médico Aqui" style={{width:400}}/>

          <h1>Selecione</h1>
          <p>Selecione o seu perfil para fazer o cadastro na plataforma e começar a usar.</p>
          <Link to="/" className="back-link">
            <FiArrowLeft size={16} color="#06728A"/>
            Voltar para o logon
          </Link>
        </section>
        <div className="seleciona">
          <Link to="/registerpacient" className="back-link">
        <div className="quadradopacient">
          <img src={paciImg} alt="Paciente"/>
          <p>Paciente</p>
        </div>
        </Link >
        <Link to="/registerdoctor" className="back-link">
        <div className="quadradomedico">
          <img src={medicoImg} alt="Médico"/>
          <p>Médico</p>
        </div>
        </Link>
        </div>
      </div>
    </div>
  );
}