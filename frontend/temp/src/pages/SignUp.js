import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import logo2 from "../CAA.png";

const apiUrl = 'http://localhost:3000/signup'; // Assuming your backend runs on port 3000

function SignUp() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async () => {
        try {
            const response = await fetch(`${apiUrl}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password,
                    confirmPassword,
                    // Add other user properties here (email, first_name, last_Name, phone, etc.)
                }),
            });

            const data = await response.json();

            if (data.success) {
                console.log('Signup successful');
                // Redirect to the login page after successful signup
                navigate('/login');
            } else {
                console.error('Signup failed', data.message);
            }
        } catch (error) {
            console.error('Error during signup', error);
        }
    };

    return (
        <div className="container mt-5">
            <a className="navbar-brand d-flex align-items-center justify-content-center" href="#">
                <img src={logo2} width="450" height="350" alt="Create An Account Logo" />
            </a>
            <h1>Create An Account</h1>
            <div className="mb-3 custom-space">
                <label>Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="mb-3 custom-space">
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="mb-3 custom-space">
                <label>Confirm Password:</label>
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            {/* Add other input fields for user properties (email, first_name, last_Name, phone, etc.) */}
            <button type="button" className="btn btn-primary" onClick={handleSignUp}>
                Create Account
            </button>
        </div>
    );
}

export default SignUp;
