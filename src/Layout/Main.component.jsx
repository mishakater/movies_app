import React, { useState, useEffect } from "react";
import "./Header.Footer.styles.scss";
import Movies from "../components/Movies/Movies.component";

export const Main = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://www.omdbapi.com/?apikey=37566afa&s=lion king")
      .then((response) => response.json())
      .then((data) => setMovies(data.Search));
  }, []);

  return (
    <div>
      {movies.length ? <Movies movies={movies} /> : <h5>Loading...</h5>}
    </div>
  );
};
