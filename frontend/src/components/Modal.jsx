import cerrarBTN from "../assets/icons/cerrar.svg";

export const Modal = ({ setModal, animarModal, setAnimarModal }) => {
  const onHandle = () => {
		setAnimarModal(false)
		
		setTimeout(()=>{
			
			setModal(false)
		}, 500)
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={cerrarBTN} alt="cerrar modal" onClick={onHandle} />
      </div>

			<form className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}>
				<legend>Iniciar Sesión</legend>
				<input
          required
          className="inputs__login"
          type="email"
          placeholder="Escriba su correo electrónico"
        />
				 <input
          required
          className="inputs__login"
          type="password"
          placeholder="Escriba su contraseña"
        />
				<button className="modal__button">Entrar</button>
				<p>
          <strong>¿No tienes una cuenta?</strong> <a href="#">Regístrate</a>
        </p>
			</form>

    </div>
  );
};
