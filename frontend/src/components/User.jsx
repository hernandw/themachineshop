import { useNavigate, Form, redirect } from 'react-router-dom'
import { deleteUser } from '../hooks/admin/useGetUsers'

export const action = async({params})=>{
await  deleteUser(params.id_user)
return redirect('/admin/users')
}


export const User = ({ usuario }) => {
	const navigate = useNavigate()
	const { id_user, username, email, roles } = usuario;
	
	return (
		<tr key={id_user}>
			<td>{username}</td>
			<td>{email}</td>
			<td>{roles}</td>
			
			<td>
				<button className="buttonEdit" onClick={()=> navigate(`/admin/user/${id_user}/`)}>Editar</button>
				<Form method='post' action={`/user/${id_user}`}>
				<button type="submit" className="buttonDelete" >Eliminar</button>
				</Form>
			</td>
		</tr>
	);
};
