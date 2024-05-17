import { useLoaderData } from "react-router-dom";
import "./Country.css";
import CountryCard from "../../components/CountryCard";
import React from "react";

export function Country() {
  const {
    image,
    name,
    description,
    countryInfo1,
    countryInfo2,
    countryInfo3,
    datatest,
  } = useLoaderData();
  return (
    <main className="countryMain">
      <header className="countryHeader">
        <img
          src="./src/assets/images/backgroundmontain.webp"
          alt={`${name}-image`}
        />
        <h1>{name}France</h1>
      </header>
      <section className="dataCardSection">
        <h2>Country Information</h2>
        <ul className="dataList">
          <li>
            <label htmlFor="info1">{countryInfo1}Value :</label>
            <progress id="info1" max="5" value="1" />
          </li>
          <li>
            <label htmlFor="info2">{countryInfo2}Value :</label>
            <progress id="info2" max="5" value="3" />
          </li>
          <li>
            <label htmlFor="info3">{countryInfo3}Value :</label>
            <progress id="info3" max="5" value="2.5" />
          </li>
        </ul>
      </section>
      <section className="descriptionSection">
        <p>
          {description} Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Quaerat architecto accusantium provident officia recusandae fuga
          nulla expedita ex possimus dolor, qui optio ad, nemo iste eos voluptas
          illum inventore sit porro incidunt, consequatur consectetur magni.
          Veritatis adipisci incidunt aliquam quis quisquam commodi eos
          praesentium, id maiores esse earum quidem? Enim in, laborum ipsam
          magnam odit totam corporis tenetur similique laboriosam? Ipsum
          inventore optio, saepe voluptas assumenda natus libero, asperiores
          minima dolorum excepturi unde a veniam nostrum ex. Consectetur
          voluptatum sapiente, perspiciatis porro sequi ad sed corrupti nisi
          dolor eum fugit vitae atque tenetur eveniet ratione non placeat,
          eligendi saepe. Inventore?
        </p>
      </section>
      <section className="similarCountrySection">
        <h2 className="similarCountryTitle">Similar Countries</h2>
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
      </section>
    </main>
  );
}
