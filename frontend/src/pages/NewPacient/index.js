import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function NewPacient() {
  const [name, setName] = useState('');
  const [info, setInfo] = useState('');
  const [date, setDate] = useState('');
  const [email, setEmail] = useState('');
  const [time, setTime] = useState('');

  return (
    <div className="new-pacient">
      <div className="content">
        <section>
          <img src={logoImg} alt="Seu Médico Aqui" style={{ width: 400 }} />

          <h1>Cadastro de Consulta de Paciente</h1>
          <p>
            Descreva o paciente detalhadamente para ajudar nos diagnósticos
            futuros.
          </p>
          <Link to="/profiledoctor" className="back-link">
            <FiArrowLeft size={16} color="#06728A" />
            Voltar para o home
          </Link>
        </section>
        <form>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome do Paciente"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email do Paciente"
          />
          <textarea
            value={info}
            onChange={(e) => setInfo(e.target.value)}
            placeholder="Quadro Médico do Paciente"
          />

          <div className="input-group">
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="Data da Consulta"
              style={{ width: 300 }}
            />
            <input
              value={time}
              onChange={(e) => setTime(e.target.value)}
              placeholder="Horário"
              style={{ width: 150 }}
            />
          </div>
          <Link to="/profiledoctor">
            <button className="button" type="submit">
              CADASTRAR
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
