import { Form } from "react-router-dom";
import { FormRegister } from "../components/";

export const action = async ({ request }) => {
	const formData = await request.formData();
	const datos = Object.fromEntries(formData);
};
export const Register = () => {
	return (
		<div className='container__general'>
			<h1>Nuevo Usuario</h1>
			<p>Llena todos los campos para registrar un nuevo usuario</p>
			<Form method='post' className='form__container'>
				<FormRegister />
				<input
					className='button__register'
					type='submit'
					value='Registrar Usuario'
				/>
			</Form>
		</div>
	);
};
