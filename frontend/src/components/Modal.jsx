import cerrarBTN from '../assets/icons/cerrar.svg';
import { useLoginForm } from '../hooks/useLoginForm';
import { Loader } from './Loader';

import { Input } from "./login/Input";

export const Modal = ({ setModal, animarModal, setAnimarModal, setUser }) => {
 const onHandle = () => {
  setAnimarModal(false);

  setTimeout(() => {
   setModal(false);
  }, 500);
 };
 const {
  form,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  loading,
  responseMessage,
 } = useLoginForm(setModal, setUser);

 return (
  <div className='modal'>
   <div className='cerrar-modal'>
    <img src={cerrarBTN} alt='cerrar modal' onClick={onHandle} />
   </div>
   <form onSubmit={handleSubmit} className='modal__container'>
    <h3 className='login__title'>Iniciar Sesión</h3>

    <Input
     name='email'
     className='input__login'
     type='text'
     placeholder='Escriba su correo electrónico'
     autoComplete='on'
     onChange={handleChange}
     onBlur={handleBlur}
     value={form.email}
     errors={errors}
    />
    <Input
     name='password'
     className='input__login'
     type='password'
     placeholder='Escriba su contraseña'
     autoComplete='on'
     onChange={handleChange}
     onBlur={handleBlur}
     value={form.password}
     errors={errors}
    />
    {responseMessage ? responseMessage : ''}
    {!loading ? (
     <input type='submit' className='button__register' value='Entrar' />
    ) : (
     <Loader />
    )}

    <p>
     <strong>¿No tienes una cuenta?</strong> <a href='/register'>Regístrate</a>
    </p>
   </form>
  </div>
 );
};
