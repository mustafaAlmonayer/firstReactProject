import { Link } from 'react-router-dom';
import { useAuth } from './security/AuthContext';

function HeaderComponent() {
	const auth = useAuth();
	const { isAuthenticated, logout } = auth;

	return (
		<header className="border-bottom border-light border-5 mb-5 p-2">
			<div className="container">
				<div className="row">
					<nav className="navbar navbar-expand-lg">
						<a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="https://www.in28minutes.com">
							in28minutes
						</a>

						<div className="collapse navbar-collapse">
							{isAuthenticated && (
								<ul className="navbar-nav">
									<li className="nav-item fs-5">
										<Link className="nav-link" to="/welcome/in28minutes">
											Home
										</Link>
									</li>
									<li className="nav-item fs-5">
										<Link className="nav-link" to="/todos">
											Todos
										</Link>
									</li>
								</ul>
							)}
						</div>

						<ul className="navbar-nav">
							{!isAuthenticated && (
								<li className="nav-item fs-5">
									<Link className="nav-link" to="/login">
										Login
									</Link>
								</li>
							)}
							{isAuthenticated && (
								<li className="nav-item fs-5">
									<Link className="nav-link" to="/logout" onClick={logout}>
										Logout
									</Link>
								</li>
							)}
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
}

export default HeaderComponent;
