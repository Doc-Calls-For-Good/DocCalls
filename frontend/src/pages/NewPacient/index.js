import React from 'react';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function NewPacient(){
  return (
    <div className="new-pacient">
    <div className="content">
      <section>
        <img src={logoImg} alt="Seu Médico Aqui" style={{width:400}}/>

        <h1>Cadastro de Consulta de Paciente</h1>
        <p>Descreva o paciente detalhadamente para ajudar nos diagnósticos futuros.</p>
        <Link to="/profiledoctor" className="back-link">
          <FiArrowLeft size={16} color="#06728A"/>
          Voltar para o home
        </Link>
      </section>
      <form>
          <input placeholder="Nome do Paciente"/>
          <input placeholder="Email do Paciente"/>
          <textarea placeholder="Quadro Médico do Paciente"/>

          <div className="input-group">
          <input placeholder="Data da Consulta"  style={{ width: 300}}/>
          <input placeholder="Horário" style={{ width: 150}}/>
          </div>
          <Link to="/profiledoctor">
          <button className="button" type="submit">CADASTRAR</button>
          </Link>
      </form>
    </div>
  </div>
  );
}