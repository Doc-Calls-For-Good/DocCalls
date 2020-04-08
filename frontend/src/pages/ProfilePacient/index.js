import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { FiPower, FiTrash2, FiArrowRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import './styles.css';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';


import api from '../../services/api';

export default function ProfilePacient() {
  const [token, setToken] = useState('');
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function load() {
      setToken(localStorage.getItem('token'));
      setName(localStorage.getItem('name'));
      setId(localStorage.getItem('id'));

      console.log('CARALHO');

      if (token) {
        await api
          .get('users?type=1', {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((res) => setDoctors(res.data));
          console.log('dfsd');
        await api
          .get(`appointments/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((res) => setAppointments(res.data));
      }
    }
    load();
  }, [token]);

  return (
    <div className="profilepacient-container">
      <header>
        <img src={logoImg} alt="Seu Médico Aqui" />
        <span>Bem vindo, {name}!</span>

        <button type="button">
          <Link to="/">
            <FiPower size={18} color="#E02041" />
          </Link>
        </button>
      </header>
      <h1>Consultas Agendadas</h1>
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
      <h1>Médicos Disponíveis</h1>
      <ul>
        {doctors.map((doctor) => (
          <li key={doctor.id}>
            <strong>NOME:</strong>
            <p>{doctor.name}</p>

            <strong>ESPECIALIDADE:</strong>
            <p>{doctor.specialty}</p>

            <strong className="strong_maior_pacient">Agendar Consulta</strong>
            <div className="link">
              <Link to="/query/new">
                <FiArrowRight onClick={() => 
                  localStorage.setItem('doctorId', doctor.id)
                  } size={35} color="#06728A" />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
