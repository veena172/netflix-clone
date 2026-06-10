import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import MovieRow from "./components/MovieRow";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }`
      )
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Banner */}
      <Banner
        search={search}
        setSearch={setSearch}
      />

      {/* Movies Row */}
      <MovieRow
        filteredMovies={filteredMovies}
        setSelectedMovie={setSelectedMovie}
      />

      {/* Movie Details Modal */}
      {selectedMovie && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedMovie(null)}
        >
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
              alt={selectedMovie.title}
            />

            <h2>{selectedMovie.title}</h2>

            <p>
              ⭐ Rating: {selectedMovie.vote_average}
            </p>

            <p>
              📅 Release Date: {selectedMovie.release_date}
            </p>

            <p>{selectedMovie.overview}</p>

            <button
              onClick={() => setSelectedMovie(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;