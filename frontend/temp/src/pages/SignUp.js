import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const apiUrl = 'http://localhost:3000/user'; // Assuming your backend runs on port 3000

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
            <h1>Create An Account</h1>
            <div>
                <label>Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
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
