const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-10 py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* About */}
        <div>
          <h2 className="text-xl font-bold mb-3">Player Manager</h2>
          <p className="text-gray-300">
            Build your dream team by selecting your favorite players.
            Manage, compare and enjoy your squad easily.
          </p>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-xl font-bold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Players</li>
            <li className="hover:text-white cursor-pointer">Selected Team</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-bold mb-3">Contact</h2>
          <p className="text-gray-300">Email: support@playerapp.com</p>
          <p className="text-gray-300">Phone: +880 1XXXXXXXXX</p>
          <p className="text-gray-300">Dhaka, Bangladesh</p>
        </div>

      </div>

      <div className="text-center text-gray-400 mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Player Manager. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;