import React, { useState, useEffect } from "react";
import "./Header.Footer.styles.scss";
import Movies from "../components/Movies/Movies.component";
import Preloader from "../components/Preloader/Preloader.component";
import Search from "../components/Search/Search.component";

export const Main = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const doSearch = (searchData, type) => {
    setLoading(true);
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchData}${
        type !== "all" ? `&type=${type}` : " "
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
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
