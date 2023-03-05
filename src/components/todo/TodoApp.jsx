import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogoutComponent from './LogoutComponent';
import LoginComponent from './LoginComponent';
import WelcomeComponent from './WelcomeComponent';
import TodoComponent from './TodoComponent';
import ErrorComponent from './ErrorComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import AuthProvider from './security/AuthContext';
import './TodoApp.css';

function TodoApp() {
	return (
		<div>

			<div>Todo App</div>
			<AuthProvider>
				<BrowserRouter>
					<HeaderComponent />
					<Routes>
						<Route path='/' element={<LoginComponent />}></Route>
						<Route path='/login' element={<LoginComponent />}></Route>
						<Route path='logout' element={<LogoutComponent />}></Route>
						<Route path='/welcome/:username' element={<WelcomeComponent />}></Route>
						<Route path='/todo' element={<TodoComponent />}></Route>
						<Route path='*' element={<ErrorComponent />}></Route>
					</Routes>
					<FooterComponent />
				</BrowserRouter>
			</AuthProvider>
		</div>
	);
}

export default TodoApp;
