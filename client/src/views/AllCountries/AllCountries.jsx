import CountryCard from "../../components/CountryCard";
import "./AllCountries.css";
import React from "react";
import data from "../../data.json"

export function AllCountries() {
  
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
            />
          </section>
          <section className="filtre">
            <label htmlFor="filtre">Trier par :</label>
            <select id="filtre" name="filtre-options">
              <option value="indice-bonheur">Indice de bonheur</option>
              <option value="cout-vie">Coût de la vie</option>
              <option value="acces-sante">Accès à la santé</option>
              <option value="temperature">Temperature moyenne</option>
              <option value="alphabetique">Alphabétique A-Z</option>
            </select>
          </section>
        </section>
        <section className="country-list">
      {data.map((data, index) => (
        <CountryCard
          key={index}
          countryName={data.country}
          countryInfo1={data.countryInfo1}
          countryInfo2={data.countryInfo2}
          countryInfo3={data.air_polution}
          />
        ))}
        </section>
      </main>
    </>
  );
}
