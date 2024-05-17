import { useLoaderData, useParams } from "react-router-dom";
import "./Country.css";
import CountryCard from "../../components/CountryCard";
import React from "react";

export function Country() {
  const countries = useLoaderData();
  const countryId = useParams().country;

  console.log(countryId);

  const getCountry = (value) => {
    for (let eachCountry of countries) {
      if (eachCountry.id.toString() === value.toString()) {
        return eachCountry;
      }
    }
    return null;
  };

  const country = getCountry(countryId);
  const similarCountry1 = getCountry(country.similar_country_1_id);
  const similarCountry2 = getCountry(country.similar_country_2_id);

  const mapAirPollution = (level) => {
    const levels = {
      "very low": 5,
      low: 4,
      medium: 3,
      high: 2,
      "very high": 1,
    };
    return levels[level] || 0;
  };

  if (!country) {
    return (
      <main className="countryMain">
        <section className="descriptionSection">
          <p>Country not found</p>
        </section>
      </main>
    ); // Handle case where country is not found
  }

  return (
    <main className="countryMain">
      <header className="countryHeader">
        <img src={country.img_link_country} alt={`${country.country}-image`} />
        <h1>{country.country}</h1>
      </header>
      <section className="dataCardSection">
        <h2>Country Informations</h2>
        <ul className="dataList">
          <li>
            <label htmlFor="info1">Happiness level :</label>
            Low <progress
              id="info1"
              max="10"
              value={country.hapiness_index}
            />{" "}
            High
          </li>
          <li>
            <label htmlFor="info2">Access to care :</label>
            Low{" "}
            <progress
              id="info2"
              max="75"
              value={country.dencity_of_doctors}
            />{" "}
            High
          </li>
          {country.dencity_of_pharma > 0 && (
            <li>
              <label htmlFor="info8">Pharmacies:</label>
              Low{" "}
              <progress
                id="info8"
                max="5"
                value={country.dencity_of_pharma}
              />{" "}
              High
            </li>
          )}
          <li>
            <label htmlFor="info3">Air quality :</label>
            Low{" "}
            <progress
              id="info3"
              max="5"
              value={mapAirPollution(country.air_polution)}
            />{" "}
            High
          </li>
          <li>
            <label htmlFor="info9">Security :</label>
            Low <progress id="info9" max="10" value={country.crime_rate} /> High
          </li>
          <li>
            <label htmlFor="info7">Precipitation:</label>
            Low{" "}
            <progress
              id="info7"
              max="3500"
              value={country.precip_avg_mm_year}
            />{" "}
            High
          </li>
          <li>
            <label htmlFor="info5">Life expectency:</label>
            <span id="info5">
              {Math.floor(country.life_expectancy)} years old
            </span>
          </li>
          <li>
            <label htmlFor="info6">Average Temperature:</label>
            <span id="info6">{Math.floor(country.avg_temperature)}°C</span>
          </li>
          <li>
            <label htmlFor="info6">Average Life cost:</label>
            <span id="info6">{country.affordability}</span>
          </li>
        </ul>
      </section>
      <section className="descriptionSection">
        <p>{country.description}</p>
      </section>
      <section className="similarCountrySection">
        <h2 className="similarCountryTitle">Similar Countries</h2>
        <CountryCard
          countryName={similarCountry1.country}
          countryInfo1={similarCountry1.hapiness_index}
          countryInfo2={mapAirPollution(similarCountry1.air_polution)}
          countryInfo3={similarCountry1.dencity_of_doctors}
          countryImg={similarCountry1.img_link_country}
          id={similarCountry1.id}
        />
        <CountryCard
          countryName={similarCountry2.country}
          countryInfo1={similarCountry2.hapiness_index}
          countryInfo2={mapAirPollution(similarCountry2.air_polution)}
          countryInfo3={similarCountry2.dencity_of_doctors}
          countryImg={similarCountry2.img_link_country}
          id={similarCountry2.id}
        />
      </section>
    </main>
  );
}
