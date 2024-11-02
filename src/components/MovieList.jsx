import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";

const MovieList = () => {
  const [shows, setShows] = useState([]); // Stores the movie data fetched from the API

  const getShows = async () => {
    try {
      const apiKey = "ed1b64a2998e6e96133bf5672c58be02";
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setShows(data.results); // Update shows state with fetched movie data
      console.log("Movies fetched successfully!");
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  //the query function
  const handleSearch = (query) => {
    console.log("Searching for:", query);
    // Use the query to fetch or filter movie data
  };

  // Fetch movies when component mounts
  useEffect(() => {
    getShows();
  }, []);

  return (
    <div>
      <div className="container-full mx-auto px-4 py-16 bg-gray-900 text-white">
        <h1 className="text-4xl font-bold text-center mb-8">Movies</h1>

        {shows.length > 0 ? (
          <ul className="grid  md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Pass each show individually to MovieCard and set a unique key */}
            {shows.map((show) => (
              <MovieCard key={show.id} show={show} />
            ))}
          </ul>
        ) : (
          <p className="text-center text-white">Loading movies...</p>
        )}
      </div>
      <div>
        <h1 className="text-center text-3xl font-bold my-6">Movie Search</h1>
        <SearchBar onSearch={handleSearch} />
        {/* Render search results or other components below */}
      </div>
    </div>
  );
};

export default MovieList;
