import React from "react";
import "./Footer.css";
import { CSVLink } from "react-csv";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Footer() {
  const { isAuthenticated, user } = useAuth0();
  let csv = JSON.stringify(user);
  if (isAuthenticated) {
    return (
      <div className="footer">
        <CSVLink className="privacy" data={csv}>
          Show me my data
        </CSVLink>
        <Link
          className="privacy"
          target="_self"
          to="privacy_statement.pdf"
          download
        >
          Privacy
        </Link>
        <Link className="privacy" to="/klachten">
          Klachten
        </Link>
      </div>
    );
  } else {
    return (
      <div className="footer">
        <Link className="privacy" to="/privacy">
          Privacy
        </Link>
      </div>
    );
  }
}

export default Footer;
