import React from "react";

export const User = ({ usuario }) => {
	const { id, user, email, rol } = usuario;
	return (
		<tr key={id}>
			<td>{user}</td>
			<td>{email}</td>
			<td>{rol}</td>
			
			<td>
				<button className="buttonEdit">Editar</button>
				<button className="buttonDelete">Eliminar</button>
			</td>
		</tr>
	);
};
