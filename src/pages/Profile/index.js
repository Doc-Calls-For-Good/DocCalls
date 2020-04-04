import React from "react";

import logoImg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2, FiArrowRight } from 'react-icons/fi';
import './styles.css';

export default function Profile(){
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Seu Médico Aqui"/>
        <span>Bem vindo, Dr. João!</span>

        <Link to="/pacients/new" className="button">
        CADASTRAR NOVO PACIENTE
        </Link>
        <button type="button">
          <Link to="/">
          <FiPower size={18} color="#E02041"></FiPower>
          </Link>
        </button>
      </header>
      <h1>Pacientes cadastrados</h1>
      <ul>
        <li>
        <strong>NOME:</strong>
          <p>Luiza Martins Camargo</p>

          <strong>QUADRO MÉDICO DO PACIENTE:</strong>
          <p>Paciente apresenta diabetes e dores musculares.</p>

          <strong>CONSULTA AGENDADA PARA: </strong>
          <p>10/04/2020 - 09:30</p>

          <strong className="strong_maior">Fazer Chamada de Vídeo</strong>
          <Link>
          <FiArrowRight size={35} color="#06728A"></FiArrowRight>
          </Link>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
          </button>
        </li>
        <li>
        <strong>NOME:</strong>
          <p>Luiza Martins Camargo</p>

          <strong>QUADRO MÉDICO DO PACIENTE:</strong>
          <p>Paciente apresenta diabetes e dores musculares.</p>

          <strong>CONSULTA AGENDADA PARA: </strong>
          <p>10/04/2020 - 09:30</p>

          <strong className="strong_maior">Fazer Chamada de Vídeo</strong>
          <Link>
          <FiArrowRight size={35} color="#06728A"></FiArrowRight>
          </Link>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
          </button>
        </li>
        <li>
        <strong>NOME:</strong>
          <p>Luiza Martins Camargo</p>

          <strong>QUADRO MÉDICO DO PACIENTE:</strong>
          <p>Paciente apresenta diabetes e dores musculares.</p>

          <strong>CONSULTA AGENDADA PARA: </strong>
          <p>10/04/2020 - 09:30</p>

          <strong className="strong_maior">Fazer Chamada de Vídeo</strong>
          <Link>
          <FiArrowRight size={35} color="#06728A"></FiArrowRight>
          </Link>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
          </button>
        </li>
        <li>
        <strong>NOME:</strong>
          <p>Luiza Martins Camargo</p>

          <strong>QUADRO MÉDICO DO PACIENTE:</strong>
          <p>Paciente apresenta diabetes e dores musculares.</p>

          <strong>CONSULTA AGENDADA PARA: </strong>
          <p>10/04/2020 - 09:30</p>

          <strong className="strong_maior">Fazer Chamada de Vídeo</strong>
          <Link>
          <FiArrowRight size={35} color="#06728A"></FiArrowRight>
          </Link>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
          </button>
        </li>
      </ul>
    </div>
  );
}