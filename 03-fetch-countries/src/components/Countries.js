import React, { useEffect, useState } from "react";
import "../style/Countries.css";
import CountryDetails from "./CountryDetails";
import CountryItem from "./CountryItem";

function Countries({ countriesArray, favouriteCountryNames, setFavouriteCountryNames }) {
  //details
  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = (countryDetails) => {
    setCurrentDetails(countryDetails);
    setShowDetails(!showDetails);
  };
  const [currentDetails, setCurrentDetails] = useState({});

  //favourites
  useEffect(() => {
    if (favouriteCountryNames?.length >= 1) {
      localStorage.setItem("favourites", JSON.stringify(favouriteCountryNames));
    }
  }, [favouriteCountryNames]);

  return (
    <div className="Countries">
      {!showDetails ? (
        <div>
          {countriesArray && countriesArray.length ? (
            <ul className="CountriesList">
              {countriesArray.map((countryDetails) => (
                <CountryItem
                  key={countryDetails.name.common}
                  countryDetails={countryDetails}
                  toggleDetails={toggleDetails}
                  favouriteCountryNames={favouriteCountryNames}
                  setFavouriteCountryNames={setFavouriteCountryNames}
                />
              ))}
            </ul>
          ) : (
            <p>No countries found</p>
          )}
        </div>
      ) : (
        <CountryDetails countryData={currentDetails} />
      )}
    </div>
  );
}

export default Countries;
