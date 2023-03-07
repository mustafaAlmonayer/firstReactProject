import { createContext, useContext } from 'react';
import { useState } from 'react';

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }) {
	const [ isAuthenticated, setAuthenticated ] = useState(false);

	const [username, setUsername] = useState(null);

	function login(username, password) {
		if (username === 'mustafa' && password === 'test1234') {
			setAuthenticated(true);
			setUsername(username);
			return true;
		} else {
			setAuthenticated(false);
			console.log(username);
			return false;
		}
	}

	function logout() {
		setAuthenticated(false);
	}

	return <AuthContext.Provider value={{ isAuthenticated, username, login, logout }}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
