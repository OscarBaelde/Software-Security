import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Profile() {
  const { isAuthenticated, user } = useAuth0();

  if (isAuthenticated)
    return (
      <>
        <img src={user.picture} class="rounded float-start" alt="profile" />
        <h2>{user.name}</h2>
      </>
    );
  else return <div>Not signed in!</div>;
}

export default Profile;
