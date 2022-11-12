import { useLoaderData } from "react-router-dom";
import { User } from "./User";
import { getUsers } from "../data/GetUsers";

export const loader = () => {
	const usersAll =  getUsers();

	return usersAll;
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
							<th>Rol</th>
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
