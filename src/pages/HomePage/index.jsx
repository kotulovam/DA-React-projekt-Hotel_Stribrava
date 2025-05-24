import { useEffect, useState } from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Reservation } from '../../components/Reservation';
import { Rooms } from '../../components/Rooms';
import './style.css';

export const HomePage = () => {
  const [rooms, setRooms] = useState(null);

  useEffect(() => {
    const fetchRoom = async () => {
      const response = await fetch('http://localhost:4000/api/rooms');
      const json = await response.json();
      setRooms(json.data);
    };
    fetchRoom();
  }, []);

  return (
    <>
      <Header />
      <Rooms rooms={rooms} />
      <Reservation />

      <Footer />
    </>
  );
};
