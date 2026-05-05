import { useEffect, useState } from "react";


import Player from "../../Conponents/Player/Player";







const Players = () => {


    const [players, setPlayers] = useState([])

    useEffect(() => {

        fetch('Players.json')
            .then(res => res.json())
            .then(data => setPlayers(data))


    }, [])





    return (


        <div className="grid grid-cols-3 gap-2 mt-4">

            

            {
                // players.map(player =>
                // <Player></Player>
                // )

                players.map(player => (
                    <Player key={player.id} player={player}></Player>
                ))


            }


        </div>

    );
};

export default Players;