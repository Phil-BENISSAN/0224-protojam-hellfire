import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";

const CountryCard = ({
  countryName,
  countryInfo1,
  countryInfo2,
  countryInfo3,
  countryImg,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <article
      className="countryCard"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.5) 0%, rgba(255,255,255,0) 100%), url(${countryImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Link
        to="/countries/:country"
        className={isHovered ? "countryInfoVisible" : "countryInfoHidden"}
      >
        <label htmlFor="info1">Hapiness level :</label>
        <progress id="info1" max="10" value={countryInfo1} />
        <label htmlFor="info2">Health care acces :</label>
        <progress id="info2" max="100" value={countryInfo2} />
        <label htmlFor="info3">Air quality :</label>
        <progress id="info3" max="5" value={countryInfo3} />
        <p className="hoverInfo">Tap to open</p>
      </Link>
      <h2 className="countryTitle">{countryName}</h2>
    </article>
  );
};

export default CountryCard;
