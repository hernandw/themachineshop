import React, { useState } from "react";
import logo from "../assets/icons/logo.svg";
import { Link } from "react-router-dom";
import "../App.css";


export const Header = ({setModal, setAnimarModal}) => {
  
const onHandleModal = ()=>{
  setModal(true);
  setTimeout(()=>{
    setAnimarModal(true)
  }, 500)
}

  
  return (
    <div className="container">
      <div className="header">
        <div>
          <Link to="/">
            <img className="header__logo" src={logo} alt="logotipo" />
          </Link>
        </div>
        <div className="search">
          <input
            className="header__search"
            type="text"
            placeholder="¿Qué deseas buscar?"
          />
        </div>
        
          <button className="header__button-login" onClick={onHandleModal}> Login </button>
        
      </div>
      <div className="header__fondo">
        <h3 className="header__title">Black Friday</h3>
        <p className="header__subtitle">
          Productos selecionados con 33% de descuento
        </p>
        <button className="header__button-new">new</button>
      </div>
      
    </div>
  );
};
