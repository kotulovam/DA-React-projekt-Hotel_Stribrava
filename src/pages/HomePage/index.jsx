import { useEffect, useState } from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { RoomsList } from '../../components/RoomsList';
import './style.css';
import { RoomDetail } from '../../components/RoomDetail';
import { Form } from '../../components/Form';

export const HomePage = () => {
  const [rooms, setRooms] = useState(null);
  const [chosenRoom, setChosenRoom] = useState(null);

  useEffect(() => {
    const fetchRoom = async () => {
      const response = await fetch('http://localhost:4000/api/rooms');
      const json = await response.json();
      setRooms(json.data);
      setChosenRoom(json.data[0]);
    };
    fetchRoom();
  }, []);

  return (
    <>
      <Header />
      <RoomsList rooms={rooms} onSelect={setChosenRoom} />
      {chosenRoom === null ? (
        ''
      ) : (
        <section className="light">
          <div className="container">
            <h2>
              Pokoj {chosenRoom.name}, {chosenRoom.price} Kč na osobu za noc.
            </h2>
            <div className="columns-2">
              <RoomDetail chosenRoom={chosenRoom} />
              <Form />
            </div>
          </div>
        </section>
      )}
      <Footer />
    </>
  );
};
