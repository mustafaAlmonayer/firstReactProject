import { useParams } from 'react-router-dom';
import { useAuth } from './security/AuthContext';

function LogoutComponent() {
	const { username } = useParams();
	return <div className="container">You have been loged out {username}</div>;
}

export default LogoutComponent;
