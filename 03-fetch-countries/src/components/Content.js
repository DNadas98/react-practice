import React, { useState, useEffect } from "react";
import Countries from "./Countries";
import LoadingSpinner from "./LoadingSpinner";
import LoadData from "./LoadData";

function Content() {
  const [isLoading, setLoading] = useState(true);
  const [countriesArray, setCountriesArray] = useState([]);
  const [favouriteCountryNames, setFavouriteCountryNames] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [showFavourites, setShowFavourites] = useState(false);
  const [sortButtonState, setSortButtonState] = useState(true);
  const [countriesToShow, setCountriesToShow] = useState([]);

  //Fetch data from API
  useEffect(() => {
    LoadData(setCountriesArray, setLoading);
  }, []);
  //Load favourites from local storage
  useEffect(() => {
    try {
      const localFavouritesArray = JSON.parse(localStorage.getItem("favourites")) || [];
      if (Array.isArray(localFavouritesArray) && localFavouritesArray.length >= 0) {
        setFavouriteCountryNames(localFavouritesArray);
      }
    } catch (err) {
      console.error(err);
    }
  }, []);
  //Update the local storage
  useEffect(() => {
    if (favouriteCountryNames.length >= 1) {
      localStorage.setItem("favourites", JSON.stringify(favouriteCountryNames));
    }
  }, [favouriteCountryNames]);
  //Set countriesToShow
  useEffect(() => {
    setCountriesToShow(countriesArray.sort((a, b) => a.name.common.localeCompare(b.name.common)));
  }, [countriesArray]);
  //Apply filters
  useEffect(() => {
    let filteredCountries = [...countriesArray];
    if (searchInput !== "") {
      filteredCountries = filteredCountries.filter((country) =>
        country.name.common.toLowerCase().includes(searchInput.toLowerCase())
      );
    }
    if (showFavourites) {
      filteredCountries = filteredCountries.filter((country) => favouriteCountryNames.includes(country.name.common));
    }
    if (sortButtonState) {
      filteredCountries = filteredCountries.sort((a, b) => a.name.common.localeCompare(b.name.common));
    } else {
      filteredCountries = filteredCountries.sort((a, b) => b.name.common.localeCompare(a.name.common));
    }
    setCountriesToShow(filteredCountries);
  }, [searchInput, showFavourites, sortButtonState, favouriteCountryNames]);

  return (
    <div className="Content">
      <div className="inline">
        <div className="inline">
          <h2>Search countries:</h2>
          <input
            type="search"
            autoComplete="true"
            onChange={(event) => {
              setSearchInput(event.target.value);
            }}
            value={searchInput}
          />
        </div>
        <div className="inline">
          <h2>List order:</h2>
          <button
            className="sortButton"
            onClick={() => {
              setSortButtonState(!sortButtonState);
            }}
          >
            {sortButtonState ? "Ascending" : "Descending"}
          </button>
        </div>
        <button onClick={() => setShowFavourites(!showFavourites)}>{showFavourites ? "All" : "Favourites"}</button>
      </div>
      {isLoading ? (
        <div>
          <LoadingSpinner />
        </div>
      ) : (
        <div>
          <Countries
            countriesArray={countriesToShow}
            favouriteCountryNames={favouriteCountryNames}
            setFavouriteCountryNames={setFavouriteCountryNames}
          />
        </div>
      )}
    </div>
  );
}

export default Content;
