import React from "react";

function SearchField({ setSearchInput }) {
  const handleInput = (event) => {
    setSearchInput(event.target.value);
  };
  return (
    <div className="inline">
      <h2>Search countries:</h2>
      <input type="search" autoComplete="true" onInput={handleInput} />
    </div>
  );
}

export default SearchField;
