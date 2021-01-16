import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Klacht() {
  const { getAccessTokenSilently } = useAuth0();
  useEffect(() => {
    (async () => {
      try {
        const token = await getAccessTokenSilently({
          audience: "https://api.essentialgp.org/",
          scope: "create:klacht",
        });
        await fetch("https://api.essentialgp.org/klachten", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } catch (e) {
        console.error(e);
      }
    })();
  }, [getAccessTokenSilently]);
}

export default Klacht;
