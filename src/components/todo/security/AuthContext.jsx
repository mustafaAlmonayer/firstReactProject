import { createContext, useContext } from 'react';
import { useState } from 'react';
import { execBasicAuth } from '../api/HelloWorldService';

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }) {
	const [isAuthenticated, setAuthenticated] = useState(false);

	const [username, setUsername] = useState(null);

	const [baToken, setBatoken] = useState(null);

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

	async function login(username, password) {

		 const token = "Basic " + window.btoa(username + ":" + password);

		 console.log(token)

		try {
			const responce = await execBasicAuth(token);
	
			if (responce.status == 200) {
				setAuthenticated(true);
				setUsername(username);
				setBatoken(token)
				return true;
			} else {
				logout();
				console.log(username);
				return false;
			}
		} catch (error) {
			logout();
			console.log(error)
			return false;
		}
	}

	function logout() {
		setAuthenticated(false);
		setBatoken(null);
		setUsername(null);
	}

	return <AuthContext.Provider value={{ isAuthenticated, username, baToken, login, logout }}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
