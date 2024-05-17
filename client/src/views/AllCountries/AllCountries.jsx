import React, { useState } from "react";
import CountryCard from "../../components/CountryCard";
import data from "../../data.json";
import "./AllCountries.css";

export function AllCountries() {
  const [search, setSearch] = useState("");

  let filteredCountries = data.filter((country) =>
    country.country.toLowerCase().includes(search)).sort((a, b) => parseInt(b.hapiness_index) - parseInt(a.hapiness_index))

  const [sortCriteria, setSortCriteria] = useState("indice-bonheur");

  const sortedCountries = filteredCountries.sort((a, b) => {
    switch (sortCriteria) {
      case "indice-bonheur":
        return b.hapiness_index - a.hapiness_index;
      case "air-quality":
        return b.cost_of_living - a.cost_of_living;
      case "acces-sante":
        return b.average_temperature - a.average_temperature;
      default:
        return a.country.localeCompare(b.country);
    }
  });

  let mapAirPollution = (level) => {
    const levels = {
      "very low": 5,
      low: 4,
      medium: 3,
      high: 2,
      "very high": 1,
    };
    return levels[level] || 0;
  };

  return (
    <>
      <main>
        <section className="recherche">
          <section className="recherchebar">
            <label className="labelselect" htmlFor="search-bar">
              Recherche :
            </label>
            <input
              type="text"
              id="search-bar"
              placeholder="Rechercher un pays..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </section>
          <section className="filtre">
            <label htmlFor="filtre">Trier par :</label>
            <select
              id="filtre"
              name="filtre-options"
              value={sortCriteria}
              onChange={(e) => setSortCriteria(e.target.value)}
            >
              <option value="indice-bonheur">Hapiness level</option>
              <option value="acces-sante">Health care acces</option>
              <option value="air-quality">Air quality</option>
              <option value="alphabetique">Alphabetical A-Z</option>
            </select>
          </section>
        </section>
        <section className="countryCardMain">
        {filteredCountries.map((data) => (
            <CountryCard
              key={data.id}
              countryName={data.country}
              countryInfo1={data.hapiness_index}
              countryInfo2={data.dencity_of_doctors}
              countryInfo3={mapAirPollution(data.air_polution)}
              countryImg={data.img_link_country}
            />
          ))}
        </section>
      </main>
    </>
  );
}
