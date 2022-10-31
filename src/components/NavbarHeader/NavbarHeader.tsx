import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../typings/reduxTypings";

const NavbarHeader = () => {
  const { user } = useSelector((state: State) => state.user);
  return (
    <div className="nav__header-links">
      {!user && (
        <>
          <a className="navbar__header-link" href="/login">
            Learner Login
          </a>
          <a className="navbar__header-link" href="/instructor-login">
            Instructor Login
          </a>
        </>
      )}
      {user && (
        <>
          {user.userType === "learner" ? (
            <a className="navbar__header-link" href="/learner/dashboard">
              Learner Dashboard
            </a>
          ) : (
            <a className="navbar__header-link" href="/instructor/dashboard">
              Instructor Dashboard
            </a>
          )}
        </>
      )}
    </div>
  );
};

export default NavbarHeader;
