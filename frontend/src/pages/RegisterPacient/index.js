import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import logoImg from '../../assets/logo.svg';

import api from '../../services/api';

export default function RegisterPacient() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    const data = { name, email, cpf, phone, city, uf, type: 0 };

    const response = await api
      .post('users', data)
      .catch((err) => alert(err.response.data.error));

    if (response) {
      alert('Cadastro realizado com sucesso.');
      history.push('/');
    }
  }

  return (
    <div className="register-container-pacient">
      <div className="content">
        <section>
          <img src={logoImg} alt="Seu Médico Aqui" style={{ width: 400 }} />

          <h1>Cadastro de Paciente</h1>
          <p>
            Faça seu cadastro, entre na plataforma e faça consultas por Chamada
            de Vídeo.
          </p>
          <Link to="/select" className="back-link">
            <FiArrowLeft size={16} color="#06728A" />
            Voltar para a seleção de usuário
          </Link>
        </section>
        <form onSubmit={handleSubmit}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome"
          />
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Número de Telefone"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
          />
          <input
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            placeholder="CPF"
          />

          <div className="input-group">
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Cidade"
            />
            <input
              value={uf}
              onChange={(e) => setUf(e.target.value)}
              placeholder="UF"
              style={{ width: 80 }}
            />
          </div>
          <button className="button" type="submit">
            CADASTRAR
          </button>
        </form>
      </div>
    </div>
  );
}
