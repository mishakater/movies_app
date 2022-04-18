import React, { useState, useEffect, useRef } from "react";
import "../Search/Search.styles.scss";

export default function Search({ doSearch }) {
  const [searchData, setSearchData] = useState("");
  const [type, setType] = useState("all");
  const isFirstRender = useRef(true);

  const handleKey = (e) => {
    if (e.key == "Enter") {
      doSearch(searchData, type);
    }
  };
  const handleFilter = (e) => {
    setType(e.target.dataset.type);
  };
  useEffect(() => {
    if (!isFirstRender.current) {
      doSearch(searchData, type); // do something after state has updated
    }
  }, [type]);

  useEffect(() => {
    isFirstRender.current = false; // toggle flag after first render/mounting
  }, []);
  return (
    <>
      <div className='search'>
        <input
          type='text'
          className='searchTerm'
          placeholder='What are you looking for?'
          value={searchData}
          onChange={(e) => {
            setSearchData(e.target.value);
          }}
          onKeyDown={handleKey}
        />
      </div>
      <div className='container filter'>
        <label className='radio'>
          <input
            type='radio'
            name='type'
            data-type='all'
            onChange={handleFilter}
            checked={type === "all"}
          />
          <span>All</span>
        </label>
        <label className='radio'>
          <input
            type='radio'
            name='type'
            data-type='movie'
            onChange={handleFilter}
            checked={type === "movie"}
          />
          <span>Movies</span>
        </label>
        <label className='radio'>
          <input
            type='radio'
            name='type'
            data-type='series'
            onChange={handleFilter}
            checked={type === "series"}
          />
          <span>Series</span>
        </label>
      </div>
    </>
  );
}
