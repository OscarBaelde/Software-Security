import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <nav className="sidebar active">
      <ul>
        <li>
          <Link className="item" to="/appartements">
            Appartementen
          </Link>
        </li>
        <li>
          <Link className="item" to="/tenants">
            Huurders
          </Link>
        </li>
        <li>
          <Link className="item" to="/rents">
            Huren
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
