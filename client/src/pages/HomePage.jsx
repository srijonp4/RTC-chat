import { useCallback } from 'react';
import { useState, useEffect } from 'react';
import { useSocket } from '../../context/SocketProvider';
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
  const [email, setEmail] = useState('');
  const [room, setRoom] = useState('');
  const navigate = useNavigate();
  const socket = useSocket();
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      // console.log(`${email} ${room}`);
      socket.emit('room:join', { email, room });
    },
    [email, room, socket]
  );

  const handleJoinRoom = useCallback(
    (data) => {
      const { email, room } = data;
      navigate(`/room/${room}`);
      console.log(`${email} , ${room}`);
    },
    [navigate]
  );

  useEffect(() => {
    socket.on(
      'room:join',
      /*  (data) => {
      console.log('from backend', data);
    } , */ handleJoinRoom
    );

    return () => {
      socket.off('room:join', handleJoinRoom);
    };
  }, [socket, handleJoinRoom]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-matcha-850 shadow-xl rounded-lg p-6 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Lobby</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-lg font-medium mb-2">
              E-mail id
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label htmlFor="room" className="block text-lg font-medium mb-2">
              Room Number
            </label>
            <input
              type="text"
              id="room"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
              className="input input-bordered w-full"
            />
          </div>
          <button type="submit" className="btn btn-secondary w-full">
            Join
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
