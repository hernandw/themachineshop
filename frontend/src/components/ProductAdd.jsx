import { useLoaderData } from "react-router-dom";
import { getProducts } from "../data/GetProducts";

export const loaderProductos = () => {
	const productsAll = getProducts();
	return productsAll;
};

export const ProductAdd = () => {
	const productsAll = useLoaderData();
	console.log(productsAll);

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
							<th>Creado</th>
							<th>Categoria</th>
							<th>cantidad</th>
							<th>Descripcion</th>
							<th>Acción</th>
						</tr>
					</thead>
					<tbody>
						{productsAll.map((p) => (
							<tr key={p.id_product}>
								<td>
									<img className='products__img' src={p.product_image_url} alt='' />
								</td>
								<td>{p.product_name}</td>
								<td>{p.product_price}</td>
								<td>{p.product_creation_date}</td>
								<td>{p.id_category}</td>
								<td>{p.product_quantity}</td>
								<td>{p.product_description}</td>

								<td>
									<button className='buttonEdit'>Editar</button>
									<button className='buttonDelete'>Eliminar</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<p>No hay productos aún</p>
			)}
		</>
	);
};
