function Banner({ search, setSearch }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Unlimited Movies
        </h1>

        <p>
          Watch trending movies, discover new favorites
          and enjoy endless entertainment.
        </p>

        <input
          type="text"
          placeholder="Search Movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-box"
        />

        <div className="hero-buttons">
          <button className="play-btn">
            ▶ Play
          </button>

          <button className="info-btn">
            ℹ More Info
          </button>
        </div>
      </div>
    </section>
  );
}

export default Banner;