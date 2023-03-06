import { useEffect, useState } from 'react';
import { getTodosForUser, deleteTodo } from './api/TodoService';

function TodoComponent() {
	const nowDate = new Date();

	const [ todos, setTodos ] = useState([]);

	const [ message, setMessage ] = useState(null);

	useEffect(() => refreshTodos(), []);

	function refreshTodos() {
		getTodosForUser('mustafa')
			.then((responce) => setTodos(responce.data))
			.catch((error) => console.log(error))
			.finally(console.log('clean up'));
	}

	function deleteTodos(id) {
		deleteTodo('mustafa', id)
			.then(() => {
				setMessage('todo has been deleted');
				refreshTodos();
			})
			.catch((error) => console.log(error))
			.finally(console.log('cleanup'));
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
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default TodoComponent;
