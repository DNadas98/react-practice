import React, { useState } from "react";

function SortButton({ countriesArray, setCountriesArray }) {
  const [sortButtonState, setSortbuttonState] = useState(true);
  const toggleSortButton = () => {
    const reversedArray = [...countriesArray].reverse();
    setCountriesArray(reversedArray);
    setSortbuttonState(!sortButtonState);
  };

  return (
    <div className="inline">
      <h2>List order:</h2>
      <button className="sortButton" onClick={toggleSortButton}>
        {sortButtonState ? "Ascending" : "Descending"}
      </button>
    </div>
  );
}

export default SortButton;
