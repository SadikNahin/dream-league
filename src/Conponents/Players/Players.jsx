import Player from "../../Conponents/Player/Player";

const Players = ({ players, handleChoosePlayer }) => {
  return (
    <div className="grid grid-cols-3 gap-2 mt-4">
      {players.map((player) => (
        <Player
          key={player.id}
          player={player}
          handleChoosePlayer={handleChoosePlayer}
        />
      ))}
    </div>
  );
};

export default Players;