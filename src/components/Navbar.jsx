import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-4 py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="#" className="hover:text-gray-400">
            MyApp
          </a>
        </div>

        {/* Navbar Links */}
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

        {/* Auth Buttons */}
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
          <button className="text-gray-400 hover:text-white focus:outline-none">
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
    </nav>
  );
};

export default Navbar;
