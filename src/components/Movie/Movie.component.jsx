import React from "react";

import "./Movie.styles.scss";

export default function Movie({ Title, Year, Poster }) {
  return (
    <div
      className='card'
      style={{
        background: `url(
          "${Poster}"
        )`,
      }}
    >
      <div className='container__profile'>
        <div className='container__profile__text'>
          <h2>{Title}</h2>
          <p>
            <b>{Year}</b>
          </p>
        </div>
      </div>
    </div>
  );
}
