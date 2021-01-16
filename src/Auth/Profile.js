import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Profile.css";

function Profile() {
  const { isAuthenticated, user } = useAuth0();

  if (isAuthenticated) {
    return (
      <>
      <div className="left"
        <img src={user.picture} classname="rounded float-start" alt="profile" />
        <h2>{user.name}</h2>
        <h2>{user.given_name}</h2>
        <h2>{user.email_verified}</h2>
      </>
    );
  } else return <div>Not signed in!</div>;
}
//given_name, family_name, nickname, name, picture, locale, updated_at, email, email_verified, sub
export default Profile;
