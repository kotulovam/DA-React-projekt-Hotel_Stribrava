import { useState } from 'react';
import './style.css';
import dayjs from 'dayjs';

export const Form = ({ chosenRoom }) => {
  const [dayFrom, setDayFrom] = useState('');
  const [dayTo, setDayTo] = useState('');
  const [people, setPeople] = useState(1);
  const [food, setFood] = useState('1');
  const [pet, setPet] = useState(false);
  const [child, setChild] = useState(false);
  const [disability, setDisability] = useState(false);
  const [email, setEmail] = useState('');
  const [telefon, setTelefon] = useState('');

  let nights = dayjs(dayTo).diff(dayjs(dayFrom), 'day') || 1;
  let foodPrice;
  let petPrice = pet ? (chosenRoom.price / 4) * nights : 0;
  let childPrice = child ? (chosenRoom.price / 2) * nights : 0;

  if (food === '2') {
    foodPrice = 150 * people * nights;
  } else if (food === '3') {
    foodPrice = 300 * people * nights;
  } else if (food === '4') {
    foodPrice = 500 * people * nights;
  } else {
    foodPrice = 0;
  }

  let totalPrice = Math.round(
    chosenRoom.price * people * nights + foodPrice + petPrice + childPrice,
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:4000/api/reservation', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        dayFrom,
        dayTo,
        people,
        food,
        pet,
        child,
        disability,
        telefon,
        email,
        totalPrice,
      }),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-fields">
        <label htmlFor="field1" className="field-label">
          Od:
        </label>
        <input
          value={dayFrom}
          onChange={(e) => setDayFrom(e.target.value)}
          id="field1"
          className="field-input"
          type="date"
        />

        <label htmlFor="field2" className="field-label">
          Do:
        </label>
        <input
          value={dayTo}
          onChange={(e) => setDayTo(e.target.value)}
          id="field2"
          className="field-input"
          type="date"
        />

        <label htmlFor="field3" className="field-label">
          Počet osob:
        </label>
        <input
          value={people}
          onChange={(e) => setPeople(e.target.value)}
          id="field3"
          className="field-input"
          type="number"
          min={0}
        />

        <label htmlFor="select" className="field-label">
          Stravování:
        </label>
        <select
          value={food}
          onChange={(e) => setFood(e.target.value)}
          id="select"
          className="field-input"
        >
          <option value="1">Žádné</option>
          <option value="2">Snídaně</option>
          <option value="3">Polopenze</option>
          <option value="4">Plná penze</option>
        </select>

        <label htmlFor="check1" className="field-label">
          Domácí mazlíček:
        </label>
        <input
          value={pet}
          onChange={() => setPet(!pet)}
          id="check1"
          className="field-input"
          type="checkbox"
        />

        <label htmlFor="check1" className="field-label">
          Přistýlka pro dítě:
        </label>
        <input
          value={child}
          onChange={() => setChild(!child)}
          id="check1"
          className="field-input"
          type="checkbox"
        />

        <label htmlFor="check1" className="field-label">
          Bezbariérový přístup:
        </label>
        <input
          value={disability}
          onChange={() => setDisability(!disability)}
          id="check1"
          className="field-input"
          type="checkbox"
        />

        <label htmlFor="field4" className="field-label">
          E-mail:
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="field4"
          className="field-input"
          type="email"
        />

        <label htmlFor="field5" className="field-label">
          Telefon:
        </label>
        <input
          value={telefon}
          onChange={(e) => setTelefon(e.target.value)}
          id="field5"
          className="field-input"
          type="tel"
        />
      </div>

      <h2>Celková cena za pobyt: {totalPrice} Kč.</h2>
      <button className="wide">Odeslat poptávku</button>
    </form>
  );
};
