import logo from "../../assets/logo.png";
import { CiCoinInsert } from "react-icons/ci";

const Header = ({credits}) => {






  return (
    <div className="flex justify-between p-8 items-center">
      <div>
        <img className="w-full" src={logo} alt="" />
      </div>
      <div className="flex items-center gap-6">

        <nav className="flex gap-5 text-gray-700 font-medium">
          <a href="#" className="hover:text-blue-500">Home</a>
          <a href="#" className="hover:text-blue-500">Features</a>
          <a href="#" className="hover:text-blue-500">Teams</a>
          <a href="#" className="hover:text-blue-500">Schedule</a>
        </nav>

        <button className="flex items-center  border-2 rounded-2xl gap-2 px-4 py-2">
          {credits} coin <CiCoinInsert className="bg-amber-300 rounded-full" />
        </button>

      </div>

    </div>
  );
};

export default Header;