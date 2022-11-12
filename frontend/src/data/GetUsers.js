export const getUsers = async () => {
	const url =  "http://localhost:3000/users";
	const respuesta = await fetch(import.meta.env.VITE_API_URL)
	const resultado = respuesta.json()
	return resultado
};

export const addUser = async (datos)=>{
try {
	const respuesta = await fetch(import.meta.env.VITE_API_URL, {
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
