import { Form } from 'react-router-dom'
import { FormRegister } from "../components/FormRegister";

export const action = ()=>{
	console.log('Submit al formulario');
}
export const Register = () => {
  return (
    <div>
      <h1>Nuevo Usuario</h1>
      <p>Llena todos los campos para registrar un nuevo usuario</p>
      <Form method='post' className="form__container">
        <FormRegister />
        <input
          className="button__register"
          type="submit"
          value="Registrar Usuario"
        />
      </Form>
    </div>
  );
};
