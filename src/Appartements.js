import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Alignments.css";

function appartements() {
  return (
    <>
      <div className="alignment">
        <h1 className="appartement">Appartements</h1>
        <h2>Sint-Pieters-Leeuw</h2>
        <ul className="list-group padding-right">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            2G
            <span className="badge badge-primary badge-pill">0</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Dapibus ac facilisis in
            <span className="badge badge-primary badge-pill">2</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Morbi leo risus
            <span className="badge badge-primary badge-pill">1</span>
          </li>
        </ul>
        <h2>Strombeek</h2>
        <ul className="list-group padding-right">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            C1
            <span className="badge badge-primary badge-pill">14</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Dapibus ac facilisis in
            <span className="badge badge-primary badge-pill">2</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Morbi leo risus
            <span className="badge badge-primary badge-pill">1</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default appartements;
