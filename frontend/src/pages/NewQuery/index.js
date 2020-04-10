import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import logoImg from '../../assets/logo.svg';

import api from '../../services/api';

export default function NewQuery() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [doctorId, setDoctorId] = useState(null);
  const [pacientId, setPacientId] = useState(null);
  const [doctorName, setDoctorName] = useState(null);
  const [doctorSpecialty, setDoctorSpecialty] = useState(null);
  const [token, setToken] = useState(null);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    const dia = date.split('/')[0];
    const mes = date.split('/')[1];
    const ano = date.split('/')[2];
    const dateStr = `${ano}-${`0${mes}`.slice(-2)}-${`0${dia}`.slice(
      -2
    )} ${time}:00`;

    const data = JSON.stringify({
      date: dateStr,
      doctor_id: doctorId,
      pacient_id: pacientId,
    });

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    await api
      .post('appointments', data, {
        headers,
      })
      .then(() => {
        // eslint-disable-next-line no-alert
        alert('Consulta agendada com sucesso!');
        history.goBack();
      })
      // eslint-disable-next-line no-alert
      .catch((err) => alert(err));
  }

  useEffect(() => {
    async function loadDoctorInfo() {
      const response = await api.get(`users/${doctorId}`);
      setDoctorName(response.data.name);
      setDoctorSpecialty(response.data.specialty);
    }
    setPacientId(localStorage.getItem('id'));
    setDoctorId(localStorage.getItem('doctorId'));
    setToken(localStorage.getItem('token'));

    if (doctorId) {
      loadDoctorInfo();
    }
  }, [doctorId]);

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
        <form onSubmit={handleSubmit}>
          <p>
            <strong>Nome do Médico:</strong> {doctorName}
          </p>
          <p>
            <strong>Especialidade Médica:</strong> {doctorSpecialty}
          </p>
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
          <button className="button" type="submit">
            CONFIRMAR
          </button>
        </form>
      </div>
    </div>
  );
}
