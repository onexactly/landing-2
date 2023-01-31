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
    </nav>
  );
}

export default Mafia;
