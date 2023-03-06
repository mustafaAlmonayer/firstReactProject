import { useEffect, useState } from 'react';
import {getTodosForUser} from './api/TodoService';

function TodoComponent() {

	const nowDate = new Date();

	const [todos, setTodos] = useState([]);

	useEffect(() => refreshTodos(), []);

	function refreshTodos() {
		getTodosForUser("mustafa")	
			.then((responce) => setTodos(responce.data))
			.catch((error) => console.log(error))
			.finally(console.log("clean up"))
	}

	
	return (
		<div className='Todo container'>
			<table className="table">
				<thead>
					<tr>
						<td>id</td>
						<td>description</td>
						<td>completed</td>
						<td>target date</td>
					</tr>
				</thead>
				<tbody>

					{todos.map(todo => (
					<tr key={todo.id}>
						<td>{todo.id}</td>
						<td>{todo.description}</td>
						<td>{todo.done.toString()}</td>
						<td>{todo.targetDate}</td>
					</tr>

					))}

				</tbody>
			</table>
		</div>
	)
}

export default TodoComponent;