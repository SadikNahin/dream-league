




const Player = ({ player,handleChoosePlayer }) => {
    const { profilePicture, playerPicture, name, country, role, rating, price } = player;

    return (
        <div className="border p-2 rounded-2xl">
            <img className="w-full rounded-2xl" src={playerPicture} alt="" />


            <div className="flex items-center m-3">

                <div>

                    <img className="w-16 h-16 rounded-full object-cover" src={profilePicture} alt="" />


                </div>

                <div>
                    <h3> Name : {name}</h3>

                </div>


            </div>

            <div className="flex m-4 justify-between">

                <p>Country: {country}</p>

                <p>Role : {role}</p>



            </div>

            <hr />

            <div>
                <p>Rating : {rating}</p>

                <div className="flex justify-between items-center">
                    <p>Price : {price}</p>
                    <button onClick={()=>handleChoosePlayer(player)} className="bg-amber-100 p-3 rounded-2xl font-bold">Choose Player</button>

                </div>



            </div>




        </div>
    );
};

export default Player;