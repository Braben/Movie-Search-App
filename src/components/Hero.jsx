import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="bg-fixed bg-cover bg-no-repeat h-[94vh] flex flex-col items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://wallpapers.com/images/featured/movie-9pvmdtvz4cb0xl37.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-75 top-[6vh] "></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Discover Your Next Favorite Movie
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Explore our vast collection of movies and find something for everyone.
        </p>

        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-200">
          <Link to="/movies">Browse Movies</Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
