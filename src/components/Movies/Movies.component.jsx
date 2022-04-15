import React from "react";
import Movie from "../Movie/Movie.component";

import "./Movies.styles.scss";

export default function Movies({ movies }) {
  return (
    <div className='container movies-container'>
      {movies.map((movie) => (
        <Movie key={movie.imdbID} {...movie} />
      ))}
    </div>
  );
}
