function TodoComponent() {

	const nowDate = new Date();


	const futreDate = new Date(nowDate.getFullYear()+15, nowDate.getMonth(), nowDate.getDate())

	const todos =[ 
		{id: 1, descreption: "aws", completed: false, targetDate: futreDate},
		{id: 2, descreption: "full stack", completed: false, targetDate: futreDate}
		]

	return (
		<div className='Todo container'>
			<table className="table">
				<thead>
					<tr>
						<td>id</td>
						<td>desception</td>
						<td>completed</td>
						<td>target date</td>
					</tr>
				</thead>
				<tbody>

					{todos.map(todo => (
					<tr key={todo.id}>
						<td>{todo.id}</td>
						<td>{todo.descreption}</td>
						<td>{todo.completed.toString()}</td>
						<td>{todo.targetDate.toDateString()}</td>
					</tr>

					))}

				</tbody>
			</table>
		</div>
	)
}

export default TodoComponent;