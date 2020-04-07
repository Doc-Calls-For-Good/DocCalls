import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { FiPower, FiTrash2, FiArrowRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import './styles.css';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import api from '../../services/api';

export default function ProfileDoctor() {
  const [token, setToken] = useState('');
  const [name, setName] = useState('');
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function load() {
      setToken(localStorage.getItem('token'));
      setName(localStorage.getItem('name'));

      if (token) {
        await api
          .get('appointments', {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((res) => setAppointments(res.data));
      }
    }
    load();
  }, [token]);

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Seu Médico Aqui" />
        <span>Bem vindo, {name}!</span>

        <Link to="/pacients/new" className="button">
          CADASTRAR NOVO PACIENTE
        </Link>
        <button type="button">
          <Link to="/">
            <FiPower size={18} color="#E02041" />
          </Link>
        </button>
      </header>
      <h1>Consultas agendadas</h1>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            <strong>NOME:</strong>
            <p>{appointment.pacient.name}</p>

            <strong>QUADRO MÉDICO DO PACIENTE:</strong>
            <p>{appointment.info}</p>

            <strong>CONSULTA AGENDADA PARA: </strong>
            <p>{format(Date.parse(appointment.date), 
                  "'Dia' dd 'de' MMMM', às ' HH:mm'h'",
                  { locale: pt })}</p>

            <strong className="strong_maior">Fazer Chamada de Vídeo</strong>
            <div className="link">
              <Link to="/video">
                <FiArrowRight size={35} color="#06728A" />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
