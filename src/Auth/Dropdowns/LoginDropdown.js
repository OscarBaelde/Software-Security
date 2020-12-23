import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Dropdown } from "react-bootstrap";
function LoginButton() {
  const { isAuthenticated, loginWithPopup } = useAuth0();

  return (
    !isAuthenticated && (
      <>
        <Dropdown.Item onClick={loginWithPopup}>Login</Dropdown.Item>
      </>
    )
  );
}

export default LoginButton;
