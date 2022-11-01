import React from "react";
import logo from "../icons/logo.svg";
import {Link} from "react-router-dom";


export const Header = () => {
  return (
    <div className="container">
      <div className="header">
        <div>
          <Link to="/"><img src={logo} alt="logotipo" /></Link>
        </div>
        <div className="search">
          <input className="header__search" type="text"  placeholder="¿Qué deseas buscar?"/>
        </div>
        <Link to="/Login"><button className="header__button-login"> Login </button></Link>
      </div>
			<div className="header__fondo">
				<h3 className="header__title">Black Friday</h3>
				<p className="header__subtitle">Productos selecionados con 33% de descuento</p>
				<button className="header__button-new">new</button>
			</div>
    </div>
  );
};
