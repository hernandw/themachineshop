import { useState } from "react";
import {useRef} from 'react';

export const FormRegister = () => {
	const [rol, setRol] = useState(1)
	const ref = useRef(null); 
	return (
		<>
		
			<div>
				<div className='form__container--campo'>
					<label className='input__form' htmlFor='user'>
						Usuario:
					</label>
					<input
						required
						className='inputs__login'
						type='text'
						name='user'
						placeholder='Escriba su nombre de usuario'
					/>
				</div>
				<div className='form__container--campo'>
					<label className='input__form' htmlFor='email'>
						Email:
					</label>
					<input
						required
						className='inputs__login'
						type='email'
						name='email'
						placeholder='Escriba su email'
					/>
				</div>
				<div className='form__container--campo'>
					<label className='input__form' htmlFor='password'>
						Contraseña:
					</label>
					<input
						required
						className='inputs__login'
						type='password'
						name='password'
						placeholder='Escriba su contraseña'
					/>
				</div>
				<div className='form__container--campo'>
					<label className='input__form' htmlFor='password2'>
						Repita su contraseña:
					</label>
					<input
						required
						className='inputs__login'
						type='password'
						name='password2'
						placeholder='Repita su contraseña'
					/>
				</div>
				<div>
					<input ref={ref} className="rol" type="number" name="rol" defaultValue={rol}/>

				</div>
			</div>
		</>
	);
};
