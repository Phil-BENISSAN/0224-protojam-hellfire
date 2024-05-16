import { Link } from "react-router-dom";

export function Navlink({ linkTo, text }) {
  return (
    <Link to={linkTo} className="navLink">
      {text}
    </Link>
  );
}
