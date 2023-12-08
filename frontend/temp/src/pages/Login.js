import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import '../App.css';
import logo from '../TCM1.png';

const apiUrl = 'http://localhost:3000/user';

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
            <a className="navbar-brand d-flex align-items-center justify-content-center" href="#">
                <img src={logo} width="450" height="350" alt="The Coldest Market Logo" />
            </a>
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