import React, { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import LoadingMask from "./loader.svg";
import Logo from "./movie.png";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=f63d6cc5";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loadingMaskCSS, setLoadingMaskCSS] = useState({ display: "none" });
  // Function to call the Movies API
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    setLoadingMaskCSS({ display: "none" });
  };

  // To call the function on page load and clicking on the search button
  useEffect(() => {
    setLoadingMaskCSS({ display: "inline-block" });
    searchMovies("don");
  }, []);

  return (
    <div className="app">
      <h1>
        <img src={Logo} alt="Movies Club Logo" className="logo" />
        Movies Club
      </h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {
            setLoadingMaskCSS({ display: "inline-block" });
            searchMovies(searchTerm);
          }}
        />
      </div>
      <img
        className="loading-mask"
        style={loadingMaskCSS}
        src={LoadingMask}
        alt="loadingMask"
      />

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
