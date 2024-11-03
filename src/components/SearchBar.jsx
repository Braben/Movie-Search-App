import React, { useState } from "react";
import MovieDetails from "./MovieDetails";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query); // Send the search query to MovieList
    }
    setQuery(""); // Clear the input after search
  };

  return (
    <div className="flex items-center bg-gray-800 rounded-md p-2 w-full max-w-md mx-auto">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for movies..."
        className="bg-gray-900 text-white w-full px-4 py-2 rounded-l-md focus:outline-none"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md transition duration-200"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
