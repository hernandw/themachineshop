import React from "react";
import logo from "../icons/logo.svg";


export const Header = () => {
  return (
    <div className="container">
      <div className="header">
        <div>
          <img src={logo} alt="logotipo" />
        </div>
        <div className="search">
          <input className="header__search" type="text"  placeholder="¿Qué deseas buscar?"/>
        </div>
        <button className="header__button-login"> Login </button>
      </div>
			<div className="header__fondo">
				<h3 className="header__title">Black Friday</h3>
				<p className="header__subtitle">Productos selecionados con 33% de descuento</p>
				<button className="header__button-new">new</button>
			</div>
		
    </div>
  );
};
