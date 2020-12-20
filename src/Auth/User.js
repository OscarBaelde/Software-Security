import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Profile() {
  const { isAuthenticated, user } = useAuth0();

  if (isAuthenticated) return <div>Hello {user.name}</div>;
  else return <div>Not signed in!</div>;
}

export default Profile;
