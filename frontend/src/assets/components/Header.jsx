import React from "react";
import logo from "../icons/logo.svg";

export const Header = () => {
  return (
    <>
      <div className="header">
        <div>
          <img src={logo} alt="logotipo" />
        </div>
        <div class="search">
          <input type="text" />
        </div>
        <button> Login </button>
      </div>
    </>
  );
};
