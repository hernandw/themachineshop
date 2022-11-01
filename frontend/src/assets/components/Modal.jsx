import React from 'react'
import cerrarModal from '../icons/cerrar.svg'

export const Modal = () => {
	return (
		<div className='modal'>
			<div className='modal__container'>
			<h3>Iniciar Sesión</h3>
			<input required className="inputs__login" type="email" placeholder='Escriba su correo electrónico' />
			<input required className="inputs__login" type="password" minlength="6" placeholder='Escriba su contraseña' />
			<button className='modal__button'>Entrar</button>
			<p><strong>¿No tienes una cuenta?</strong> <a href="#">Regístrate</a></p>
			</div>
		</div>
	)
}
