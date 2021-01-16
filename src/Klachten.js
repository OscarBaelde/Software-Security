import React from "react";
import "./Klachten.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import Login from "./Auth/Login";
function Klachten() {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [value, setValue] = useState("");

  if (isAuthenticated) {
    async function handleSubmit(e) {
      e.preventDefault();
      try {
        const token = await getToken();
        const data = { text: value };

        fetch("https://api.essentialgp.org/klachten", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(data),
        })
          .then((res) => console.log(res.body))
          .then((res) => console.log(res));
      } catch (e) {
        console.error(e);
      }
    }
    function handleValue(e) {
      setValue(e.target.value);
    }

    return (
      <>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Klacht:</label>
            <textarea
              onChange={handleValue}
              className="form-control"
              id="text"
              rows="3"
            ></textarea>
            <small id="text" className="text-muted">
              Klachten zijn anoniem
            </small>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </>
    );
  } else {
    return (
      <div className="button">
        <Login />
      </div>
    );
  }
  async function getToken() {
    const token = await getAccessTokenSilently({
      audience: "https://api.essentialgp.org",
      scope: "create:klacht",
    });
    return token;
  }
}

export default Klachten;
