import React from 'react'
import cerrarModal from '../icons/cerrar.svg'

export const Modal = () => {
	return (
		<div className='modal'>
		<img className='cerrar-modal' src={cerrarModal} alt="cerrar Modal" />
			<div className='modal__container'>
			<h3>Iniciar Sesión</h3>
			<input type="emailt" placeholder='Escriba su correo electrónico' />
			<input type="password" placeholder='Escriba su contraseña' />
			<button className='modal__button'>Entrar</button>
			<p>No tienes una cuenta <a href="#">Regístrate</a></p>
			</div>
		</div>
	)
}
