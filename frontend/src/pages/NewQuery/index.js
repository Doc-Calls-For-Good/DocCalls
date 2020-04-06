import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function NewQuery() {
  return (
    <div className="new-query">
      <div className="content">
        <section>
          <img src={logoImg} alt="Seu Médico Aqui" style={{ width: 400 }} />

          <h1>Agendamento de Consulta</h1>
          <p>Faça o agendamento da sua consulta com médico.</p>
          <Link to="/profilepacient" className="back-link">
            <FiArrowLeft size={16} color="#06728A" />
            Voltar para o home
          </Link>
        </section>
        <form>
          <p>
            <strong>Nome do Médico:</strong> Luiza Martins Camargo
          </p>
          <p>
            <strong>Especialidade Médica:</strong> Pediatria
          </p>
          <div className="input-group">
            <input placeholder="Data da Consulta" style={{ width: 300 }} />
            <input placeholder="Horário" style={{ width: 150 }} />
          </div>
            <button className="button" type="submit">
              CONFIRMAR
            </button>
        </form>
      </div>
    </div>
  );
}
