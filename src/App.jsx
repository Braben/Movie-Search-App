import  { useState, useEffect } from "react";


const App = () => {
  const [shows, setShows] = useState([]);
  const [hoveredMovie, setHoveredMovie] = useState(null);

  const getShows = async () => {
    try {
      const apiKey = 'ed1b64a2998e6e96133bf5672c58be02';
      const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setShows(data.results);
      console.log('Movies fetched successfully!');
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  useEffect(() => {
    getShows();
  }, []);

  const handleMouseEnter = (movie) => {
    setHoveredMovie(movie);
  };

  const handleMouseLeave = () => {
    setHoveredMovie(null);
  };

  return (
    <div className="container-full mx-auto px-4 py-16 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold text-center mb-8">Movies</h1>

      {shows.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {shows.map((show) => (
            <li
              key={show.id}
              className={`movie-item bg-gray-800 rounded-lg shadow-md p-4 hover:bg-gray-700 transition duration-300 ease-in-out ${
                hoveredMovie === show ? 'relative' : ''
              }`}
              onMouseEnter={() => handleMouseEnter(show)}
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
          ))}
        </ul>
      ) : (
        <p className="text-center text-white">Loading movies...</p>
      )}
    </div>
  );
};

export default App;