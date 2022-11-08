import { useLoginForm } from './hooks/useLoginForm';

import { Input } from './login/Input';

export const Modal = ({ setModal, setUser }) => {
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
   <form onSubmit={handleSubmit} className='modal__container'>
    <h3 className='login__title'>Iniciar Sesión con Rumer</h3>

    <Input
     name='email'
     className='inputs__login'
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
     className='inputs__login'
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
     <input type='submit' className='modal__button' value='Entrar' />
    ) : (
     <div className='lds-ring'>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
     </div>
    )}

    <p>
     <strong>¿No tienes una cuenta?</strong> <a href='#'>Regístrate</a>
    </p>
   </form>
  </div>
 );
};
