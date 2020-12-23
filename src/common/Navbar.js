import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Login from "../Auth/Dropdowns/LoginDropdown";
import Logout from "../Auth/Dropdowns/LogoutDropdown";
import LoginButton from "../Auth/Login";
import "./Navbar.css";

import { useAuth0 } from "@auth0/auth0-react";
import { Dropdown } from "react-bootstrap";
import ProfileDropdown from "../Auth/Dropdowns/ProfileDropdown";

function Navbar() {
  const { isAuthenticated, user } = useAuth0();

  if (isAuthenticated) {
    return (
      <>
        <nav className="navbar navbar-dark color">
          <NavLink exact className="title" to="/">
            <h1>Rentymmo</h1>
          </NavLink>
          <Dropdown className="rounded-circle color">
            <Dropdown.Toggle id="dropdown-basic" className="color">
              <img
                src={user.picture}
                alt="profile"
                className="rounded-circle w-50"
              />
            </Dropdown.Toggle>

            <Dropdown.Menu className="color">
              <ProfileDropdown />
              <Login />
              <Logout />
            </Dropdown.Menu>
          </Dropdown>
        </nav>
      </>
    );
  } else
    return (
      <>
        <nav className="navbar navbar-dark bg-primary">
          <NavLink
            exact
            activeClassName="btn btn-light disabled"
            className="btn btn-light"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            activeClassName="btn btn-light disabled"
            className="btn btn-light"
            to="/profile"
          >
            Profile
          </NavLink>
          <LoginButton />
        </nav>
      </>
    );
}

export default Navbar;
