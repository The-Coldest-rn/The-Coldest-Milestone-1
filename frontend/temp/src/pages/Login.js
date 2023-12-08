import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const apiUrl = 'http://localhost:3000'; // Assuming your backend runs on port 3000

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await fetch(`${apiUrl}/login?username=${username}&password=${password}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();

            if (data.success) {
                console.log('Login successful', data.user);
                // Redirect to the map page after successful login
                navigate('/map');
            } else {
                console.error('Login failed', data.message);
            }
        } catch (error) {
            console.error('Error during login', error);
        }
    };

    return (
        <div className="container mt-5">
            <h1>Login</h1>
<<<<<<< Updated upstream
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
=======
            <div>
                <label>Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="button" className="btn btn-primary" onClick={handleLogin}>
                Login
            </button>
>>>>>>> Stashed changes
        </div>
    );
}

export default Login;