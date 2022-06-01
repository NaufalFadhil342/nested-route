import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

function Search() {
  return (
    <div>
      <div className="wrap">
        <div className="search">
          <input type="text" className="searchTerm" placeholder="What are you looking for?" />
          <button type="submit" className="searchButton">
            <SearchIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
