import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
function WelcomeComponent() {
	const { username } = useParams();

	return (
		<div>
			<div className="Welcome">Welcome Component hi {username}</div>
			<div>
				<Link to="/todos">Manage Todos</Link>
			</div>
		</div>
	);
}

export default WelcomeComponent;
