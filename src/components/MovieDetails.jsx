import React from "react";
import MovieCard from "./MovieCard";

const MovieDetails = ({ movies }) => {
  return (
    <div>
      {movies.length > 0 ? (
        <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} show={movie} />
          ))}
        </ul>
      ) : (
        <p className="text-center text-white">No movies found.</p>
      )}
    </div>
  );
};

export default MovieDetails;
