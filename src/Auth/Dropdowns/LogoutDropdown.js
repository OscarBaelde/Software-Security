import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Dropdown } from "react-bootstrap";

function LogoutButton() {
  const { isAuthenticated, logout } = useAuth0();

  return (
    isAuthenticated && (
      <>
        <Dropdown.Item
          onClick={() => {
            logout({ returnTo: window.location.origin });
          }}
        >
          Logout
        </Dropdown.Item>
      </>
    )
  );
}

export default LogoutButton;
