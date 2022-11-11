import { useLoaderData } from 'react-router-dom'


export const loaderProductos = ()=>{
	const products = [
		{
			id: 1,
			img: 'abc',
			name: 'Lampara XYZ',
			price: 20
		},
		{
			id: 2,
			img: 'abc',
			name: 'Lampara ABC',
			price: 18
		},
		{
			id: 3,
			img: 'abc',
			name: 'Lampara DEF',
			price: 25
		}
	]
	return products
} 

export const ProductAdd = () => {
	const productsAll = useLoaderData();
	return (
		<>
			<h3 className='title__admin'>Administración de Productos</h3>
			{productsAll.length ? (
				<table className='container__users'>
					<thead className='table__users'>
						<tr>
							<th className='img'>Imagen</th>
							<th className='name'>Nombre</th>
							<th className='price'>Precio</th>
						</tr>
					</thead>
					<tbody>
						{
							productsAll.map(producto =>(
								<tr key={producto.id}>
									<td>{producto.img}</td>
									<td>{producto.name}</td>
									<td>{producto.price}</td>
								</tr>
							))
						}
					</tbody>
				</table>
			) : (
				<p>No hay usuarios aún</p>
			)}
		</>
	);
};
