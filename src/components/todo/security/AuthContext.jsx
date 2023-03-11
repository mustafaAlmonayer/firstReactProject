import { createContext, useContext } from 'react';
import { useState } from 'react';
import { execJwtAuth } from '../api/AuthenticationApiService';
import { apiClient } from '../api/TodoApiClient';

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }) {
	const [ isAuthenticated, setAuthenticated ] = useState(false);

	const [ username, setUsername ] = useState(null);

	const [ baToken, setBatoken ] = useState(null);

	// function login(username, password) {
	// 	if (username === 'mustafa' && password === 'test1234') {
	// 		setAuthenticated(true);
	// 		setUsername(username);
	// 		return true;
	// 	} else {
	// 		setAuthenticated(false);
	// 		console.log(username);
	// 		return false;
	// 	}
	// }

	// async function login(username, password) {
	// 	const token = 'Basic ' + window.btoa(username + ':' + password);

	// 	try {
	// 		const responce = await execBasicAuth(token);
	// 		if (responce.status == 200) {
	// 			setAuthenticated(true);
	// 			setUsername(username);
	// 			setBatoken(token);
	// 			apiClient.interceptors.request.use((config) => {
	// 				console.log(config);
	// 				config.headers.Authorization = token;
	// 				return config;
	// 			});
	// 			return true;
	// 		} else {
	// 			logout();
	// 			console.log(username);
	// 			return false;
	// 		}
	// 	} catch (error) {
	// 		logout();
	// 		console.log('dfesdfsd');
	// 		console.log(error);
	// 		return false;
	// 	}
	// }

	async function login(username, password) {
		try {
			const responce = await execJwtAuth(username, password);
			if (responce.status == 200) {
				const jwtToken = 'Bearer ' + responce.data.token;
				setAuthenticated(true);
				setUsername(username);
				setBatoken(jwtToken);
				apiClient.interceptors.request.use((config) => {
					console.log(config);
					config.headers.Authorization = jwtToken;
					return config;
				});
				return true;
			} else {
				logout();
				console.log(username);
				return false;
			}
		} catch (error) {
			logout();
			console.log('dfesdfsd');
			console.log(error);
			return false;
		}
	}

	function logout() {
		setAuthenticated(false);
		setBatoken(null);
		setUsername(null);
	}

	return (
		<AuthContext.Provider value={{ isAuthenticated, username, baToken, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthProvider;
