import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import logoImg from '../../assets/logo.svg';

import api from '../../services/api';

export default function NewPacient() {
  const [messageError, setMessageError] = useState('');
  const [info, setInfo] = useState('');
  const [date, setDate] = useState('');
  const [email, setEmail] = useState('');
  const [time, setTime] = useState('');
  const [doctorId, setDoctorId] = useState(null);
  const [token, setToken] = useState(null);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api
      .get(`users?email=${email}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .catch((err) => {
        setMessageError(err.response.data.error);
        setEmail('');
      });

    const dia = date.split('/')[0];
    const mes = date.split('/')[1];
    const ano = date.split('/')[2];
    const dateStr = `${ano}-${`0${mes}`.slice(-2)}-${`0${dia}`.slice(
      -2
    )} ${time}:00`;

    const data = JSON.stringify({
      date: dateStr,
      doctor_id: doctorId,
      pacient_id: response.data.id,
      info,
    });

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    await api
      .post('appointments', data, {
        headers,
      })
      .then((res) => {
        console.log(res);
        alert('Consulta agendada com sucesso!');
        history.back();
      })
      .catch((err) => 
        alert(err.response.data.error)
      );
  }

  useEffect(() => {
    setDoctorId(localStorage.getItem('id'));
    setToken(localStorage.getItem('token'));
  }, [token]);

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
        <form onSubmit={handleSubmit}>
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
          {messageError && (
            <p style={{ textAlign: 'right', color: 'red' }}>{messageError}</p>
          )}
          <button className="button" type="submit">
            CADASTRAR
          </button>
        </form>
      </div>
    </div>
  );
}
