import { useLoaderData } from "react-router-dom";

export function Country() {
  const { image, name, description, countryInfo1, countryInfo2, countryInfo3 } =
    useLoaderData();
  return (
    <main className="CountryMain">
      <img src={image} alt={`${name}-image`} />
      <h1>{name} France</h1>
      <section className="dataCard">
        <h2>Country Information</h2>
        <ul>
          <li>
            <label htmlFor="info1">{countryInfo1} :</label>
            <progress id="info1" max="5" value="1" />
          </li>
          <li>
            <label htmlFor="info2">{countryInfo2} :</label>
            <progress id="info2" max="5" value="3" />
          </li>
          <li>
            <label htmlFor="info3">{countryInfo3} :</label>
            <progress id="info3" max="5" value="2.5" />
          </li>
        </ul>
      </section>
      <section>
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
      <button className="nav">Check Similar Countries</button>
    </main>
  );
}
