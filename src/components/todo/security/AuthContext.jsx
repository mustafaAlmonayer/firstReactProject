import { createContext, useContext } from "react";
import { useState } from "react";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }) {

    const [isAuthenticated, setAuthinticated] = useState(false);

    function login(username, password) {
        if (username === 'mustafa' && password === 'test1234') {
            setAuthinticated(true);
            return true;
        } else {
            setAuthinticated(false);
            return false;
        }
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, setAuthinticated, login }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
