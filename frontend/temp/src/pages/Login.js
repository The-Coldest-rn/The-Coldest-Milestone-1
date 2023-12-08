import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Implement your login logic here
        console.log(`Logging in with username: ${username} and password: ${password}`);
        // Redirect to the map page after successful login
        // You can use react-router-dom's useHistory hook for navigation
        // Example: history.push('/map');
    };

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <form>
                <div className="mb-3 custom-space">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                </div>
                <div className="mb-3 custom-space">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                </div>
                <div className="row">
                    <div className="col">
                <button type="button" width="50" className="btn btn-primary" onClick={handleLogin}>Login</button>
                    </div>
                </div>
            </form>
            <p className="mt-3">
                Don't have an account? <Link to="/signup">Sign up here</Link>
            </p>
        </div>
    );
}

export default Login;