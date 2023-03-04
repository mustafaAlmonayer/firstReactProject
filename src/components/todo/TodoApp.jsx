import { useState } from 'react';
import './TodoApp.css';

function TodoApp() {
	return (
		<di>
			<div>Todo App</div>
			<LoginComponent />
			{/* <WelcomeComponent /> */}
		</di>
	);
}

function LoginComponent() {
	const [ username, setUsername ] = useState('in28Minutes');
	const [ password, setPassword ] = useState('test1234');
	const [ success, setSuccess ] = useState(false);
	const [ failed, setFailed ] = useState(false);

	function handleSubmit() {
		if (username === 'mustafa' && password === 'test1234') {
			setSuccess(true);
			setFailed(false);
		} else {
			setFailed(true);
			setSuccess(false);
		}
	}

	function SuccessMessageComponent() {
		if (success) return <div className="successMessage">Success</div>;
		return null;
	}

	function FailedMessageComponent() {
		if (failed) return <div className="successMessage">failed</div>;
		return null;
	}

	return (
		<div className="Login">
			<SuccessMessageComponent />
			<FailedMessageComponent />
			<div className="LoginForm">
				<div>
					<label>User Name:</label>
					<input
						type="text"
						name="username"
						value={username}
						onChange={(event) => setUsername(event.target.value)}
					/>
				</div>
				<div>
					<label>Password:</label>
					<input
						type="password"
						name="password"
						value={password}
						onChange={(event) => setPassword(event.target.value)}
					/>
				</div>
				<div>
					<button type="button" name="login" onClick={handleSubmit}>
						Login
					</button>
				</div>
			</div>
		</div>
	);
}

function WelcomeComponent() {
	return <div className="Welcome">Welcome Component</div>;
}

export default TodoApp;
