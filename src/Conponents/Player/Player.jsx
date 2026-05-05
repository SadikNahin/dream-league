const Player = ({ player }) => {
    const { profilePicture, playerPicture, name, country } = player;

    return (
        <div className="border p-2 rounded-2xl">
            <img className="w-full rounded-2xl" src={playerPicture} alt="" />


            <div className="flex items-center m-3">

                <div>

                    <img className="w-16 h-16 rounded-full object-cover" src={profilePicture} alt="" />


                </div>

                <div>
                    <h3>Player Name: {name}</h3>
                    <p>Country: {country}</p>
                </div>

            </div>




        </div>
    );
};

export default Player;