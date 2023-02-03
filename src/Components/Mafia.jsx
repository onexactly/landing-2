import React, { useState } from "react";
import logo from "../images/logo3.png";
import { Link } from "react-scroll";

function Mafia() {
  const [nav, setnav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setnav(false);
    } else {
      setnav(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link to="#" className="logo">
        <img src={logo} alt="" />
      </Link>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" for="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <Link to="0">Header</Link>
        </li>
        <li>
          <Link to="0">Features</Link>
        </li>
        <li>
          <Link to="0">Offers</Link>
        </li>
        <li>
          <Link to="0">About</Link>
        </li>
        <li>
          <Link to="0">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Mafia;
