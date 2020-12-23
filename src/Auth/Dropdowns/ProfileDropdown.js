import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Dropdown } from "react-bootstrap";

function ProfileDropdown() {
  const { isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return <Dropdown.Item href="/profile">Profile</Dropdown.Item>;
  }
}
//given_name, family_name, nickname, name, picture, locale, updated_at, email, email_verified, sub
export default ProfileDropdown;
