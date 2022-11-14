import { useLoaderData } from 'react-router-dom'
import { getProducts } from '../data/GetProducts';


export const loaderProductos = ()=>{
	const productsAll = getProducts()
	return productsAll
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
							<th>Acción</th>
						</tr>
					</thead>
					<tbody>
						{
							productsAll.map(producto =>(
								<tr key={producto.id}>
									<td><img className='products__img' src={producto.imagen} alt={producto.name} /></td>
									<td>{producto.name}</td>
									<td>{producto.price}</td>
									<td>
				<button className="buttonEdit">Editar</button>
				<button className="buttonDelete">Eliminar</button>
			</td>
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
