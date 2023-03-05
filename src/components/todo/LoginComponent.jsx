import { useNavigate } from "react-router-dom"
import { useState } from "react";
import { useAuth } from "./security/AuthContext";

function LoginComponent() {
    const [username, setUsername] = useState('in28Minutes');
    const [password, setPassword] = useState('test1234');
    const [success, setSuccess] = useState(false);
    const [failed, setFailed] = useState(false);
    const auth = useAuth();
    const navigate = useNavigate();

    function handleSubmit() {
        if (auth.login()) {
            setSuccess(true);
            setFailed(false);
            navigate(`/welcome/${username}`)
        } else {
            setFailed(true);
            setSuccess(false);
        }
    }

    return (
        <div className="Login">
            {success && <div className="successMessage">Success</div>}
            {failed && <div className="successMessage">failed</div>}
            <div className="LoginForm">
                <div>
                    <label>User Name:</label>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LoginComponent;