import React, { useEffect, useState } from "react";
import InputField from "../UI/InputField";

const CountryDropdown = ({showLabel = true}) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("Nepal");

  useEffect(() => {
    // Fetch country data from the API
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div className="mb-6">

      {showLabel && 
       <label
        htmlFor="country"
        className="block text-sm font-medium text-gray-600 ml-1 mb-2"
      >
        Country
      </label>
      }
     
      <select
        id="country"
        className="block w-full text-md px-2 py-2.5 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-0  shadow-sm transition duration-200"
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
      >
        {countries.map((country) => (
          <option key={country.cca3} value={country.name.common}>
            {country.name.common}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountryDropdown;
