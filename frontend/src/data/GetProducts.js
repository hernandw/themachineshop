export const getProducts = async () => {
	const url =  import.meta.env.VITE_API_URL;
	const respuesta = await fetch(`${url}/api/products`)
	const resultado = respuesta.json()
	return resultado
};