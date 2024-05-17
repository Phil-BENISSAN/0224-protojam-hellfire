import { useLoaderData, useParams } from "react-router-dom";
import "./Country.css";
import CountryCard from "../../components/CountryCard";
import React from "react";

export function Country() {
  const countries = useLoaderData();
  const { countryId } = useParams();

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
            <label htmlFor="info1">
              {country.countryInfo1}Happiness level :
            </label>
            Low <progress id="info1" max="5" value="def" /> High
          </li>
          <li>
            <label htmlFor="info2">
              {country.countryInfo2}Access to care :
            </label>
            Low <progress id="info2" max="5" value="3" /> High
          </li>
          <li>
            <label htmlFor="info3">{country.countryInfo3}Air quality :</label>
            Low <progress id="info3" max="5" value="2.5" /> High
          </li>
          <li>
            <label htmlFor="info9">{country.countryInfo3}Security :</label>
            Low <progress id="info9" max="10" value={country.crime_rate} /> High
          </li>
          <li>
            <label htmlFor="info4">{country.countryInfo3}Air quality :</label>
            Low <progress id="info4" max="5" value="2.5" /> High
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
            <label htmlFor="info7">Precipitation:</label>
            Low <progress id="info7" max="5" value="2.5" /> High
          </li>
          <li>
            <label htmlFor="info8">{country.countryInfo3}Air quality :</label>
            Low <progress id="info8" max="5" value={5 - 3} /> High
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
          countryInfo1="country_info1"
          countryInfo2="country_info2"
          countryInfo3="country_info3"
        />
        <CountryCard
          countryName={similarCountry2.country}
          countryInfo1="country_info1"
          countryInfo2="country_info2"
          countryInfo3="country_info3"
        />
      </section>
    </main>
  );
}
