import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { FiPower, FiArrowRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import './styles.css';

import api from '../../services/api';

export default function ProfilePacient() {
  const [token, setToken] = useState('');
  const [id, setId] = useState(null);
  const [name, setName] = useState('');
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    async function loadDoctors() {
      setToken(localStorage.getItem('token'));
      setId(localStorage.getItem('id'));
      setName(localStorage.getItem('name'));

      if (token) {
        await api
          .get('users?type=1', {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((res) => setDoctors(res.data));
      }
    }
    loadDoctors();
  }, [token]);

  useEffect(() => {
    console.log(doctors);
  }, [doctors]);

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
        <li>
          <strong>NOME:</strong>
          <p>Luiza Martins Camargo</p>

          <strong>ESPECIALIDADE:</strong>
          <p>Pediatria</p>

          <strong>CONSULTA AGENDADA PARA: </strong>
          <p>10/04/2020 - 09:30</p>

          <strong className="strong_maior_pacient">
            Fazer Chamada de Vídeo
          </strong>
          <Link to="/video">
            <FiArrowRight size={35} color="#06728A" />
          </Link>
        </li>
        <li>
          <strong>NOME:</strong>
          <p>Luiza Martins Camargo</p>

          <strong>ESPECIALIDADE:</strong>
          <p>Pediatria</p>

          <strong>CONSULTA AGENDADA PARA: </strong>
          <p>10/04/2020 - 09:30</p>

          <strong className="strong_maior_pacient">
            Fazer Chamada de Vídeo
          </strong>
          <Link to="/video">
            <FiArrowRight size={35} color="#06728A" />
          </Link>
        </li>
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
                <FiArrowRight size={35} color="#06728A" />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
