import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = () => {
        // Implement your signup logic here
        console.log(`Signing up with username: ${username} and password: ${password}`);
        // Redirect to the login page after successful signup
        // You can use react-router-dom's useHistory hook for navigation
        // Example: history.push('/login');
    };

    return (
        <div className="container mt-5">
            <h1>Create An Account</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <button type="button" className="btn btn-primary" onClick={handleSignUp}>Create Account</button>
            </form>
            <p className="mt-3">
                Already have an account? <Link to="/login">Login here</Link>.
            </p>
        </div>
    );
}

export default SignUp;