import "../style/CountryDetails.css";

function CountryDetails({ countryData }) {
  return (
    <div className="countryDetailsDiv">
      <h1>{countryData.name.official}</h1>
      <img src={countryData.flags.png} alt={countryData.flags.alt} />
      <ul>
        <li>
          <h2>Continent{countryData.continents.length > 1 ? "s" : ""}:</h2>
          <h2>{countryData.continents.join(", ")}</h2>
        </li>
        {countryData.capital && (
          <li>
            <h2>Capital city:</h2>
            <h2>{countryData.capital}</h2>
          </li>
        )}
        {countryData.languages && (
          <li>
            <h2>Language{Object.values(countryData.languages).length > 1 ? "s" : ""}:</h2>
            <h2>{Object.values(countryData.languages).join(", ")}</h2>
          </li>
        )}
        {countryData.currencies && (
          <li>
            <h2>Currenc{Object.values(countryData.currencies).length > 1 ? "ies" : "y"}:</h2>
            <h2>
              {Object.entries(countryData.currencies)
                .map(([keyName, valueObject]) => `${keyName} (${valueObject.symbol})`)
                .join(", ")}
            </h2>
          </li>
        )}
        <li>
          <h2>Area:</h2>
          <h2>{countryData.area} km2</h2>
        </li>
        <li>
          <h2>Population:</h2>
          <h2>{countryData.population}</h2>
        </li>
      </ul>
      <a href="/">
        <button>Back</button>
      </a>
    </div>
  );
}

export default CountryDetails;
