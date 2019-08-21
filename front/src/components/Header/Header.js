import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header>
      <div className="menu">
        <FontAwesomeIcon icon={faBars} />
        <span className="menu-title">Menu</span>
      </div>

      <div className="app-title">Studio</div>

      <div className="search">search menu</div>
    </header>
  );
};

export default Header;
