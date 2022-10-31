import React from "react";
import logo from "../icons/logo_white.svg";

export const Footer = () => {
  return (
    <>
			<div className="footer_principal">
      <div className="container__footer">
			<div className="container__footer-text">
        <img src={logo} alt="logotipo" />
        <a href="#" target="_blank">
          Quiénes somos
        </a>
        <a href="#" target="_blank">
          Política de privacidad
        </a>
        <a href="#" target="_blank">
          Preguntas Frecuentes
        </a>
        <a href="#" target="_blank">
          Carrito
        </a>
        <a href="#" target="_blank">
          Contacto
        </a>
        <a href="#" target="_blank">
          Trabaja con nosotros
        </a>
      </div>
      <form className="footer_form">
        <p>Hable con nosotros</p>
        <label htmlFor="name">Nombre:</label>
        <input id="name" type="text" placeholder="Nombre" />

        <textarea type="text" placeholder="Escribe tu mensaje" />
        <button className="button__footer">enviar mensaje</button>
      </form>
			</div>
    </div>
      <div class="copyright">
        <p>Desarrollado por Equipo 3 - Hunteando © 2022 </p>
      </div>
		</>
  );
};
