import React, { useState } from "react";

const MovieCard = ({ show }) => {
  // State to track which movie is currently being hovered over
  const [hoveredMovie, setHoveredMovie] = useState(null);

  // Handle mouse enter to set hovered movie
  const handleMouseEnter = () => {
    setHoveredMovie(show);
  };

  // Handle mouse leave to reset hovered movie
  const handleMouseLeave = () => {
    setHoveredMovie(null);
  };

  return (
    <li
      className={`movie-item bg-gray-800 rounded-lg shadow-md p-4 hover:bg-gray-700 transition duration-300 ease-in-out ${
        hoveredMovie === show ? "relative" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center mb-2">
        {show.poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w200${show.poster_path}`}
            alt={show.title}
            className="w-20 h-auto object-cover rounded mr-4"
          />
        )}
        <div>
          <h3 className="text-lg font-medium mb-1">{show.title}</h3>
          <p className="text-sm text-gray-400">{show.release_date}</p>
        </div>
      </div>

      {hoveredMovie === show && (
        <div className="absolute bottom-0 left-0 right-0 bg-gray-700 text-white rounded p-4 transition duration-300 ease-in-out">
          <h4 className="text-lg font-bold mb-2">{show.title}</h4>
          <p className="text-base mb-2">{show.overview}</p>
          <div className="flex items-center">
            <span className="text-sm mr-2">Release Date:</span>
            <span className="text-sm">{show.release_date}</span>
          </div>
        </div>
      )}
    </li>
  );
};

export default MovieCard;
