import React from "react";

function CountryItem({ countryDetails, toggleDetails, favouriteCountryNames, setFavouriteCountryNames }) {
  const countryName = countryDetails.name.common;

  //favourites
  const isFavourite = favouriteCountryNames.includes(countryName);
  const toggleFavourite = async (countryName) => {
    if (!isFavourite) {
      const updatedFavourites = [...favouriteCountryNames, countryName];
      setFavouriteCountryNames(updatedFavourites);
      localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
    } else {
      const updatedFavourites = favouriteCountryNames.filter((el) => el !== countryName);
      setFavouriteCountryNames(updatedFavourites);
      localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
    }
  };

  return (
    <li>
      <p>{countryName}</p>{" "}
      <div className="inline">
        <button
          className="detailsButton"
          onClick={() => {
            toggleDetails(countryDetails);
          }}
        >
          Learn more
        </button>
        <button
          className="favouriteButton"
          onClick={() => {
            toggleFavourite(countryName);
          }}
        >
          {isFavourite ? "-" : "+"}
        </button>
      </div>
    </li>
  );
}

export default CountryItem;
