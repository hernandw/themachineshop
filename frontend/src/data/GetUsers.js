export const getUsers = async () => {
	const url =  import.meta.env.VITE_API_URL;
	const respuesta = await fetch(`${url}/users`)
	const resultado = respuesta.json()
	return resultado
};

export const getUser = async (id) => {
	const url =  import.meta.env.VITE_API_URL;
	const respuesta = await fetch(`${url}/users/${id}`)
	const resultado = respuesta.json()
	return resultado
};



export const addUser = async (datos)=>{
try {
	const url =  import.meta.env.VITE_API_URL;
	const respuesta = await fetch(`${url}/users`, {
		method: 'POST',
		body: JSON.stringify(datos),
		headers: {
			'Content-Type': 'application/json'
		}
	})
	await respuesta.json()
} catch (error) {
	console.log(error)
}
}

export const updateUser = async (id, datos) =>{
	try {
		const url =  import.meta.env.VITE_API_URL;
		const respuesta = await fetch(`${url}/users/${id}`, {
			method: 'PUT',
			body: JSON.stringify(datos),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		await respuesta.json()
	} catch (error) {
		console.log(error)
	}
}


