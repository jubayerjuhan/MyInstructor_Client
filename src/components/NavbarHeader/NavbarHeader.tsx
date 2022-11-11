import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../typings/reduxTypings";

const NavbarHeader = () => {
  const { user } = useSelector((state: State) => state.user);
  return (
    <div className="nav__header-links">
      <div>
        <a className="navbar__header-link" href="/apply-instructor">
          Apply As Instructor
        </a>
      </div>
      {!user && (
        <div className="navbar__header-wrapper">
          <a className="navbar__header-link" href="/login">
            Learner Login
          </a>
          <a className="navbar__header-link" href="/instructor-login">
            Instructor Login
          </a>
        </div>
      )}
      {user && (
        <div className="navbar__header-wrapper">
          {user.userType === "learner" ? (
            <a className="navbar__header-link" href="/learner/dashboard">
              Learner Dashboard
            </a>
          ) : (
            <a className="navbar__header-link" href="/instructor/dashboard">
              Instructor Dashboard
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default NavbarHeader;
