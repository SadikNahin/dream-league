




const SelectedPlayer = ({player,handleDeleteSelectedPlayer}) => {
    return (

        

        <div>
            <div>
                
            </div>
            <div className=" bg-amber-300">
<div className="flex justify-between mb-2 rounded-2xl">
            <p>{player.name}</p>
            <button className="border-2 px-4 rounded-3xl" onClick={()=>handleDeleteSelectedPlayer(player)}>delete</button>
        </div>
            </div >
            

        </div>
    );
};

export default SelectedPlayer;