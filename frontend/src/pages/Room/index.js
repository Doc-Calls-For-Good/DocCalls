import React, { useState, useEffect } from 'react';
import Video from 'twilio-video';
import Participant from '../../pages/Participant';
import './styles.css';
import { FiPower } from 'react-icons/fi';

const Room = ({ roomName, token, handleLogout }) => {
  const [room, setRoom] = useState(null);
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    const participantConnected = participant => {
      setParticipants(prevParticipants => [...prevParticipants, participant]);
    };

    const participantDisconnected = participant => {
      setParticipants(prevParticipants =>
        prevParticipants.filter(p => p !== participant)
      );
    };

    Video.connect(token, {
      name: roomName
    }).then(room => {
      setRoom(room);
      room.on('participantConnected', participantConnected);
      room.on('participantDisconnected', participantDisconnected);
      room.participants.forEach(participantConnected);
    });

    return () => {
      setRoom(currentRoom => {
        if (currentRoom && currentRoom.localParticipant.state === 'connected') {
          currentRoom.localParticipant.tracks.forEach(function(trackPublication) {
            trackPublication.track.stop();
          });
          currentRoom.disconnect();
          return null;
        } else {
          return currentRoom;
        }
      });
    };
  }, [roomName, token]);

  const remoteParticipants = participants.map(participant => (
    <Participant key={participant.sid} participant={participant} />
  ));

  return (
    <div className="room-container">
      <header>
      <h1>Sala: {roomName}</h1>
      <button type="button" onClick={handleLogout}>
          <FiPower size={18} color="#E02041"></FiPower>
        </button>
      </header>
      <div className="container">
      <div className="remote-participants">
        <p>Participantes Remotos</p>
        <p>{remoteParticipants}</p>
      </div>
      <div className="local-participant">
        <p>Você</p>
        <p>
        {room ? (
          <Participant
            key={room.localParticipant.sid}
            participant={room.localParticipant}
          />
        ) : (
          ''
        )}
        </p>
      </div>
      </div>
     
    </div>
  );
};

export default Room;