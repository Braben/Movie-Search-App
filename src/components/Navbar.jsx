import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle mobile menu

  const handleToggle = () => {
    setIsOpen(!isOpen); // Toggle the menu state
  };

  return (
    <nav className="bg-gray-900 text-white px-4 py-4 z-30">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <NavLink
            to="/"
            className="hover:text-gray-400 hover:bg-blue-500 px-3 py-2 rounded-md"
          >
            MyApp
          </NavLink>
        </div>

        {/* Navbar Links for Desktop */}
        <div className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className="hover:text-gray-400 hover:bg-blue-500 px-3 py-2 rounded-md"
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className="hover:text-gray-400 hover:bg-blue-500 px-3 py-2 rounded-md"
          >
            Movies
          </NavLink>
          <NavLink
            to="/download"
            className="hover:text-gray-400 hover:bg-blue-500 px-3 py-2 rounded-md"
          >
            Download
          </NavLink>
          <NavLink
            to="/forum"
            className="hover:text-gray-400 hover:bg-blue-500 px-3 py-2 rounded-md"
          >
            Forum
          </NavLink>
        </div>

        {/* Auth Buttons for Desktop */}
        <div className="hidden md:flex space-x-4">
          <NavLink
            to="/login"
            className="bg-blue-500 rounded px-3 py-2 hover:text-gray-400"
          >
            Sign In
          </NavLink>
          <NavLink
            to="/signup"
            className="bg-blue-600 rounded px-3 py-2 hover:text-gray-400"
          >
            Sign Up
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={handleToggle}
            className="text-gray-400 hover:text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <NavLink
            to="/"
            className="block text-center hover:text-gray-400 hover:bg-blue-500 px-3 py-2 rounded-md"
            onClick={() => setIsOpen(false)} // Close menu on link click
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className="block text-center hover:text-gray-400 hover:bg-blue-500 px-3 py-2 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            Movies
          </NavLink>
          <NavLink
            to="/download"
            className="block text-center hover:text-gray-400 hover:bg-blue-500 px-3 py-2 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            Download
          </NavLink>
          <NavLink
            to="/forum"
            className="block text-center hover:text-gray-400 hover:bg-blue-500 px-3 py-2 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            Forum
          </NavLink>

          {/* Auth Buttons for Mobile */}
          <div className="space-y-4 text-center">
            <NavLink
              to="/login"
              className="block bg-blue-500 rounded px-3 py-2 hover:text-gray-400"
              onClick={() => setIsOpen(false)}
            >
              Sign In
            </NavLink>
            <NavLink
              to="/signup"
              className="block bg-blue-600 rounded px-3 py-2 hover:text-gray-400"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
