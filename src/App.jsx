import "./App.css";
import Header from "./Conponents/Header/Header";
import Credit from "./Conponents/Credit/Credit";
import Players from "./Conponents/Players/Players";
import SelectedPlayers from "./Conponents/SelectedPlayers/SelectedPlayers";

import { useState, useEffect } from "react";

function App() {
  const [credits, setCredits] = useState(0);


  const [players, setPlayers] = useState([]);

  const [selectedPlayers, setSelectedPlayers] = useState([]);

  useEffect(() => {
    fetch("Players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  const handleAddAmt = (credit) => {
    setCredits((prev) => prev + credit);
  };



  const maxPlayers = 6;

const selectedCount = selectedPlayers.length;
const remainingSlots = maxPlayers - selectedCount;




  const handleChoosePlayer = (player) => {
    if (credits < player.price) {
      alert("not enough money");
      return;
    }

    setCredits((prev) => prev - player.price);

    const remainingPlayers = players.filter(
      (p) => p.id !== player.id
    );

    setPlayers(remainingPlayers);

    setSelectedPlayers((prev) => [...prev, player]);
  };



//  const handleDeleteSelectedPlayer = (player) => {
//   const remainingSelectedPlayer = selectedPlayers.filter(
//     (thisPlayer) => thisPlayer.id !== player.id
//   );

//   setSelectedPlayers(remainingSelectedPlayer);

//   setPlayers((prev) => [...prev, player]);
// };
 
 
 
const  handleDeleteSelectedPlayer=(player) => {
const remaininSelectedPlayer = selectedPlayers.filter(
  (thisPlayer)=>thisPlayer.id !==player.id
);
setSelectedPlayers(remaininSelectedPlayer)

setPlayers((prev)=>[...prev,player])
// console.log("delete")
// alert();

  };

  return (
    <>
      <div className="px-20">
        <Header
          handleAddAmt={handleAddAmt}
          credits={credits}
        ></Header>

        <Credit
          handleAddAmt={handleAddAmt}
          credits={credits}
        />


        <SelectedPlayers
        
        handleDeleteSelectedPlayer={handleDeleteSelectedPlayer}
        selectedCount={selectedCount}
        remainingSlots={remainingSlots}
        selectedPlayers={selectedPlayers} />



        <Players
          players={players}
          handleChoosePlayer={handleChoosePlayer}
        />





      </div>
    </>
  );
}

export default App;