import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from './security/AuthContext';

function LoginComponent() {
	const [ username, setUsername ] = useState('in28Minutes');
	const [ password, setPassword ] = useState('test1234');
	const [ authFailed, setAuthFailed ] = useState(false);
	const auth = useAuth();
	const navigate = useNavigate();

	function handleSubmit() {
		if (auth.login(username, password)) {
			navigate(`/welcome/${username}`);
		} else {
			setAuthFailed(true);
		}
	}

	return (
		<div className="Login">
			{authFailed && <div className="successMessage">failed</div>}
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

export default LoginComponent;
