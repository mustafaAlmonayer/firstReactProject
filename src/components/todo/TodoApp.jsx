import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LogoutComponent from './LogoutComponent';
import LoginComponent from './LoginComponent';
import WelcomeComponent from './WelcomeComponent';
import TodosComponent from './TodosComponent';
import ErrorComponent from './ErrorComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import AuthProvider from './security/AuthContext';
import './TodoApp.css';
import { useAuth } from './security/AuthContext';
import TodoComponent from './TodoComponent';

function AuthenticatedRoute({ children }) {
	if (useAuth().isAuthenticated) {
		return children;
	}

	return <Navigate to="/" />;
}

function TodoApp() {
	return (
		<div>
			<div>Todo App</div>
			<AuthProvider>
				<BrowserRouter>
					<HeaderComponent />
					<Routes>
						<Route path="/" element={<LoginComponent />} />
						<Route path="/login" element={<LoginComponent />} />
						<Route path="*" element={<ErrorComponent />} />
						<Route
							path="logout"
							element={
								<AuthenticatedRoute>
									<LogoutComponent />
								</AuthenticatedRoute>
							}
						/>
						<Route
							path="/welcome/:username"
							element={
								<AuthenticatedRoute>
									<WelcomeComponent />
								</AuthenticatedRoute>
							}
						/>
						<Route
							path="/todos"
							element={
								<AuthenticatedRoute>
									<TodosComponent />
								</AuthenticatedRoute>
							}
						/>
						<Route
							path="/todo/:id"
							element={
								<AuthenticatedRoute>
									<TodoComponent />
								</AuthenticatedRoute>
							}
						/>
					</Routes>
					<FooterComponent />
				</BrowserRouter>
			</AuthProvider>
		</div>
	);
}

export default TodoApp;
