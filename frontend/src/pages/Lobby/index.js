import React from 'react';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

const Lobby = ({
  username,
  handleUsernameChange,
  roomName,
  handleRoomNameChange,
  handleSubmit
}) => {
  return (
    <div className="register-container-lobby">
      <div className="content">
      <section>
          <img src={logoImg} alt="Seu Médico Aqui" style={{width:400}}/>

          <h1>Entre na Sala de Vídeo Chamada</h1>
          <p>Entre na Sala de Vídeo Chamadas e comece sua consulta.</p>
          <Link to="/" className="back-link">
            <FiArrowLeft size={16} color="#06728A"/>
            Voltar para o home
          </Link>
        </section>
    <form onSubmit={handleSubmit}>
      
      <div>
        <input
          type="text"
          id="field"
          value={username}
          onChange={handleUsernameChange}
          required
          placeholder="Nome"
        />
      </div>

      <div>
        <input
          type="text"
          id="room"
          value={roomName}
          onChange={handleRoomNameChange}
          required
          placeholder="Nome da Sala"
        />
      </div>

      <button type="submit" className="button">ENTRAR</button>
    </form>
    </div>
    </div>
  );
};

export default Lobby;
