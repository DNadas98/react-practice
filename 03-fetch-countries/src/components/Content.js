import React, { useState, useEffect } from "react";
import Countries from "./Countries";
import SortButton from "./SortButton";
import SearchField from "./SearchField";
import LoadingSpinner from "./LoadingSpinner";
import LoadData from "./LoadData";

function Content() {
  //load data
  const [countriesArray, setCountriesArray] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    LoadData(setCountriesArray, setLoading);
  }, []);

  const [filteredCountriesArray, setFilteredCountriesArray] = useState(countriesArray);

  //favourites
  const [favouriteCountryNames, setFavouriteCountryNames] = useState([]);
  const [showFavourites, setShowFavourites] = useState(false);
  useEffect(() => {
    try {
      const localFavouritesArray = JSON.parse(localStorage.getItem("favourites"));
      if (localFavouritesArray && Array.isArray(localFavouritesArray) && localFavouritesArray.length >= 0) {
        setFavouriteCountryNames(localFavouritesArray);
      }
    } catch (err) {
      console.error(err);
    }
  }, []);
  useEffect(() => {
    if (showFavourites) {
      const filteredCountriesArray = countriesArray.filter((country) =>
        favouriteCountryNames.includes(country.name.common)
      );
      setFilteredCountriesArray(filteredCountriesArray);
    } else {
      setFilteredCountriesArray(countriesArray);
    }
  }, [showFavourites, favouriteCountryNames, countriesArray]);

  //search
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    const filteredCountriesArray = countriesArray.filter((country) =>
      country.name.common.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredCountriesArray(filteredCountriesArray);
  }, [searchInput, countriesArray]);

  return (
    <div className="Content">
      <div className="inline">
        <SearchField setSearchInput={setSearchInput} />
        <SortButton countriesArray={countriesArray} setCountriesArray={setCountriesArray} />
        <button
          onClick={() => {
            setShowFavourites(!showFavourites);
          }}
        >
          {showFavourites ? "All" : "Favourites"}
        </button>
      </div>
      {isLoading ? (
        <div>
          <LoadingSpinner />
        </div>
      ) : (
        <div>
          <Countries
            countriesArray={filteredCountriesArray}
            favouriteCountryNames={favouriteCountryNames}
            setFavouriteCountryNames={setFavouriteCountryNames}
          />
        </div>
      )}
    </div>
  );
}

export default Content;
