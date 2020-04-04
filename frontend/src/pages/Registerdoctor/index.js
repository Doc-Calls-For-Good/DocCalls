import React from 'react';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Registerdoctor(){
  return(
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Seu Médico Aqui" style={{width:400}}/>

          <h1>Cadastro de Médico</h1>
          <p>Faça seu cadastro, entre na plataforma e faça atendimentos médicos dos seus pacientes por Chamada de Vídeo.</p>
          <Link to="/select" className="back-link">
            <FiArrowLeft size={16} color="#06728A"/>
            Voltar para a seleção de usuário
          </Link>
        </section>
        <form>
            <input placeholder="Nome"/>
            <input placeholder="Especialidade Médica"/>
            <input placeholder="Número de Telefone"/>
            <input placeholder="E-mail"/>
            <input placeholder="CPF"/>

            <div className="input-group">
            <input placeholder="Cidade"/>
            <input placeholder="UF" style={{ width: 80}}/>
            </div>
            <Link to='/profiledoctor'>
            <button className="button" type="submit">CADASTRAR</button>
            </Link>
        </form>
      </div>
    </div>
  );
}