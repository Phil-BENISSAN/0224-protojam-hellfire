import { Link } from "react-router-dom";
import React from "react";

export function Navlink({ linkTo, text }) {
  return (
    <Link to={linkTo} className="navLink">
      {text}
    </Link>
  );
}
