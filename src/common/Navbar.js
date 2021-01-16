import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Login from "../Auth/Dropdowns/LoginDropdown";
import Logout from "../Auth/Dropdowns/LogoutDropdown";
import "./Navbar.css";

import { useAuth0 } from "@auth0/auth0-react";
import { Dropdown } from "react-bootstrap";
import ProfileDropdown from "../Auth/Dropdowns/ProfileDropdown";

function Navbar() {
  const { isAuthenticated, user } = useAuth0();

  if (isAuthenticated) {
    return (
      <>
        <nav className="navbar navbar-dark red">
          <NavLink exact className="title" to="/">
            <h1>Rentymmo</h1>
          </NavLink>
          <Dropdown className="rounded-circle red">
            <Dropdown.Toggle id="dropdown-basic" className="red">
              <img
                src={user.picture}
                alt="profile"
                className="rounded-circle w-50"
              />
            </Dropdown.Toggle>

            <Dropdown.Menu className="red">
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
        <nav className="navbar navbar-dark red">
          <NavLink exact className="title" to="/">
            <h1>Rentymmo</h1>
          </NavLink>
          <Dropdown className="rounded-circle red">
            <Dropdown.Toggle
              id="dropdown-basic"
              className="red"
            ></Dropdown.Toggle>

            <Dropdown.Menu className="red">
              <Login />
            </Dropdown.Menu>
          </Dropdown>
        </nav>
      </>
    );
}

export default Navbar;
