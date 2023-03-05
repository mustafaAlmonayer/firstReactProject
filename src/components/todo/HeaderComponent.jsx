import { Link } from "react-router-dom";
import { useAuth } from "./security/AuthContext";

function HeaderComponent() {

    const auth = useAuth();

	return (
		<header>
			<div className='container'>
				<ul>
					<li className='nav-item'><a className='nav-link' href='#'>SomeThing</a></li>
					<li className='nav-item'><Link className='nav-link' to='/welcome/in28minutes'>Homepage</Link></li>
					<li className='nav-item'><Link className='nav-link' to='/todo'>Todos</Link></li>
					<li className='nav-item'><Link className='nav-link' to='/login'>Login</Link></li>
					<li className='nav-item'><Link className='nav-link' to='/logout'>Logout</Link></li>

				</ul>
			</div>
		</header>
	);
}

export default HeaderComponent;