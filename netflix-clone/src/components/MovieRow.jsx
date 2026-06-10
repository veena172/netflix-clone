function MovieRow({
  filteredMovies,
  setSelectedMovie,
}) {
  return (
    <>
      <h2>Trending Movies</h2>

      <div className="movies-container">
        {filteredMovies.map((movie) => (
          <div
            className="movie-card"
            key={movie.id}
            onClick={() =>
              setSelectedMovie(movie)
            }
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />

            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
    </>
  );
}

export default MovieRow;