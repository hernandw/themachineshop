import { useLoaderData } from "react-router-dom";
import { User } from "./User";

export const loader = () => {
	const users = [
		{
			id: 1,
			user: "hernandw",
			email: "juan@correo.com",
			rol: 1
		},
		{
			id: 2,
			user: "hernandf",
			email: "fabiana@correo.com",
			rol: 2
		},
		{
			id: 3,
			user: "yessaleja",
			email: "yessenia@correo.com",
			rol: 2
		},
	];

	return users;
};

export const Users = () => {
	const usersAll = useLoaderData();

	return (
		<>
			<h3 className='title__admin'>Administración de Usuarios</h3>

			{usersAll.length ? (
				<table className='container__users'>
					<thead className='table__users'>
						<tr>
							<th className='user'>Usuario</th>
							<th className='email'>Correo</th>
							<th className='rol'>Rol</th>
							<th>Acción</th>
						</tr>
					</thead>
					<tbody>
						{usersAll.map((usuario) => (
							<User usuario={usuario} key={usuario.id}/>
						))}
					</tbody>
				</table>
			) : (
				<p>No hay usuarios aún</p>
			)}
		</>
	);
};
