import bg from "../../assets/bg-shadow.png";
import bannerMain from "../../assets/banner-main.png";
import { useEffect, useState } from "react";

const Credit = ({ handleAddAmt }) => {


    const [creditAmt, setCreditAmt] = useState({});

    useEffect(() => {
        fetch("/creditAmt.json")
            .then((res) => res.json())
            .then((data) => {
                setCreditAmt(data);
            });
    }, []);

    const { credit } = creditAmt;



    return (
        <div className="relative w-full bg-gradient-to-br from-black to-black rounded-2xl">
            <img className="rounded-2xl" src={bg} alt="" />

            <div>
                

                <img
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl "
                    src={bannerMain}
                    alt=""
                />

                <div className="absolute bottom-10 w-full text-center text-white">
                    <h2 className="text-2xl font-bold mb-3">
                        Welcome to Dream League
                    </h2>

                    <button
                        className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition"
                        onClick={() => handleAddAmt(credit)}
                    >
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Credit;