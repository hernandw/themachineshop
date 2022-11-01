import React from "react";
import logo from "../icons/logo.svg";
import {Link} from "react-router-dom";


export const Header2 = () => {
return (
    <div className="container">
        <div className="header2">
        <div>
        <Link to="/"><img src={logo} alt="logotipo" /></Link>
        </div>
        <div className="search">
        <input className="header__search2" type="text"  placeholder="¿Qué deseas buscar?"/>
        </div>
        </div>
    </div>
    );
};
