import CountryCard from "../components/CountryCard/CountryCard";
import "./AllCountries.css";
import React from "react";

const App = () => {
  return (
    <>
      <main>
        <section className="recherche">
          <section className="recherchebar">
          <label className="labelselect" htmlFor="search-bar">Recherche :</label>
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
        <section className="countryCardMain">
          <CountryCard
            countryName="COUNTRY_NAME1"
            countryInfo1="country_info1"
            countryInfo2="country_info2"
            countryInfo3="country_info3"
          />
          <CountryCard
            countryName="COUNTRY_NAME2"
            countryInfo1="country_info1"
            countryInfo2="country_info2"
            countryInfo3="country_info3"
          />
          <CountryCard
            countryName="COUNTRY_NAME3"
            countryInfo1="country_info1"
            countryInfo2="country_info2"
            countryInfo3="country_info3"
          />
        </section>
      </main>
    </>
  );
};

export default App;
