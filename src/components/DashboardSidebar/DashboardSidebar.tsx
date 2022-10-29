import React from "react";
import logo from "../../assets/logo.png";
import "./DashboardSidebar.scss";
import { DashboardProps } from "../Dashboard/Dashboard";
import { FaHamburger, FaTimes } from "react-icons/fa";

const DashboardSidebar = ({
  links,
  sidebar,
  setActiveRoute,
  setSidebar,
}: DashboardProps) => {
  const handleLinkClick = (link: any) => {
    if (link) return setActiveRoute(link);
  };
  return (
    <>
      <div
        className={`dashboard__sidebar ${
          sidebar ? "sidebarMobile__active" : ""
        }`}
      >
        <FaTimes className="mobile__times" onClick={() => setSidebar(false)} />
        <div className="dashboard__sidebar-header">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="dashboard__nav-links">
          {links.map((link) => (
            <div
              className="dashboard__nav-link dashboard__nav-activ"
              onClick={() => handleLinkClick(link)}
            >
              <link.icon />
              <p className="link">{link.label}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DashboardSidebar;
