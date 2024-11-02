import React from "react";

const Hero = () => {
  return (
    <div
      className="relative bg-gray-900 text-white h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://source.unsplash.com/random/1920x1080/?cinema,movie')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Discover Your Next Favorite Movie
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Explore our vast collection of movies and find something for everyone.
        </p>

        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-200">
          Browse Movies
        </button>
      </div>
    </div>
  );
};

export default Hero;
