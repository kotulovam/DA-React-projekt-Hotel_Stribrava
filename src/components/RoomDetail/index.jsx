export const RoomDetail = ({ chosenRoom }) => {
  if (chosenRoom === null) {
    return null;
  }

  return (
    <div className="column">
      <img src={chosenRoom.image} />
      <p>{chosenRoom.description}</p>
    </div>
  );
};
