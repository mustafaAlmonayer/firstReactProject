import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTodosForUser, deleteTodo, updateTodo } from './api/TodoService';
import  { useAuth } from './security/AuthContext';

function TodosComponent() {

	const [ todos, setTodos ] = useState([]);

	const [ message, setMessage ] = useState(null);

	useEffect(() => refreshTodos(), []);

	const auth = useAuth();

	const naviagate = useNavigate();

	function refreshTodos() {
		getTodosForUser(auth.username)
			.then((responce) => setTodos(responce.data))
			.catch((error) => console.log(error))
			.finally(console.log('clean up'));
	}

	function deleteTodos(id) {
		deleteTodo(auth.username, id)
			.then(() => {
				setMessage('todo has been deleted');
				refreshTodos();
			})
			.catch((error) => console.log(error))
			.finally(console.log('cleanup'));
	}

	function updateTodos(id) {
		naviagate(`/todo/${id}`)
	}

	function addNewTodo() {
		naviagate("/todo/-1")
	}

	return (
		<div className="Todo container">
			{message && <div className="alert alert-danger">{message}</div>}
			<table className="table">
				<thead>
					<tr>
						<th>id</th>
						<th>description</th>
						<th>completed</th>
						<th>target date</th>
						<th>Delete</th>
						<th>Update</th>
					</tr>
				</thead>
				<tbody>
					{todos.map((todo) => (
						<tr key={todo.id}>
							<td>{todo.id}</td>
							<td>{todo.description}</td>
							<td>{todo.done.toString()}</td>
							<td>{todo.targetDate}</td>
							<td>
								<button className="btn btn-danger" onClick={() => deleteTodos(todo.id)}>
									Delete
								</button>
							</td>
							<td>
								<button className="btn btn-warning" onClick={() => updateTodos(todo.id)}>
									Update
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<div>
				<button className='btn btn-success' onClick={addNewTodo}>Add Todo</button>
			</div>
		</div>
	);
}

export default TodosComponent;
