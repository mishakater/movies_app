import React, { useState, useEffect } from "react";
import "./Header.Footer.styles.scss";
import Movies from "../components/Movies/Movies.component";
import Preloader from "../components/Preloader/Preloader.component";
import Search from "../components/Search/Search.component";

export const Main = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=37566afa&s=matrix`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      });
  }, []);

  const doSearch = (searchData, type) => {
    setLoading(true);
    fetch(
      `http://www.omdbapi.com/?apikey=37566afa&s=${searchData}${
        type !== "all" ? `&type=${type}` : " "
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      });
  };

  return (
    <>
      <Search doSearch={doSearch} />
      <div>{loading ? <Preloader /> : <Movies movies={movies} />}</div>
    </>
  );
};
