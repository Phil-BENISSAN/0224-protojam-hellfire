import { useState } from "react";
import "./CountryCard.css";

const CountryCard = ({
  countryName,
  countryInfo1,
  countryInfo2,
  countryInfo3,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <article
      className="countryCard"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <section
        className={isHovered ? "countryInfoVisible" : "countryInfoHidden"}
      >
        <label htmlFor="info1">{countryInfo1} :</label>
        <progress id="info1" max="5" value="1" />
        <label htmlFor="info2">{countryInfo2} :</label>
        <progress id="info2" max="5" value="2.5" />
        <label htmlFor="info3">{countryInfo3} :</label>
        <progress id="info3" max="5" value="4" />
        <button>Tap to open</button>
      </section>
      <h2 className="countryTitle">{countryName}</h2>
    </article>
  );
};

export default CountryCard;
