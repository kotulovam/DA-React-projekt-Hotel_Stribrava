import './style.css';

export const RoomsList = ({ rooms, onSelect, selectedId }) => {
  if (rooms === null) {
    return null;
  }
  return (
    <section className="dark">
      <div className="container">
        <h2>Naše pokoje</h2>
        <p>Vyberte si, který z našich pokojů je pro vás ten pravý.</p>
        <div className="cards-row">
          {rooms.map((room) => (
            <div
              key={room.id}
              className={`card ${
                selectedId.id === room.id && 'card--selected'
              }`}
              onClick={() => onSelect(room)}
            >
              <img className="card__image" src={room.image} />
              <div className="card__title">{room.name}</div>
              <div className="card__body">{room.price} Kč na osobu</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
