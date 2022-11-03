import cerrarBTN from '../assets/icons/cerrar.svg'


export const Modal = () => {

	const onHandleCerrar = ()=>{
		console.log('diste click para cerrar');
	}
	return (
		<div className='modal'>
			<div className='modal__container'>
			<div className="cerrar-modal">
				<img src={cerrarBTN} alt="cerrar modal" onClick={onHandleCerrar}/>
			</div>
			<h3>Iniciar Sesión</h3>
			<input required className="inputs__login" type="email" placeholder='Escriba su correo electrónico' />
			<input required className="inputs__login" type="password"  placeholder='Escriba su contraseña' />
			<button className='modal__button'>Entrar</button>
			<p><strong>¿No tienes una cuenta?</strong> <a href="#">Regístrate</a></p>
			</div>
		</div>
	)
}
