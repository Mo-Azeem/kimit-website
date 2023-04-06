import React from "react";
import Home from "../Home/Home";
import style from "./SoftwareServiceHero.module.css";

export default function SoftwareServiceHero() {
  return (
    <div
      style={{ backgroundImage: `url("./homeSoftware.png")` }}
      className={` ${style.background} w-100 `}
    >
      <div className={`h-100 w-100 d-flex align-items-center`}>
        <Home page="Tearm" />
      </div>
    </div>
  );
}
