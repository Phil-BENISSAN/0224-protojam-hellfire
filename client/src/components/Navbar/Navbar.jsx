import { Link } from "react-router-dom";
import { Navlink } from "./NavLink";
import "./Navbar.css";
import React from "react";

export function Navbar({ location }) {
  return (
    <nav>
      <Link to={"https://senior-sanctuary.webflow.io/"} className="navLogo">
        <img
          src="../src/assets/images/256logo.svg"
          alt="Logo Senior Sanctuary"
        />
      </Link>
      {location.endsWith("/countries") ? null : (
        <Navlink linkTo="/countries" text="Back to all countries" />
      )}
      <Navlink
        linkTo="https://senior-sanctuary.webflow.io/"
        text="Back to homepage"
        isRight={true}
      />
    </nav>
  );
}
