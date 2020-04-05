import React, { useState } from 'react';
import {FiLogIn} from 'react-icons/fi';
import {Link, useHistory} from 'react-router-dom';

import './styles.css';
import logoImg from '../../assets/logo.svg'
import seumedicoImg from '../../assets/seumedicoaqui.png'

import api from '../../services/api';

export default function Logon(){

  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();
   
    const response = await api.post('sessions', { email, cpf })
    .catch(err => {
      alert(err.response.data.error);
    });
    
    if (response) {
      const token = response.data.token;
      const user = response.data.user;
      
      localStorage.setItem('token', token);
      localStorage.setItem('id', user.id);

      alert(`Seja bem-vindo, ${user.name}!`);

      if (user.type === 1) history.push('/profiledoctor');
      else history.push('/profilepacient');
    }
  }

  return(
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Seu Médico Aqui"/>
        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)} 
          />
          <input
            placeholder="CPF"
            value={cpf}
            onChange={e => setCpf(e.target.value)} 
          />
          <button className="button" type="submit">ENTRAR</button>
          <Link to="/select" className="back-link">
            <FiLogIn size={16} color="#06728A"/>
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={seumedicoImg} alt="Médicos"/>
    </div>
  );
}