import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Reservation } from '../../components/Reservation';
import { Rooms } from '../../components/Rooms';
import './style.css';

export const HomePage = () => {
  return (
    <>
      <Header />
      <Rooms />
      <Reservation />

      <Footer />
    </>
  );
};
