import SelectedPlayer from "../SelectedOlayer/SelectedPlayer";







const SelectedPlayers = ({selectedPlayers,handleDeleteSelectedPlayer,selectedCount,remainingSlots}) => {

    
    return (
        <div>
            <p>total selected player: {selectedPlayers.length}</p>
            {/* <p>name: {name}</p>
            <p>country: {country}</p>
            <p>price:{price}</p> */}
            <div className="flex justify-between bg-gray-100 p-3 rounded-lg mt-4">
  <h2>Selected Players: {selectedCount}</h2>
  <h2>Remaining Slots: {remainingSlots}</h2>
</div>


<div>



{
    selectedPlayers.map( (player) => <SelectedPlayer
    selectedCount={selectedCount}
    remainingSlots={remainingSlots}
    handleDeleteSelectedPlayer={handleDeleteSelectedPlayer} key={player.id} player={player}></SelectedPlayer>)
}

{/* {selectedPlayers.map((player) => (
          <div
            key={player.id}
            className="border p-3 rounded-xl"
          >
            <img
              className="w-full h-40 object-cover rounded-lg"
              src={player.playerPicture}
              alt=""
            />

            <h3 className="mt-2 font-bold">{player.name}</h3>
            <p>{player.country}</p>
            <p>{player.role}</p>
            <p>Price: {player.price}</p>
          </div>
        ))} */}

</div>



        </div>
        




    );
};

export default SelectedPlayers;