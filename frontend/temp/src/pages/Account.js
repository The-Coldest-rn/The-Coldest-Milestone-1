import React from 'react';
import '../App.css';
function Account() {
    return (
        <div className="container mt-5">
            <h1>Account</h1>
            <div className="card" style={{ width: '18rem' }}>
                {/* User profile image */}
                <img src="https://placekitten.com/200/200" className="card-img-top" alt="Profile" />
                <div className="card-body">
                    {/* User details */}
                    <h5 className="card-title">John Doe</h5>
                    <p className="card-text">Username: john doe123</p>
                    <p className="card-text">Email: john.doe@example.com</p>
                    <p className="card-text">Phone Number: (555) 123-4567</p>
                    {/* Add more user details as needed */}
                </div>
            </div>
            <div className="mt-3 custom-space">
                {/* Change password form */}
                <h3>Change Password</h3>
                <form>
                    <div className="mb-3">
                        <label htmlFor="currentPassword" className="form-label">Current Password</label>
                        <input type="password" className="form-control" id="currentPassword" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="newPassword" className="form-label">New Password</label>
                        <input type="password" className="form-control" id="newPassword" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label">Confirm New Password</label>
                        <input type="password" className="form-control" id="confirmPassword" />
                    </div>
                    <button type="button" className="btn btn-primary">Change Password</button>
                </form>
            </div>
        </div>
    );
}

export default Account;