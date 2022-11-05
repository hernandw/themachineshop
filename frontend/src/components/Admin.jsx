import React from "react";
import logo from "../assets/icons/logo.svg";
import { GoThreeBars } from "react-icons/go";
import { Outlet, Link } from "react-router-dom";
export const Admin = () => {
  return (
    <>
      <div className="container">
        <nav>
          <div className="header">
            <img className="header__logo" src={logo} alt="Logotipo" />
            <label className="nav__label" htmlFor="menu">
              <GoThreeBars />
            </label>
            <input type="checkbox" id="menu" className="nav__input" />
            <div className="nav__menu">
              <ul>
                <li className="menu__item">
                  <Link className="nav__item" to="/admin">
                    Inicio
                  </Link>
                </li>
                <li className="menu__item">
                  <Link className="nav__item" to="/admin/users">
                    Usuarios
                  </Link>
                </li>
                <li className="menu__item">
                  <Link className="nav__item" to="#">
                    Paginas
                  </Link>
                </li>
                <li className="menu__item">
                  <Link className="nav__item" to="/admin/products">
                    Productos
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
};
