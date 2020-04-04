import React from "react";

import logoImg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FiPower, FiArrowRight } from 'react-icons/fi';
import './styles.css';

export default function ProfilePacient(){
  return (
    <div className="profilepacient-container">
      <header>
        <img src={logoImg} alt="Seu Médico Aqui"/>
        <span>Bem vindo, Matheus!</span>

     
        <button type="button">
          <Link to="/">
          <FiPower size={18} color="#E02041"></FiPower>
          </Link>
        </button>
       
      </header>
      <h1>Consultas Agendadas</h1>
      <ul>
      <li>
        <strong>NOME:</strong>
          <p>Luiza Martins Camargo</p>

          <strong>ESPECIALIDADE:</strong>
          <p>Pediatria</p>

          <strong>CONSULTA AGENDADA PARA: </strong>
          <p>10/04/2020 - 09:30</p>

          <strong className="strong_maior_pacient">Fazer Chamada de Vídeo</strong>
          <Link to="/video">
          <FiArrowRight size={35} color="#06728A"></FiArrowRight>
          </Link>
        </li>
        <li>
        <strong>NOME:</strong>
          <p>Luiza Martins Camargo</p>

          <strong>ESPECIALIDADE:</strong>
          <p>Pediatria</p>

          <strong>CONSULTA AGENDADA PARA: </strong>
          <p>10/04/2020 - 09:30</p>

          <strong className="strong_maior_pacient">Fazer Chamada de Vídeo</strong>
          <Link>
          <FiArrowRight size={35} color="#06728A"></FiArrowRight>
          </Link>
        </li>
      </ul>
      <h1>Médicos Disponíveis</h1>
       <ul>
       <li>
        <strong>NOME:</strong>
          <p>Luiza Martins Camargo</p>

          <strong>ESPECIALIDADE:</strong>
          <p>Pediatria</p>

         

          <strong className="strong_maior_pacient">Agendar Consulta</strong>
          <div className="link">
          <Link to="/query/new">
          <FiArrowRight size={35} color="#06728A"></FiArrowRight>
          </Link>
          </div>
        </li>
        <li>
        <strong>NOME:</strong>
          <p>Luiza Martins Camargo</p>

          <strong>ESPECIALIDADE:</strong>
          <p>Pediatria</p>

         

          <strong className="strong_maior_pacient">Agendar Consulta</strong>
          <div className="link">
          <Link to="/query/new">
          <FiArrowRight size={35} color="#06728A"></FiArrowRight>
          </Link>
          </div>
        </li>
      </ul>
    </div>
  );
}