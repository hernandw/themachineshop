import React from 'react'
import cerrarModal from '../icons/cerrar.svg'

export const Modal = () => {
	return (
		<div className='modal'>
			<div className='modal__container'>
			<h3>Iniciar Sesión</h3>
			<input className="inputs__login" type="emailt" placeholder='Escriba su correo electrónico' />
			<input className="inputs__login" type="password" placeholder='Escriba su contraseña' />
			<button className='modal__button'>Entrar</button>
			<p><strong>¿No tienes una cuenta?</strong> <a href="#">Regístrate</a></p>
			</div>
		</div>
	)
}
