import React from 'react';
import '../App.css';
import profpic from '../profile.png';
function Account() {
    return (
        <div className="container mt-5">
            <h1>My Account</h1>
            <div className="card" style={{ width: '18rem' }}>
                {/* User profile image */}
                <img src={profpic} className="card-img-top circle-image align-items-center justify-content-center" alt="Profile" style={{ borderRadius: '70%'}}/>
                <div className="card-body">
                    {/* User details */}
                    <h2 className="card-title">John Doe</h2>
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
                    <div className="mb-3 custom-space">
                        <label htmlFor="currentPassword" className="form-label">Current Password</label>
                        <input type="password" className="form-control" id="currentPassword" />
                    </div>
                    <div className="mb-3 custom-space">
                        <label htmlFor="newPassword" className="form-label">New Password</label>
                        <input type="password" className="form-control" id="newPassword" />
                    </div>
                    <div className="mb-3 custom-space">
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