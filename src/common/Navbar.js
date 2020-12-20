import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Login from "../Auth/Login";
import Logout from "../Auth/Logout";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-dark bg-primary">
        <NavLink
          exact
          activeClassName="nav-item active"
          className="nav-item"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          activeClassName="btn btn-light"
          className="btn btn-light"
          to="/profile"
        >
          Profile
        </NavLink>
        <Login />
        <Logout />
      </nav>
    </>
  );
}

export default Navbar;
