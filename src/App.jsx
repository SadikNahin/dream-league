import "./App.css";
import Header from "./Conponents/Header/Header";
import Credit from "./Conponents/Credit/Credit";
import Players from "./Conponents/Players/Players";
import { useState } from "react";

function App() {
  const [credits, setCredits] = useState(0);

  const handleAddAmt = (credit) => {
    setCredits((prev) => prev + credit);
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

        <Players>

        </Players>





      </div>
    </>
  );
}

export default App;