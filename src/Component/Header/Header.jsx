import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 shadow-lg">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-6">
        <h1 className="text-2xl font-extrabold tracking-wider">
          <Link
            to="/"
            className="hover:text-yellow-300 transition-colors duration-300"
          >
            Registration
          </Link>
        </h1>
        <ul className="flex space-x-8">
          <li>
            <Link
              to="/"
              className="text-lg hover:text-yellow-300 font-medium transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/view-data"
              className="text-lg hover:text-yellow-300 font-medium transition-colors duration-300"
            >
              View Data
            </Link>
          </li>
          <li>
            <Link
              to="/datatable"
              className="text-lg hover:text-yellow-300 font-medium transition-colors duration-300"
            >
              Data Table
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
