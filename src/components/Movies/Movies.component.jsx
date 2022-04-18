import React from "react";
import Movie from "../Movie/Movie.component";

import "./Movies.styles.scss";

export default function Movies({ movies = [] }) {
  return (
    <div className='container movies-container'>
      {movies.length ? (
        movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
      ) : (
        <h3>Sorry, nothing is found</h3>
      )}
    </div>
  );
}
