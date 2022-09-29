import React, { useState } from "react";
import Button from "../core/Button/Button";
import { FaTimes } from "react-icons/fa";
import "./Navbar.scss";
import Mobilenav from "../Mobilenav/Mobilenav";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  let mobileMenu = false;
  if (window.innerWidth <= 800) mobileMenu = true;

  console.log(mobileMenu);
  const navLinks = [
    { name: "Driving Lessons", path: "/driving-lessons" },
    { name: "Test Packages", path: "/test-package" },
    { name: "Pricing", path: "/pricing" },
  ];
  return (
    <>
      <nav
        className={`navbar ${mobileMenu && isOpen ? "mobileNavActive" : ""}`}
      >
        {mobileMenu && (
          <FaTimes className="timesIcon" onClick={() => setIsOpen(false)} />
        )}
        <div className="navbar__nav-left">
          <div className="navbar__logo">
            <img
              src="https://www.ezlicence.com.au/assets/logo-ezlicence-full-coloured-d818224a6354379532a8ba37ece24b4bb99a525d5a7cec64b90a8c9a82717afa.png"
              alt=""
            />
          </div>
          <ul className="navbar__navlinks">
            {navLinks.map((link, key) => {
              return (
                <li className="navlink" key={key}>
                  <a href={link.path}>{link.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="navbar__nav-right">
          <Button title="Book Now" link="/" />
        </div>
      </nav>
      {mobileMenu && <Mobilenav onClick={() => setIsOpen(true)} />}
    </>
  );
};

export default Navbar;
