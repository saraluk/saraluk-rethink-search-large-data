import React from 'react';
import './style.css';

const SearchBar = ({ query, setQuery }) => {
  return (
    <div className='search-container'>
      <label>Search : </label>
      <input
        className='search-container__input'
        type='text'
        name='search'
        value={query}
        placeholder='Enter search term...'
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
