import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";

const MovieList = () => {
  const [shows, setShows] = useState([]); // Stores the movie data fetched from the API
  const [filteredMovies, setFilteredMovies] = useState([]); // Stores the filtered movie data

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
      setShows(data.results); // Set the full list of shows
      setFilteredMovies(data.results); // Initialize filteredMovies with the full list
      console.log("Movies fetched successfully!");
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  // Handle search by filtering shows based on the search query
  const handleSearch = (query) => {
    console.log("Searching for:", query);

    const filtered = shows.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredMovies(filtered); // Update filteredMovies with search results
    console.log(filtered.length);
  };

  // Fetch movies when component mounts
  useEffect(() => {
    getShows();
  }, []);

  return (
    <div>
      <div className="container-full mx-auto px-4 py-16 bg-gray-900 text-white">
        <h1 className="text-4xl font-bold text-center mb-8">Movies</h1>

        {/* Pass handleSearch to SearchBar */}
        <div className="mb-3">
          <SearchBar onSearch={handleSearch} />
          <h1>{`${filteredMovies.length} results found`}</h1>
        </div>

        {/* Render filteredMovies */}

        {filteredMovies.length > 0 ? (
          <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredMovies.map((movie) => (
              <MovieCard key={movie.id} show={movie} />
            ))}
          </ul>
        ) : (
          <p className="text-center text-white">No movies found.</p>
        )}
      </div>
    </div>
  );
};

export default MovieList;
