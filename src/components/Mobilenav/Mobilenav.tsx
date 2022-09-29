import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Mobilenav.scss";
const Mobilenav = ({ onClick }: any) => {
  return (
    <nav className="mobileNav">
      <div className="mobileNav__image">
        <img
          src="https://www.ezlicence.com.au/assets/logo-ezlicence-full-coloured-d818224a6354379532a8ba37ece24b4bb99a525d5a7cec64b90a8c9a82717afa.png"
          alt=""
        />
      </div>
      <div className="mobileNav__button">
        <GiHamburgerMenu
          onClick={onClick}
          size={30}
          className="mobilenav__hamburger-icon"
        />
      </div>
    </nav>
  );
};

export default Mobilenav;
