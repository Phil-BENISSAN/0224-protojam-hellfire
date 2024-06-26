import { Link } from "react-router-dom";
import React from "react";

export function Navlink({ linkTo, text, isRight }) {
  return (
    <Link to={linkTo} className={`navLink ${isRight ? "rightButton" : null}`}>
      {text}
    </Link>
  );
}
