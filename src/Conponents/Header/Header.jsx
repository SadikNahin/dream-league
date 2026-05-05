import logo from "../../assets/logo.png";

const Header = () => {
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

        <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
          Get Started
        </button>

      </div>

        </div>
    );
};

export default Header;