import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {  retriveHelloWorldBeanPathVariable } from './api/HelloWorldService';
function WelcomeComponent() {
	const { username } = useParams();

	const [message, setMessage] = useState("");

	function getWelcomeUser() {
		retriveHelloWorldBeanPathVariable(username)
			.then( responce => setMessage(responce.data.message))
			.catch( error => setMessage(error.data.message))
			.finally(console.log("clean up"));
	}

	return (
		<div>
			<div className="Welcome">Welcome Component hi {username}</div>
			<div>
				<Link to="/todos">Manage Todos</Link>
			</div>
			<div>
			<button className="btn btn-success m-5" onClick={getWelcomeUser}>Hello World</button>
			</div>
			<div className='text-info'>{message}</div>
		</div>
	);
}

export default WelcomeComponent;
