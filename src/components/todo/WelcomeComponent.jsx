
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function WelcomeComponent() {

	const {username} = useParams();

	return (<>
		<div className="Welcome">
			Welcome Component hi {username}
		</div>
		<div>
			<Link to="/todo">Manage Todos</Link>
		</div>
		</>);
}

export default WelcomeComponent;